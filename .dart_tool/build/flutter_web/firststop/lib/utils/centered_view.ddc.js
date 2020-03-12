define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  var centered_view = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 60,
        [EdgeInsets_right]: 70,
        [EdgeInsets_top]: 60,
        [EdgeInsets_left]: 70
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 11,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/centered_view.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 10,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 9,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/centered_view.dart"
      });
    }
  });
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C0;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C3;
  var C4;
  var C2;
  var C1;
  var C7;
  var C8;
  var C9;
  var C6;
  var C5;
  var child$ = dart.privateName(centered_view, "CenteredView.child");
  centered_view.CenteredView = class CenteredView extends framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      return new container.Container.new({padding: C0 || CT.C0, alignment: alignment.Alignment.topCenter, child: new basic.ConstrainedBox.new({constraints: new box.BoxConstraints.new({maxWidth: 500.0}), child: this.child, $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5});
    }
  };
  (centered_view.CenteredView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    centered_view.CenteredView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = centered_view.CenteredView.prototype;
  dart.addTypeTests(centered_view.CenteredView);
  dart.setMethodSignature(centered_view.CenteredView, () => ({
    __proto__: dart.getMethods(centered_view.CenteredView.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(centered_view.CenteredView, "package:firststop/utils/centered_view.dart");
  dart.setFieldSignature(centered_view.CenteredView, () => ({
    __proto__: dart.getFields(centered_view.CenteredView.__proto__),
    child: dart.finalFieldType(framework.Widget)
  }));
  dart.trackLibraries("packages/firststop/utils/centered_view", {
    "package:firststop/utils/centered_view.dart": centered_view
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["centered_view.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGe;;;;;;UAIa;AACxB,YAAO,+DAEgB,sCACd,2CACU,sCAAyB,gBAC/B;IAGf;;;QAZwB;QAAU;;;AAAU,8DAAW,GAAG;;EAAC","file":"centered_view.ddc.js"}');
  // Exports:
  return {
    utils__centered_view: centered_view
  };
});

//# sourceMappingURL=centered_view.ddc.js.map
