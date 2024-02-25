let lastXaeroChange = 0;

PlayerEvents.tick(() => {
  if (Date.now() - lastXaeroChange < 5000) return;

  // Disable the Minimap Coords by default
  const XaeroMinimap = Java.loadClass('xaero.minimap.XaeroMinimap');
  const xaeroMinimap = XaeroMinimap.instance;

  xaeroMinimap.getInterfaces().getMinimapInterface().getInfoDisplayManager().get('coords').setState(false);
  lastXaeroChange = Date.now();
});
