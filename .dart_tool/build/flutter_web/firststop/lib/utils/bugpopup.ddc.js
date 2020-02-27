define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const bottom_sheet = packages__flutter__material.src__material__bottom_sheet;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const icons = packages__flutter__material.src__material__icons;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  var bugpopup = Object.create(dart.library);
  var VoidToMap = () => (VoidToMap = dart.constFn(dart.fnType(core.Map, [])))();
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  var BuildContextToContainer = () => (BuildContextToContainer = dart.constFn(dart.fnType(container.Container, [framework.BuildContext])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 43,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/bugpopup.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 35,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/bugpopup.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 19,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 19,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 19,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 10,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/bugpopup.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 41,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/bugpopup.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/bugpopup.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 17,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 17,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/bugpopup.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 9,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 8,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/bugpopup.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 8,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 7,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/bugpopup.dart"
      });
    }
  });
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C2;
  var C1;
  var C0;
  var C5;
  var C4;
  var C3;
  var C8;
  var C9;
  var C10;
  var C7;
  var C6;
  var C13;
  var C12;
  var C11;
  var C16;
  var C15;
  var C14;
  var C19;
  var C20;
  var C21;
  var C18;
  var C17;
  var C24;
  var C23;
  var C22;
  var C27;
  var C26;
  var C25;
  bugpopup.bugpopup = function bugpopup$(context) {
    bottom_sheet.showModalBottomSheet(dart.dynamic, {context: framework.BuildContext._check(context), builder: dart.fn(bc => new container.Container.new({child: new basic.Wrap.new({children: JSArrayOfWidget().of([new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.music_note, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), title: new text.Text.new("Music", {$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), onTap: dart.fn(() => new _js_helper.LinkedMap.new(), VoidToMap()), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.videocam, {$creationLocationd_0dea112b090073317d4: C11 || CT.C11}), title: new text.Text.new("Video", {$creationLocationd_0dea112b090073317d4: C14 || CT.C14}), onTap: dart.fn(() => new _js_helper.LinkedMap.new(), VoidToMap()), $creationLocationd_0dea112b090073317d4: C17 || CT.C17})]), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), BuildContextToContainer())});
  };
  dart.trackLibraries("packages/firststop/utils/bugpopup", {
    "package:firststop/utils/bugpopup.dart": bugpopup
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["bugpopup.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;yCAEc;AAmBN,IAlBN,wFACa,OAAO,YACP,QAAc,MACd,oCACM,8BACS,sBACZ,qCACa,kBAAW,uFACb,kBAAK,wEACT,cAAM,qGACb,qCACW,kBAAW,uFACb,kBAAK,0EACT,cAAM;EAM7B","file":"bugpopup.ddc.js"}');
  // Exports:
  return {
    utils__bugpopup: bugpopup
  };
});

//# sourceMappingURL=bugpopup.ddc.js.map
