// priority: 1

PlayerEvents.loggedIn(event => {
  event.getPlayer().awardRecipes(event.getLevel().getRecipeManager().getRecipes());
});
