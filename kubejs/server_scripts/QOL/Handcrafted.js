ServerEvents.recipes(event => {
  [
    {sheet: 'handcrafted:black_sheet', bed: 'minecraft:black_bed', hammock: 'comforts:hammock_black', sleepingBag: 'comforts:sleeping_bag_black'},
    {sheet: 'handcrafted:blue_sheet', bed: 'minecraft:blue_bed', hammock: 'comforts:hammock_blue', sleepingBag: 'comforts:sleeping_bag_blue'},
    {sheet: 'handcrafted:brown_sheet', bed: 'minecraft:brown_bed', hammock: 'comforts:hammock_brown', sleepingBag: 'comforts:sleeping_bag_brown'},
    {sheet: 'handcrafted:cyan_sheet', bed: 'minecraft:cyan_bed', hammock: 'comforts:hammock_cyan', sleepingBag: 'comforts:sleeping_bag_cyan'},
    {sheet: 'handcrafted:gray_sheet', bed: 'minecraft:gray_bed', hammock: 'comforts:hammock_gray', sleepingBag: 'comforts:sleeping_bag_gray'},
    {sheet: 'handcrafted:green_sheet', bed: 'minecraft:green_bed', hammock: 'comforts:hammock_green', sleepingBag: 'comforts:sleeping_bag_green'},
    {
      sheet: 'handcrafted:light_blue_sheet',
      bed: 'minecraft:light_blue_bed',
      hammock: 'comforts:hammock_light_blue',
      sleepingBag: 'comforts:sleeping_bag_light_blue',
    },
    {
      sheet: 'handcrafted:light_gray_sheet',
      bed: 'minecraft:light_gray_bed',
      hammock: 'comforts:hammock_light_gray',
      sleepingBag: 'comforts:sleeping_bag_light_gray',
    },
    {sheet: 'handcrafted:lime_sheet', bed: 'minecraft:lime_bed', hammock: 'comforts:hammock_lime', sleepingBag: 'comforts:sleeping_bag_lime'},
    {
      sheet: 'handcrafted:magenta_sheet',
      bed: 'minecraft:magenta_bed',
      hammock: 'comforts:hammock_magenta',
      sleepingBag: 'comforts:sleeping_bag_magenta',
    },
    {sheet: 'handcrafted:orange_sheet', bed: 'minecraft:orange_bed', hammock: 'comforts:hammock_orange', sleepingBag: 'comforts:sleeping_bag_orange'},
    {sheet: 'handcrafted:pink_sheet', bed: 'minecraft:pink_bed', hammock: 'comforts:hammock_pink', sleepingBag: 'comforts:sleeping_bag_pink'},
    {sheet: 'handcrafted:purple_sheet', bed: 'minecraft:purple_bed', hammock: 'comforts:hammock_purple', sleepingBag: 'comforts:sleeping_bag_purple'},
    {sheet: 'handcrafted:red_sheet', bed: 'minecraft:red_bed', hammock: 'comforts:hammock_red', sleepingBag: 'comforts:sleeping_bag_red'},
    {sheet: 'handcrafted:white_sheet', bed: 'minecraft:white_bed', hammock: 'comforts:hammock_white', sleepingBag: 'comforts:sleeping_bag_white'},
    {sheet: 'handcrafted:yellow_sheet', bed: 'minecraft:yellow_bed', hammock: 'comforts:hammock_yellow', sleepingBag: 'comforts:sleeping_bag_yellow'},
  ].forEach(set => {
    event.remove({output: set.bed});
    event.remove({output: set.hammock});
    event.remove({output: set.sleepingBag});

    event.shaped(set.bed, ['SSW', 'PPP'], {S: set.sheet, W: 'minecraft:white_wool', P: '#minecraft:planks'});
    event.shaped(set.hammock, ['T T', 'SSS'], {S: set.sheet, T: 'minecraft:stick'});
    event.shaped(set.sleepingBag, ['SSW'], {S: set.sheet, W: 'minecraft:white_carpet'});
  });
});
