ServerEvents.recipes(event => {
  const Aether = () => {
    /**
     * @param {Internal.Ingredient} input
     * @param {Number} time
     */
    const Repairing = (input, time) => {
      event.custom({
        type: 'aether:repairing',
        ingredient: input.toJson(),
        repairTime: time || 500,
      });
    };

    event.custom({
      type: 'eidolon:worktable',
      pattern: ['glg', 'lhl', 'glg'],
      reagents: 'gggg',
      key: {
        g: {item: 'minecraft:glowstone'},
        h: {tag: 'eidolon:patron_symbol'},
        l: {item: 'minecraft:ice'},
      },
      result: {item: 'aether:aether_portal_frame'},
    });

    [
      {item: Ingredient.of('aether_redux:infused_veridium_axe'), time: 1200},
      {item: Ingredient.of('aether_redux:infused_veridium_hoe'), time: 1200},
      {item: Ingredient.of('aether_redux:infused_veridium_pickaxe'), time: 1200},
      {item: Ingredient.of('aether_redux:infused_veridium_shovel'), time: 1200},
      {item: Ingredient.of('aether_redux:infused_veridium_sword'), time: 1200},
      {item: Ingredient.of('aether_redux:spectral_dart_shooter'), time: 1350},
      {item: Ingredient.of('aether_redux:subzero_crossbow'), time: 1350},
      {item: Ingredient.of('aether_redux:veridium_axe'), time: 1200},
      {item: Ingredient.of('aether_redux:veridium_hoe'), time: 1200},
      {item: Ingredient.of('aether_redux:veridium_pickaxe'), time: 1200},
      {item: Ingredient.of('aether_redux:veridium_shovel'), time: 1200},
      {item: Ingredient.of('aether_redux:veridium_sword'), time: 1200},
      {item: Ingredient.of('aether:candy_cane_sword'), time: 1350},
      {item: Ingredient.of('aether:cloud_staff'), time: 1350},
      {item: Ingredient.of('aether:flaming_sword'), time: 1700},
      {item: Ingredient.of('aether:hammer_of_kingbdogz'), time: 1350},
      {item: Ingredient.of('aether:holy_sword'), time: 1350},
      {item: Ingredient.of('aether:ice_pendant'), time: 1350},
      {item: Ingredient.of('aether:ice_ring'), time: 250},
      {item: Ingredient.of('aether:lightning_knife'), time: 1350},
      {item: Ingredient.of('aether:lightning_sword'), time: 1350},
      {item: Ingredient.of('aether:nature_staff'), time: 750},
      {item: Ingredient.of('aether:neptune_boots'), time: 850},
      {item: Ingredient.of('aether:neptune_chestplate'), time: 850},
      {item: Ingredient.of('aether:neptune_gloves'), time: 850},
      {item: Ingredient.of('aether:neptune_helmet'), time: 850},
      {item: Ingredient.of('aether:neptune_leggings'), time: 850},
      {item: Ingredient.of('aether:phoenix_boots'), time: 1700},
      {item: Ingredient.of('aether:phoenix_bow'), time: 1700},
      {item: Ingredient.of('aether:phoenix_chestplate'), time: 1700},
      {item: Ingredient.of('aether:phoenix_gloves'), time: 1700},
      {item: Ingredient.of('aether:phoenix_helmet'), time: 1700},
      {item: Ingredient.of('aether:phoenix_leggings'), time: 1700},
      {item: Ingredient.of('aether:pig_slayer'), time: 1350},
      {item: Ingredient.of('aether:poison_dart_shooter'), time: 750},
      {item: Ingredient.of('aether:shield_of_repulsion'), time: 2500},
      {item: Ingredient.of('aether:valkyrie_axe'), time: 1500},
      {item: Ingredient.of('aether:valkyrie_boots'), time: 1500},
      {item: Ingredient.of('aether:valkyrie_chestplate'), time: 1500},
      {item: Ingredient.of('aether:valkyrie_gloves'), time: 1500},
      {item: Ingredient.of('aether:valkyrie_helmet'), time: 1500},
      {item: Ingredient.of('aether:valkyrie_hoe'), time: 1500},
      {item: Ingredient.of('aether:valkyrie_lance'), time: 1500},
      {item: Ingredient.of('aether:valkyrie_leggings'), time: 1500},
      {item: Ingredient.of('aether:valkyrie_pickaxe'), time: 1500},
      {item: Ingredient.of('aether:valkyrie_shovel'), time: 1500},
      {item: Ingredient.of('aether:vampire_blade'), time: 1350},
      {item: Ingredient.of('deep_aether:gravitite_ring'), time: 750},
      {item: Ingredient.of('deep_aether:skyjade_ring'), time: 400},
      {item: Ingredient.of('deep_aether:stratus_ring'), time: 500},
    ].forEach(pair => Repairing(pair.item, pair.time));

    [
      // Remove these -- they should all be declared in the anvil because they're vanilla-adjacent tools
      'bow_repairing',
      'chainmail_boots_repairing',
      'chainmail_chestplate_repairing',
      'chainmail_gloves_repairing',
      'chainmail_helmet_repairing',
      'chainmail_leggings_repairing',
      'diamond_axe_repairing',
      'diamond_boots_repairing',
      'diamond_chestplate_repairing',
      'diamond_gloves_repairing',
      'diamond_helmet_repairing',
      'diamond_hoe_repairing',
      'diamond_leggings_repairing',
      'diamond_pickaxe_repairing',
      'diamond_shovel_repairing',
      'diamond_sword_repairing',
      'fishing_rod_repairing',
      'golden_axe_repairing',
      'golden_boots_repairing',
      'golden_chestplate_repairing',
      'golden_gloves_repairing',
      'golden_helmet_repairing',
      'golden_hoe_repairing',
      'golden_leggings_repairing',
      'golden_pickaxe_repairing',
      'golden_shovel_repairing',
      'golden_sword_repairing',
      'iron_axe_repairing',
      'iron_boots_repairing',
      'iron_chestplate_repairing',
      'iron_gloves_repairing',
      'iron_helmet_repairing',
      'iron_hoe_repairing',
      'iron_leggings_repairing',
      'iron_pickaxe_repairing',
      'iron_shovel_repairing',
      'iron_sword_repairing',
      'leather_boots_repairing',
      'leather_chestplate_repairing',
      'leather_gloves_repairing',
      'leather_helmet_repairing',
      'leather_leggings_repairing',
      'netherite_axe_repairing',
      'netherite_boots_repairing',
      'netherite_chestplate_repairing',
      'netherite_gloves_repairing',
      'netherite_helmet_repairing',
      'netherite_hoe_repairing',
      'netherite_leggings_repairing',
      'netherite_pickaxe_repairing',
      'netherite_shovel_repairing',
      'netherite_sword_repairing',
      'shield_repairing',
      'stone_axe_repairing',
      'stone_hoe_repairing',
      'stone_pickaxe_repairing',
      'stone_shovel_repairing',
      'stone_sword_repairing',
      'wooden_axe_repairing',
      'wooden_hoe_repairing',
      'wooden_pickaxe_repairing',
      'wooden_shovel_repairing',
      'wooden_sword_repairing',
    ].forEach(x => event.remove({id: `aether:${x}`}));
  };

  const BloodMagic = () => {
    /**
     * @param {Internal.ItemStackKJS} output
     * @param {Internal.Ingredient} input
     * @param {Internal.Ingredient} reagent
     * @param {boolean} bonus
     */
    const ARC = (output, input, reagent, bonus) => {
      const recipe = {
        type: 'bloodmagic:arc',
        consumeingredient: false,
        input: input.toJson(),
        inputsize: 1,
        mainoutputchance: 0.0,
        output: output.toJson(),
        tool: reagent.toJson(),
      };

      if (!!bonus) {
        recipe.addedoutput = [
          {
            type: output.withCount(1).toJson(),
            chance: 0.17,
            mainchance: 0.33,
          },
        ];
      }

      event.custom(recipe);
    };

    // Everything in BM should use Arcane Gold
    event.replaceInput({mod: 'bloodmagic', not: {type: 'bloodmagic:arc'}}, '#forge:nuggets/gold', '#forge:nuggets/arcane_gold');
    event.replaceInput({mod: 'bloodmagic', not: {type: 'bloodmagic:arc'}}, '#forge:ingots/gold', '#forge:ingots/arcane_gold');
    event.replaceInput({mod: 'bloodmagic', not: {type: 'bloodmagic:arc'}}, '#forge:storage_blocks/gold', '#forge:storage_blocks/arcane_gold');
    event.remove({id: 'bloodmagic:soulforge/pettytartaricgem'});
    event.remove({id: 'bloodmagic:soulforge/lessertartaricgem'});

    // More involved Petty Soul Gem recipe
    event.remove({output: 'bloodmagic:soulgempetty'});
    event.custom({
      type: 'bloodmagic:soulforge',
      drain: 1.0,
      input0: {item: 'eidolon:enchanted_ash'},
      input1: {item: 'eidolon:soul_shard'},
      input2: {tag: 'forge:ingots/arcane_gold'},
      input3: {item: 'eidolon:death_essence'},
      minimumDrain: 1.0,
      output: {item: 'bloodmagic:soulgempetty'},
    });

    // More involved Lesser Soul Gem recipe
    event.remove({output: 'bloodmagic:soulgemlesser'});
    event.custom({
      type: 'bloodmagic:soulforge',
      drain: 20.0,
      input0: {item: 'bloodmagic:soulgempetty'},
      input1: {item: 'eidolon:shadow_gem'},
      input2: {item: 'eidolon:death_essence'},
      input3: {item: 'eidolon:lesser_soul_gem'},
      minimumDrain: 60.0,
      output: {item: 'bloodmagic:soulgemlesser'},
    });

    // More involved Altar recipe
    event.remove({output: 'bloodmagic:altar'});
    event.shaped('bloodmagic:altar', ['S S', 'EGE', 'EAE'], {
      S: 'eidolon:arcane_seal',
      E: 'aether:carved_stone',
      A: 'aether:altar',
      G: 'eidolon:crimson_gem',
    });

    // Easier means to get Arcane Gold once you're in BM
    event.custom({
      type: 'bloodmagic:altar',
      altarSyphon: 1000,
      consumptionRate: 5,
      drainRate: 5,
      input: {tag: 'forge:ingots/gold'},
      output: {item: 'eidolon:arcane_gold_ingot'},
      upgradeLevel: 1,
    });

    event.custom({
      type: 'bloodmagic:altar',
      altarSyphon: 111,
      consumptionRate: 5,
      drainRate: 5,
      input: {tag: 'forge:nuggets/gold'},
      output: {item: 'eidolon:arcane_gold_nugget'},
      upgradeLevel: 1,
    });

    // Alchemical Reaction Chamber recipes :)
    const cuttingFluid = Ingredient.of('#bloodmagic:arc/cuttingfluid');
    const explosive = Ingredient.of('#bloodmagic:arc/explosive');

    [
      {material: 'aluminum', dust: 'immersiveengineering:dust_aluminum'},
      {material: 'lead', dust: 'mekanism:dust_lead'},
      {material: 'nickel', dust: 'immersiveengineering:dust_nickel'},
      {material: 'silver', dust: 'immersiveengineering:dust_silver'},
      {material: 'tin', dust: 'mekanism:dust_tin'},
      {material: 'uranium', dust: 'mekanism:dust_uranium'},
      {material: 'zinc', dust: 'create:crushed_raw_zinc'},
    ].forEach(x => {
      const dust = Item.of(x.dust);
      ARC(dust.withCount(3), Ingredient.of(`#forge:ores/${x.material}`), cuttingFluid);
      ARC(dust, Ingredient.of(`#forge:ingots/${x.material}`), explosive);
      ARC(dust, Ingredient.of(`#forge:raw_materials/${x.material}`), cuttingFluid, true);
    });
  };

  const Eidolon = () => {
    // Candle deduplication-ish
    event.remove({output: 'eidolon:candle'});
    event.remove({id: 'delightful:candle_from_animal_fat'});
    event.shaped('minecraft:candle', ['S', 'T'], {S: 'minecraft:string', T: '#forge:tallow'});

    event.replaceInput({}, 'eidolon:candle', 'minecraft:candle');
  };

  const Embers = () => {
    // Gate the Tinker Hammer behind Hellforged Ingots from BloodMagic
    event.remove({output: 'embers:tinker_hammer'});
    event.shaped('embers:tinker_hammer', ['LDL', 'LSL', ' S '], {
      L: '#forge:ingots/dark_steel',
      D: '#forge:ingots/hellforged',
      S: '#forge:rods/wooden',
    });

    [
      Item.of('embers:silver_hoe'),
      Item.of('embers:silver_axe'),
      Item.of('embers:silver_pickaxe'),
      Item.of('embers:silver_shovel'),
      Item.of('embers:silver_sword'),
    ].forEach(tool => {
      event.remove({input: tool});
      event.remove({output: tool});
    });
  };

  const Enchanting = () => {
    event.remove({output: 'minecraft:enchanting_table'});
    event.custom({
      type: 'eidolon:worktable',
      pattern: ['   ', ' e ', '   '],
      reagents: 'didi',
      key: {
        e: {item: 'minecraft:enchanting_table'},
        d: {tag: 'forge:ingots/arcane_gold'},
        i: {item: 'eidolon:gold_inlay'},
      },
      result: {item: 'eidolon:soul_enchanter'},
    });
  };

  [Aether, BloodMagic, Eidolon, Embers, Enchanting].forEach(Module => Module());
});

LootJS.modifiers(event => {
  // Remove anything with Mending on it from *all* loot tables
  event.addLootTableModifier(/.*/).removeLoot(ItemFilter.hasEnchantment('minecraft:mending'));
});
