ServerEvents.recipes(event => {
  event.custom({
    type: 'eidolon:worktable',
    pattern: ['glg', 'lhl', 'glg'],
    reagents: 'gggg',
    key: {
      g: {item: 'minecraft:glowstone'},
      h: {item: 'eidolon:holy_symbol'},
      l: {item: 'minecraft:ice'},
    },
    result: {item: 'aether:aether_portal_frame'},
  });
});
