define(['dart_sdk', 'packages/http/src/base_client'], function(dart_sdk, packages__http__src__base_client) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const browser_client = packages__http__src__base_client.src__browser_client;
  const response = packages__http__src__base_client.src__response;
  var GoogleHttpClient = Object.create(dart.library);
  var $addAll = dartx.addAll;
  const CT = Object.create(null);
  var _headers$ = dart.privateName(GoogleHttpClient, "_headers");
  GoogleHttpClient.GoogleHttpClient = class GoogleHttpClient extends browser_client.BrowserClient {
    send(request) {
      let t0;
      return super.send((t0 = request, t0.headers[$addAll](this[_headers$]), t0));
    }
    head(url, opts) {
      let t0;
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return super.head(url, {headers: (t0 = headers, t0[$addAll](this[_headers$]), t0)});
    }
  };
  (GoogleHttpClient.GoogleHttpClient.new = function(_headers) {
    this[_headers$] = _headers;
    GoogleHttpClient.GoogleHttpClient.__proto__.new.call(this);
    ;
  }).prototype = GoogleHttpClient.GoogleHttpClient.prototype;
  dart.addTypeTests(GoogleHttpClient.GoogleHttpClient);
  dart.setMethodSignature(GoogleHttpClient.GoogleHttpClient, () => ({
    __proto__: dart.getMethods(GoogleHttpClient.GoogleHttpClient.__proto__),
    head: dart.fnType(async.Future$(response.Response), [core.Object], {headers: core.Map$(core.String, core.String)}, {})
  }));
  dart.setLibraryUri(GoogleHttpClient.GoogleHttpClient, "package:firststop/models/GoogleHttpClient.dart");
  dart.setFieldSignature(GoogleHttpClient.GoogleHttpClient, () => ({
    __proto__: dart.getFields(GoogleHttpClient.GoogleHttpClient.__proto__),
    [_headers$]: dart.fieldType(core.Map$(core.String, core.String))
  }));
  dart.trackLibraries("packages/firststop/models/GoogleHttpClient", {
    "package:firststop/models/GoogleHttpClient.dart": GoogleHttpClient
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["GoogleHttpClient.dart"],"names":[],"mappings":";;;;;;;;;;;;;SAS4C;;AACtC,YAAM,kBAAK,OAAO,EAAE,AAAQ,oBAAO;IAAU;SAGpB;;UAA0B;AACnD,YAAM,YAAK,GAAG,kBAAW,OAAO,EAAE,YAAO;IAAU;;;IARjC;AAAY;;EAAO","file":"GoogleHttpClient.ddc.js"}');
  // Exports:
  return {
    models__GoogleHttpClient: GoogleHttpClient
  };
});

//# sourceMappingURL=GoogleHttpClient.ddc.js.map
