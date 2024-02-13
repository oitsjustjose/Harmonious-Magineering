ServerEvents.recipes(event => {
  /**
   * @param {Internal.ItemStack} plank
   * @param {Internal.IngredientKJS} log
   * @param {Internal.IngredientKJS} stripped
   */
  const sawmillPlanking = (plank, log, stripped) => {
    event.custom({
      type: 'immersiveengineering:sawmill',
      energy: 1600,
      input: log.toJson(),
      result: plank.toJson(),
      secondaries: [
        {output: {tag: 'forge:dusts/wood'}, stripping: true},
        {output: {tag: 'forge:dusts/wood'}, stripping: false},
      ],
      stripped: stripped.toJson(),
    });

    event.custom({
      type: 'immersiveengineering:sawmill',
      energy: 1600,
      input: stripped.toJson(),
      result: plank.toJson(),
      secondaries: [{output: {tag: 'forge:dusts/wood'}, stripping: false}],
    });
  };

  /**
   * @param {Internal.ItemStack} slab
   * @param {Internal.ItemStack} plank
   */
  const sawmillSlabbing = (slab, plank) => {
    event.custom({
      type: 'immersiveengineering:sawmill',
      energy: 1600,
      input: plank.toJson(),
      result: slab.toJson(),
      secondaries: [{output: {tag: 'forge:dusts/wood'}, stripping: false}],
    });
  };

  /**
   * @param {Internal.ItemStack} plank
   * @param {Internal.ItemStack} shelf
   */
  const sawmillShelving = (plank, shelf) => {
    event.custom({
      type: 'immersiveengineering:sawmill',
      energy: 1600,
      input: shelf.toJson(),
      result: plank.toJson(),
      secondaries: [
        {output: {item: 'minecraft:book', count: 3}, stripping: false},
        {output: {tag: 'forge:dusts/wood'}, stripping: false},
      ],
    });
  };

  /**
   * @param {String} mod
   * @param {String} wood
   * @returns {Internal.ItemStackKJS?}
   */
  const findPlank = (mod, wood) => {
    const tagsToTry = ['#minecraft:planks', '#forge:planks', '#aether:planks_crafting', '#minecraft:non_flammable_wood'];

    for (const tagToTry of tagsToTry) {
      for (const stack of Ingredient.of(tagToTry).getStacks()) {
        if (stack.id.startsWith(mod) && stack.id.includes(wood) && stack.id.includes('planks')) {
          return stack;
        }
      }
    }

    return null;
  };

  /**
   * @param {String} mod
   * @param {String} wood
   * @returns {Internal.ItemStackKJS?}
   */
  const findSlab = (mod, wood) => {
    const tagsToTry = ['#minecraft:wooden_slabs', '#minecraft:slabs'];

    for (const tagToTry of tagsToTry) {
      for (const stack of Ingredient.of(tagToTry).getStacks()) {
        if (stack.id.startsWith(mod) && stack.id.includes(wood) && stack.id.includes('slab')) {
          return stack;
        }
      }
    }

    return null;
  };

  /**
   * @param {String} mod
   * @param {String} wood
   * @returns {Internal.ItemStackKJS?}
   */
  const findShelf = (mod, wood) => {
    const tagsToTry = ['#forge:bookshelves'];

    for (const tagToTry of tagsToTry) {
      for (const stack of Ingredient.of(tagToTry).getStacks()) {
        if ((stack.id.startsWith(mod) || stack.id.startsWith('everycomp')) && stack.id.includes(wood) && stack.id.includes('bookshelf')) {
          return stack;
        }
      }
    }

    return null;
  };

  /**
   * @param {Internal.IngredientKJS} ingredient
   * @returns {Internal.IngredientKJS}
   */
  const justUnstripped = ingredient => {
    const stacks = [];

    ingredient.getStacks().forEach(x => {
      if (!x.id.includes('stripped')) {
        stacks.push(x);
      }
    });

    return Ingredient.of(stacks);
  };

  /**
   * @param {Internal.IngredientKJS} ingredient
   * @returns {Internal.IngredientKJS}
   */
  const justStripped = ingredient => {
    const stacks = [];

    ingredient.getStacks().forEach(x => {
      if (x.id.includes('stripped')) {
        stacks.push(x);
      }
    });

    return Ingredient.of(stacks);
  };

  const modBlacklist = ['create', 'forge', 'minecraft', 'quark'];
  /* Store an object with {mod: <String>, wood: <String>} */
  const variants = [];
  const seenKeys = [];

  Ingredient.of('#minecraft:logs')
    .getStacks()
    .forEach(wood => {
      // This is janky, but Java Streams are poorly supported here :/
      wood
        .getTags()
        .toArray()
        .forEach(tag => {
          const asStr = `${tag}`.replace('TagKey[minecraft:item / ', '').slice(0, -1);
          if (!asStr.endsWith('_logs')) return;

          // Prevent duplicates
          if (seenKeys.includes(asStr)) return;
          seenKeys.push(asStr);

          const parts = asStr.split(':');
          if (modBlacklist.includes(parts[0])) return;

          variants.push({
            mod: parts[0],
            wood: parts[1].replace('_logs', ''),
          });
        });
    });

  variants.forEach(variant => {
    const mod = variant.mod;
    const wood = variant.wood;

    const plank = findPlank(variant.mod, variant.wood);
    if (plank) {
      const logTag = Ingredient.of(`#${mod}:${wood}_logs`);
      sawmillPlanking(Item.of(plank, 6), justUnstripped(logTag), justStripped(logTag));
    } else {
      console.warn(`Plank for mod=${mod}, wood=${wood} was not found :(`);
      return;
    }

    const slab = findSlab(variant.mod, variant.wood);
    if (slab) {
      sawmillSlabbing(Item.of(slab, 2), Item.of(plank));
    } else {
      console.warn(`Slab for mod=${mod}, wood=${wood} was not found :(`);
    }

    const shelf = findShelf(variant.mod, variant.wood);
    if (shelf) {
      sawmillShelving(Item.of(plank, 4), Item.of(shelf));
    } else {
      console.warn(`Bookshelf for mod=${mod}, wood=${wood} was not found :(`);
    }
  });
});
