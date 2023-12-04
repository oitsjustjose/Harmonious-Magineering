ServerEvents.recipes(event => {
  /**
   * @param {String} input
   * @param {String} output
   */
  const Wash = (input, output) => {
    const id = `vtweaks:${new ResourceLocation(input.substring(1)).getPath()}_to_${new ResourceLocation(output).getPath()}`;
    event
      .custom({
        type: 'vtweaks:fluid_conversion',
        input: Ingredient.of(input).toJson(),
        output: Item.of(output).toJson(),
        fluid: 'minecraft:water',
      })
      .id(id);
  };

  // Vanilla
  Wash('#vtweaks:colored_wool', 'minecraft:white_wool');
  Wash('#vtweaks:colored_carpet', 'minecraft:white_carpet');
  Wash('#vtweaks:colored_banner', 'minecraft:white_banner');
  Wash('#vtweaks:colored_bed', 'minecraft:white_bed');

  Wash('#vtweaks:colored_stained_glass', 'minecraft:glass');
  Wash('#vtweaks:colored_candle', 'minecraft:candle');

  // AE2
  Wash('#vtweaks:colored_covered_cable', 'ae2:fluix_covered_cable');
  Wash('#vtweaks:colored_covered_dense_cable', 'ae2:fluix_covered_dense_cable');
  Wash('#vtweaks:colored_glass_cable', 'ae2:fluix_glass_cable');
  Wash('#vtweaks:colored_smart_cable', 'ae2:fluix_smart_cable');
  Wash('#vtweaks:colored_smart_dense_cable', 'ae2:fluix_smart_dense_cable');

  // Comforts
  Wash('#vtweaks:colored_hammock', 'comforts:hammock_white');
  Wash('#vtweaks:colored_sleeping_bag', 'comforts:sleeping_bag_white');

  // Connected Glass
  Wash('#vtweaks:colored_borderless_glass_pane', 'connectedglass:borderless_glass_pane');
  Wash('#vtweaks:colored_borderless_glass', 'connectedglass:borderless_glass');
  Wash('#vtweaks:colored_clear_glass_pane', 'connectedglass:clear_glass_pane');
  Wash('#vtweaks:colored_clear_glass', 'connectedglass:clear_glass');
  Wash('#vtweaks:colored_scratched_glass_pane', 'connectedglass:scratched_glass_pane');
  Wash('#vtweaks:colored_scratched_glass', 'connectedglass:scratched_glass');
  Wash('#vtweaks:colored_tinted_borderless_glass', 'connectedglass:tinted_borderless_glass');

  // EnderIO
  Wash('#vtweaks:colored_clear_glass_a', 'enderio:clear_glass_a');
  Wash('#vtweaks:colored_clear_glass_d', 'enderio:clear_glass_d');
  Wash('#vtweaks:colored_clear_glass_da', 'enderio:clear_glass_da');
  Wash('#vtweaks:colored_clear_glass_dm', 'enderio:clear_glass_dm');
  Wash('#vtweaks:colored_clear_glass_dna', 'enderio:clear_glass_dna');
  Wash('#vtweaks:colored_clear_glass_dnm', 'enderio:clear_glass_dnm');
  Wash('#vtweaks:colored_clear_glass_dnp', 'enderio:clear_glass_dnp');
  Wash('#vtweaks:colored_clear_glass_dp', 'enderio:clear_glass_dp');
  Wash('#vtweaks:colored_clear_glass_e', 'enderio:clear_glass_e');
  Wash('#vtweaks:colored_clear_glass_ea', 'enderio:clear_glass_ea');
  Wash('#vtweaks:colored_clear_glass_em', 'enderio:clear_glass_em');
  Wash('#vtweaks:colored_clear_glass_ena', 'enderio:clear_glass_ena');
  Wash('#vtweaks:colored_clear_glass_enm', 'enderio:clear_glass_enm');
  Wash('#vtweaks:colored_clear_glass_enp', 'enderio:clear_glass_enp');
  Wash('#vtweaks:colored_clear_glass_ep', 'enderio:clear_glass_ep');
  Wash('#vtweaks:colored_clear_glass_m', 'enderio:clear_glass_m');
  Wash('#vtweaks:colored_clear_glass', 'enderio:clear_glass');
  Wash('#vtweaks:colored_clear_glass_na', 'enderio:clear_glass_na');
  Wash('#vtweaks:colored_clear_glass_nm', 'enderio:clear_glass_nm');
  Wash('#vtweaks:colored_clear_glass_np', 'enderio:clear_glass_np');
  Wash('#vtweaks:colored_clear_glass_p', 'enderio:clear_glass_p');
  Wash('#vtweaks:colored_fused_quartz_a', 'enderio:fused_quartz_a');
  Wash('#vtweaks:colored_fused_quartz_d', 'enderio:fused_quartz_d');
  Wash('#vtweaks:colored_fused_quartz_da', 'enderio:fused_quartz_da');
  Wash('#vtweaks:colored_fused_quartz_dm', 'enderio:fused_quartz_dm');
  Wash('#vtweaks:colored_fused_quartz_dna', 'enderio:fused_quartz_dna');
  Wash('#vtweaks:colored_fused_quartz_dnm', 'enderio:fused_quartz_dnm');
  Wash('#vtweaks:colored_fused_quartz_dnp', 'enderio:fused_quartz_dnp');
  Wash('#vtweaks:colored_fused_quartz_dp', 'enderio:fused_quartz_dp');
  Wash('#vtweaks:colored_fused_quartz_e', 'enderio:fused_quartz_e');
  Wash('#vtweaks:colored_fused_quartz_ea', 'enderio:fused_quartz_ea');
  Wash('#vtweaks:colored_fused_quartz_em', 'enderio:fused_quartz_em');
  Wash('#vtweaks:colored_fused_quartz_ena', 'enderio:fused_quartz_ena');
  Wash('#vtweaks:colored_fused_quartz_enm', 'enderio:fused_quartz_enm');
  Wash('#vtweaks:colored_fused_quartz_enp', 'enderio:fused_quartz_enp');
  Wash('#vtweaks:colored_fused_quartz_ep', 'enderio:fused_quartz_ep');
  Wash('#vtweaks:colored_fused_quartz_m', 'enderio:fused_quartz_m');
  Wash('#vtweaks:colored_fused_quartz', 'enderio:fused_quartz');
  Wash('#vtweaks:colored_fused_quartz_na', 'enderio:fused_quartz_na');
  Wash('#vtweaks:colored_fused_quartz_nm', 'enderio:fused_quartz_nm');
  Wash('#vtweaks:colored_fused_quartz_np', 'enderio:fused_quartz_np');
  Wash('#vtweaks:colored_fused_quartz_p', 'enderio:fused_quartz_p');

  // Farmer's Delight
  Wash('#vtweaks:colored_canvas_sign', 'farmersdelight:canvas_sign');
  Wash('#vtweaks:colored_hanging_canvas_sign', 'farmersdelight:hanging_canvas_sign');

  // Handcrafted
  Wash('#vtweaks:colored_cushion', 'handcrafted:white_cushion');
  Wash('#vtweaks:colored_sheet', 'handcrafted:white_sheet');

  // IE
  Wash('#vtweaks:colored_sheetmetal_colored', 'immersiveengineering:sheetmetal_colored_white');
  Wash('#vtweaks:colored_slab_sheetmetal_colored', 'immersiveengineering:slab_sheetmetal_colored_white');

  // Interiors
  Wash('#vtweaks:colored_chair', 'interiors:white_chair');
  Wash('#vtweaks:colored_floor_chair', 'interiors:white_floor_chair');

  // Supplementaries
  Wash('#vtweaks:colored_candle_holder', 'supplementaries:candle_holder');
  Wash('#vtweaks:colored_flag', 'supplementaries:flag_white');
});
