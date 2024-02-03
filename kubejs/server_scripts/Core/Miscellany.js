ServerEvents.recipes(event => {
  const architectsPalette = () => {
    event.replaceInput({output: 'architects_palette:nether_brass_blend'}, 'minecraft:iron_nugget', '#forge:nuggets/zinc');
    event.replaceInput({output: 'architects_palette:sunmetal_blend'}, 'minecraft:gold_nugget', '#forge:nuggets/arcane_gold');

    event.remove({output: 'architects_palette:wardstone_blend'});
    event.shapeless(Item.of('architects_palette:wardstone_blend', 24), [
      '#forge:dyes/blue',
      '#forge:dyes/blue',
      '#forge:dyes/blue',
      'eidolon:wraith_heart',
    ]);
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

  const quark = () => {
    event.replaceInput({output: 'quark:bonded_leather'}, '#forge:leather', 'minecraft:leather');
    event.replaceInput({}, 'quark:moss_paste', 'ecologics:surface_moss');
    event.remove({output: 'quark:moss_paste'});
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

  event.shapeless(Item.of('minecraft:bone_meal', 4), ['eidolon:imbued_bones']);
  event.shapeless(Item.of('minecraft:clay_ball', 4), ['minecraft:clay']);

  event.remove({mod: 'ftbquests'});
  event.remove({output: 'minecraft:saddle'});
  event.remove('aether:swet_slime_block');

  [architectsPalette, createWaxedCopper, quark, supplementaries].forEach(module => module());
});
