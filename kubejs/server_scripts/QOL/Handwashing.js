ServerEvents.recipes(event => {
  /**
   * @param {String} input
   * @param {String} output
   */
  const Wash = (input, output) => {
    try {
      event.custom({
        type: 'vtweaks:fluid_conversion',
        input: Ingredient.of(input).toJson(),
        output: Item.of(output).toJson(),
        fluid: 'minecraft:water',
      });
    } catch (ex) {
      console.log(ex);
      console.log(`input: ${Ingredient.of(input).toJson()}, output: ${Item.of(output).toJson()}`);
    }
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
