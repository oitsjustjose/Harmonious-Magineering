/**
 * @param {Internal.RecipesEventJS} event
 */
const Deduplicate = event => {
  [
    Item.of('mekanism:cardboard_box'),
    Item.of('powah:blank_card'),
    Item.of('powah:cable_basic_2'),
    Item.of('powah:cable_basic'),
    Item.of('powah:cable_blazing_2'),
    Item.of('powah:cable_blazing'),
    Item.of('powah:cable_hardened_2'),
    Item.of('powah:cable_hardened'),
    Item.of('powah:cable_niotic_2'),
    Item.of('powah:cable_niotic'),
    Item.of('powah:cable_nitro_2'),
    Item.of('powah:cable_nitro'),
    Item.of('powah:cable_spirited_2'),
    Item.of('powah:cable_spirited'),
    Item.of('powah:cable_starter'),
    Item.of('powah:dielectric_casing'),
    Item.of('powah:dielectric_paste_2'),
    Item.of('powah:dielectric_paste'),
    Item.of('powah:dielectric_rod_2'),
    Item.of('powah:dielectric_rod_h_2'),
    Item.of('powah:dielectric_rod_h'),
    Item.of('powah:dielectric_rod'),
    Item.of('powah:ender_cell_basic_2'),
    Item.of('powah:ender_cell_basic'),
    Item.of('powah:ender_cell_blazing_2'),
    Item.of('powah:ender_cell_blazing'),
    Item.of('powah:ender_cell_hardened_2'),
    Item.of('powah:ender_cell_hardened'),
    Item.of('powah:ender_cell_niotic_2'),
    Item.of('powah:ender_cell_niotic'),
    Item.of('powah:ender_cell_nitro_2'),
    Item.of('powah:ender_cell_nitro'),
    Item.of('powah:ender_cell_spirited_2'),
    Item.of('powah:ender_cell_spirited'),
    Item.of('powah:ender_cell_starter_2'),
    Item.of('powah:ender_cell_starter'),
    Item.of('powah:ender_gate_basic_2'),
    Item.of('powah:ender_gate_basic'),
    Item.of('powah:ender_gate_blazing_2'),
    Item.of('powah:ender_gate_blazing'),
    Item.of('powah:ender_gate_hardened_2'),
    Item.of('powah:ender_gate_hardened'),
    Item.of('powah:ender_gate_niotic_2'),
    Item.of('powah:ender_gate_niotic'),
    Item.of('powah:ender_gate_nitro_2'),
    Item.of('powah:ender_gate_nitro'),
    Item.of('powah:ender_gate_spirited_2'),
    Item.of('powah:ender_gate_spirited'),
    Item.of('powah:ender_gate_starter_2'),
    Item.of('powah:ender_gate_starter'),
    Item.of('powah:energizing_orb'),
    Item.of('powah:energy_cell_basic_2'),
    Item.of('powah:energy_cell_basic'),
    Item.of('powah:energy_cell_blazing'),
    Item.of('powah:energy_cell_hardened'),
    Item.of('powah:energy_cell_niotic'),
    Item.of('powah:energy_cell_nitro'),
    Item.of('powah:energy_cell_spirited'),
    Item.of('powah:energy_cell_starter'),
    Item.of('powah:solar_panel_basic'),
    Item.of('powah:solar_panel_blazing'),
    Item.of('powah:solar_panel_hardened'),
    Item.of('powah:solar_panel_niotic'),
    Item.of('powah:solar_panel_nitro'),
    Item.of('powah:solar_panel_spirited'),
    Item.of('powah:solar_panel_starter'),
  ].forEach(x => event.remove({output: x}));
};

/**
 * @param {Internal.RecipesEventJS} event
 */
const Rope = event => {
  event.replaceInput({}, 'farmersdelight:rope', 'supplementaries:rope');
  event.replaceOutput({}, 'farmersdelight:rope', 'supplementaries:rope');
};

/**
 * @param {Internal.RecipesEventJS} event
 */
const Snails = event => {
  event.replaceInput({}, 'spawn:snail_shell', 'naturalist:snail_shell');
  event.replaceOutput({}, 'spawn:snail_shell', 'naturalist:snail_shell');
};

/**
 * @param {Internal.RecipesEventJS} event
 */
const SilverAndLead = event => {
  // Lead -> Embers Lead
  ['immersiveengineering:ore_lead', 'mekanism:lead_ore', 'eidolon:lead_ore'].forEach(ore => {
    event.replaceInput({}, ore, 'embers:lead_ore');
    event.replaceOutput({}, ore, 'embers:lead_ore');
  });
  // Deepslate Lead -> Embers Deepslate Lead
  [
    'immersiveengineering:deepslate_ore_lead',
    'mekanism:deepslate_lead_ore',
    'eidolon:deep_lead_ore',
  ].forEach(ore => {
    event.replaceInput({}, ore, 'embers:deepslate_lead_ore');
    event.replaceOutput({}, ore, 'embers:deepslate_lead_ore');
  });
  // Silver -> Embers Silver
  ['immersiveengineering:ore_silver', 'eidolon:silver_ore'].forEach(ore => {
    event.replaceInput({}, ore, 'embers:silver_ore');
    event.replaceOutput({}, ore, 'embers:silver_ore');
  });
  // Deepslate Silver -> Embers Deepslate Silver
  ['immersiveengineering:deepslate_ore_silver', 'eidolon:deep_silver_ore'].forEach(ore => {
    event.replaceInput({}, ore, 'embers:deepslate_silver_ore');
    event.replaceOutput({}, ore, 'embers:deepslate_silver_ore');
  });
};

ServerEvents.recipes(event => {
  [Deduplicate, Rope, Snails, SilverAndLead].forEach(Module => Module(event));
});

ServerEvents.tags('fluid', event => {
  event.removeAll('minecraft:water');
  event.add('minecraft:water', 'minecraft:water');

  event.remove('forge:honey', 'productivebees:honey');
});

ServerEvents.tags('item', event => {
  event.remove('forge:buckets/honey', 'productivebees:honey_bucket');
  event.remove('forge:rope', 'farmersdelight:rope');
  event.remove('supplementaries:ropes', 'farmersdelight:rope');
});
