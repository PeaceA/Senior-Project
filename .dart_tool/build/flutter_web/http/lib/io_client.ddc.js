define(['dart_sdk', 'packages/async/async', 'packages/http/src/base_client'], function(dart_sdk, packages__async__async, packages__http__src__base_client) {
  'use strict';
  const core = dart_sdk.core;
  const _http = dart_sdk._http;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const stream_consumer = packages__async__async.src__delegate__stream_consumer;
  const stream$ = packages__async__async.src__delegate__stream;
  const streamed_response = packages__http__src__base_client.src__streamed_response;
  const exception = packages__http__src__base_client.src__exception;
  const base_client = packages__http__src__base_client.src__base_client;
  const base_request = packages__http__src__base_client.src__base_request;
  var io_client = Object.create(dart.library);
  var io_client$ = Object.create(dart.library);
  var $forEach = dartx.forEach;
  var $_set = dartx._set;
  var StringAndStringToNull = () => (StringAndStringToNull = dart.constFn(dart.fnType(core.Null, [core.String, core.String])))();
  var ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  var IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  var dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  var dynamicTobottom = () => (dynamicTobottom = dart.constFn(dart.fnType(dart.bottom, [dart.dynamic])))();
  var dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  const CT = Object.create(null);
  var _inner = dart.privateName(io_client$, "_inner");
  io_client$.IOClient = class IOClient extends base_client.BaseClient {
    send(request) {
      return async.async(streamed_response.StreamedResponse, (function* send() {
        let t0;
        let stream = request.finalize();
        try {
          let ioRequest = (yield this[_inner].openUrl(request.method, request.url));
          t0 = ioRequest;
          t0.followRedirects = request.followRedirects;
          t0.maxRedirects = request.maxRedirects;
          t0.contentLength = request.contentLength == null ? -1 : request.contentLength;
          t0.persistentConnection = request.persistentConnection;
          t0;
          request.headers[$forEach](dart.fn((name, value) => {
            ioRequest.headers.set(name, value);
          }, StringAndStringToNull()));
          let response = (yield stream.pipe(stream_consumer.DelegatingStreamConsumer.typed(ListOfint(), ioRequest)));
          let headers = new (IdentityMapOfString$String()).new();
          dart.dsend(dart.dload(response, 'headers'), 'forEach', [dart.fn((key, values) => {
              headers[$_set](core.String._check(key), core.String._check(dart.dsend(values, 'join', [","])));
            }, dynamicAnddynamicToNull())]);
          return new streamed_response.StreamedResponse.new(stream$.DelegatingStream.typed(ListOfint(), async.Stream._check(response)).handleError(dart.fn(error => dart.throw(new exception.ClientException.new(core.String._check(dart.dload(error, 'message')), core.Uri._check(dart.dload(error, 'uri')))), dynamicTobottom()), {test: dart.fn(error => _http.HttpException.is(error), dynamicTobool())}), core.int._check(dart.dload(response, 'statusCode')), {contentLength: core.int._check(dart.equals(dart.dload(response, 'contentLength'), -1) ? null : dart.dload(response, 'contentLength')), request: request, headers: headers, isRedirect: core.bool._check(dart.dload(response, 'isRedirect')), persistentConnection: core.bool._check(dart.dload(response, 'persistentConnection')), reasonPhrase: core.String._check(dart.dload(response, 'reasonPhrase'))});
        } catch (e) {
          let error = dart.getThrown(e);
          if (_http.HttpException.is(error)) {
            dart.throw(new exception.ClientException.new(error.message, error.uri));
          } else
            throw e;
        }
      }).bind(this));
    }
    close() {
      if (this[_inner] != null) this[_inner].close({force: true});
      this[_inner] = null;
    }
  };
  (io_client$.IOClient.new = function(inner = null) {
    let t0;
    this[_inner] = (t0 = inner, t0 == null ? _http.HttpClient.new() : t0);
    ;
  }).prototype = io_client$.IOClient.prototype;
  dart.addTypeTests(io_client$.IOClient);
  dart.setMethodSignature(io_client$.IOClient, () => ({
    __proto__: dart.getMethods(io_client$.IOClient.__proto__),
    send: dart.fnType(async.Future$(streamed_response.StreamedResponse), [base_request.BaseRequest])
  }));
  dart.setLibraryUri(io_client$.IOClient, "package:http/src/io_client.dart");
  dart.setFieldSignature(io_client$.IOClient, () => ({
    __proto__: dart.getFields(io_client$.IOClient.__proto__),
    [_inner]: dart.fieldType(_http.HttpClient)
  }));
  io_client$.createClient = function createClient() {
    return new io_client$.IOClient.new();
  };
  dart.trackLibraries("packages/http/io_client", {
    "package:http/io_client.dart": io_client,
    "package:http/src/io_client.dart": io_client$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/io_client.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;SA4B4C;AAAb;;AACvB,qBAAS,AAAQ,OAAD;AAEpB;AACM,2BAAY,MAAM,AAAO,qBAAQ,AAAQ,OAAD,SAAS,AAAQ,OAAD;AAOL,eALvD,SAAS;UACL,qBAAkB,AAAQ,OAAD;UACzB,kBAAe,AAAQ,OAAD;UACtB,mBACE,AAAQ,AAAc,OAAf,kBAAkB,OAAO,CAAC,IAAI,AAAQ,OAAD;UAC9C,0BAAuB,AAAQ,OAAD;;AAGhC,UAFF,AAAQ,AAAQ,OAAT,mBAAiB,SAAC,MAAM;AACK,YAAlC,AAAU,AAAQ,SAAT,aAAa,IAAI,EAAE,KAAK;;AAG/B,0BACA,MAAM,AAAO,MAAD,MAA+B,4DAAM,SAAS;AAC1D,wBAA0B;AAG5B,UAFe,WAAR,WAAT,QAAQ,0BAAiB,SAAC,KAAK;AACE,cAA/B,AAAO,OAAA,2BAAC,GAAG,sBAAW,WAAP,MAAM,WAAM;;AAG7B,gBAAW,4CACU,AAA2B,gEAAV,QAAQ,eACtC,QAAC,SAAU,WAAU,qDAAsB,WAAN,KAAK,+BAAgB,WAAN,KAAK,wCACnD,QAAC,SAAgB,uBAAN,KAAK,uCACjB,WAAT,QAAQ,kCAEyB,gBAAN,YAAd,WAAT,QAAQ,oBAAkB,CAAC,KAAI,OAAgB,WAAT,QAAQ,8BACzC,OAAO,WACP,OAAO,+BACK,WAAT,QAAQ,yDACW,WAAT,QAAQ,6DACP,WAAT,QAAQ;;cACF;AAAxB;AACmD,YAAnD,WAAU,kCAAgB,AAAM,KAAD,UAAU,AAAM,KAAD;;;;MAElD;;;AAKE,UAAI,gBAAU,MAAM,AAAO,AAAkB,2BAAL;AAC3B,MAAb,eAAS;IACX;;sCAhDqB;;IAAiB,gBAAQ,KAAN,KAAK,QAAL,OAAa;;EAAY;;;;;;;;;;;;AAVtC;EAAU","file":"io_client.ddc.js"}');
  // Exports:
  return {
    io_client: io_client,
    src__io_client: io_client$
  };
});

//# sourceMappingURL=io_client.ddc.js.map
