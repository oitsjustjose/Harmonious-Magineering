/**
 * @param {Internal.RecipesEventJS} event
 */
const Rope = event => {
  event.replaceInput({}, 'farmersdelight:rope', 'supplementaries:rope');
  event.replaceOutput({}, 'farmersdelight:rope', 'supplementaries:rope');
};

ServerEvents.recipes(event => {
  const Modules = [Rope];
  Modules.forEach(Module => {
    Module(event);
  });
});
