define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var Event = Object.create(dart.library);
  const CT = Object.create(null);
  var summary$ = dart.privateName(Event, "Event.summary");
  var start$ = dart.privateName(Event, "Event.start");
  var end$ = dart.privateName(Event, "Event.end");
  var status$ = dart.privateName(Event, "Event.status");
  Event.Event = class Event extends core.Object {
    get summary() {
      return this[summary$];
    }
    set summary(value) {
      super.summary = value;
    }
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get status() {
      return this[status$];
    }
    set status(value) {
      super.status = value;
    }
  };
  (Event.Event.new = function(opts) {
    let summary = opts && 'summary' in opts ? opts.summary : null;
    let start = opts && 'start' in opts ? opts.start : null;
    let end = opts && 'end' in opts ? opts.end : null;
    let status = opts && 'status' in opts ? opts.status : null;
    this[summary$] = summary;
    this[start$] = start;
    this[end$] = end;
    this[status$] = status;
    ;
  }).prototype = Event.Event.prototype;
  dart.addTypeTests(Event.Event);
  dart.setLibraryUri(Event.Event, "package:firststop/models/Event.dart");
  dart.setFieldSignature(Event.Event, () => ({
    __proto__: dart.getFields(Event.Event.__proto__),
    summary: dart.finalFieldType(core.String),
    start: dart.finalFieldType(core.DateTime),
    end: dart.finalFieldType(core.DateTime),
    status: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/firststop/models/Event", {
    "package:firststop/models/Event.dart": Event
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["Event.dart"],"names":[],"mappings":";;;;;;;;;;;;IACe;;;;;;IACE;;;;;;IACA;;;;;;IACF;;;;;;;;QAEK;QAAc;QAAY;QAAU;IAApC;IAAc;IAAY;IAAU;;EAAQ","file":"Event.ddc.js"}');
  // Exports:
  return {
    models__Event: Event
  };
});

//# sourceMappingURL=Event.ddc.js.map
