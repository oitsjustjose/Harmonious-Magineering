// priority: 1

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

  const foodstuffs = () => {
    /* Fix barley being insanely op */
    event.remove({input: 'regions_unexplored:barley', output: 'minecraft:bread'});
    let flour = Item.of('create:wheat_flour');
    flour.setNbt({display: {Name: '[{"translate":"item.kubejs.generic_flour","italic":false}]'}});
    event.recipes.create.milling(flour.withChance(0.15), 'regions_unexplored:barley');

    /* Canonically, 1 bottle = 1/3 of a bucket, not 1/4 - fix for milk */
    event.remove({output: 'farmersdelight:milk_bottle'});
    event.shapeless(Item.of('farmersdelight:milk_bottle', 3), [
      'minecraft:milk_bucket',
      'minecraft:glass_bottle',
      'minecraft:glass_bottle',
      'minecraft:glass_bottle',
    ]);
    // Update spout filling recipe too
    event.recipes.create.filling('farmersdelight:milk_bottle', [Item.of('minecraft:glass_bottle'), Fluid.of('minecraft:milk', 333)]);
  };

  const glass = () => {
    event.forEachRecipe({output: '#forge:glass', type: 'minecraft:smelting'}, x => {
      event.remove(x.getId());
      event.blasting(x.get('result'), x.get('ingredient')).id(x.getId());
    });

    event.remove('immersiveengineering:smelting/slag_glass');
    event.blasting('immersiveengineering:slag_glass', '#forge:slag').id('immersiveengineering:smelting/slag_glass');
  };

  const outerEnd = () => {
    event.recipes.create.crushing(Item.of('mekanism:salt', 4), ['outer_end:halite']);
    event.recipes.create.crushing(Item.of('mekanism:salt', 1), ['outer_end:halite_crystal']);

    event.custom({
      type: 'immersiveengineering:crusher',
      energy: 1600,
      input: {item: 'outer_end:halite'},
      result: {item: 'mekanism:salt', count: 4},
      secondaries: [],
    });

    event.custom({
      type: 'immersiveengineering:crusher',
      energy: 1600,
      input: {item: 'outer_end:halite_crystal'},
      result: {item: 'mekanism:salt', count: 1},
      secondaries: [],
    });

    event.custom({type: 'mekanism:crushing', input: {ingredient: {item: 'outer_end:halite'}}, output: {item: 'mekanism:salt', count: 4}});
    event.custom({type: 'mekanism:crushing', input: {ingredient: {item: 'outer_end:halite_crystal'}}, output: {item: 'mekanism:salt'}});
  };

  const quark = () => {
    event.replaceInput({output: 'quark:bonded_leather'}, '#forge:leather', 'minecraft:leather');

    /* Moss things */
    event.remove({output: 'ecologics:surface_moss'});
    event.remove({output: 'quark:moss_paste'});
    event.smelting(Item.of('ecologics:surface_moss', 9), 'minecraft:moss_block').id('kubejs:surface_moss_from_moss_block');
    event.replaceInput({}, 'quark:moss_paste', 'ecologics:surface_moss');

    event.remove('quark:building/crafting/framed_glass');
    event.shaped(Item.of('quark:framed_glass', 4), ['NGN', 'GNG', 'NGN'], {
      G: [
        'connectedglass:borderless_glass',
        'connectedglass:clear_glass',
        'connectedglass:scratched_glass',
        'create:framed_glass',
        'create:horizontal_framed_glass',
        'create:tiled_glass',
        'create:vertical_framed_glass',
        'minecraft:glass',
      ],
      N: '#forge:nuggets/iron',
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

  event.shapeless(Item.of('minecraft:bone_meal', 4), ['eidolon:imbued_bones']);
  event.shapeless(Item.of('minecraft:clay_ball', 4), ['minecraft:clay']);
  event.shapeless(Item.of('twigs:silt_ball', 4), ['twigs:silt']);

  event.remove({mod: 'ftbquests'});
  event.remove({output: 'minecraft:saddle'});
  event.remove('aether:swet_slime_block');

  /* make post boxes cheaper */
  event.remove({output: 'cfm:post_box'});
  event.shaped('cfm:post_box', ['BTB', 'BCB', 'B B'], {
    B: 'minecraft:blue_concrete',
    T: 'minecraft:iron_trapdoor',
    C: '#forge:chests/wooden',
  });

  /* Easier dispensers */
  event.shaped('minecraft:dispenser', [' RS', 'RDS', ' RS'], {
    R: '#forge:rods/wooden',
    S: 'minecraft:string',
    D: 'minecraft:dropper',
  });

  const _makeFirework = (lvl, count) => {
    // Make a new NBT tag for both the base tag, and the subtag
    const fireworkTag = Item.of('minecraft:stone').copyAndClear().getOrCreateTag();
    const flightSubtag = Item.of('minecraft:stone').copyAndClear().getOrCreateTag();

    // Populate the Subtag
    flightSubtag.putByte('Flight', lvl);
    // Then put the subtag as a CompoundTag child of the main tag
    fireworkTag.put('Fireworks', flightSubtag);
    // Finally build the output >_>
    return Item.of('minecraft:firework_rocket', count, fireworkTag);
  };

  // Fireworks are really fucking broken because of a VANILLA mechanic... yikes.
  event.remove('minecraft:firework_rocket');
  event.remove('minecraft:firework_rocket_simple');
  event.remove('minecraft:firework_star');
  event.remove('minecraft:firework_star_fade');

  event.shapeless(_makeFirework(1, 3), ['minecraft:paper', 'minecraft:gunpowder']);
  event.shapeless(_makeFirework(2, 3), ['minecraft:paper', 'minecraft:gunpowder', 'minecraft:gunpowder']);
  event.shapeless(_makeFirework(3, 3), ['minecraft:paper', 'minecraft:gunpowder', 'minecraft:gunpowder', 'minecraft:gunpowder']);

  /* Re-do branch stick crafting */
  event.remove({output: 'minecraft:stick', input: '#regions_unexplored:branches'});
  event.shaped(Item.of('minecraft:stick', 9), ['L', 'L'], {L: '#regions_unexplored:branches'});

  event.shapeless(Item.of('kubejs:tiny_coal', 8), 'minecraft:coal');
  event.shapeless(Item.of('kubejs:tiny_charcoal', 8), 'minecraft:charcoal');

  [(architectsPalette, createWaxedCopper, foodstuffs, glass, outerEnd, quark, supplementaries)].forEach(module => module());
});
