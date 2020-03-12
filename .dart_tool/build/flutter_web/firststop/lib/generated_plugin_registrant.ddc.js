define(['dart_sdk', 'packages/google_sign_in_web/google_sign_in_web'], function(dart_sdk, packages__google_sign_in_web__google_sign_in_web) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const google_sign_in_web = packages__google_sign_in_web__google_sign_in_web.google_sign_in_web;
  var generated_plugin_registrant = Object.create(dart.library);
  const CT = Object.create(null);
  generated_plugin_registrant.registerPlugins = function registerPlugins(registry) {
    google_sign_in_web.GoogleSignInPlugin.registerWith(registry.registrarFor(dart.wrapType(google_sign_in_web.GoogleSignInPlugin)));
    registry.registerMessageHandler();
  };
  dart.trackLibraries("packages/firststop/generated_plugin_registrant", {
    "package:firststop/generated_plugin_registrant.dart": generated_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["generated_plugin_registrant.dart"],"names":[],"mappings":";;;;;;;;yEAWoC;AACwC,IAAvD,mDAAa,AAAS,QAAD,cAAc;AACrB,IAAjC,AAAS,QAAD;EACV","file":"generated_plugin_registrant.ddc.js"}');
  // Exports:
  return {
    generated_plugin_registrant: generated_plugin_registrant
  };
});

//# sourceMappingURL=generated_plugin_registrant.ddc.js.map
