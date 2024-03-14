// priority: 1

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
      event.addBlockLootModifier(ore).modifyLoot(Ingredient.of('#forge:raw_materials'), stack => stack.withCount(stack.getCount() * 2));
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
      event.addEntityLootModifier(mob).modifyLoot(Item.of('minecraft:leather'), stack => stack.withCount(stack.getCount() * 2));
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
      event.addEntityLootModifier(mob).modifyLoot(Ingredient.of('#forge:ender_pearls'), stack => stack.withCount(stack.getCount() + 1));
    });

    // Incrase wither skeleton skull drop rates.
    event.addEntityLootModifier('minecraft:wither_skeleton').removeLoot(Item.of('minecraft:wither_skeleton_skull'));
    event
      .addEntityLootModifier('minecraft:wither_skeleton')
      .addLoot(LootEntry.of('minecraft:wither_skeleton_skull').when(c => c.randomChanceWithLooting(0.075, 0.05)));
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

    // Add zombie hearts to all zombie types
    event
      .addLootTypeModifier([LootType.ENTITY])
      .matchEntity(entity => entity.anyType('#minecraft:zombies'))
      .addLoot(LootEntry.of('eidolon:zombie_heart').when(c => c.randomChanceWithLooting(0.025, 0.05)));

    // Add imbued bones to all skeleton types
    event
      .addLootTypeModifier([LootType.ENTITY])
      .matchEntity(entity => entity.anyType('#minecraft:skeletons'))
      .addLoot(LootEntry.of('eidolon:imbued_bones').when(c => c.randomChanceWithLooting(0.025, 0.05)));
  };

  event.addEntityLootModifier('minecraft:warden').removeLoot(ItemFilter.ALWAYS_TRUE);
  event.addEntityLootModifier('minecraft:piglin').removeLoot('minecraft:arrow');

  [customSilverLead, boostDeepslateLoot, boostSomeMobDrops, metalMobDrops, modLoot].forEach(module => module());
});
