define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/table_calendar/table_calendar', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__table_calendar__table_calendar, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const layout_builder = packages__flutter__src__widgets__actions.src__widgets__layout_builder;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const table_calendar = packages__table_calendar__table_calendar.table_calendar;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const colors = packages__flutter__material.src__material__colors;
  const circle_avatar = packages__flutter__material.src__material__circle_avatar;
  const divider = packages__flutter__material.src__material__divider;
  const icons = packages__flutter__material.src__material__icons;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const image_resolution = packages__flutter__src__painting___network_image_web.src__painting__image_resolution;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  var dashboard = Object.create(dart.library);
  var $toString = dartx.toString;
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  var BuildContextAndBoxConstraintsToSingleChildScrollView = () => (BuildContextAndBoxConstraintsToSingleChildScrollView = dart.constFn(dart.fnType(single_child_scroll_view.SingleChildScrollView, [framework.BuildContext, box.BoxConstraints])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 28,
        [_Location_line]: 32,
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
        [_Location_column]: 19,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundImage",
        [_Location_column]: 19,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 19,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "radius",
        [_Location_column]: 19,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 48,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 30,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 30,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 30,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 30,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 24,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 26,
        [_Location_line]: 33,
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
        [_Location_column]: 19,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 24,
        [_Location_line]: 93,
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
        [_Location_column]: 15,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundImage",
        [_Location_column]: 19,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 19,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "radius",
        [_Location_column]: 19,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69, C70 || CT.C70, C71 || CT.C71], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C68 || CT.C68,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 48,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 20,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78, C79 || CT.C79], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85, C86 || CT.C86], widget_inspector._Location);
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C84 || CT.C84,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 30,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92, C93 || CT.C93], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C91 || CT.C91,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 30,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96], widget_inspector._Location);
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C95 || CT.C95,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99, C100 || CT.C100], widget_inspector._Location);
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C98 || CT.C98,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 123,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 30,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103], widget_inspector._Location);
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C102 || CT.C102,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.constList([C106 || CT.C106, C107 || CT.C107], widget_inspector._Location);
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C105 || CT.C105,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110], widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C109 || CT.C109,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113, C114 || CT.C114], widget_inspector._Location);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C112 || CT.C112,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 30,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117], widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C116 || CT.C116,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 24,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120, C121 || CT.C121], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.constList([C124 || CT.C124], widget_inspector._Location);
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C123 || CT.C123,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 22,
        [_Location_line]: 94,
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
        [_Location_column]: 15,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 31,
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
        [_Location_column]: 15,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 153,
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
        [_Location_column]: 15,
        [_Location_line]: 153,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 30,
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
        [_Location_column]: 11,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.constList([C140 || CT.C140, C141 || CT.C141], widget_inspector._Location);
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C139 || CT.C139,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.constList([C144 || CT.C144], widget_inspector._Location);
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C143 || CT.C143,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 32,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.constList([C147 || CT.C147], widget_inspector._Location);
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C146 || CT.C146,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.constList([C150 || CT.C150, C151 || CT.C151], widget_inspector._Location);
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C149 || CT.C149,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "calendarController",
        [_Location_column]: 13,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.constList([C154 || CT.C154], widget_inspector._Location);
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C153 || CT.C153,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 196,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.constList([C157 || CT.C157], widget_inspector._Location);
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C156 || CT.C156,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 195,
        [_Location_file]: "org-dartlang-app:///packages/firststop/utils/dashboard.dart"
      });
    }
  });
  var name$ = dart.privateName(dashboard, "Dashboard.name");
  var email$ = dart.privateName(dashboard, "Dashboard.email");
  dashboard.Dashboard = class Dashboard extends framework.StatefulWidget {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get email() {
      return this[email$];
    }
    set email(value) {
      super.email = value;
    }
    createState() {
      return new dashboard._DashboardState.new();
    }
  };
  (dashboard.Dashboard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let email = opts && 'email' in opts ? opts.email : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[name$] = name;
    this[email$] = email;
    dashboard.Dashboard.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = dashboard.Dashboard.prototype;
  dart.addTypeTests(dashboard.Dashboard);
  dart.setMethodSignature(dashboard.Dashboard, () => ({
    __proto__: dart.getMethods(dashboard.Dashboard.__proto__),
    createState: dart.fnType(dashboard._DashboardState, [])
  }));
  dart.setLibraryUri(dashboard.Dashboard, "package:firststop/utils/dashboard.dart");
  dart.setFieldSignature(dashboard.Dashboard, () => ({
    __proto__: dart.getFields(dashboard.Dashboard.__proto__),
    name: dart.finalFieldType(core.String),
    email: dart.finalFieldType(core.String)
  }));
  var _calendarController = dart.privateName(dashboard, "_calendarController");
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C2;
  var C1;
  var C0;
  var C5;
  var C6;
  var C7;
  var C4;
  var C3;
  var C10;
  var C11;
  var C9;
  var C8;
  var C14;
  var C15;
  var C13;
  var C12;
  var C18;
  var C17;
  var C16;
  var C21;
  var C22;
  var C20;
  var C19;
  var C25;
  var C24;
  var C23;
  var C28;
  var C29;
  var C27;
  var C26;
  var C32;
  var C31;
  var C30;
  var C35;
  var C36;
  var C34;
  var C33;
  var C39;
  var C38;
  var C37;
  var C42;
  var C43;
  var C41;
  var C40;
  var C46;
  var C45;
  var C44;
  var C49;
  var C50;
  var C48;
  var C47;
  var C53;
  var C52;
  var C51;
  var C56;
  var C57;
  var C55;
  var C54;
  var C60;
  var C59;
  var C58;
  var C63;
  var C62;
  var C61;
  var C66;
  var C65;
  var C64;
  var C69;
  var C70;
  var C71;
  var C68;
  var C67;
  var C74;
  var C75;
  var C73;
  var C72;
  var C78;
  var C79;
  var C77;
  var C76;
  var C82;
  var C81;
  var C80;
  var C85;
  var C86;
  var C84;
  var C83;
  var C89;
  var C88;
  var C87;
  var C92;
  var C93;
  var C91;
  var C90;
  var C96;
  var C95;
  var C94;
  var C99;
  var C100;
  var C98;
  var C97;
  var C103;
  var C102;
  var C101;
  var C106;
  var C107;
  var C105;
  var C104;
  var C110;
  var C109;
  var C108;
  var C113;
  var C114;
  var C112;
  var C111;
  var C117;
  var C116;
  var C115;
  var C120;
  var C121;
  var C119;
  var C118;
  var C124;
  var C123;
  var C122;
  var C127;
  var C126;
  var C125;
  var C130;
  var C129;
  var C128;
  var C133;
  var C132;
  var C131;
  var _getHeader = dart.privateName(dashboard, "_getHeader");
  var C136;
  var C137;
  var C135;
  var C134;
  var C140;
  var C141;
  var C139;
  var C138;
  var C144;
  var C143;
  var C142;
  var C147;
  var C146;
  var C145;
  var C150;
  var C151;
  var C149;
  var C148;
  var _getMonth = dart.privateName(dashboard, "_getMonth");
  var C154;
  var C153;
  var C152;
  var C157;
  var C156;
  var C155;
  dashboard._DashboardState = class _DashboardState extends framework.State$(dashboard.Dashboard) {
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.grey._get(50), body: new layout_builder.LayoutBuilder.new({builder: dart.fn((context, viewportConstraints) => new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(10.0), child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Row.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({width: 80.0, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new basic.Column.new({children: JSArrayOfWidget().of([new circle_avatar.CircleAvatar.new({backgroundImage: new image_resolution.AssetImage.new("assets/student.png"), backgroundColor: colors.Colors.red._get(50), radius: 80.0, $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), new divider.Divider.new({color: colors.Colors.blue._get(600), height: 20.0, $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), new text.Text.new(this.widget.name, {style: new text_style.TextStyle.new({color: colors.Colors.blueAccent, letterSpacing: 1.5, fontSize: 30.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), new basic.Row.new({children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.email, {color: colors.Colors.redAccent, $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), new text.Text.new(this.widget.email, {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 20.0, letterSpacing: 1.0}), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), new basic.SizedBox.new({width: 20.0, $creationLocationd_0dea112b090073317d4: C30 || CT.C30}), new icon.Icon.new(icons.Icons.phone, {color: colors.Colors.redAccent, $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), new text.Text.new("Junior", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 20.0, letterSpacing: 1.0}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40})]), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), new basic.Row.new({children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.calendar_today, {color: colors.Colors.redAccent, $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), new text.Text.new("3.5", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 20.0, letterSpacing: 1.0}), $creationLocationd_0dea112b090073317d4: C54 || CT.C54})]), $creationLocationd_0dea112b090073317d4: C58 || CT.C58})]), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), new basic.SizedBox.new({width: 150.0, $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), new basic.Column.new({children: JSArrayOfWidget().of([new circle_avatar.CircleAvatar.new({backgroundImage: new image_resolution.AssetImage.new("assets/teacher.png"), backgroundColor: colors.Colors.red._get(50), radius: 80.0, $creationLocationd_0dea112b090073317d4: C67 || CT.C67}), new divider.Divider.new({color: colors.Colors.blue._get(600), height: 20.0, $creationLocationd_0dea112b090073317d4: C72 || CT.C72}), new text.Text.new("Advisor Name", {style: new text_style.TextStyle.new({color: colors.Colors.blueAccent, letterSpacing: 1.5, fontSize: 30.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C76 || CT.C76}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C80 || CT.C80}), new basic.Row.new({children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.email, {color: colors.Colors.redAccent, $creationLocationd_0dea112b090073317d4: C83 || CT.C83}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C87 || CT.C87}), new text.Text.new("advisor@example.com", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 20.0, letterSpacing: 1.0}), $creationLocationd_0dea112b090073317d4: C90 || CT.C90}), new basic.SizedBox.new({width: 20.0, $creationLocationd_0dea112b090073317d4: C94 || CT.C94}), new icon.Icon.new(icons.Icons.phone, {color: colors.Colors.redAccent, $creationLocationd_0dea112b090073317d4: C97 || CT.C97}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C101 || CT.C101}), new text.Text.new("111-111-2222", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 20.0, letterSpacing: 1.0}), $creationLocationd_0dea112b090073317d4: C104 || CT.C104})]), $creationLocationd_0dea112b090073317d4: C108 || CT.C108}), new basic.Row.new({children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.calendar_today, {color: colors.Colors.redAccent, $creationLocationd_0dea112b090073317d4: C111 || CT.C111}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C115 || CT.C115}), new text.Text.new("MWF 12pm - 4pm", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 20.0, letterSpacing: 1.0}), $creationLocationd_0dea112b090073317d4: C118 || CT.C118})]), $creationLocationd_0dea112b090073317d4: C122 || CT.C122})]), $creationLocationd_0dea112b090073317d4: C125 || CT.C125})]), $creationLocationd_0dea112b090073317d4: C128 || CT.C128}), new basic.SizedBox.new({height: 60.0, $creationLocationd_0dea112b090073317d4: C131 || CT.C131}), this[_getHeader](context)]), $creationLocationd_0dea112b090073317d4: C134 || CT.C134}), $creationLocationd_0dea112b090073317d4: C138 || CT.C138}), $creationLocationd_0dea112b090073317d4: C142 || CT.C142}), BuildContextAndBoxConstraintsToSingleChildScrollView()), $creationLocationd_0dea112b090073317d4: C145 || CT.C145}), $creationLocationd_0dea112b090073317d4: C148 || CT.C148});
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
      return new container.Container.new({child: new table_calendar.TableCalendar.new({calendarController: this[_calendarController], $creationLocationd_0dea112b090073317d4: C152 || CT.C152}), $creationLocationd_0dea112b090073317d4: C155 || CT.C155});
    }
  };
  (dashboard._DashboardState.new = function() {
    this[_calendarController] = new table_calendar.CalendarController.new();
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
  dart.setLibraryUri(dashboard._DashboardState, "package:firststop/utils/dashboard.dart");
  dart.setFieldSignature(dashboard._DashboardState, () => ({
    __proto__: dart.getFields(dashboard._DashboardState.__proto__),
    [_calendarController]: dart.finalFieldType(table_calendar.CalendarController)
  }));
  dart.trackLibraries("packages/firststop/utils/dashboard", {
    "package:firststop/utils/dashboard.dart": dashboard
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dashboard.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMe;;;;;;IACA;;;;;;;AAGoB;IAAiB;;;QANnC;QAAU;QAAW;;IAAX;IAAW;AAApC;;EAA2C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAcjB;AACxB,YAAW,6CACe,AAAI,wBAAC,WACnB,+CACJ,SAAc,SAAwB,wBAC3B,+DACkB,gCACX,+BAAI,cAExB,0CACyC,yCACrB,sBAChB,6BAAsB,sBAClB,+BAAgB,6DAChB,gCAAyB,sBACvB,qDACe,oCAAW,wCACJ,AAAG,uBAAC,aACpB,6DAEZ,gCAAsB,AAAI,wBAAC,cAAc,6DACzC,kBAAK,AAAO,0BACC,qCACS,yCACC,eACL,kBACa,+EAE/B,gCAAiB,+DACjB,6BACsB,sBAChB,kBACQ,2BACQ,kFAEhB,+BAAgB,+DAChB,kBAAK,AAAO,2BACD,qCACS,+BACJ,qBACK,gEAErB,+BAAgB,+DAChB,kBACQ,2BACQ,kFAEhB,+BAAgB,+DAChB,kBAAK,kBACM,qCACS,+BACJ,qBACK,2HAI3B,6BACuB,sBACf,kBACM,oCACQ,kFAEhB,+BAAgB,+DAClB,kBAAK,eACQ,qCACS,+BACJ,qBACK,sLAO3B,+BAAgB,gEAChB,gCAAyB,sBACrB,qDACiB,oCAAW,wCACJ,AAAG,uBAAC,aACpB,+DAEZ,gCAAsB,AAAI,wBAAC,cAAc,+DACzC,kBAAK,wBACQ,qCACS,yCACC,eACL,kBACa,+EAE/B,gCAAiB,+DACjB,6BACsB,sBAChB,kBACQ,2BACQ,kFAEhB,+BAAgB,+DAChB,kBAAK,+BACM,qCACS,+BACJ,qBACK,gEAErB,+BAAgB,+DAChB,kBACQ,2BACQ,kFAEhB,+BAAgB,iEAChB,kBAAK,wBACM,qCACS,+BACJ,qBACK,+HAI3B,6BACuB,sBACf,kBACM,oCACQ,oFAEhB,+BAAgB,iEAClB,kBAAK,0BACQ,qCACS,+BACJ,qBACK,yPAM3B,gCAAiB,iEACjB,iBAAW,OAAO;IAO9B;;AAGE,cAA6B,cAAZ,AAAM;;;AAEnB,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAA4B,eAAZ,AAAM;;;IAE5B;iBAEkB;AAChB,YAAO,qCACU,0DACW;IAG9B;;;IAxLM,4BAAsB;;;EAyL9B","file":"dashboard.ddc.js"}');
  // Exports:
  return {
    utils__dashboard: dashboard
  };
});

//# sourceMappingURL=dashboard.ddc.js.map
