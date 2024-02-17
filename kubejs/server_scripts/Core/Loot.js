LootJS.modifiers(event => {
  const customSilverLead = () => {
    event.addBlockLootModifier('embers:lead_ore').replaceLoot('embers:raw_lead', 'eidolon:raw_lead', true);
    event.addBlockLootModifier('embers:deepslate_lead_ore').replaceLoot('embers:raw_lead', 'eidolon:raw_lead', true);
    event.addBlockLootModifier('embers:silver_ore').replaceLoot('embers:raw_silver', 'eidolon:raw_silver', true);
    event.addBlockLootModifier('embers:deepslate_silver_ore').replaceLoot('embers:raw_silver', 'eidolon:raw_silver', true);
  };

  const boostDeepslateLoot = () => {
    [
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
    ].forEach(ore => {
      event.addBlockLootModifier(ore).modifyLoot(ItemFilter.ALWAYS_TRUE, stack => {
        const hasTag =
          stack
            .getTags()
            .toArray()
            .filter(x => x.location().toString() === 'forge:raw_materials').length > 0;
        if (!hasTag) return stack;

        // Only double loot 50% of the time
        if (Math.random() < 0.5) {
          stack.setCount(stack.getCount() * 2);
        }
        return stack;
      });
    });
  };

  const boostSomeMobDrops = () => {
    [
      'minecraft:cow',
      'minecraft:donkey',
      'minecraft:horse',
      'minecraft:mooshroom',
      'minecraft:mule',
      'minecraft:llama',
      'minecraft:trader_llama',
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

        stack.setCount(stack.getCount() + 1);
        return stack;
      });
    });
  };

  const metalMobDrops = () => {
    event.addEntityLootModifier('minecraft:zombie').removeLoot('minecraft:iron_ingot');
    event.addEntityLootModifier('minecraft:drowned').removeLoot('minecraft:copper_ingot');
    event.addEntityLootModifier('minecraft:zombified_piglin').removeLoot('minecraft:gold_nugget');
    event.addEntityLootModifier('minecraft:zombified_piglin').removeLoot('minecraft:gold_ingot');
    event.addEntityLootModifier('minecraft:witch').removeLoot('minecraft:redstone');
    event.addEntityLootModifier('minecraft:witch').removeLoot('minecraft:glowstone_dust');
  };

  const modLoot = () => {
    event.addLootTableModifier(/.*/).replaceLoot('bloodmagic:sulfur', 'eidolon:sulfur');
    event.addBlockLootModifier(/.*/).replaceLoot('spawn:snail_shell', 'naturalist:snail_shell');
    event.addLootTableModifier(/.*/).removeLoot(['immersiveengineering:component_iron', 'immersiveengineering:component_steel']);
  };

  event.addEntityLootModifier('minecraft:warden').removeLoot(ItemFilter.ALWAYS_TRUE);

  [customSilverLead, boostDeepslateLoot, boostSomeMobDrops, metalMobDrops, modLoot].forEach(module => module());
});
