// priority -1

ServerEvents.tags('item', event => {
  const aether = () => {
    const plankTagsToRemove = ['minecraft:planks', 'forge:planks'];

    /* Fix Aether planks being poorly behaved */
    Ingredient.of('#aether:planks_crafting')
      .getStacks()
      .forEach(plank => {
        plankTagsToRemove.forEach(tag => {
          console.log(`Supposedly removing ${plank.id} from '#${tag}'`);
          event.get(tag).remove(plank.id);
        });
      });
  };

  [aether].forEach(module => module());
});
