LootJS.modifiers(event => {
  /**
   * @param {Internal.LootModificationEventJS} event
   */
  const CustomSilverLead = event => {
    event
      .addBlockLootModifier('embers:lead_ore')
      .replaceLoot('embers:raw_lead', 'eidolon:raw_lead', true);
    event
      .addBlockLootModifier('embers:deepslate_lead_ore')
      .replaceLoot('embers:raw_lead', 'eidolon:raw_lead', true);
    event
      .addBlockLootModifier('embers:silver_ore')
      .replaceLoot('embers:raw_silver', 'eidolon:raw_silver', true);
    event
      .addBlockLootModifier('embers:deepslate_silver_ore')
      .replaceLoot('embers:raw_silver', 'eidolon:raw_silver', true);
  };

  /**
   * @param {Internal.LootModificationEventJS} event
   */
  const BoostDeepslateLoot = event => {
    const Ores = [
      'create:deepslate_zinc_ore',
      'embers:deepslate_lead_ore',
      'embers:deepslate_silver_ore',
      'immersiveengineering:deepslate_ore_aluminum',
      'immersiveengineering:deepslate_ore_nickel',
      'mekanism:deepslate_osmium_ore',
      'mekanism:deepslate_tin_ore',
      'mekanism:deepslate_uranium_ore',
      'minecraft:deepslate_copper_ore',
      'minecraft:deepslate_gold_ore',
      'minecraft:deepslate_iron_ore',
    ];

    Ores.forEach(ore => {
      event.addBlockLootModifier(ore).modifyLoot(ItemFilter.ALWAYS_TRUE, stack => {
        stack.setCount(stack.getCount() * 2);
        return stack;
      });
    });
  };

  CustomSilverLead(event);
  BoostDeepslateLoot(event);
});
