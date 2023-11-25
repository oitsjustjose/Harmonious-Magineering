ServerEvents.recipes(event => {
  const Chunkloaders = () => {
    event.remove({output: 'chunkloaders:basic_chunk_loader'});
    event.shaped('chunkloaders:basic_chunk_loader', ['ABA', 'BCB', 'ABA'], {
      A: ['#forge:ingots/steel', '#forge:ingots/dark_steel'],
      B: '#forge:obsidian',
      C: '#forge:ender_pearls',
    });
  };

  const Entangled = () => {
    event.remove({output: 'entangled:block'});
    event.shaped('entangled:block', ['ABA', 'BCB', 'ABA'], {
      A: 'endermanoverhaul:soul_pearl',
      B: '#forge:obsidian',
      C: 'dimstorage:dimensional_chest',
    });
  };

  [Chunkloaders, Entangled].forEach(Module => Module());
});
