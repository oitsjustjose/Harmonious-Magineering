ServerEvents.recipes(event => {
  const Criteria = {
    mod: 'bloodmagic',
    not: {type: 'bloodmagic:arc'},
  };
  // Everything in BM should use Nature's Aura Tainted Gold
  event.replaceInput(Criteria, '#forge:nuggets/gold', '#forge:nuggets/arcane_gold');
  event.replaceInput(Criteria, '#forge:ingots/gold', '#forge:ingots/arcane_gold');
  event.replaceInput(Criteria, '#forge:storage_blocks/gold', '#forge:storage_blocks/arcane_gold');

  // Soul Gem should require significant progress in Nature's Aura :)
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

  event.remove({output: 'bloodmagic:altar'});
  event.shaped('bloodmagic:altar', ['S S', 'EGE', 'EAE'], {
    S: 'eidolon:arcane_seal',
    E: 'aether:carved_stone',
    A: 'aether:altar',
    G: 'eidolon:crimson_gem',
  });

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
});
