/**
 * @param {Internal.RecipesEventJS} event
 */
const Mekanism = event => {
  [Item.of('mekanism:cardboard_box')].forEach(x => event.remove({output: x}));
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
  ['immersiveengineering:deepslate_ore_lead', 'mekanism:deepslate_lead_ore', 'eidolon:deep_lead_ore'].forEach(ore => {
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
  [Mekanism, Rope, Snails, SilverAndLead].forEach(Module => Module(event));
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
