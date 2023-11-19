ServerEvents.recipes(event => {
  const Materials = [
    'aluminum',
    'copper',
    'gold',
    'iron',
    'lead',
    'nickel',
    'osmium',
    'silver',
    'tin',
    'uranium',
    'zinc',
  ];

  const Nuggets = {
    aluminum: 'immersiveengineering:nugget_aluminum',
    copper: 'create:copper_nugget',
    gold: 'minecraft:gold_nugget',
    iron: 'minecraft:iron_nugget',
    lead: 'eidolon:lead_nugget',
    nickel: 'immersiveengineering:nugget_nickel',
    osmium: 'mekanism:nugget_osmium',
    silver: 'eidolon:silver_nugget',
    tin: 'mekanism:nugget_tin',
    uranium: 'mekanism:nugget_uranium',
    zinc: 'create:zinc_nugget',
  };

  Materials.forEach(mat => {
    // ReplaceInput doesn't work -_-
    event.remove({
      type: 'minecraft:smelting',
      input: `#forge:raw_materials/${mat}`,
      output: `#forge:ingots/${mat}`,
    });
    event.remove({
      type: 'minecraft:blasting',
      input: `#forge:raw_materials/${mat}`,
      output: `#forge:ingots/${mat}`,
    });

    event.smelting(`3x ${Nuggets[mat]}`, `#forge:raw_materials/${mat}`);
    event.blasting(`4x ${Nuggets[mat]}`, `#forge:raw_materials/${mat}`);
  });
});
