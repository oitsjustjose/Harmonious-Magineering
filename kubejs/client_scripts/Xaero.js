let lastXaeroChange = 0;

ForgeEvents.onEvent('net.minecraftforge.event.TickEvent$ClientTickEvent', () => {
  if (Date.now() - lastXaeroChange < 5000) return;

  // Disable the Minimap Coords by default
  const XaeroMinimap = Java.loadClass('xaero.minimap.XaeroMinimap');
  const xaeroMinimap = XaeroMinimap.instance;

  xaeroMinimap.getInterfaces().getMinimapInterface().getInfoDisplayManager().get('coords').setState(false);
  lastXaeroChange = Date.now();
});
