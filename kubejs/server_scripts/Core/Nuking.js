// priority: 0
// We want this script to run VERY LAST so we guarantee all replace[Input|Output] scripts have worked.

ServerEvents.recipes(event => {
  const toRemove = JsonIO.read('kubejs/globals/nuked.json').items;
  toRemove.forEach(x => {
    let inputs = event.findRecipeIds({input: x});
    let outputs = event.findRecipeIds({output: x});

    let count = inputs.length + outputs.length;

    event.remove({input: x});
    event.remove({output: x});

    if (count > 0) {
      console.info(`Nuked ${count} recipes for ${x}`);
      if (inputs.length > 0) {
        console.info(`    INPUTS: ${inputs.join('\n      -')}`);
      }
      if (outputs.length > 0) {
        console.info(`    OUTPUTS: ${outputs.join('\n      -')}`);
      }
    }
  });
});
