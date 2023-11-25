ServerEvents.recipes(event => {
  // Candle deduplication-ish
  event.remove({output: 'eidolon:candle'});
  event.remove({id: 'delightful:candle_from_animal_fat'});
  event.shaped('minecraft:candle', ['S', 'T'], {S: 'minecraft:string', T: '#forge:tallow'});

  event.replaceInput({}, 'eidolon:candle', 'minecraft:candle');
});
