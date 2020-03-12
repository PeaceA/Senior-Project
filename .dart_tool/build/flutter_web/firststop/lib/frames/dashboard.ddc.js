define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/firststop/models/Event', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size', 'packages/firststop/utils/eventrow'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__firststop__models__Event, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size, packages__firststop__utils__eventrow) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const sliver = packages__flutter__src__widgets__actions.src__widgets__sliver;
  const Event = packages__firststop__models__Event.models__Event;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const colors = packages__flutter__material.src__material__colors;
  const circle_avatar = packages__flutter__material.src__material__circle_avatar;
  const divider = packages__flutter__material.src__material__divider;
  const icons = packages__flutter__material.src__material__icons;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const image_resolution = packages__flutter__src__painting___network_image_web.src__painting__image_resolution;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const basic_types = packages__flutter__src__painting___network_image_web.src__painting__basic_types;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const eventrow = packages__firststop__utils__eventrow.utils__eventrow;
  var dashboard = Object.create(dart.library);
  var $toString = dartx.toString;
  var $_get = dartx._get;
  var $length = dartx.length;
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  var BuildContextAndintToEventRow = () => (BuildContextAndintToEventRow = dart.constFn(dart.fnType(eventrow.EventRow, [framework.BuildContext, core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 24,
        [_Location_line]: 24,
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
        [_Location_column]: 15,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 28,
        [_Location_line]: 28,
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
        [_Location_column]: 19,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundImage",
        [_Location_column]: 19,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 19,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "radius",
        [_Location_column]: 19,
        [_Location_line]: 33,
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
        [_Location_column]: 21,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 25,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 50,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 22,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 26,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 30,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 30,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 30,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 30,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 24,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 26,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 26,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C68 || CT.C68,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundImage",
        [_Location_column]: 19,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 19,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "radius",
        [_Location_column]: 19,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72, C73 || CT.C73, C74 || CT.C74], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 25,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 50,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77, C78 || CT.C78], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 22,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 26,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85], widget_inspector._Location);
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C84 || CT.C84,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88, C89 || CT.C89], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 30,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C91 || CT.C91,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95, C96 || CT.C96], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 30,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99], widget_inspector._Location);
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C98 || CT.C98,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.constList([C102 || CT.C102, C103 || CT.C103], widget_inspector._Location);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C101 || CT.C101,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 30,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.constList([C106 || CT.C106], widget_inspector._Location);
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C105 || CT.C105,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 123,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113], widget_inspector._Location);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C112 || CT.C112,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.constList([C116 || CT.C116, C117 || CT.C117], widget_inspector._Location);
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C115 || CT.C115,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 30,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 24,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123, C124 || CT.C124], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 139,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 24,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.constList([C130 || CT.C130], widget_inspector._Location);
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 31,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.constList([C133 || CT.C133], widget_inspector._Location);
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C132 || CT.C132,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.constList([C136 || CT.C136, C137 || CT.C137], widget_inspector._Location);
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C135 || CT.C135,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 24,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.constList([C140 || CT.C140], widget_inspector._Location);
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C139 || CT.C139,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 151,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 28,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.constList([C143 || CT.C143], widget_inspector._Location);
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C142 || CT.C142,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 154,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 24,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.constList([C146 || CT.C146, C147 || CT.C147], widget_inspector._Location);
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C145 || CT.C145,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 155,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 31,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.constList([C150 || CT.C150], widget_inspector._Location);
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C149 || CT.C149,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 153,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.constList([C153 || CT.C153, C154 || CT.C154, C155 || CT.C155], widget_inspector._Location);
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C152 || CT.C152,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 152,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.constList([C158 || CT.C158, C159 || CT.C159], widget_inspector._Location);
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C157 || CT.C157,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.constList([C162 || CT.C162, C163 || CT.C163], widget_inspector._Location);
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C161 || CT.C161,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.constList([C166 || CT.C166, C167 || CT.C167], widget_inspector._Location);
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C165 || CT.C165,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 24,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 24,
        [EdgeInsets_left]: 0
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "event",
        [_Location_column]: 67,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.constList([C171 || CT.C171], widget_inspector._Location);
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C170 || CT.C170,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 216,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemExtent",
        [_Location_column]: 17,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 17,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.constList([C174 || CT.C174, C175 || CT.C175], widget_inspector._Location);
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C173 || CT.C173,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 213,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "sliver",
        [_Location_column]: 15,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C177() {
      return C177 = dart.constList([C178 || CT.C178, C179 || CT.C179], widget_inspector._Location);
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C177 || CT.C177,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 211,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 11,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "slivers",
        [_Location_column]: 11,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.constList([C182 || CT.C182, C183 || CT.C183], widget_inspector._Location);
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C181 || CT.C181,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 208,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C185() {
      return C185 = dart.constList([C186 || CT.C186, C187 || CT.C187], widget_inspector._Location);
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C185 || CT.C185,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 206,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.constList([C190 || CT.C190], widget_inspector._Location);
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C189 || CT.C189,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 205,
        [_Location_file]: "org-dartlang-app:///packages/firststop/frames/dashboard.dart"
      });
    }
  });
  var events$ = dart.privateName(dashboard, "Dashboard.events");
  dashboard.Dashboard = class Dashboard extends framework.StatefulWidget {
    get events() {
      return this[events$];
    }
    set events(value) {
      super.events = value;
    }
    createState() {
      return new dashboard._DashboardState.new();
    }
  };
  (dashboard.Dashboard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let events = opts && 'events' in opts ? opts.events : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[events$] = events;
    dashboard.Dashboard.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = dashboard.Dashboard.prototype;
  dart.addTypeTests(dashboard.Dashboard);
  dart.setMethodSignature(dashboard.Dashboard, () => ({
    __proto__: dart.getMethods(dashboard.Dashboard.__proto__),
    createState: dart.fnType(dashboard._DashboardState, [])
  }));
  dart.setLibraryUri(dashboard.Dashboard, "package:firststop/frames/dashboard.dart");
  dart.setFieldSignature(dashboard.Dashboard, () => ({
    __proto__: dart.getFields(dashboard.Dashboard.__proto__),
    events: dart.finalFieldType(core.List$(Event.Event))
  }));
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
  var C14;
  var C12;
  var C11;
  var C17;
  var C18;
  var C16;
  var C15;
  var C21;
  var C20;
  var C19;
  var C24;
  var C25;
  var C23;
  var C22;
  var C28;
  var C27;
  var C26;
  var C31;
  var C32;
  var C30;
  var C29;
  var C35;
  var C34;
  var C33;
  var C38;
  var C39;
  var C37;
  var C36;
  var C42;
  var C41;
  var C40;
  var C45;
  var C46;
  var C44;
  var C43;
  var C49;
  var C48;
  var C47;
  var C52;
  var C53;
  var C51;
  var C50;
  var C56;
  var C55;
  var C54;
  var C59;
  var C60;
  var C58;
  var C57;
  var C63;
  var C62;
  var C61;
  var C66;
  var C65;
  var C64;
  var C69;
  var C68;
  var C67;
  var C72;
  var C73;
  var C74;
  var C71;
  var C70;
  var C77;
  var C78;
  var C76;
  var C75;
  var C81;
  var C82;
  var C80;
  var C79;
  var C85;
  var C84;
  var C83;
  var C88;
  var C89;
  var C87;
  var C86;
  var C92;
  var C91;
  var C90;
  var C95;
  var C96;
  var C94;
  var C93;
  var C99;
  var C98;
  var C97;
  var C102;
  var C103;
  var C101;
  var C100;
  var C106;
  var C105;
  var C104;
  var C109;
  var C110;
  var C108;
  var C107;
  var C113;
  var C112;
  var C111;
  var C116;
  var C117;
  var C115;
  var C114;
  var C120;
  var C119;
  var C118;
  var C123;
  var C124;
  var C122;
  var C121;
  var C127;
  var C126;
  var C125;
  var C130;
  var C129;
  var C128;
  var C133;
  var C132;
  var C131;
  var C136;
  var C137;
  var C135;
  var C134;
  var C140;
  var C139;
  var C138;
  var C143;
  var C142;
  var C141;
  var C146;
  var C147;
  var C145;
  var C144;
  var _getHeader = dart.privateName(dashboard, "_getHeader");
  var C150;
  var C149;
  var C148;
  var C153;
  var C154;
  var C155;
  var C152;
  var C151;
  var C158;
  var C159;
  var C157;
  var C156;
  var C162;
  var C163;
  var C161;
  var C160;
  var C166;
  var C167;
  var C165;
  var C164;
  var _getMonth = dart.privateName(dashboard, "_getMonth");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C168;
  var C171;
  var C170;
  var C169;
  var C174;
  var C175;
  var C173;
  var C172;
  var C178;
  var C179;
  var C177;
  var C176;
  var C182;
  var C183;
  var C181;
  var C180;
  var C186;
  var C187;
  var C185;
  var C184;
  var C190;
  var C189;
  var C188;
  dashboard._DashboardState = class _DashboardState extends framework.State$(dashboard.Dashboard) {
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.grey._get(50), body: new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(10.0), child: new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.SizedBox.new({width: 50.0, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new basic.SizedBox.new({width: 500.0, child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 30.0, $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), new basic.Column.new({children: JSArrayOfWidget().of([new circle_avatar.CircleAvatar.new({backgroundImage: new image_resolution.AssetImage.new("assets/student.png"), backgroundColor: colors.Colors.red._get(50), radius: 80.0, $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), new divider.Divider.new({color: colors.Colors.blue._get(600), height: 20.0, $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), new text.Text.new("Student Name", {style: new text_style.TextStyle.new({color: colors.Colors.blueAccent, letterSpacing: 1.5, fontSize: 30.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), new basic.Row.new({children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.email, {color: colors.Colors.redAccent, $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), new text.Text.new("student@example.com", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 20.0, letterSpacing: 1.0}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), new basic.SizedBox.new({width: 20.0, $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), new icon.Icon.new(icons.Icons.class__, {color: colors.Colors.redAccent, $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), new text.Text.new("Junior", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 20.0, letterSpacing: 1.0}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43})]), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), new basic.Row.new({children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.assessment, {color: colors.Colors.redAccent, $creationLocationd_0dea112b090073317d4: C50 || CT.C50}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C54 || CT.C54}), new text.Text.new("3.5", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 20.0, letterSpacing: 1.0}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57})]), $creationLocationd_0dea112b090073317d4: C61 || CT.C61})]), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), new basic.SizedBox.new({height: 30.0, $creationLocationd_0dea112b090073317d4: C67 || CT.C67}), new basic.Column.new({children: JSArrayOfWidget().of([new circle_avatar.CircleAvatar.new({backgroundImage: new image_resolution.AssetImage.new("assets/teacher.png"), backgroundColor: colors.Colors.red._get(50), radius: 80.0, $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), new divider.Divider.new({color: colors.Colors.blue._get(600), height: 20.0, $creationLocationd_0dea112b090073317d4: C75 || CT.C75}), new text.Text.new("Advisor Name", {style: new text_style.TextStyle.new({color: colors.Colors.blueAccent, letterSpacing: 1.5, fontSize: 30.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C83 || CT.C83}), new basic.Row.new({children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.email, {color: colors.Colors.redAccent, $creationLocationd_0dea112b090073317d4: C86 || CT.C86}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C90 || CT.C90}), new text.Text.new("advisor@example.com", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 20.0, letterSpacing: 1.0}), $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), new basic.SizedBox.new({width: 20.0, $creationLocationd_0dea112b090073317d4: C97 || CT.C97}), new icon.Icon.new(icons.Icons.phone, {color: colors.Colors.redAccent, $creationLocationd_0dea112b090073317d4: C100 || CT.C100}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C104 || CT.C104}), new text.Text.new("111-111-2222", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 20.0, letterSpacing: 1.0}), $creationLocationd_0dea112b090073317d4: C107 || CT.C107})]), $creationLocationd_0dea112b090073317d4: C111 || CT.C111}), new basic.Row.new({children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.calendar_today, {color: colors.Colors.redAccent, $creationLocationd_0dea112b090073317d4: C114 || CT.C114}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C118 || CT.C118}), new text.Text.new("MWF 12pm - 4pm", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 20.0, letterSpacing: 1.0}), $creationLocationd_0dea112b090073317d4: C121 || CT.C121})]), $creationLocationd_0dea112b090073317d4: C125 || CT.C125})]), $creationLocationd_0dea112b090073317d4: C128 || CT.C128})]), $creationLocationd_0dea112b090073317d4: C131 || CT.C131}), $creationLocationd_0dea112b090073317d4: C134 || CT.C134}), new basic.SizedBox.new({width: 130.0, $creationLocationd_0dea112b090073317d4: C138 || CT.C138}), new basic.SizedBox.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 40.0, $creationLocationd_0dea112b090073317d4: C141 || CT.C141}), new text.Text.new("Upcoming Events\n", {style: new text_style.TextStyle.new({color: colors.Colors.blueAccent, letterSpacing: 1.5, fontSize: 30.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C144 || CT.C144}), this[_getHeader](context)]), $creationLocationd_0dea112b090073317d4: C148 || CT.C148}), width: 650.0, height: 700.0, $creationLocationd_0dea112b090073317d4: C151 || CT.C151})]), $creationLocationd_0dea112b090073317d4: C156 || CT.C156}), $creationLocationd_0dea112b090073317d4: C160 || CT.C160}), $creationLocationd_0dea112b090073317d4: C164 || CT.C164});
    }
    [_getMonth]() {
      switch (dart.toString(new core.DateTime.now().month)) {
        case "1":
        {
          return "Jan";
        }
        case "2":
        {
          return "Feb";
        }
        case "3":
        {
          return "Mar";
        }
        case "4":
        {
          return "Apr";
        }
        case "5":
        {
          return "May";
        }
        case "6":
        {
          return "Jun";
        }
        case "7":
        {
          return "Jul";
        }
        case "8":
        {
          return "Aug";
        }
        case "9":
        {
          return "Sep";
        }
        case "10":
        {
          return "Oct";
        }
        case "11":
        {
          return "Nov";
        }
        case "12":
        {
          return "Dec";
        }
        default:
        {
          return dart.toString(new core.DateTime.now().month);
        }
      }
    }
    [_getHeader](context) {
      return new basic.Expanded.new({child: new container.Container.new({color: colors.Colors.blue._get(50), child: new scroll_view.CustomScrollView.new({scrollDirection: basic_types.Axis.vertical, slivers: JSArrayOfWidget().of([new basic.SliverPadding.new({padding: C168 || CT.C168, sliver: new sliver.SliverFixedExtentList.new({itemExtent: 152.0, delegate: new sliver.SliverChildBuilderDelegate.new(dart.fn((context, index) => new eventrow.EventRow.new(this.widget.events[$_get](index), {$creationLocationd_0dea112b090073317d4: C169 || CT.C169}), BuildContextAndintToEventRow()), {childCount: this.widget.events[$length]}), $creationLocationd_0dea112b090073317d4: C172 || CT.C172}), $creationLocationd_0dea112b090073317d4: C176 || CT.C176})]), $creationLocationd_0dea112b090073317d4: C180 || CT.C180}), $creationLocationd_0dea112b090073317d4: C184 || CT.C184}), $creationLocationd_0dea112b090073317d4: C188 || CT.C188});
    }
  };
  (dashboard._DashboardState.new = function() {
    dashboard._DashboardState.__proto__.new.call(this);
    ;
  }).prototype = dashboard._DashboardState.prototype;
  dart.addTypeTests(dashboard._DashboardState);
  dart.setMethodSignature(dashboard._DashboardState, () => ({
    __proto__: dart.getMethods(dashboard._DashboardState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_getMonth]: dart.fnType(core.String, []),
    [_getHeader]: dart.fnType(framework.Widget, [dart.dynamic])
  }));
  dart.setLibraryUri(dashboard._DashboardState, "package:firststop/frames/dashboard.dart");
  dart.trackLibraries("packages/firststop/frames/dashboard", {
    "package:firststop/frames/dashboard.dart": dashboard
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dashboard.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAOoB;;;;;;;AAEe;IAAiB;;;QAJnC;QAAU;;;AAAzB;;EAAiC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAUP;AACxB,YAAW,6CACe,AAAI,wBAAC,WACvB,gCACkB,+BAAI,cACjB,uCACkC,yCACrB,sBAChB,+BAAgB,6DAChB,+BACS,cACA,gCAAyB,sBAC9B,gCAAiB,6DACjB,gCAAyB,sBACvB,qDACe,oCAAW,wCACJ,AAAG,uBAAC,aACpB,6DAEV,gCAAsB,AAAI,wBAAC,cAAc,+DACzC,kBAAK,wBACM,qCACS,yCACC,eACL,kBACa,+EAE7B,gCAAiB,+DACjB,6BACoB,sBAChB,kBACQ,2BACQ,kFAEhB,+BAAgB,+DAChB,kBAAK,+BACM,qCACS,+BACJ,qBACK,gEAErB,+BAAgB,+DAChB,kBACQ,6BACQ,kFAEhB,+BAAgB,+DAChB,kBAAK,kBACM,qCACS,+BACJ,qBACK,2HAIzB,6BACqB,sBACf,kBACM,gCACQ,kFAEhB,+BAAgB,+DAClB,kBAAK,eACQ,qCACS,+BACJ,qBACK,sLAOzB,gCAAiB,+DACjB,gCAAyB,sBACvB,qDACiB,oCAAW,wCACJ,AAAG,uBAAC,aACpB,+DAEV,gCAAsB,AAAI,wBAAC,cAAc,+DACzC,kBAAK,wBACM,qCACS,yCACC,eACL,kBACa,+EAE7B,gCAAiB,+DACjB,6BACoB,sBAChB,kBACQ,2BACQ,kFAEhB,+BAAgB,+DAChB,kBAAK,+BACM,qCACS,+BACJ,qBACK,gEAErB,+BAAgB,+DAChB,kBACQ,2BACQ,oFAEhB,+BAAgB,iEAChB,kBAAK,wBACM,qCACS,+BACJ,qBACK,+HAIzB,6BACqB,sBACf,kBACM,oCACQ,oFAEhB,+BAAgB,iEAClB,kBAAK,0BACQ,qCACS,+BACJ,qBACK,oTAQ3B,+BAAgB,kEAChB,+BACS,gCAAyB,sBAC9B,gCAAiB,iEACjB,kBAAK,6BACI,qCACS,yCACC,eACL,kBACa,iFAE3B,iBAAW,OAAO,uEAEb,eACC;IAMtB;;AAGE,cAA6B,cAAZ,AAAM;;;AAEnB,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAA4B,eAAZ,AAAM;;;IAE5B;iBAEkB;AACf,YAAW,gCACC,oCACK,AAAI,wBAAC,YACR,uDACa,oCACL,sBACX,+DAEU,kDACE,iBACE,0CACV,SAAC,SAAS,UAAc,0BAAS,AAAO,AAAM,0BAAC,KAAK,6GAC1C,AAAO,AAAO;IAQ1C;;;;;EACF","file":"dashboard.ddc.js"}');
  // Exports:
  return {
    frames__dashboard: dashboard
  };
});

//# sourceMappingURL=dashboard.ddc.js.map
