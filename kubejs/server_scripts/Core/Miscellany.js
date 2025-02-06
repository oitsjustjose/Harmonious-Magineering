// priority: -1

ServerEvents.recipes(event => {
  const architectsPalette = () => {
    event.replaceInput({ output: 'architects_palette:nether_brass_blend' }, 'minecraft:iron_nugget', '#forge:nuggets/zinc');
    event.replaceInput({ output: 'architects_palette:sunmetal_blend' }, 'minecraft:gold_nugget', '#forge:nuggets/arcane_gold');

    event.remove({ output: 'architects_palette:wardstone_blend' });
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
      event.shaped(Item.of(x.stair, 4), ['B  ', 'BB ', 'BBB'], { B: x.block });
      event.shaped(Item.of(x.slab, 6), ['BBB'], { B: x.block });
      event.stonecutting(Item.of(x.slab, 2), x.block);
      event.stonecutting(Item.of(x.stair), x.block);
    });
  };

  const fireworks = () => {
    // Fireworks are really fucking broken because of a VANILLA mechanic... yikes.
    event.remove('minecraft:firework_rocket');
    event.remove('minecraft:firework_rocket_simple');
    event.remove('minecraft:firework_star');
    event.remove('minecraft:firework_star_fade');

    const _makeFirework = (lvl) => {
      // Make a new NBT tag for both the base tag, and the subtag
      const fireworkTag = Item.of('minecraft:stone').copyAndClear().getOrCreateTag();
      const flightSubtag = Item.of('minecraft:stone').copyAndClear().getOrCreateTag();

      // Populate the Subtag
      flightSubtag.putByte('Flight', lvl);
      // Then put the subtag as a CompoundTag child of the main tag
      fireworkTag.put('Fireworks', flightSubtag);
      // Finally build the output
      return Item.of('minecraft:firework_rocket', 3, fireworkTag);
    };

    [1, 2, 3].forEach(lvl => {
      const inputs = Array(lvl).fill('minecraft:gunpowder');
      inputs.push('minecraft:paper');
      event.shapeless(_makeFirework(lvl), inputs);
    });
  };

  /* Things that aren't duplicate *CONTENT*, but have overlapping recipes */
  const fixRecipeOverlaps = () => {
    /* These variants have stripped 'wood' variants but use unusual id formats (bark & pith) and fell back to Stripped Oak Wood */
    // Illwood
    event.remove('everycomp:q/eidolon/illwood_post');
    event.shaped(Item.of('everycomp:q/eidolon/illwood_post', 8), ['W', 'W', 'W'], { W: 'eidolon:illwood_bark' });
    event.remove('everycomp:q/eidolon/stripped_illwood_post');
    event.shaped(Item.of('everycomp:q/eidolon/stripped_illwood_post', 8), ['W', 'W', 'W'], { W: 'eidolon:stripped_illwood_bark' });
    // Azure
    event.remove('everycomp:q/outer_end/azure_post');
    event.shaped(Item.of('everycomp:q/outer_end/azure_post', 8), ['W', 'W', 'W'], { W: 'outer_end:azure_pith' });
    event.remove('everycomp:q/outer_end/stripped_azure_post');
    event.shaped(Item.of('everycomp:q/outer_end/stripped_azure_post', 8), ['W', 'W', 'W'], { W: 'outer_end:azure_stripped_pith' });

    /* Why did DA add this as a dup ?? */
    event.remove('deep_aether:skyroot_crafting_table');
    /* AP adds its own conflict ;_; I think this needs to be bricks actually? */
    event.replaceInput({ output: 'architects_palette:hadaline_tiles' }, 'architects_palette:hadaline', 'architects_palette:hadaline_bricks');
    /* Decorative blocks lattice overlaps w/ Supp Timber Frames */
    event.remove('decorative_blocks:lattice');
    event.shaped(Item.of('decorative_blocks:lattice', 2), ['S S', ' S ', 'S S'], { S: 'minecraft:stick' });
    /* Ecologics' Pot conflicts w/ Handcrafted's Thick Pot */
    event.remove("ecologics:pot");
    event.shaped(Item.of('ecologics:pot'), ['P', 'T'], { P: 'minecraft:flower_pot', T: 'minecraft:terracotta' });

    /* Twigs causes a LOT of conflicts */
    event.remove('eidolon:smooth_stone_tiles'); /* Overlaps w/ Twigs but already has a stonecutter recipe */
    event.remove('twigs:polished_basalt_bricks');
    event.shaped(Item.of('twigs:polished_basalt_bricks', 4), ['SB', 'BS'], { S: 'minecraft:smooth_basalt', B: 'minecraft:basalt' });
    event.remove('twigs:gravel_bricks');
    event.smelting('twigs:gravel_bricks', 'supplementaries:gravel_bricks');

    /* Quark & AP Conflicts resolved via Smelting */
    event.remove('quark:building/crafting/stonevariants/vanilla/polished_tuff');
    event.smelting('quark:polished_tuff', 'minecraft:tuff');
    event.remove('quark:building/crafting/stonevariants/vanilla/polished_dripstone');
    event.smelting('quark:polished_dripstone', 'minecraft:dripstone_block');
    event.remove('quark:building/crafting/stonevariants/vanilla/polished_calcite');
    event.smelting('quark:polished_calcite', 'minecraft:calcite');

    /* Handcrafted plate recipe conflict fix with Supp shelves */
    event.remove('handcrafted:wood_plate');
    event.shaped(Item.of('handcrafted:wood_plate', 4), ['PSP'], { P: '#minecraft:wooden_pressure_plates', S: "#minecraft:wooden_slabs" });

    /* We already have Blackstone furnaces, so let's only use vanilla cobble variants */
    event.remove("minecraft:furnace");
    event.shaped("minecraft:furnace", ["CCC", "C C", "CCC"], { C: ['minecraft:cobblestone', 'minecraft:cobbled_deepslate'] });



    [
      // START: Already covered by the osmium brute-force replacing recipe
      'immersiveengineering:crafting/ingot_steel_to_nugget_steel',
      'mekanism:nuggets/steel',
      'mekanism:storage_blocks/steel',
      // END
      'aether:skyroot_lectern',
      'aether:swet_sticky_piston',
      'architects_palette:smelting/nether_brass_ingot_from_nether_brass_blend_blasting',
      'delightful:knives/blasting/silver_immersiveengineering',
      'delightful:knives/blasting/steel_immersiveengineering',
      'delightful:knives/smelting/silver_immersiveengineering',
      'delightful:knives/smelting/steel_immersiveengineering',
      'farmersdelight:bread_from_smelting',
      'farmersdelight:bread_from_smoking',
      'minecraft:sticky_piston',
      'quark:building/crafting/cobblestone_bricks',
      'quark:building/crafting/mossy_cobblestone_bricks',
      'regions_unexplored:blackstone_cluster',
      'regions_unexplored:yellow_bioshroom_from_tall_yellow_bioshroom',
    ].forEach(x => event.remove(x));
  };

  const foodstuffs = () => {
    /* Fix barley being insanely op */
    event.remove({ input: 'regions_unexplored:barley', output: 'minecraft:bread' });
    let flour = Item.of('create:wheat_flour');
    flour.setNbt({ display: { Name: '[{"translate":"item.kubejs.generic_flour","italic":false}]' } });
    event.recipes.create.milling(flour.withChance(0.15), 'regions_unexplored:barley');

    /* Canonically, 1 bottle = 1/3 of a bucket, not 1/4 - fix for milk */
    event.remove({ output: 'farmersdelight:milk_bottle' });
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
    event.forEachRecipe({ output: '#forge:glass', type: 'minecraft:smelting' }, x => {
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
      input: { item: 'outer_end:halite' },
      result: { item: 'mekanism:salt', count: 4 },
      secondaries: [],
    });

    event.custom({
      type: 'immersiveengineering:crusher',
      energy: 1600,
      input: { item: 'outer_end:halite_crystal' },
      result: { item: 'mekanism:salt', count: 1 },
      secondaries: [],
    });

    event.custom({ type: 'mekanism:crushing', input: { ingredient: { item: 'outer_end:halite' } }, output: { item: 'mekanism:salt', count: 4 } });
    event.custom({ type: 'mekanism:crushing', input: { ingredient: { item: 'outer_end:halite_crystal' } }, output: { item: 'mekanism:salt' } });
  };

  const quark = () => {
    event.replaceInput({ output: 'quark:bonded_leather' }, '#forge:leather', 'minecraft:leather');

    /* Moss things */
    event.remove({ output: 'ecologics:surface_moss' });
    event.remove({ output: 'quark:moss_paste' });
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
    event.replaceInput({ output: 'supplementaries:sack' }, 'supplementaries:flax', 'farmersdelight:canvas');
    /* Fix candle holder recipe inconcistencies */
    global.Colors.withEmpty.forEach(color => {
      let candle = `supplementaries:candle_holder${color.length > 0 ? '_' : ''}${color}`;
      event.remove({ output: candle });
      event.shaped(candle, ['C', 'I'], {
        C: `minecraft:${color}${color.length > 0 ? '_' : ''}candle`,
        I: '#forge:ingots/iron',
      });
    });
  };

  event.shapeless(Item.of('minecraft:bone_meal', 4), ['eidolon:imbued_bones']);
  event.shapeless(Item.of('minecraft:clay_ball', 4), ['minecraft:clay']);
  event.shapeless(Item.of('twigs:silt_ball', 4), ['twigs:silt']);

  event.remove({ mod: 'ftbquests' });
  event.remove({ output: 'minecraft:saddle' });
  event.remove('aether:swet_slime_block');

  /* prevent the user from re-dying wool, make them use washing (either V-Tweaks or Create) */
  global.Colors.withoutWhite.forEach(wool => event.remove(`minecraft:dye_${wool}`));

  /* make post boxes cheaper - shouldn't gate the user to go to the End in MP just to send mail */
  event.remove({ output: 'cfm:post_box' });
  event.shaped('cfm:post_box', ['BTB', 'BCB', 'B B'], {
    B: 'minecraft:blue_concrete',
    T: 'minecraft:iron_trapdoor',
    C: '#forge:chests/wooden',
  });

  /* Easier dispensers (didn't Quark do this at some point?? */
  event.shaped('minecraft:dispenser', [' RS', 'RDS', ' RS'], {
    R: '#forge:rods/wooden',
    S: 'minecraft:string',
    D: 'minecraft:dropper',
  });

  /* Re-do branch stick crafting */
  event.remove({ output: 'minecraft:stick', input: '#regions_unexplored:branches' });
  event.shaped(Item.of('minecraft:stick', 9), ['L', 'L'], { L: '#regions_unexplored:branches' });

  /* Tiny [char]coal recipes -- no reversion recipes included */
  event.shapeless(Item.of('kubejs:tiny_coal', 8), 'minecraft:coal');
  event.shapeless(Item.of('kubejs:tiny_charcoal', 8), 'minecraft:charcoal');

  [
    architectsPalette,
    createWaxedCopper,
    fireworks,
    fixRecipeOverlaps,
    foodstuffs,
    glass,
    outerEnd,
    quark,
    supplementaries,
  ].forEach(module => module());
});;
