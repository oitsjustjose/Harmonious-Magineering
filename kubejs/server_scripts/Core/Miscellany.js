ServerEvents.recipes(event => {
  const coldsweat = () => {
    event.remove({output: 'cold_sweat:hearth'});
    event.shaped('cold_sweat:hearth', ['  W', 'RBR', 'RRR'], {
      W: 'minecraft:cobblestone_wall',
      B: 'cold_sweat:boiler',
      R: 'twigs:rhyolite',
    });
  };

  /* Create's Waxed Copper can't be crafted into corresponding stairs/slabs, but vanilla's can... */
  const createWaxedCopper = () => {
    [
      {
        block: 'create:waxed_copper_shingles',
        stair: 'create:waxed_copper_shingle_stairs',
        slab: 'create:waxed_copper_shingle_slab',
      },
      {
        block: 'create:waxed_copper_tiles',
        stair: 'create:waxed_copper_tile_stairs',
        slab: 'create:waxed_copper_tile_slab',
      },
      {
        block: 'create:waxed_exposed_copper_shingles',
        stair: 'create:waxed_exposed_copper_shingle_stairs',
        slab: 'create:waxed_exposed_copper_shingle_slab',
      },
      {
        block: 'create:waxed_exposed_copper_tiles',
        stair: 'create:waxed_exposed_copper_tile_stairs',
        slab: 'create:waxed_exposed_copper_tile_slab',
      },
      {
        block: 'create:waxed_oxidized_copper_shingles',
        stair: 'create:waxed_oxidized_copper_shingle_stairs',
        slab: 'create:waxed_oxidized_copper_shingle_slab',
      },
      {
        block: 'create:waxed_oxidized_copper_tiles',
        stair: 'create:waxed_oxidized_copper_tile_stairs',
        slab: 'create:waxed_oxidized_copper_tile_slab',
      },
      {
        block: 'create:waxed_weathered_copper_shingles',
        stair: 'create:waxed_weathered_copper_shingle_stairs',
        slab: 'create:waxed_weathered_copper_shingle_slab',
      },
      {
        block: 'create:waxed_weathered_copper_tiles',
        stair: 'create:waxed_weathered_copper_tile_stairs',
        slab: 'create:waxed_weathered_copper_tile_slab',
      },
    ].forEach(x => {
      event.shaped(Item.of(x.stair, 4), ['B  ', 'BB ', 'BBB'], {B: x.block});
      event.shaped(Item.of(x.slab, 6), ['BBB'], {B: x.block});
      event.stonecutting(Item.of(x.slab, 2), x.block);
      event.stonecutting(Item.of(x.stair), x.block);
    });
  };

  const supplementaries = () => {
    event.replaceInput({output: 'supplementaries:sack'}, 'supplementaries:flax', 'farmersdelight:canvas');

    /* Fix candle holder recipe inconcistencies */
    [
      '',
      'pink',
      'magenta',
      'purple',
      'blue',
      'light_blue',
      'cyan',
      'green',
      'lime',
      'yellow',
      'orange',
      'red',
      'brown',
      'black',
      'gray',
      'light_gray',
      'white',
    ].forEach(color => {
      let candle = `supplementaries:candle_holder${color.length > 0 ? '_' : ''}${color}`;
      event.remove({output: candle});
      event.shaped(candle, ['C', 'I'], {
        C: `minecraft:${color}${color.length > 0 ? '_' : ''}candle`,
        I: '#forge:ingots/iron',
      });
    });
  };

  event.shaped('kubejs:rf_core', [' CC', 'SWC', 'SS '], {
    C: '#forge:plates/copper',
    S: '#forge:plates/steel',
    W: 'pneumaticcraft:capacitor',
  });

  event.shapeless(Item.of('minecraft:bone_meal', 4), ['eidolon:imbued_bones']);
  event.shapeless(Item.of('minecraft:clay_ball', 4), ['minecraft:clay']);

  event.remove({mod: 'ftbquests'});
  event.remove({output: 'minecraft:saddle'});
  event.remove('aether:swet_slime_block');

  [coldsweat, createWaxedCopper, supplementaries].forEach(module => module());
});
