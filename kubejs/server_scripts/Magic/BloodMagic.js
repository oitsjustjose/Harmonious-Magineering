ServerEvents.recipes(event => {
  /**
   * @param {Internal.ItemStackKJS} output
   * @param {Internal.Ingredient} input
   * @param {Internal.Ingredient} reagent
   * @param {boolean} bonus
   */
  const ARC = (output, input, reagent, bonus) => {
    const recipe = {
      type: 'bloodmagic:arc',
      consumeingredient: false,
      input: input.toJson(),
      inputsize: 1,
      mainoutputchance: 0.0,
      output: output.toJson(),
      tool: reagent.toJson(),
    };

    if (!!bonus) {
      recipe.addedoutput = [
        {
          type: output.withCount(1).toJson(),
          chance: 0.17,
          mainchance: 0.33,
        },
      ];
    }

    event.custom(recipe);
  };

  // Everything in BM should use Arcane Gold
  event.replaceInput({mod: 'bloodmagic', not: {type: 'bloodmagic:arc'}}, '#forge:nuggets/gold', '#forge:nuggets/arcane_gold');
  event.replaceInput({mod: 'bloodmagic', not: {type: 'bloodmagic:arc'}}, '#forge:ingots/gold', '#forge:ingots/arcane_gold');
  event.replaceInput({mod: 'bloodmagic', not: {type: 'bloodmagic:arc'}}, '#forge:storage_blocks/gold', '#forge:storage_blocks/arcane_gold');

  // More involved Petty Soul Gem recipe
  event.remove({output: 'bloodmagic:soulgempetty'});
  event.custom({
    type: 'bloodmagic:soulforge',
    drain: 1.0,
    input0: {item: 'eidolon:enchanted_ash'},
    input1: {item: 'eidolon:soul_shard'},
    input2: {tag: 'forge:ingots/arcane_gold'},
    input3: {item: 'eidolon:death_essence'},
    minimumDrain: 1.0,
    output: {item: 'bloodmagic:soulgempetty'},
  });

  // More involved Lesser Soul Gem recipe
  event.remove({output: 'bloodmagic:soulgemlesser'});
  event.custom({
    type: 'bloodmagic:soulforge',
    drain: 20.0,
    input0: {item: 'bloodmagic:soulgempetty'},
    input1: {item: 'eidolon:shadow_gem'},
    input2: {item: 'eidolon:death_essence'},
    input3: {item: 'eidolon:lesser_soul_gem'},
    minimumDrain: 60.0,
    output: {item: 'bloodmagic:soulgemlesser'},
  });

  // More involved Altar recipe
  event.remove({output: 'bloodmagic:altar'});
  event.shaped('bloodmagic:altar', ['S S', 'EGE', 'EAE'], {
    S: 'eidolon:arcane_seal',
    E: 'aether:carved_stone',
    A: 'aether:altar',
    G: 'eidolon:crimson_gem',
  });

  // Easier means to get Arcane Gold once you're in BM
  event.custom({
    type: 'bloodmagic:altar',
    altarSyphon: 1000,
    consumptionRate: 5,
    drainRate: 5,
    input: {tag: 'forge:ingots/gold'},
    output: {item: 'eidolon:arcane_gold_ingot'},
    upgradeLevel: 1,
  });

  event.custom({
    type: 'bloodmagic:altar',
    altarSyphon: 9000,
    consumptionRate: 5,
    drainRate: 5,
    input: {tag: 'forge:storage_blocks/gold'},
    output: {item: 'eidolon:arcane_gold_block'},
    upgradeLevel: 1,
  });

  event.custom({
    type: 'bloodmagic:altar',
    altarSyphon: 111,
    consumptionRate: 5,
    drainRate: 5,
    input: {tag: 'forge:nuggets/gold'},
    output: {item: 'eidolon:arcane_gold_nugget'},
    upgradeLevel: 1,
  });

  // Alchemical Reaction Chamber recipes :)
  const cuttingFluid = Ingredient.of('#bloodmagic:arc/cuttingfluid');
  const explosive = Ingredient.of('#bloodmagic:arc/explosive');

  [
    {material: 'aluminum', dust: 'immersiveengineering:dust_aluminum'},
    {material: 'lead', dust: 'mekanism:dust_lead'},
    {material: 'nickel', dust: 'immersiveengineering:dust_nickel'},
    {material: 'silver', dust: 'immersiveengineering:dust_silver'},
    {material: 'tin', dust: 'mekanism:dust_tin'},
    {material: 'uranium', dust: 'mekanism:dust_uranium'},
    {material: 'zinc', dust: 'create:crushed_raw_zinc'},
  ].forEach(x => {
    const dust = Item.of(x.dust);
    ARC(dust.withCount(3), Ingredient.of(`#forge:ores/${x.material}`), cuttingFluid);
    ARC(dust, Ingredient.of(`#forge:ingots/${x.material}`), explosive);
    ARC(dust, Ingredient.of(`#forge:raw_materials/${x.material}`), cuttingFluid, true);
  });
});
