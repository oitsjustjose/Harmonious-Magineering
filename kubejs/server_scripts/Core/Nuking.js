// priority: 0
// We want this script to run VERY LAST so we guarantee all replace[Input|Output] scripts have worked.

ServerEvents.recipes(event => {
  const toRemove = JsonIO.read('kubejs/globals/nuked.json').items;
  toRemove.forEach(x => {
    event.remove({input: x});
    event.remove({output: x});
  });
});
