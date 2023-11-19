const Removals = [
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
];

ServerEvents.recipes(event => {
  Removals.forEach(x => event.remove({output: x}));

  event.remove({input: 'immersiveengineering:hammer', output: '#forge:dusts'});
  event.remove({input: 'immersiveengineering:hammer', output: '#forge:plates'});
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
