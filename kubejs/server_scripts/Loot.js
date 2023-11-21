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

  /**
   * @param {Internal.LootModificationEventJS} event
   */
  const BoostSomeMobDrops = event => {
    [
      'minecraft:cow',
      'minecraft:donkey',
      'minecraft:horse',
      'minecraft:mooshroom',
      'minecraft:mule',
    ].forEach(mob => {
      event.addEntityLootModifier(mob).modifyLoot(ItemFilter.ALWAYS_TRUE, stack => {
        if (stack.getId() === 'minecraft:leather') {
          stack.setCount(stack.getCount() * 2);
        }
        return stack;
      });
    });

    [
      'minecraft:enderman',
      'endermanoverhaul:badlands_enderman',
      'endermanoverhaul:cave_enderman',
      'endermanoverhaul:crimson_forest_enderman',
      'endermanoverhaul:dark_oak_enderman',
      'endermanoverhaul:desert_enderman',
      'endermanoverhaul:end_enderman',
      'endermanoverhaul:end_islands_enderman',
      'endermanoverhaul:flower_fields_enderman',
      'endermanoverhaul:ice_spikes_enderman',
      'endermanoverhaul:mushroom_fields_enderman',
      'endermanoverhaul:nether_wastes_enderman',
      'endermanoverhaul:ocean_enderman',
      'endermanoverhaul:savanna_enderman',
      'endermanoverhaul:snowy_enderman',
      'endermanoverhaul:soulsand_valley_enderman',
      'endermanoverhaul:swamp_enderman',
      'endermanoverhaul:warped_forest_enderman',
      'endermanoverhaul:windswept_hills_enderman',
    ].forEach(mob => {
      event.addEntityLootModifier(mob).modifyLoot(ItemFilter.ALWAYS_TRUE, stack => {
        const hasTag =
          stack
            .getTags()
            .toArray()
            .filter(x => x.location().toString() === 'forge:ender_pearls').length > 0;
        if (!hasTag) return stack;

        stack.setCount(stack.getCount() * 2);
        return stack;
      });
    });
  };

  event.addEntityLootModifier('minecraft:warden').removeLoot(ItemFilter.ALWAYS_TRUE);

  CustomSilverLead(event);
  BoostDeepslateLoot(event);
  BoostSomeMobDrops(event);
});
