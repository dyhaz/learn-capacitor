@PluginMethod()
public void openMap(PluginCall call) {
  Double latitude = call.getDouble("latitude");
  Double longitude = call.getDouble("longitude");

  // more logic

  call.resolve();
}
