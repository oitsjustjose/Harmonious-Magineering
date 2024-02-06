// priority: 999999
ServerEvents.recipes(event => {
  const items = {
    screen: Item.of('supplementaries:crystal_display'),
    plastic: '#pneumaticcraft:plastic_sheets',
    template: Item.of('minecraft:paper'),
    transistor: Item.of('pneumaticcraft:transistor'),
    capacitor: Item.of('pneumaticcraft:capacitor'),
  };

  const ae2 = () => {
    // Alternative ways to make Quartz Dust
    event.recipes.create.crushing('mekanism:dust_quartz', ['minecraft:quartz']);
    event.recipes.create.milling('mekanism:dust_quartz', ['minecraft:quartz']);
    event.custom({
      type: 'immersiveengineering:crusher',
      energy: 3200,
      input: {item: 'minecraft:quartz'},
      result: {item: 'mekanism:dust_quartz'},
      secondaries: [],
    });

    // Alternative way to make Certus Dust
    event.custom({
      type: 'immersiveengineering:crusher',
      energy: 3200,
      input: {tag: 'forge:gems/certus_quartz'},
      result: {item: 'ae2:certus_quartz_dust'},
      secondaries: [],
    });

    event.replaceInput({mod: 'ae2'}, '#forge:ingots/iron', '#forge:ingots/steel');
    event.replaceInput({mod: 'aeinfinitybooster'}, 'minecraft:ender_eye', 'ae2:singularity');
    // By the time you get to AE, you'll have power...
    event.remove('ae2:network/blocks/crank');

    // Silicon redux
    event.remove('ae2:blasting/silicon_from_certus_quartz_dust');
    event.remove('ae2:smelting/silicon_from_certus_quartz_dust');
    event.recipes.create.compacting(Item.of('ae2:silicon', 2), [Item.of('mekanism:dust_quartz'), Item.of('mekanism:dust_coal')]).superheated();
    event.custom({
      type: 'mekanism:metallurgic_infusing',
      chemicalInput: {amount: 10, tag: 'mekanism:carbon'},
      itemInput: {ingredient: {item: 'minecraft:quartz'}},
      output: {item: 'ae2:silicon', count: 2},
    });

    // Dusts shouldn't be made in the inscriber..
    event.remove('ae2:inscriber/certus_quartz_dust');
    event.remove('ae2:inscriber/ender_dust');
    event.remove('ae2:inscriber/fluix_dust');
    event.remove('ae2:inscriber/sky_stone_dust');

    event.custom({type: 'mekanism:crushing', input: {ingredient: {tag: 'forge:ender_pearls'}}, output: {item: 'ae2:ender_dust'}});

    // Use Skystone Dust in more recipes - it's massively under-utilized :/
    event.replaceInput({output: 'ae2:cell_component_1k'}, '#forge:dusts', 'ae2:sky_dust');
    event.replaceInput({output: 'ae2:cell_component_4k'}, '#forge:dusts', 'ae2:sky_dust');
    event.replaceInput({output: 'ae2:cell_component_16k'}, '#forge:dusts', 'ae2:sky_dust');
    event.replaceInput({output: 'ae2:cell_component_64k'}, '#forge:dusts', 'ae2:sky_dust');
    event.replaceInput({output: 'ae2:cell_component_256k'}, '#forge:dusts', 'ae2:sky_dust');

    // Use Copper Wiring in processor recipes
    event.remove('ae2:inscriber/logic_processor');
    event.custom({
      type: 'ae2:inscriber',
      mode: 'press',
      ingredients: {
        bottom: {item: 'ae2:printed_silicon'},
        middle: {tag: 'forge:wires/copper'},
        top: {item: 'ae2:printed_logic_processor'},
      },
      result: {item: 'ae2:logic_processor'},
    });

    event.remove('ae2:inscriber/engineering_processor');
    event.custom({
      type: 'ae2:inscriber',
      mode: 'press',
      ingredients: {
        bottom: {item: 'ae2:printed_silicon'},
        middle: {tag: 'forge:wires/copper'},
        top: {item: 'ae2:printed_engineering_processor'},
      },
      result: {item: 'ae2:engineering_processor'},
    });

    event.remove('ae2:inscriber/calculation_processor');
    event.custom({
      type: 'ae2:inscriber',
      mode: 'press',
      ingredients: {
        bottom: {item: 'ae2:printed_silicon'},
        middle: {tag: 'forge:wires/copper'},
        top: {item: 'ae2:printed_calculation_processor'},
      },
      result: {item: 'ae2:calculation_processor'},
    });

    // Use mekanism circuits for the printed circuits
    event.remove('ae2:inscriber/calculation_processor_print');
    event.remove('ae2:inscriber/engineering_processor_print');
    event.remove('ae2:inscriber/logic_processor_print');

    // Basic Control Circuit -> Logic Processor
    event.custom({
      type: 'ae2:inscriber',
      mode: 'inscribe',
      ingredients: {
        middle: {tag: 'forge:circuits/basic'},
        top: {item: 'ae2:logic_processor_press'},
      },
      result: {item: 'ae2:printed_logic_processor'},
    });
    // Advanced Control Circuit -> Calculation Processor
    event.custom({
      type: 'ae2:inscriber',
      mode: 'inscribe',
      ingredients: {
        middle: {tag: 'forge:circuits/advanced'},
        top: {item: 'ae2:calculation_processor_press'},
      },
      result: {item: 'ae2:printed_calculation_processor'},
    });
    // Elite Control Circuit -> Engineering Processor
    event.custom({
      type: 'ae2:inscriber',
      mode: 'inscribe',
      ingredients: {
        middle: {tag: 'forge:circuits/elite'},
        top: {item: 'ae2:engineering_processor_press'},
      },
      result: {item: 'ae2:printed_engineering_processor'},
    });
  };

  const buildingGadgets = () => {
    const bG = item => `buildinggadgets2:${item}`;
    event.remove({mod: 'buildinggadgets2'});

    event.shaped(bG('template_manager'), ['PPP', 'PTP', 'PEP'], {
      P: items.plastic,
      T: 'create:schematic_table',
      E: 'create:empty_schematic',
    });

    event.shaped(bG('gadget_building'), ['PSP', 'PBP', 'PCP'], {
      P: items.plastic,
      S: items.screen,
      B: 'create:extendo_grip',
      C: 'pneumaticcraft:capacitor',
    });

    event.shaped(bG('gadget_exchanging'), ['PPP', ' SP', ' CP'], {
      P: items.plastic,
      S: items.screen,
      C: 'pneumaticcraft:capacitor',
    });

    event.shaped(bG('gadget_copy_paste'), ['PSP', 'ECE', 'PGP'], {
      P: items.plastic,
      S: items.screen,
      C: 'pneumaticcraft:capacitor',
      E: 'create:empty_schematic',
      G: 'create:extendo_grip',
    });

    event.shaped(bG('gadget_cut_paste'), ['DSD', 'ECE', 'DGD'], {
      D: '#forge:ingots/steel',
      S: items.screen,
      C: 'pneumaticcraft:capacitor',
      E: 'minecraft:shears',
      G: 'create:extendo_grip',
    });

    event.shaped(bG('gadget_destruction'), ['DSD', 'DTD', 'DCD'], {
      D: '#forge:ingots/steel',
      S: items.screen,
      C: 'pneumaticcraft:capacitor',
      T: 'minecraft:tnt',
    });

    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"buildinggadgets2:buildinggadgets2book"}'), [
      'minecraft:book',
      'create:empty_schematic',
    ]);
  };

  const chunkloaders = () => {
    event.remove({mod: 'chunkloaders'});

    event.shapeless(Item.of('chunkloaders:single_chunk_loader', 9), ['chunkloaders:basic_chunk_loader']);
    event.shapeless('chunkloaders:basic_chunk_loader', [
      'chunkloaders:single_chunk_loader',
      'chunkloaders:single_chunk_loader',
      'chunkloaders:single_chunk_loader',
      'chunkloaders:single_chunk_loader',
      'chunkloaders:single_chunk_loader',
      'chunkloaders:single_chunk_loader',
      'chunkloaders:single_chunk_loader',
      'chunkloaders:single_chunk_loader',
      'chunkloaders:single_chunk_loader',
    ]);
    event.shaped('chunkloaders:basic_chunk_loader', ['IBI', 'BEB', 'IBI'], {
      B: '#forge:storage_blocks/iron',
      I: 'minecraft:blaze_powder',
      E: 'minecraft:respawn_anchor',
    });

    event.shaped('chunkloaders:advanced_chunk_loader', ['IBI', 'BEB', 'IBI'], {
      B: '#forge:ingots/gold',
      I: '#forge:plates/gold',
      E: ['minecraft:respawn_anchor', 'chunkloaders:basic_chunk_loader'],
    });

    event.shaped('chunkloaders:ultimate_chunk_loader', ['IBI', 'BEB', 'IBI'], {
      B: 'mekanism:alloy_reinforced',
      I: 'mekanism:enriched_diamond',
      E: ['minecraft:respawn_anchor', 'chunkloaders:advanced_chunk_loader'],
    });
  };

  const create = () => {
    // Cross-compat for automatically stripping modded logs & woods
    global.StrippedLumber.logs
      .concat(global.StrippedLumber.woods)
      .concat(global.StrippedLumber.stems)
      .concat(global.StrippedLumber.hyphae)
      .forEach(stripped => {
        let unstripped = stripped.replace('stripped_', '');
        if (!Item.exists(unstripped)) {
          console.warn(`Unstripped log ${unstripped} does not exist! 🥲`);
          return;
        }
        event.recipes.create.cutting(stripped, [unstripped]);
      });

    // Only Andesite Casing can be made by hand - everything else should be deployed
    event.remove('create:item_application/brass_casing_from_log');
    event.remove('create:item_application/brass_casing_from_wood');
    event.remove('create:item_application/copper_casing_from_log');
    event.remove('create:item_application/copper_casing_from_wood');
    event.remove('create:item_application/railway_casing');

    event.recipes.create.deploying('create:copper_casing', [['#forge:stripped_logs', '#forge:stripped_wood'], '#forge:ingots/copper']);
    event.recipes.create.deploying('create:brass_casing', [['#forge:stripped_logs', '#forge:stripped_wood'], '#forge:ingots/brass']);
    event.recipes.create.deploying('create:railway_casing', ['create:brass_casing', '#forge:plates/obsidian']);
    // Cross compatibility recipes for all casings in the Mekanism Combiner
    [
      {
        block: Ingredient.of(['#forge:stripped_wood', '#forge:stripped_logs']),
        item: Ingredient.of('create:andesite_alloy'),
        result: Item.of('create:andesite_casing'),
      },
      {
        block: Ingredient.of(['#forge:stripped_wood', '#forge:stripped_logs']),
        item: Ingredient.of('minecraft:copper_ingot'),
        result: Item.of('create:copper_casing'),
      },
      {
        block: Ingredient.of(['#forge:stripped_wood', '#forge:stripped_logs']),
        item: Ingredient.of('#forge:ingots/brass'),
        result: Item.of('create:brass_casing'),
      },
      {
        block: Ingredient.of('create:brass_casing'),
        item: Ingredient.of('create:sturdy_sheet'),
        result: Item.of('create:railway_casing'),
      },
    ].forEach(recipe => {
      event.custom({
        type: 'mekanism:combining',
        mainInput: {amount: 1, ingredient: recipe.block.toJson()},
        extraInput: {ingredient: recipe.item.toJson()},
        output: recipe.result.toJson(),
      });
    });

    event.remove('create:crafting/materials/andesite_alloy');
    event.remove('create:crafting/materials/andesite_alloy_from_zinc');
    event.custom({
      type: 'embers:stamping',
      input: {item: 'minecraft:andesite'},
      stamp: {item: 'embers:ingot_stamp'},
      fluid: {amount: 90, tag: 'forge:molten_iron'},
      output: {item: 'create:andesite_alloy', count: 1},
    });

    // Make it easier to make Dawnstone once you get into Create :)
    event.recipes.create
      .mixing(Item.of('embers:dawnstone_ingot', 2), [Ingredient.of('#forge:ingots/copper'), Ingredient.of('#forge:ingots/gold')])
      .heated();

    // Use brass plates rather than gold for Steam Engines.
    event.replaceInput({output: 'create:steam_engine'}, '#forge:plates/gold', '#forge:plates/brass');
  };

  const dimStorage = () => {
    event.remove({mod: 'dimstorage'});

    event.shaped('dimstorage:dimensional_chest', ['SSS', 'HCH', 'SSS'], {
      S: '#forge:ingots/steel',
      H: 'mekanism:elite_control_circuit',
      C: 'minecraft:ender_chest',
    });

    event.shaped('dimstorage:dimensional_tank', ['SHS', 'STS', 'SHS'], {
      S: '#forge:ingots/steel',
      H: 'mekanism:elite_control_circuit',
      T: ['mekanism:basic_fluid_tank', 'create:fluid_tank'],
    });

    event.shaped('dimstorage:dimensional_tablet', ['SSS', 'HWH', 'SSS'], {
      S: '#forge:plates/steel',
      H: 'mekanism:elite_control_circuit',
      W: items.screen,
    });
  };

  const entangled = () => {
    event.remove({output: 'entangled:block'});
    event.shaped('entangled:block', [' O ', 'OSO', ' O '], {
      O: '#forge:obsidian',
      S: 'ae2:singularity',
    });
  };

  const immersiveEngineering = () => {
    const mod = id => `immersiveengineering:${id}`;

    const steel = () => {
      event.remove({output: mod('cokebrick')});
      event.remove({output: mod('blastbrick')});

      event.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: [
          {
            type: 'pneumaticcraft:stacked_item',
            item: 'minecraft:clay_ball',
            count: 4,
          },
          {
            type: 'pneumaticcraft:stacked_item',
            item: 'supplementaries:ash_brick',
            count: 4,
          },
          {item: mod('component_iron')},
        ],
        pressure: 3.5,
        results: [Item.of(mod('cokebrick'), 3).toJson()],
      });

      event.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: [
          {
            type: 'pneumaticcraft:stacked_item',
            item: 'minecraft:nether_brick',
            count: 4,
          },
          {
            type: 'pneumaticcraft:stacked_item',
            item: 'embers:ember_crystal',
            count: 4,
          },
          {item: mod('component_steel'), count: 1},
        ],
        pressure: 4.0,
        results: [Item.of(mod('blastbrick'), 3).toJson()],
      });

      event.custom({
        type: 'pneumaticcraft:thermo_plant',
        exothermic: true,
        fluid_input: {type: 'pneumaticcraft:fluid', amount: 10, tag: 'forge:molten_iron'},
        item_input: {tag: 'forge:dusts/ash'},
        item_output: {item: 'mekanism:nugget_steel'},
        temperature: {max_temp: 546},
      });
    };

    event.remove(mod('alloysmelter/brass'));
    event.remove(mod('alloysmelter/bronze'));
    event.remove(mod('crafting/redstone_acid'));
    event.replaceInput({output: mod('conveyor_basic')}, 'minecraft:redstone', 'create:belt_connector');
    event.replaceInput({output: mod('dynamo')}, 'minecraft:redstone', items.capacitor);
    event.replaceInput({output: mod('fluid_sorter')}, 'minecraft:redstone', 'pneumaticcraft:printed_circuit_board');
    event.replaceInput({output: mod('furnace_heater')}, 'minecraft:redstone', items.capacitor);
    event.replaceInput({output: mod('hammer')}, '#forge:ingots/iron', '#forge:ingots/steel');
    event.replaceInput({output: mod('sorter')}, 'minecraft:redstone', 'pneumaticcraft:printed_circuit_board');
    event.replaceInput({output: mod('wirecutter')}, '#forge:ingots/iron', '#forge:ingots/steel');
    event.remove({output: mod('component_iron')});
    event.remove({output: mod('component_steel')});
    event.remove({output: mod('circuit_board')});
    event.remove({output: mod('plate_duroplast')});
    event.replaceInput({}, mod('circuit_board'), 'pneumaticcraft:printed_circuit_board');
    event.replaceInput({}, mod('plate_duroplast'), '#pneumaticcraft:plastic_sheets');
    event.replaceInput({output: 'immersiveengineering:windmill'}, 'minecraft:iron_ingot', '#forge:ingots/steel');

    /* Wirecutters should only work for softer metals */
    event.remove({input: mod('wirecutter'), output: '#forge:wires'});
    event.shapeless(mod('wire_copper'), [mod('wirecutter'), '#forge:plates/copper']);
    event.shapeless(mod('wire_aluminum'), [mod('wirecutter'), '#forge:plates/aluminum']);

    event.remove(mod('blueprint/component_electronic_adv'));
    event
      .custom({
        type: 'immersiveengineering:blueprint',
        category: 'components',
        inputs: [
          {item: 'pneumaticcraft:unassembled_pcb'},
          {base_ingredient: {item: 'immersiveengineering:electron_tube'}, count: 2},
          {tag: 'forge:wires/aluminum'},
        ],
        result: {item: 'immersiveengineering:component_electronic_adv'},
      })
      .id(mod('blueprint/component_electronic_adv'));

    /* Iron Components */
    event.shaped(Item.of(mod('component_iron'), 2), ['MMM', 'NPN', 'MMM'], {
      M: '#forge:plates/iron',
      N: '#forge:nuggets/copper',
      P: 'pneumaticcraft:printed_circuit_board',
    });

    /* Steel Components */
    event.shaped(Item.of(mod('component_steel'), 2), ['MMM', 'NPN', 'MMM'], {
      M: '#forge:plates/steel',
      N: '#forge:nuggets/copper',
      P: 'pneumaticcraft:printed_circuit_board',
    });

    /* Easier recipe for later-game */
    /* Iron Components */
    event.custom({
      type: 'immersiveengineering:blueprint',
      category: 'components',
      inputs: [
        {base_ingredient: {tag: 'forge:plates/iron'}, count: 6},
        {base_ingredient: {item: 'immersiveengineering:wire_copper'}, count: 2},
        {base_ingredient: {item: 'pneumaticcraft:printed_circuit_board'}, count: 1},
      ],
      result: {item: mod('component_iron'), count: 3},
    });

    /* Steel Components */
    event.custom({
      type: 'immersiveengineering:blueprint',
      category: 'components',
      inputs: [
        {base_ingredient: {tag: 'forge:plates/steel'}, count: 6},
        {base_ingredient: {item: 'immersiveengineering:wire_copper'}, count: 2},
        {base_ingredient: {item: 'pneumaticcraft:printed_circuit_board'}, count: 1},
      ],
      result: {item: mod('component_steel'), count: 3},
    });

    event.custom({
      type: 'create:mixing',
      heatRequirement: 'heated',
      ingredients: [{amount: 20, fluidTag: 'minecraft:water'}, {item: 'minecraft:redstone'}],
      results: [{amount: 20, fluid: 'immersiveengineering:redstone_acid'}],
    });

    steel();
  };

  const mekanism = () => {
    /* Cardboard boxes are *still* broken a.f. */
    event.remove({output: 'mekanism:cardboard_box'});

    /* Remove the lazy infuse types */
    event.remove('mekanism:infusion_conversion/carbon/from_charcoal_block');
    event.remove('mekanism:infusion_conversion/carbon/from_charcoal');
    event.remove('mekanism:infusion_conversion/carbon/from_coal_block');
    event.remove('mekanism:infusion_conversion/carbon/from_coal');
    event.remove('mekanism:infusion_conversion/diamond/from_dust');
    event.remove('mekanism:infusion_conversion/gold/from_dust');
    event.remove('mekanism:infusion_conversion/redstone/from_block');
    event.remove('mekanism:infusion_conversion/redstone/from_dust');
    event.remove('mekanism:infusion_conversion/refined_obsidian/from_dust');
    event.remove('mekanism:infusion_conversion/tin/from_dust');

    /* HDPE Stick intercompat */
    event.custom({
      type: 'immersiveengineering:metal_press',
      energy: 2400,
      input: {item: 'mekanism:hdpe_sheet'},
      mold: 'immersiveengineering:mold_rod',
      result: {base_ingredient: {item: 'mekanism:hdpe_stick'}, count: 2},
    });

    event.remove({output: 'mekanism:steel_casing'});
    event.shaped('mekanism:steel_casing', [' S ', 'SCS', ' S '], {
      S: '#forge:ingots/steel',
      C: 'immersiveengineering:duroplast',
    });

    /* Easier recipe once you get into Mek some more :) */
    event.custom({
      type: 'mekanism:combining',
      mainInput: {amount: 1, ingredient: {item: 'immersiveengineering:duroplast'}},
      extraInput: {amount: 4, ingredient: {tag: 'forge:ingots/steel'}},
      output: {item: 'mekanism:steel_casing'},
    });

    event.custom({
      type: 'mekanism:combining',
      mainInput: {amount: 4, ingredient: {item: 'mekanism:hdpe_sheet'}},
      extraInput: {amount: 4, ingredient: {tag: 'forge:ingots/steel'}},
      output: {item: 'mekanism:steel_casing'},
    });

    event.remove('mekanism:metallurgic_infuser');
    event.shaped('mekanism:metallurgic_infuser', ['PKP', 'ICI', 'TKT'], {
      C: 'mekanism:steel_casing',
      I: '#forge:ingots/steel',
      K: 'immersiveengineering:alloybrick',
      T: items.transistor,
      P: items.capacitor,
    });

    event.remove('mekanism:radioactive_waste_barrel');
    event.shaped('mekanism:radioactive_waste_barrel', ['SLS', 'LBL', 'SLS'], {
      B: 'minecraft:barrel',
      L: '#forge:ingots/lead',
      S: '#forge:ingots/steel',
    });

    event.remove('mekanism:energy_tablet');
    event.shaped('mekanism:energy_tablet', ['PCP', 'ABA', 'PCP'], {
      A: 'mekanism:alloy_infused',
      B: 'pneumaticcraft:capacitor',
      C: '#forge:ingots/copper',
      P: items.plastic,
    });

    event.remove('mekanism:induction/casing');
    event.shaped('mekanism:induction_casing', ['PSP', 'SBS', 'PSP'], {
      P: 'mekanism:hdpe_sheet',
      S: '#forge:ingots/steel',
      B: '#forge:batteries',
    });

    event.remove('mekanismgenerators:turbine/casing');
    event.shaped('mekanismgenerators:turbine_casing', [' S ', 'SPS', ' S '], {
      S: '#forge:ingots/steel',
      P: 'mekanism:hdpe_sheet',
    });

    event.remove('mekanism:fluid_tank/basic');
    event.shaped('mekanism:basic_fluid_tank', ['PTP', 'T T', 'PTP'], {
      P: items.plastic,
      T: 'create:fluid_tank',
    });
    event.shaped('mekanism:basic_fluid_tank', [' P ', 'PTP', ' P '], {
      P: items.plastic,
      T: 'pneumaticcraft:small_tank',
    });

    event.remove('mekanism:chemical_tank/basic');
    event.shaped('mekanism:basic_chemical_tank', ['PSP', 'STS', 'PSP'], {
      P: items.plastic,
      S: '#forge:ingots/steel',
      T: 'mekanism:basic_fluid_tank',
    });

    /* Replace 'Redstone' with actual circuit-like things :) */
    event.replaceInput({output: 'mekanism:dosimeter'}, 'minecraft:redstone', 'pneumaticcraft:capacitor');
    event.replaceInput({output: 'mekanism:qio_redstone_adapter'}, 'minecraft:redstone', '#forge:circuits/basic');
    event.replaceInput({output: 'mekanism:superheating_element'}, 'minecraft:redstone', 'immersiveengineering:wirecoil_steel');
    event.replaceInput({output: 'mekanismgenerators:bio_generator'}, 'minecraft:iron_ingot', '#forge:ingots/steel');
    event.replaceInput({output: 'mekanismgenerators:bio_generator'}, 'minecraft:redstone', items.capacitor);
    event.replaceInput({output: 'mekanismgenerators:fission_reactor_logic_adapter'}, 'minecraft:redstone', '#forge:circuits/basic');
    event.replaceInput({output: 'mekanismgenerators:fusion_reactor_logic_adapter'}, 'minecraft:redstone', '#forge:circuits/basic');

    event.remove({output: 'mekanism:resistive_heater'});
    event.shaped('mekanism:resistive_heater', ['IPI', 'TST', 'ZBZ'], {
      B: '#forge:batteries',
      I: '#forge:ingots/tin',
      P: items.capacitor,
      S: 'mekanism:steel_casing',
      T: items.transistor,
      Z: '#forge:ingots/steel',
    });

    event.remove({output: 'mekanism:basic_energy_cube'});
    event.shaped('mekanism:basic_energy_cube', ['PEP', 'ISI', 'TET'], {
      E: '#forge:batteries',
      I: '#forge:ingots/steel',
      P: items.capacitor,
      S: 'mekanism:steel_casing',
      T: items.transistor,
    });

    event.remove({output: 'mekanism:pigment_extractor'});
    event.shaped('mekanism:pigment_extractor', ['PCP', 'FSF', 'TCT'], {
      C: '#forge:circuits/basic',
      F: 'minecraft:glass_bottle',
      P: items.capacitor,
      S: 'mekanism:steel_casing',
      T: items.transistor,
    });

    event.remove({output: 'mekanism:electrolytic_separator'});
    event.shaped('mekanism:electrolytic_separator', ['SPS', 'AEA', 'STS'], {
      A: '#forge:alloys/advanced',
      E: 'mekanism:electrolytic_core',
      P: items.capacitor,
      S: '#forge:ingots/steel',
      T: items.transistor,
    });

    event.remove({output: 'mekanism:nutritional_liquifier'});
    event.shaped('mekanism:nutritional_liquifier', ['PCP', 'BSB', 'TCT'], {
      B: 'minecraft:bowl',
      C: '#forge:circuits/basic',
      P: items.capacitor,
      S: 'mekanism:steel_casing',
      T: items.transistor,
    });

    event.remove({output: 'mekanism:crusher'});
    event.shaped('mekanism:crusher', ['PCP', 'LSL', 'TCT'], {
      C: '#forge:circuits/basic',
      L: 'immersiveengineering:rockcutter',
      P: items.capacitor,
      S: 'mekanism:steel_casing',
      T: items.transistor,
    });

    event.remove({output: 'mekanism:energized_smelter'});
    event.shaped('mekanism:energized_smelter', ['PCP', 'LSL', 'TCT'], {
      C: '#forge:circuits/basic',
      L: 'immersiveengineering:furnace_heater',
      P: items.capacitor,
      S: 'mekanism:steel_casing',
      T: items.transistor,
    });

    event.remove({output: 'mekanism:enrichment_chamber'});
    event.shaped('mekanism:enrichment_chamber', ['PCP', 'LSL', 'TCT'], {
      C: '#forge:circuits/basic',
      L: 'create:crushing_wheel',
      P: items.capacitor,
      S: 'mekanism:steel_casing',
      T: items.transistor,
    });

    event.remove({output: 'mekanismgenerators:solar_panel'});
    event.shaped('mekanismgenerators:solar_panel', ['PPP', 'TAT', 'SSS'], {
      A: '#forge:alloys/advanced',
      P: '#forge:glass_panes',
      S: '#forge:ingots/steel',
      T: items.transistor,
    });

    /* Redo all Basic Factory recipes */
    event.remove({output: 'mekanism:basic_tier_installer'});
    event.shaped('mekanism:basic_tier_installer', ['PCP', 'IBI', 'TCT'], {
      B: '#minecraft:planks',
      C: '#forge:circuits/basic',
      I: '#forge:ingots/steel',
      P: items.capacitor,
      T: items.transistor,
    });

    [
      {factory: 'mekanism:basic_combining_factory', base: 'mekanism:combiner'},
      {factory: 'mekanism:basic_compressing_factory', base: 'mekanism:osmium_compressor'},
      {factory: 'mekanism:basic_crushing_factory', base: 'mekanism:crusher'},
      {factory: 'mekanism:basic_enriching_factory', base: 'mekanism:enrichment_chamber'},
      {factory: 'mekanism:basic_infusing_factory', base: 'mekanism:metallurgic_infuser'},
      {factory: 'mekanism:basic_injecting_factory', base: 'mekanism:chemical_injection_chamber'},
      {factory: 'mekanism:basic_purifying_factory', base: 'mekanism:purification_chamber'},
      {factory: 'mekanism:basic_sawing_factory', base: 'mekanism:precision_sawmill'},
      {factory: 'mekanism:basic_smelting_factory', base: 'mekanism:energized_smelter'},
    ].forEach(pair => {
      event.remove({output: pair.factory});
      event.shaped(pair.factory, ['PCP', 'IBI', 'TCT'], {
        B: pair.base,
        C: '#forge:circuits/basic',
        I: '#forge:ingots/steel',
        P: items.capacitor,
        T: items.transistor,
      });
    });
  };

  const modularRouters = () => {
    event.replaceInput({output: 'modularrouters:blank_module'}, 'minecraft:paper', items.plastic);
    event.replaceInput({output: 'modularrouters:blank_upgrade'}, 'minecraft:paper', items.plastic);
    event.shaped('modularrouters:modular_router', ['EPE', 'PCP', 'EPE'], {
      P: items.plastic,
      E: '#forge:ender_pearls',
      C: 'pneumaticcraft:compressed_iron_block',
    });

    event.remove({output: '/modularrouters:extruder_module_2/'});
    event.remove({output: '/modularrouters:extruder_module_1/'});
    event.remove({output: '/modularrouters:breaker_module/'});
  };

  const pnc = () => {
    event.remove({type: 'pneumaticcraft:pressure_chamber_disenchanting'});
    event.remove({type: 'pneumaticcraft:pressure_chamber_enchanting'});
    event.remove({id: 'pneumaticcraft:pressure_chamber/pressure_chamber_disenchanting'});
    event.remove({id: 'pneumaticcraft:pressure_chamber/pressure_chamber_enchanting'});

    event.remove({type: 'pneumaticcraft:explosion_crafting'});
    event.recipes.create.compacting('pneumaticcraft:ingot_iron_compressed', ['#forge:ingots/iron', 'ae2:tiny_tnt']).superheated();
    event.recipes.create.compacting('pneumaticcraft:compressed_iron_block', ['#forge:storage_blocks/iron', 'minecraft:tnt']).superheated();

    event.replaceInput({output: 'pneumaticcraft:assembly_laser'}, 'minecraft:red_stained_glass', 'regions_unexplored:redstone_bulb');

    event.remove({id: 'pneumaticcraft:pressure_chamber/etching_acid'});
    event.custom({
      type: 'create:mixing',
      heatRequirement: 'superheated',
      ingredients: [
        {amount: 500, fluidTag: 'forge:redstone_acid'},
        {amount: 500, fluidTag: 'pneumaticcraft:plastic'},
      ],
      results: [{amount: 1000, fluid: 'pneumaticcraft:etching_acid'}],
    });

    /* Capacitor */
    event.remove('pneumaticcraft:pressure_chamber/capacitor');
    event
      .custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: [
          {type: 'pneumaticcraft:stacked_item', count: 2, tag: 'forge:nuggets/copper'},
          {type: 'pneumaticcraft:stacked_item', count: 6, tag: 'forge:dusts/redstone'},
          {tag: 'pneumaticcraft:plastic_sheets'},
        ],
        pressure: 1.0,
        results: [{item: 'pneumaticcraft:capacitor'}],
      })
      .id('pneumaticcraft:pressure_chamber/capacitor');

    /* Transistor */
    event.remove('pneumaticcraft:pressure_chamber/transistor');
    event
      .custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: [
          {type: 'pneumaticcraft:stacked_item', count: 3, tag: 'forge:nuggets/copper'},
          {type: 'pneumaticcraft:stacked_item', count: 2, tag: 'forge:silicon'},
          {tag: 'pneumaticcraft:plastic_sheets'},
        ],
        pressure: 1.0,
        results: [{item: 'pneumaticcraft:transistor'}],
      })
      .id('pneumaticcraft:pressure_chamber/transistor');

    // Easier recipes for later
    /* Capacitor */
    event.custom({
      type: 'mekanism:combining',
      mainInput: {amount: 3, ingredient: {item: 'immersiveengineering:wirecoil_copper'}},
      extraInput: {ingredient: {tag: 'pneumaticcraft:plastic_sheets'}},
      output: {item: 'pneumaticcraft:capacitor'},
    });

    event.custom({
      type: 'immersiveengineering:blueprint',
      category: 'components',
      inputs: [
        {base_ingredient: {item: 'immersiveengineering:wirecoil_copper'}, count: 3},
        {base_ingredient: {tag: 'pneumaticcraft:plastic_sheets'}, count: 1},
      ],
      result: {item: 'pneumaticcraft:capacitor'},
    });

    /* Transistor */
    event.custom({
      type: 'mekanism:combining',
      mainInput: {amount: 2, ingredient: {tag: 'forge:silicon'}},
      extraInput: {ingredient: {tag: 'pneumaticcraft:plastic_sheets'}},
      output: {item: 'pneumaticcraft:transistor'},
    });

    event.custom({
      type: 'immersiveengineering:blueprint',
      category: 'components',
      inputs: [
        {base_ingredient: {tag: 'forge:silicon'}, count: 2},
        {base_ingredient: {tag: 'pneumaticcraft:plastic_sheets'}, count: 1},
      ],
      result: {item: 'pneumaticcraft:transistor'},
    });

    /* Empty PCB */
    event.custom({
      type: 'immersiveengineering:blueprint',
      category: 'components',
      inputs: [
        {base_ingredient: {item: 'minecraft:redstone_torch'}, count: 2},
        {base_ingredient: {item: 'immersiveengineering:wire_copper'}, count: 3},
        {base_ingredient: {tag: 'pneumaticcraft:plastic_sheets'}, count: 1},
      ],
      result: {item: 'pneumaticcraft:empty_pcb', count: 3},
    });
  };

  const prettyPipes = () => {
    const blank = 'prettypipes:blank_module';

    event.remove({mod: 'prettypipes'});

    /* New pipe wrench recipe */
    event.shaped('prettypipes:wrench', [' A ', 'RRA', ' R '], {A: 'create:andesite_alloy', R: '#forge:dyes/red'});
    /* New pipe recipe */
    event.shaped(Item.of('prettypipes:pipe', 16), ['IGI'], {I: 'create:andesite_alloy', G: '#forge:glass/colorless'});
    /* New blank module recipe */
    event.recipes.create.pressing('prettypipes:blank_module', ['create:andesite_alloy']);
    /* New pipe pressurizer recipe */
    event.smithing('prettypipes:pressurizer', 'pneumaticcraft:pressure_gauge', 'pneumaticcraft:pressure_chamber_valve', 'prettypipes:pipe');
    /* New item terminal recipe */
    event.shaped('prettypipes:item_terminal', ['DSC', 'EHR', 'CSD'], {
      C: 'create:brass_casing',
      D: 'minecraft:diamond',
      E: 'prettypipes:high_extraction_module',
      H: '#forge:chests/wooden',
      R: 'prettypipes:high_retrieval_module',
      S: items.screen,
    });
    /* New crafting terminal recipe */
    event.smithing('prettypipes:crafting_terminal', 'minecraft:crafting_table', 'prettypipes:item_terminal', 'minecraft:crafting_table');
    /* New pipe frame recipe */
    event.shaped('prettypipes:pipe_frame', ['SLS', 'LPL', 'SLS'], {S: '#forge:rods/wooden', L: '#forge:leather', P: 'prettypipes:pipe'});

    event.shaped('prettypipes:round_robin_sorting_modifier', ['LL ', 'LBL', ' LL'], {L: '#forge:gems/lapis', B: blank});
    event.shaped('prettypipes:stack_size_module', [' L ', 'LBL', ' L '], {L: '#forge:leather', B: blank});
    event.shaped('prettypipes:redstone_module', [' C ', 'RBR', ' R '], {C: 'minecraft:comparator', R: '#forge:dusts/redstone', B: blank});
    event.shaped('prettypipes:random_sorting_modifier', [' C ', 'RBR', ' R '], {C: 'minecraft:dispenser', R: '#forge:dusts/redstone', B: blank});
    event.shaped('prettypipes:damage_filter_modifier', [' T ', 'GBG', ' G '], {T: 'ae2:tiny_tnt', G: 'minecraft:gunpowder', B: blank});
    event.shaped('prettypipes:mod_filter_modifier', [' S ', 'NBN', ' S '], {S: '#forge:plates/obsidian', N: '#forge:nuggets/brass', B: blank});
    event.shaped('prettypipes:nbt_filter_modifier', [' Q ', 'QBQ', ' Q '], {Q: 'minecraft:quartz', B: blank});
    event.shaped('prettypipes:tag_filter_modifier', [' N ', 'SBS', ' S '], {N: 'minecraft:name_tag', S: 'minecraft:string', B: blank});
    event.shaped('prettypipes:filter_increase_modifier', [' C ', 'PBP', ' P '], {
      C: ['expandedstorage:vanilla_wood_mini_chest', 'expandedstorage:wood_mini_chest'],
      P: 'minecraft:paper',
      B: blank,
    });

    // Upgradable Modules
    event.shaped('prettypipes:low_crafting_module', [' P ', 'PBP', ' P '], {P: '#minecraft:planks', B: blank});
    event.shaped('prettypipes:low_filter_module', [' W ', 'NBN', ' W '], {W: '#minecraft:wool', N: '#forge:nuggets/iron', B: blank});
    event.shaped('prettypipes:low_low_priority_module', [' S ', 'SBS', ' S '], {S: '#forge:rods/wooden', B: blank});
    event.shaped('prettypipes:low_high_priority_module', ['S S', ' B ', 'S S'], {S: '#forge:rods/wooden', B: blank});
    event.shaped('prettypipes:low_extraction_module', ['I I', 'IBI', ' I '], {I: '#forge:ingots/iron', B: blank});
    event.shaped('prettypipes:low_retrieval_module', ['ISI', 'IBI', ' I '], {I: '#forge:ingots/iron', S: 'minecraft:sticky_piston', B: blank});
    event.shaped('prettypipes:low_speed_module', [' S ', 'SBS', ' S '], {
      S: ['minecraft:sugar', 'minecraft:honey_bottle', 'delightful:matcha'],
      B: blank,
    });

    const upgradableModules = [
      'retrieval_module',
      'high_priority_module',
      'low_priority_module',
      'speed_module',
      'filter_module',
      'extraction_module',
      'crafting_module',
    ];

    upgradableModules.forEach(module => {
      event.shaped(`prettypipes:medium_${module}`, ['BRB', 'BLB', 'BBB'], {
        L: `prettypipes:low_${module}`,
        B: '#forge:nuggets/brass',
        R: 'create:polished_rose_quartz',
      });

      event.shaped(`prettypipes:high_${module}`, ['NPN', 'BMB', 'NBN'], {
        M: `prettypipes:medium_${module}`,
        B: '#forge:plates/brass',
        N: '#forge:nuggets/brass',
        P: 'create:precision_mechanism',
      });
    });

    // Ability to reset each module
    [
      'prettypipes:filter_increase_modifier',
      'prettypipes:high_crafting_module',
      'prettypipes:high_extraction_module',
      'prettypipes:high_filter_module',
      'prettypipes:high_retrieval_module',
      'prettypipes:low_crafting_module',
      'prettypipes:low_extraction_module',
      'prettypipes:low_filter_module',
      'prettypipes:low_retrieval_module',
      'prettypipes:medium_crafting_module',
      'prettypipes:medium_extraction_module',
      'prettypipes:medium_filter_module',
      'prettypipes:medium_retrieval_module',
      'prettypipes:redstone_module',
      'prettypipes:stack_size_module',
      'prettypipes:tag_filter_modifier',
    ].forEach(resettable => {
      event.shapeless(resettable, [resettable]).id(`kubejs:resetting_${resettable.slice(resettable.indexOf(':') + 1)}`);
    });
  };

  const rfTools = () => {
    event.remove({mod: 'rftoolsbase'});
    event.remove({mod: 'xnet'});

    event.shaped(Item.of('xnet:netcable_routing', 16), ['CCC', 'CSC', 'CCC'], {
      C: 'mekanism:basic_logistical_transporter',
      S: 'mekanism:logistical_sorter',
    });

    event.custom({
      type: 'vtweaks:fluid_conversion',
      input: Ingredient.of(['xnet:netcable_red', 'xnet:netcable_green', 'xnet:netcable_blue', 'xnet:netcable_yellow']).toJson(),
      output: Item.of('xnet:netcable_routing').toJson(),
      fluid: 'minecraft:water',
    });

    event.shapeless('xnet:connector_routing', ['xnet:netcable_routing', 'mekanism:basic_control_circuit']);
    event.shapeless('xnet:advanced_connector_routing', ['xnet:netcable_routing', 'mekanism:elite_control_circuit']);

    ['red', 'green', 'blue', 'yellow'].forEach(color => {
      // Base Cable
      event.shaped(Item.of(`xnet:netcable_${color}`, 8), ['CCC', 'CDC', 'CCC'], {
        C: '#xnet:cables',
        D: `#forge:dyes/${color}`,
      });
      event.shapeless(`xnet:netcable_${color}`, ['#xnet:cables', `#forge:dyes/${color}`]);

      // Connectors
      event.shapeless(`xnet:connector_${color}`, [`xnet:netcable_${color}`, 'mekanism:basic_control_circuit']);
      event.shapeless(`xnet:advanced_connector_${color}`, [`xnet:netcable_${color}`, 'mekanism:elite_control_circuit']);
    });

    event.shapeless('xnet:redstone_proxy', ['entangled:block', 'minecraft:redstone_torch']);
    event.shapeless('xnet:redstone_proxy_upd', ['entangled:block', 'minecraft:redstone_torch', 'minecraft:observer']);

    event.shaped(Item.of('xnet:facade', 16), ['PPP', 'PCP', 'PPP'], {
      P: 'minecraft:paper',
      C: '#xnet:cables',
    });

    event.shaped('xnet:controller', ['SSS', 'HPH', 'SSS'], {
      H: 'mekanism:hdpe_sheet',
      P: 'mekanism:ultimate_control_circuit',
      S: '#forge:ingots/steel',
    });

    event.shaped('xnet:router', ['SSS', 'RPR', 'SSS'], {
      R: 'xnet:netcable_routing',
      P: 'mekanism:basic_control_circuit',
      S: '#forge:ingots/steel',
    });

    event.smithing('xnet:wireless_router', 'mekanism:ultimate_control_circuit', 'xnet:router', 'mekanism:ultimate_control_circuit');
    event.shaped('xnet:antenna', ['RIR', 'RIR', ' I '], {R: '#forge:rods/steel', I: '#forge:ingots/steel'});
    event.shaped('xnet:antenna_base', [' R ', ' R ', 'IBI'], {R: '#forge:rods/steel', B: '#forge:storage_blocks/steel', I: '#forge:ingots/steel'});
    event.shaped('xnet:antenna_dish', ['PPP', 'PPP', ' R '], {R: '#forge:rods/steel', P: '#forge:plates/steel'});
  };

  [
    ae2,
    buildingGadgets,
    chunkloaders,
    create,
    dimStorage,
    entangled,
    immersiveEngineering,
    mekanism,
    modularRouters,
    pnc,
    prettyPipes,
    rfTools,
  ].forEach(module => module());
});
