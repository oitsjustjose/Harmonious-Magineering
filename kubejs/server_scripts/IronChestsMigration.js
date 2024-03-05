PlayerEvents.loggedIn(event => {
  if (event.player.stages.has('IronChestsMigration')) return;

  event.player.sendSystemMessage(Text.white("<typewriter>Hello! <rainb>oitsjustjose</rainb> here - we're moving from Iron Chests: Restocked to Expanded Storage for storage. I've made a handy dandy script to automatically convert from Iron Chests to Expanded Storage when you try to open your chests / barrels. Unfortunately, it isn't automatic -- you'll NEED to open each and every Iron Chest/Barrel you have or else it will <shake>**lose its contents next update.**</shake>"));
  event.player.stages.add('IronChestsMigration');
});

BlockEvents.rightClicked(event => {
  /**
  * @param {Internal.CompoundTag} nbtIn 
  * @param {String} newBarrelOut
  */
  const __convert = (nbtIn, newBlock) => {
    let level = event.getLevel();
    let resLoc = new ResourceLocation(newBlock);
    let state = Block.getBlock(resLoc).withPropertiesOf(event.block.blockState);

    // Remove BE first to avoid drops
    level.removeBlockEntity(event.block.pos);
    // Then destroy the block (probably unnecessary)
    level.destroyBlock(event.block.pos, false);
    // Set to a new block and grab the BE, setting the NBT data
    level.setBlock(event.block.pos, state, 3);
    level.getExistingBlockEntity(event.block.pos).deserializeNBT(nbtIn);
  };

  /**
   * @param {Internal.CompoundTag} nbtIn 
   * @param {String} newChestOut 
   */
  const __convertChest = (nbtIn, newChestOut) => {
    let nbtStored = nbtIn.copy();
    nbtStored.putString('id', 'expandedstorage:chest');

    __convert(nbtStored, newChestOut);
  };

  /**
   * @param {Internal.CompoundTag} nbtIn 
   * @param {String} newBarrelOut
   */
  const __convertBarrel = (nbtIn, newBarrelOut) => {
    let nbtStored = nbtIn.copy();
    nbtStored.putString('id', 'expandedstorage:barrel');

    __convert(nbtStored, newBarrelOut);
  };

  if (!event.getBlock().id.startsWith("ironchests")) return;
  if (event.block.entity === null) return;

  let nbt = event.block.entityData;

  switch (nbt.getString('id')) {
    // There is no Copper Chest, so we'll have to use a Copper Chest instead..
    case 'ironchests:copper_chest':
      __convertBarrel(nbt, 'expandedstorage:copper_barrel');
      break;
    case 'ironchests:iron_chest':
      __convertChest(nbt, 'expandedstorage:iron_chest');
      break;
    case 'ironchests:gold_chest':
      __convertChest(nbt, 'expandedstorage:gold_chest');
      break;
    case 'ironchests:diamond_chest':
      __convertChest(nbt, 'expandedstorage:diamond_chest');
      break;
    case 'ironchests:crystal_chest':
      // no alternative to crystal chests - just convert to diamond
      __convertChest(nbt, 'expandedstorage:diamond_chest');
      break;
    case 'ironchests:obsidian_chest':
      __convertChest(nbt, 'expandedstorage:obsidian_chest');
      break;
    case 'ironchests:netherite_chest':
      __convertChest(nbt, 'expandedstorage:netherite_chest');
      break;

    case 'ironchests:copper_barrel':
      __convertBarrel(nbt, 'expandedstorage:copper_barrel');
      break;
    case 'ironchests:iron_barrel':
      __convertBarrel(nbt, 'expandedstorage:iron_barrel');
      break;
    case 'ironchests:gold_barrel':
      __convertBarrel(nbt, 'expandedstorage:gold_barrel');
      break;
    case 'ironchests:diamond_barrel':
      __convertBarrel(nbt, 'expandedstorage:diamond_barrel');
      break;
    case 'ironchests:crystal_barrel':
      // no alternative to crystal chests - just convert to diamond
      __convertBarrel(nbt, 'expandedstorage:diamond_barrel');
      break;
    case 'ironchests:obsidian_barrel':
      __convertBarrel(nbt, 'expandedstorage:obsidian_barrel');
      break;
    case 'ironchests:netherite_barrel':
      __convertBarrel(nbt, 'expandedstorage:netherite_barrel');
      break;

    default:
      console.warn(`Unexpected IronChests conversion with id ${nbt.getString('id')}`);
      break;
  }
});

ServerEvents.recipes(event => {
  event.remove({ mod: 'ironchests' });
});