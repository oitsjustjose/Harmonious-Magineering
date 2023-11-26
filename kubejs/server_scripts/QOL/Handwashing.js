ServerEvents.recipes(event => {
  /**
   * @param {Internal.Ingredient} input
   * @param {Internal.Ingredient} output
   */
  const Wash = (input, output) => {
    event.custom({
      type: 'vtweaks:fluid_conversion',
      input: input.toJson(),
      output: output.toJson(),
      fluid: 'minecraft:water',
    });
  };

  const AllButWhite = (modid, postfix, prefix) => {
    return [
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
    ].map(color => `${modid}:${prefix || ''}${prefix ? '_' : ''}${color}${postfix ? '_' : ''}${postfix || ''}`);
  };

  const AllColorsOf = (modid, postfix, prefix) => {
    return [
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
    ].map(color => `${modid}:${prefix || ''}${prefix ? '_' : ''}${color}${postfix ? '_' : ''}${postfix || ''}`);
  };

  // Vanilla
  Wash(Ingredient.of(AllButWhite('minecraft', 'wool')), Ingredient.of('minecraft:white_wool'));
  Wash(Ingredient.of(AllButWhite('minecraft', 'carpet')), Ingredient.of('minecraft:white_carpet'));
  Wash(Ingredient.of(AllButWhite('minecraft', 'banner')), Ingredient.of('minecraft:white_banner'));
  Wash(Ingredient.of(AllButWhite('minecraft', 'bed')), Ingredient.of('minecraft:white_bed'));

  Wash(Ingredient.of(AllColorsOf('minecraft', 'stained_glass')), Ingredient.of('minecraft:glass'));
  Wash(Ingredient.of(AllColorsOf('minecraft', 'candle')), Ingredient.of('minecraft:candle'));
  Wash(Ingredient.of(AllColorsOf('minecraft', 'shulker_box')), Ingredient.of('minecraft:shulker_box'));

  // AE2
  Wash(Ingredient.of(AllColorsOf('ae2', 'covered_cable')), Ingredient.of('ae2:fluix_covered_cable'));
  Wash(Ingredient.of(AllColorsOf('ae2', 'covered_dense_cable')), Ingredient.of('ae2:fluix_covered_dense_cable'));
  Wash(Ingredient.of(AllColorsOf('ae2', 'glass_cable')), Ingredient.of('ae2:fluix_glass_cable'));
  Wash(Ingredient.of(AllColorsOf('ae2', 'smart_cable')), Ingredient.of('ae2:fluix_smart_cable'));
  Wash(Ingredient.of(AllColorsOf('ae2', 'smart_dense_cable')), Ingredient.of('ae2:fluix_smart_dense_cable'));

  // Comforts
  Wash(Ingredient.of(AllButWhite('comforts', null, 'hammock')), Ingredient.of('comforts:hammock_white'));
  Wash(Ingredient.of(AllButWhite('comforts', null, 'sleeping_bag')), Ingredient.of('comforts:sleeping_bag_white'));

  // Connected Glass
  Wash(Ingredient.of(AllColorsOf('connectedglass', 'pane', 'borderless_glass')), Ingredient.of('connectedglass:borderless_glass_pane'));
  Wash(Ingredient.of(AllColorsOf('connectedglass', null, 'borderless_glass')), Ingredient.of('connectedglass:borderless_glass'));
  Wash(Ingredient.of(AllColorsOf('connectedglass', 'pane', 'clear_glass')), Ingredient.of('connectedglass:clear_glass_pane'));
  Wash(Ingredient.of(AllColorsOf('connectedglass', null, 'clear_glass')), Ingredient.of('connectedglass:clear_glass'));
  Wash(Ingredient.of(AllColorsOf('connectedglass', 'pane', 'scratched_glass')), Ingredient.of('connectedglass:scratched_glass_pane'));
  Wash(Ingredient.of(AllColorsOf('connectedglass', null, 'scratched_glass')), Ingredient.of('connectedglass:scratched_glass'));
  Wash(Ingredient.of(AllColorsOf('connectedglass', null, 'tinted_borderless_glass')), Ingredient.of('connectedglass:tinted_borderless_glass'));

  // EnderIO
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'clear_glass_a')), Ingredient.of('enderio:clear_glass_a'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'clear_glass_d')), Ingredient.of('enderio:clear_glass_d'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'clear_glass_da')), Ingredient.of('enderio:clear_glass_da'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'clear_glass_dm')), Ingredient.of('enderio:clear_glass_dm'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'clear_glass_dna')), Ingredient.of('enderio:clear_glass_dna'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'clear_glass_dnm')), Ingredient.of('enderio:clear_glass_dnm'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'clear_glass_dnp')), Ingredient.of('enderio:clear_glass_dnp'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'clear_glass_dp')), Ingredient.of('enderio:clear_glass_dp'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'clear_glass_e')), Ingredient.of('enderio:clear_glass_e'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'clear_glass_ea')), Ingredient.of('enderio:clear_glass_ea'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'clear_glass_em')), Ingredient.of('enderio:clear_glass_em'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'clear_glass_ena')), Ingredient.of('enderio:clear_glass_ena'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'clear_glass_enm')), Ingredient.of('enderio:clear_glass_enm'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'clear_glass_enp')), Ingredient.of('enderio:clear_glass_enp'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'clear_glass_ep')), Ingredient.of('enderio:clear_glass_ep'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'clear_glass_m')), Ingredient.of('enderio:clear_glass_m'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'clear_glass')), Ingredient.of('enderio:clear_glass'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'clear_glass_na')), Ingredient.of('enderio:clear_glass_na'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'clear_glass_nm')), Ingredient.of('enderio:clear_glass_nm'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'clear_glass_np')), Ingredient.of('enderio:clear_glass_np'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'clear_glass_p')), Ingredient.of('enderio:clear_glass_p'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'fused_quartz_a')), Ingredient.of('enderio:fused_quartz_a'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'fused_quartz_d')), Ingredient.of('enderio:fused_quartz_d'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'fused_quartz_da')), Ingredient.of('enderio:fused_quartz_da'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'fused_quartz_dm')), Ingredient.of('enderio:fused_quartz_dm'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'fused_quartz_dna')), Ingredient.of('enderio:fused_quartz_dna'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'fused_quartz_dnm')), Ingredient.of('enderio:fused_quartz_dnm'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'fused_quartz_dnp')), Ingredient.of('enderio:fused_quartz_dnp'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'fused_quartz_dp')), Ingredient.of('enderio:fused_quartz_dp'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'fused_quartz_e')), Ingredient.of('enderio:fused_quartz_e'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'fused_quartz_ea')), Ingredient.of('enderio:fused_quartz_ea'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'fused_quartz_em')), Ingredient.of('enderio:fused_quartz_em'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'fused_quartz_ena')), Ingredient.of('enderio:fused_quartz_ena'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'fused_quartz_enm')), Ingredient.of('enderio:fused_quartz_enm'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'fused_quartz_enp')), Ingredient.of('enderio:fused_quartz_enp'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'fused_quartz_ep')), Ingredient.of('enderio:fused_quartz_ep'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'fused_quartz_m')), Ingredient.of('enderio:fused_quartz_m'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'fused_quartz')), Ingredient.of('enderio:fused_quartz'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'fused_quartz_na')), Ingredient.of('enderio:fused_quartz_na'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'fused_quartz_nm')), Ingredient.of('enderio:fused_quartz_nm'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'fused_quartz_np')), Ingredient.of('enderio:fused_quartz_np'));
  Wash(Ingredient.of(AllColorsOf('enderio', null, 'fused_quartz_p')), Ingredient.of('enderio:fused_quartz_p'));

  // Farmer's Delight
  Wash(Ingredient.of(AllColorsOf('farmersdelight', 'canvas_sign')), Ingredient.of('farmersdelight:canvas_sign'));
  Wash(Ingredient.of(AllColorsOf('farmersdelight', 'hanging_canvas_sign')), Ingredient.of('farmersdelight:hanging_canvas_sign'));

  // Handcrafted
  Wash(Ingredient.of(AllButWhite('handcrafted', 'cushion')), Ingredient.of('handcrafted:white_cushion'));
  Wash(Ingredient.of(AllButWhite('handcrafted', 'sheet')), Ingredient.of('handcrafted:white_sheet'));

  // IE
  Wash(
    Ingredient.of(AllButWhite('immersiveengineering', null, 'sheetmetal_colored')),
    Ingredient.of('immersiveengineering:sheetmetal_colored_white')
  );
  Wash(
    Ingredient.of(AllButWhite('immersiveengineering', null, 'slab_sheetmetal_colored')),
    Ingredient.of('immersiveengineering:slab_sheetmetal_colored_white')
  );

  // Interiors
  Wash(Ingredient.of(AllButWhite('interiors', 'chair')), Ingredient.of('interiors:white_chair'));
  Wash(Ingredient.of(AllButWhite('interiors', 'floor_chair')), Ingredient.of('interiors:white_floor_chair'));

  // Supplementaries
  Wash(Ingredient.of(AllColorsOf('supplementaries', null, 'candle_holder')), Ingredient.of('supplementaries:candle_holder'));
  Wash(Ingredient.of(AllButWhite('supplementaries', null, 'flag')), Ingredient.of('supplementaries:flag_white'));
});
