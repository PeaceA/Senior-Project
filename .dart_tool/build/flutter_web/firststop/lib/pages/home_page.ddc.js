<<<<<<< HEAD
define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/firststop/utils/auth', 'packages/firststop/models/Event', 'packages/firststop/models/GoogleHttpClient', 'packages/googleapis/calendar/v3', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web', 'packages/firststop/utils/messagepopup', 'packages/firststop/utils/boardpopup', 'packages/firststop/utils/bugpopup', 'packages/firststop/frames/dashboard'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__firststop__utils__auth, packages__firststop__models__Event, packages__firststop__models__GoogleHttpClient, packages__googleapis__calendar__v3, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web, packages__firststop__utils__messagepopup, packages__firststop__utils__boardpopup, packages__firststop__utils__bugpopup, packages__firststop__frames__dashboard) {
=======
define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/firststop/utils/auth', 'packages/firebase/src/app', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web', 'packages/firststop/utils/messagepopup', 'packages/firststop/utils/boardpopup', 'packages/firststop/utils/bugpopup', 'packages/firststop/utils/dashboard'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__firststop__utils__auth, packages__firebase__src__app, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web, packages__firststop__utils__messagepopup, packages__firststop__utils__boardpopup, packages__firststop__utils__bugpopup, packages__firststop__utils__dashboard) {
>>>>>>> merge-dashboard-login
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const auth = packages__firststop__utils__auth.utils__auth;
<<<<<<< HEAD
  const Event = packages__firststop__models__Event.models__Event;
  const GoogleHttpClient = packages__firststop__models__GoogleHttpClient.models__GoogleHttpClient;
  const v3 = packages__googleapis__calendar__v3.calendar__v3;
=======
  const auth$ = packages__firebase__src__app.src__auth;
>>>>>>> merge-dashboard-login
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const flutter_logo = packages__flutter__material.src__material__flutter_logo;
  const colors = packages__flutter__material.src__material__colors;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const icons = packages__flutter__material.src__material__icons;
  const drawer = packages__flutter__material.src__material__drawer;
  const circle_avatar = packages__flutter__material.src__material__circle_avatar;
  const user_accounts_drawer_header = packages__flutter__material.src__material__user_accounts_drawer_header;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const image_resolution = packages__flutter__src__painting___network_image_web.src__painting__image_resolution;
  const messagepopup = packages__firststop__utils__messagepopup.utils__messagepopup;
  const boardpopup = packages__firststop__utils__boardpopup.utils__boardpopup;
  const bugpopup = packages__firststop__utils__bugpopup.utils__bugpopup;
  const dashboard = packages__firststop__frames__dashboard.frames__dashboard;
  var home_page = Object.create(dart.library);
  var $add = dartx.add;
  var $forEach = dartx.forEach;
  var $toString = dartx.toString;
<<<<<<< HEAD
  var JSArrayOfEvent = () => (JSArrayOfEvent = dart.constFn(_interceptors.JSArray$(Event.Event)))();
  var MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  var EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core.Null, [v3.Event])))();
  var EventsToNull = () => (EventsToNull = dart.constFn(dart.fnType(core.Null, [v3.Events])))();
  var ListOfEvent = () => (ListOfEvent = dart.constFn(core.List$(Event.Event)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var ListOfEventToNull = () => (ListOfEventToNull = dart.constFn(dart.fnType(core.Null, [ListOfEvent()])))();
=======
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var UserToNull = () => (UserToNull = dart.constFn(dart.fnType(core.Null, [auth$.User])))();
>>>>>>> merge-dashboard-login
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "colors",
        [_Location_column]: 15,
<<<<<<< HEAD
        [_Location_line]: 74,
=======
        [_Location_line]: 53,
>>>>>>> merge-dashboard-login
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
        [_Location_column]: 13,
<<<<<<< HEAD
        [_Location_line]: 73,
=======
        [_Location_line]: 52,
>>>>>>> merge-dashboard-login
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 8
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 79,
=======
        [_Location_line]: 58,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 80,
=======
        [_Location_line]: 59,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 22,
<<<<<<< HEAD
        [_Location_line]: 78,
=======
        [_Location_line]: 57,
>>>>>>> merge-dashboard-login
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
<<<<<<< HEAD
        [_Location_line]: 77,
=======
        [_Location_line]: 56,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
<<<<<<< HEAD
        [_Location_line]: 78,
=======
        [_Location_line]: 57,
>>>>>>> merge-dashboard-login
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
        [_Location_column]: 13,
<<<<<<< HEAD
        [_Location_line]: 76,
=======
        [_Location_line]: 55,
>>>>>>> merge-dashboard-login
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
<<<<<<< HEAD
        [_Location_line]: 71,
=======
        [_Location_line]: 50,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
<<<<<<< HEAD
        [_Location_line]: 72,
=======
        [_Location_line]: 51,
>>>>>>> merge-dashboard-login
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
        [_Location_column]: 16,
<<<<<<< HEAD
        [_Location_line]: 70,
=======
        [_Location_line]: 49,
>>>>>>> merge-dashboard-login
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
<<<<<<< HEAD
        [_Location_line]: 88,
=======
        [_Location_line]: 67,
>>>>>>> merge-dashboard-login
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
<<<<<<< HEAD
        [_Location_line]: 88,
=======
        [_Location_line]: 67,
>>>>>>> merge-dashboard-login
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
<<<<<<< HEAD
        [_Location_line]: 93,
=======
        [_Location_line]: 72,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 95,
=======
        [_Location_line]: 74,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 96,
=======
        [_Location_line]: 75,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 15,
<<<<<<< HEAD
        [_Location_line]: 89,
=======
        [_Location_line]: 68,
>>>>>>> merge-dashboard-login
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 18,
<<<<<<< HEAD
        [_Location_line]: 87,
=======
        [_Location_line]: 66,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 11,
<<<<<<< HEAD
        [_Location_line]: 87,
=======
        [_Location_line]: 66,
>>>>>>> merge-dashboard-login
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 21,
<<<<<<< HEAD
        [_Location_line]: 102,
=======
        [_Location_line]: 81,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
<<<<<<< HEAD
        [_Location_line]: 103,
=======
        [_Location_line]: 82,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 19,
<<<<<<< HEAD
        [_Location_line]: 101,
=======
        [_Location_line]: 80,
>>>>>>> merge-dashboard-login
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
<<<<<<< HEAD
        [_Location_line]: 101,
=======
        [_Location_line]: 80,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
<<<<<<< HEAD
        [_Location_line]: 105,
=======
        [_Location_line]: 84,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 11,
<<<<<<< HEAD
        [_Location_line]: 100,
=======
        [_Location_line]: 79,
>>>>>>> merge-dashboard-login
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 21,
<<<<<<< HEAD
        [_Location_line]: 111,
=======
        [_Location_line]: 90,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
<<<<<<< HEAD
        [_Location_line]: 112,
=======
        [_Location_line]: 91,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 19,
<<<<<<< HEAD
        [_Location_line]: 110,
=======
        [_Location_line]: 89,
>>>>>>> merge-dashboard-login
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
<<<<<<< HEAD
        [_Location_line]: 110,
=======
        [_Location_line]: 89,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
<<<<<<< HEAD
        [_Location_line]: 114,
=======
        [_Location_line]: 93,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 11,
<<<<<<< HEAD
        [_Location_line]: 109,
=======
        [_Location_line]: 88,
>>>>>>> merge-dashboard-login
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 21,
<<<<<<< HEAD
        [_Location_line]: 120,
=======
        [_Location_line]: 99,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
<<<<<<< HEAD
        [_Location_line]: 121,
=======
        [_Location_line]: 100,
>>>>>>> merge-dashboard-login
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
        [_Location_column]: 19,
<<<<<<< HEAD
        [_Location_line]: 119,
=======
        [_Location_line]: 98,
>>>>>>> merge-dashboard-login
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
<<<<<<< HEAD
        [_Location_line]: 119,
=======
        [_Location_line]: 98,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
<<<<<<< HEAD
        [_Location_line]: 123,
=======
        [_Location_line]: 102,
>>>>>>> merge-dashboard-login
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
        [_Location_column]: 11,
<<<<<<< HEAD
        [_Location_line]: 118,
=======
        [_Location_line]: 97,
>>>>>>> merge-dashboard-login
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 21,
<<<<<<< HEAD
        [_Location_line]: 129,
=======
        [_Location_line]: 108,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
<<<<<<< HEAD
        [_Location_line]: 130,
=======
        [_Location_line]: 109,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 19,
<<<<<<< HEAD
        [_Location_line]: 128,
=======
        [_Location_line]: 107,
>>>>>>> merge-dashboard-login
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
<<<<<<< HEAD
        [_Location_line]: 128,
=======
        [_Location_line]: 107,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
<<<<<<< HEAD
        [_Location_line]: 132,
=======
        [_Location_line]: 111,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 11,
<<<<<<< HEAD
        [_Location_line]: 127,
=======
        [_Location_line]: 106,
>>>>>>> merge-dashboard-login
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
<<<<<<< HEAD
        [_Location_line]: 70,
=======
        [_Location_line]: 49,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "centerTitle",
        [_Location_column]: 9,
<<<<<<< HEAD
        [_Location_line]: 85,
=======
        [_Location_line]: 64,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
<<<<<<< HEAD
        [_Location_line]: 86,
=======
        [_Location_line]: 65,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61, C62 || CT.C62, C63 || CT.C63], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 15,
<<<<<<< HEAD
        [_Location_line]: 69,
=======
        [_Location_line]: 48,
>>>>>>> merge-dashboard-login
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 30,
        [EdgeInsets_right]: 30,
        [EdgeInsets_top]: 30,
        [EdgeInsets_left]: 30
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
<<<<<<< HEAD
        [_Location_name]: "events",
        [_Location_column]: 26,
        [_Location_line]: 140,
=======
        [_Location_name]: "email",
        [_Location_column]: 30,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 44,
        [_Location_line]: 119,
>>>>>>> merge-dashboard-login
        [_Location_file]: null
      });
    },
    get C66() {
<<<<<<< HEAD
      return C66 = dart.constList([C67 || CT.C67], widget_inspector._Location);
=======
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68], widget_inspector._Location);
>>>>>>> merge-dashboard-login
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
<<<<<<< HEAD
        [_Location_column]: 16,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
=======
        [_Location_column]: 20,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
<<<<<<< HEAD
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
=======
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
<<<<<<< HEAD
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70, C71 || CT.C71], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
=======
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundImage",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
=======
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
=======
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "radius",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75, C76 || CT.C76], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
=======
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76, C77 || CT.C77], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
<<<<<<< HEAD
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
=======
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
<<<<<<< HEAD
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79, C80 || CT.C80], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 155,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
=======
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80, C81 || CT.C81], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
<<<<<<< HEAD
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
=======
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
<<<<<<< HEAD
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
=======
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84, C85 || CT.C85], widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C83 || CT.C83,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "accountName",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
=======
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "accountEmail",
        [_Location_column]: 18,
<<<<<<< HEAD
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87, C88 || CT.C88], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 154,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
=======
        [_Location_line]: 143,
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
        [_Location_column]: 22,
        [_Location_line]: 133,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
=======
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.const({
=======
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
<<<<<<< HEAD
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91, C92 || CT.C92, C93 || CT.C93], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 151,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
=======
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92, C93 || CT.C93, C94 || CT.C94], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C91 || CT.C91,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 25,
<<<<<<< HEAD
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
=======
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
<<<<<<< HEAD
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96, C97 || CT.C97], widget_inspector._Location);
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C95 || CT.C95,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 174,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
=======
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 153,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
<<<<<<< HEAD
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
=======
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
<<<<<<< HEAD
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100, C101 || CT.C101], widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 178,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
=======
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101, C102 || CT.C102], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C100 || CT.C100,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
=======
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
=======
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105, C106 || CT.C106], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
=======
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.constList([C105 || CT.C105, C106 || CT.C106, C107 || CT.C107], widget_inspector._Location);
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C104 || CT.C104,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 152,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 25,
<<<<<<< HEAD
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
=======
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
<<<<<<< HEAD
        [_Location_line]: 193,
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
        [_Location_column]: 26,
        [_Location_line]: 191,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
=======
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110, C111 || CT.C111], widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C109 || CT.C109,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 170,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
<<<<<<< HEAD
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
=======
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
<<<<<<< HEAD
        [_Location_line]: 197,
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
        [_Location_column]: 24,
        [_Location_line]: 195,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
=======
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.constList([C114 || CT.C114, C115 || CT.C115], widget_inspector._Location);
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C113 || CT.C113,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 174,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C118() {
      return C118 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
=======
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
=======
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117, C118 || CT.C118, C119 || CT.C119], widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C116 || CT.C116,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 25,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.constList([C122 || CT.C122, C123 || CT.C123], widget_inspector._Location);
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C121 || CT.C121,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 208,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.constList([C126 || CT.C126, C127 || CT.C127], widget_inspector._Location);
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C125 || CT.C125,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 212,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 17,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 17,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.constList([C130 || CT.C130, C131 || CT.C131, C132 || CT.C132], widget_inspector._Location);
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 207,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 25,
        [_Location_line]: 226,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.const({
=======
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.constList([C118 || CT.C118, C119 || CT.C119, C120 || CT.C120], widget_inspector._Location);
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 169,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 25,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
<<<<<<< HEAD
        [_Location_line]: 227,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.constList([C135 || CT.C135, C136 || CT.C136], widget_inspector._Location);
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C134 || CT.C134,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 225,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C139() {
      return C139 = dart.const({
=======
        [_Location_line]: 189,
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
        [_Location_column]: 26,
        [_Location_line]: 187,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 230,
        [_Location_file]: null
      });
    },
<<<<<<< HEAD
    get C140() {
      return C140 = dart.const({
=======
    get C128() {
      return C128 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
<<<<<<< HEAD
    get C138() {
      return C138 = dart.constList([C139 || CT.C139, C140 || CT.C140], widget_inspector._Location);
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C138 || CT.C138,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 229,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C143() {
      return C143 = dart.const({
=======
    get C126() {
      return C126 = dart.constList([C127 || CT.C127, C128 || CT.C128], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 191,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C131() {
      return C131 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
=======
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
=======
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 17,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
<<<<<<< HEAD
    get C142() {
      return C142 = dart.constList([C143 || CT.C143, C144 || CT.C144, C145 || CT.C145], widget_inspector._Location);
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C142 || CT.C142,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 224,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C147() {
      return C147 = dart.constList([], widget_inspector._Location);
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C147 || CT.C147,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 242,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C150() {
      return C150 = dart.const({
=======
    get C130() {
      return C130 = dart.constList([C131 || CT.C131, C132 || CT.C132, C133 || CT.C133], widget_inspector._Location);
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C130 || CT.C130,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 186,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C136() {
      return C136 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 25,
<<<<<<< HEAD
        [_Location_line]: 245,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 246,
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
        [_Location_column]: 26,
        [_Location_line]: 244,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 251,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 252,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.constList([C154 || CT.C154, C155 || CT.C155], widget_inspector._Location);
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C153 || CT.C153,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 248,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 17,
        [_Location_line]: 244,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
        [_Location_line]: 248,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 17,
        [_Location_line]: 258,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.constList([C158 || CT.C158, C159 || CT.C159, C160 || CT.C160], widget_inspector._Location);
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C157 || CT.C157,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 243,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 25,
        [_Location_line]: 264,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.const({
=======
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
<<<<<<< HEAD
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.constList([C163 || CT.C163, C164 || CT.C164], widget_inspector._Location);
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C162 || CT.C162,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 263,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C167() {
      return C167 = dart.const({
=======
        [_Location_line]: 208,
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
        [_Location_column]: 26,
        [_Location_line]: 206,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
<<<<<<< HEAD
        [_Location_line]: 268,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.const({
=======
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
<<<<<<< HEAD
        [_Location_line]: 269,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.constList([C167 || CT.C167, C168 || CT.C168], widget_inspector._Location);
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C166 || CT.C166,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 267,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C171() {
      return C171 = dart.const({
=======
        [_Location_line]: 212,
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
        [_Location_column]: 24,
        [_Location_line]: 210,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C144() {
      return C144 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 263,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.const({
=======
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 267,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.const({
=======
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 276,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.constList([C171 || CT.C171, C172 || CT.C172, C173 || CT.C173], widget_inspector._Location);
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C170 || CT.C170,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 262,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C147 || CT.C147,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 280,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C177() {
      return C177 = dart.const({
=======
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.constList([C144 || CT.C144, C145 || CT.C145, C146 || CT.C146], widget_inspector._Location);
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C143 || CT.C143,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 205,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C149() {
      return C149 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 25,
<<<<<<< HEAD
        [_Location_line]: 283,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.const({
=======
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
<<<<<<< HEAD
        [_Location_line]: 284,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.constList([C177 || CT.C177, C178 || CT.C178], widget_inspector._Location);
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C176 || CT.C176,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 282,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C181() {
      return C181 = dart.const({
=======
        [_Location_line]: 226,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.constList([C149 || CT.C149, C150 || CT.C150], widget_inspector._Location);
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C148 || CT.C148,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 224,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C153() {
      return C153 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
<<<<<<< HEAD
        [_Location_line]: 287,
        [_Location_file]: null
      });
    },
    get C182() {
      return C182 = dart.const({
=======
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
<<<<<<< HEAD
        [_Location_line]: 288,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.constList([C181 || CT.C181, C182 || CT.C182], widget_inspector._Location);
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C180 || CT.C180,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 286,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C185() {
      return C185 = dart.const({
=======
        [_Location_line]: 230,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.constList([C153 || CT.C153, C154 || CT.C154], widget_inspector._Location);
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C152 || CT.C152,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 228,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C157() {
      return C157 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 282,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.const({
=======
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 286,
        [_Location_file]: null
      });
    },
    get C187() {
      return C187 = dart.const({
=======
        [_Location_line]: 228,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 17,
<<<<<<< HEAD
        [_Location_line]: 294,
        [_Location_file]: null
      });
    },
    get C184() {
      return C184 = dart.constList([C185 || CT.C185, C186 || CT.C186, C187 || CT.C187], widget_inspector._Location);
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C184 || CT.C184,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 281,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C190() {
      return C190 = dart.const({
=======
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.constList([C157 || CT.C157, C158 || CT.C158, C159 || CT.C159], widget_inspector._Location);
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C156 || CT.C156,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 223,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C162() {
      return C162 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
<<<<<<< HEAD
        [_Location_line]: 145,
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
        [_Location_column]: 18,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C193() {
      return C193 = dart.const({
=======
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.constList([C162 || CT.C162], widget_inspector._Location);
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C161 || CT.C161,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 123,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C165() {
      return C165 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
<<<<<<< HEAD
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C192() {
      return C192 = dart.constList([C193 || CT.C193], widget_inspector._Location);
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C192 || CT.C192,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C196() {
      return C196 = dart.const({
=======
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.constList([C165 || CT.C165], widget_inspector._Location);
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C164 || CT.C164,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C168() {
      return C168 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
<<<<<<< HEAD
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C195() {
      return C195 = dart.constList([C196 || CT.C196], widget_inspector._Location);
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C195 || CT.C195,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C199() {
      return C199 = dart.const({
=======
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.constList([C168 || CT.C168], widget_inspector._Location);
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C167 || CT.C167,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    },
    get C171() {
      return C171 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
<<<<<<< HEAD
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.const({
=======
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
<<<<<<< HEAD
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C201() {
      return C201 = dart.const({
=======
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.const({
>>>>>>> merge-dashboard-login
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "drawer",
        [_Location_column]: 7,
<<<<<<< HEAD
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C198() {
      return C198 = dart.constList([C199 || CT.C199, C200 || CT.C200, C201 || CT.C201], widget_inspector._Location);
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C198 || CT.C198,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 68,
=======
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.constList([C171 || CT.C171, C172 || CT.C172, C173 || CT.C173], widget_inspector._Location);
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C170 || CT.C170,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 47,
>>>>>>> merge-dashboard-login
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/home_page.dart"
      });
    }
  });
  var auth$0 = dart.privateName(home_page, "HomePage.auth");
  var logoutCallback$ = dart.privateName(home_page, "HomePage.logoutCallback");
  var userId$ = dart.privateName(home_page, "HomePage.userId");
  home_page.HomePage = class HomePage extends framework.StatefulWidget {
    get auth() {
      return this[auth$0];
    }
    set auth(value) {
      super.auth = value;
    }
    get logoutCallback() {
      return this[logoutCallback$];
    }
    set logoutCallback(value) {
      super.logoutCallback = value;
    }
    get userId() {
      return this[userId$];
    }
    set userId(value) {
      super.userId = value;
    }
    createState() {
      return new home_page._HomePageState.new();
    }
  };
  (home_page.HomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let auth = opts && 'auth' in opts ? opts.auth : null;
    let userId = opts && 'userId' in opts ? opts.userId : null;
    let logoutCallback = opts && 'logoutCallback' in opts ? opts.logoutCallback : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[auth$0] = auth;
    this[userId$] = userId;
    this[logoutCallback$] = logoutCallback;
    home_page.HomePage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home_page.HomePage.prototype;
  dart.addTypeTests(home_page.HomePage);
  dart.setMethodSignature(home_page.HomePage, () => ({
    __proto__: dart.getMethods(home_page.HomePage.__proto__),
    createState: dart.fnType(home_page._HomePageState, [])
  }));
  dart.setLibraryUri(home_page.HomePage, "package:firststop/pages/home_page.dart");
  dart.setFieldSignature(home_page.HomePage, () => ({
    __proto__: dart.getFields(home_page.HomePage.__proto__),
    auth: dart.finalFieldType(auth.BaseAuth),
    logoutCallback: dart.finalFieldType(dart.fnType(dart.void, [])),
    userId: dart.finalFieldType(core.String)
  }));
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C2;
  var C1;
  var C0;
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C3;
  var C6;
  var C7;
  var C5;
  var C4;
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
  var C23;
  var C20;
  var C19;
  var C26;
  var C25;
  var C24;
  var C29;
  var C30;
  var C28;
  var C27;
  var C33;
  var C34;
  var C32;
  var C31;
  var C37;
  var C38;
  var C36;
  var C35;
  var C41;
  var C42;
  var C40;
  var C39;
  var C45;
  var C46;
  var C44;
  var C43;
  var C49;
  var C50;
  var C48;
  var C47;
  var C53;
  var C54;
  var C52;
  var C51;
  var C57;
  var C58;
  var C56;
  var C55;
  var C61;
  var C62;
  var C63;
  var C60;
  var C59;
  var C64;
  var C67;
<<<<<<< HEAD
  var C66;
  var C65;
  var C70;
  var C71;
  var C69;
  var C68;
  var C74;
  var C75;
  var C76;
  var C73;
  var C72;
  var C79;
  var C80;
  var C78;
  var C77;
  var C83;
  var C84;
  var C82;
  var C81;
  var C87;
  var C88;
  var C86;
  var C85;
  var C91;
  var C92;
  var C93;
  var C90;
  var C89;
  var C96;
  var C97;
  var C95;
  var C94;
  var C100;
  var C101;
  var C99;
  var C98;
  var C104;
  var C105;
  var C106;
  var C103;
  var C102;
  var C109;
  var C110;
  var C108;
  var C107;
  var C113;
  var C114;
  var C112;
  var C111;
  var C117;
  var C118;
  var C119;
  var C116;
  var C115;
  var C122;
  var C123;
  var C121;
  var C120;
  var C126;
  var C127;
  var C125;
  var C124;
  var C130;
  var C131;
  var C132;
  var C129;
  var C128;
  var C135;
  var C136;
  var C134;
  var C133;
  var C139;
  var C140;
  var C138;
  var C137;
  var C143;
  var C144;
  var C145;
  var C142;
  var C141;
  var C147;
  var C146;
  var C150;
  var C151;
  var C149;
  var C148;
  var C154;
  var C155;
  var C153;
  var C152;
  var C158;
  var C159;
  var C160;
  var C157;
  var C156;
  var C163;
  var C164;
  var C162;
  var C161;
  var C167;
  var C168;
  var C166;
  var C165;
=======
  var C68;
  var C66;
  var C65;
  var C71;
  var C72;
  var C70;
  var C69;
  var C75;
  var C76;
  var C77;
  var C74;
  var C73;
  var C80;
  var C81;
  var C79;
  var C78;
  var C84;
  var C85;
  var C83;
  var C82;
  var C88;
  var C89;
  var C87;
  var C86;
  var C92;
  var C93;
  var C94;
  var C91;
  var C90;
  var C97;
  var C98;
  var C96;
  var C95;
  var C101;
  var C102;
  var C100;
  var C99;
  var C105;
  var C106;
  var C107;
  var C104;
  var C103;
  var C110;
  var C111;
  var C109;
  var C108;
  var C114;
  var C115;
  var C113;
  var C112;
  var C118;
  var C119;
  var C120;
  var C117;
  var C116;
  var C123;
  var C124;
  var C122;
  var C121;
  var C127;
  var C128;
  var C126;
  var C125;
  var C131;
  var C132;
  var C133;
  var C130;
  var C129;
  var C136;
  var C137;
  var C135;
  var C134;
  var C140;
  var C141;
  var C139;
  var C138;
  var C144;
  var C145;
  var C146;
  var C143;
  var C142;
  var C149;
  var C150;
  var C148;
  var C147;
  var C153;
  var C154;
  var C152;
  var C151;
  var C157;
  var C158;
  var C159;
  var C156;
  var C155;
  var C162;
  var C161;
  var C160;
  var C165;
  var C164;
  var C163;
  var C168;
  var C167;
  var C166;
>>>>>>> merge-dashboard-login
  var C171;
  var C172;
  var C173;
  var C170;
  var C169;
<<<<<<< HEAD
  var C174;
  var C177;
  var C178;
  var C176;
  var C175;
  var C181;
  var C182;
  var C180;
  var C179;
  var C185;
  var C186;
  var C187;
  var C184;
  var C183;
  var C190;
  var C189;
  var C188;
  var C193;
  var C192;
  var C191;
  var C196;
  var C195;
  var C194;
  var C199;
  var C200;
  var C201;
  var C198;
  var C197;
=======
>>>>>>> merge-dashboard-login
  home_page._HomePageState = class _HomePageState extends framework.State$(home_page.HomePage) {
    initState() {
      super.initState();
      this.widget.auth.getCurrentUser().then(core.Null, dart.fn(user => {
        this.setState(dart.fn(() => {
          this.name = user.displayName;
          this.email = user.email;
        }, VoidToNull()));
      }, UserToNull()));
    }
    signOut() {
      return async.async(dart.dynamic, (function* signOut() {
        try {
          yield this.widget.auth.signOut();
          this.widget.logoutCallback();
        } catch (e$) {
          let e = dart.getThrown(e$);
          core.print(e);
        }
      }).bind(this));
    }
    getCalendarEvents() {
      return async.async(ListOfEvent(), (function* getCalendarEvents() {
        let authHeaders = MapOfString$String()._check(yield this.widget.auth.getAuthHeaders());
        let _events = JSArrayOfEvent().of([]);
        let now = new core.DateTime.now();
        let httpClient = new GoogleHttpClient.GoogleHttpClient.new(authHeaders);
        let calendar = new v3.CalendarApi.new(httpClient);
        let data = calendar.events.list("en.usa#holiday@group.v.calendar.google.com");
        yield data.then(core.Null, dart.fn(events => {
          events.items[$forEach](dart.fn(event => {
            if (event.start.dateTime != null && dart.test(event.start.dateTime.isAfter(now))) {
              core.print(event.summary);
              _events[$add](new Event.Event.new({status: event.status, summary: event.summary, start: event.start.dateTime, end: event.end.dateTime}));
            } else if (event.start.date != null && dart.test(event.start.date.isAfter(now))) {
              _events[$add](new Event.Event.new({status: event.status, summary: event.summary, start: event.start.date, end: event.end.date}));
            }
          }, EventToNull()));
        }, EventsToNull()));
        return _events;
      }).bind(this));
    }
    initState() {
      super.initState();
      this.getCalendarEvents().then(core.Null, dart.fn(value => {
        this.setState(dart.fn(() => {
          core.print(value);
          this.calEvents = value;
        }, VoidToNull()));
      }, ListOfEventToNull()));
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new flutter_logo.FlutterLogo.new({colors: colors.Colors.amber, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new basic.Padding.new({padding: C3 || CT.C3, child: new text.Text.new("First Stop", {style: new text_style.TextStyle.new({letterSpacing: 1.2}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8})]), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), centerTitle: true, actions: JSArrayOfWidget().of([new basic.Column.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), new text.Text.new(dart.notNull(home_page._getMonth()) + " " + dart.toString(new core.DateTime.now().day) + " " + dart.toString(new core.DateTime.now().year), {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({fontSize: 17.0}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19})]), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.message, {color: colors.Colors.deepPurple, $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), onPressed: dart.fn(() => {
                messagepopup.messagepopup(context);
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.developer_board, {color: colors.Colors.green, $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), onPressed: dart.fn(() => {
                boardpopup.boardpopup(context);
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.timer, {color: colors.Colors.red, $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), onPressed: dart.fn(() => {
                bugpopup.bugpopup(context);
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.exit_to_app, {color: colors.Colors.amber, $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), onPressed: dart.fn(() => {
                this.signOut();
<<<<<<< HEAD
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C55 || CT.C55})]), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), body: new basic.Padding.new({padding: C64 || CT.C64, child: new dashboard.Dashboard.new({events: this.calEvents, $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68}), drawer: new drawer.Drawer.new({child: new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new circle_avatar.CircleAvatar.new({backgroundImage: new image_resolution.AssetImage.new("assets/teacher.png"), backgroundColor: colors.Colors.red._get(50), radius: 80.0, $creationLocationd_0dea112b090073317d4: C72 || CT.C72}), new container.Container.new({height: 90.0, color: colors.Colors.grey._get(50), child: new user_accounts_drawer_header.UserAccountsDrawerHeader.new({accountName: new text.Text.new("Jane Doe", {style: new text_style.TextStyle.new({color: colors.Colors.redAccent, fontSize: 20.0, letterSpacing: 1.2, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), accountEmail: new text.Text.new("jane.doe@example.com", {style: new text_style.TextStyle.new({color: colors.Colors.redAccent}), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), $creationLocationd_0dea112b090073317d4: C85 || CT.C85}), $creationLocationd_0dea112b090073317d4: C89 || CT.C89}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.dashboard, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C94 || CT.C94}), title: new text.Text.new("Dashboard", {style: new text_style.TextStyle.new({letterSpacing: 1.2, color: colors.Colors.blueAccent, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C98 || CT.C98}), onTap: dart.fn(() => {
                    navigator.Navigator.of(context).pop(core.Object);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C102 || CT.C102}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.person_outline, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), title: new text.Text.new("Profile", {style: new text_style.TextStyle.new({letterSpacing: 1.2, color: colors.Colors.blueAccent, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C111 || CT.C111}), onTap: dart.fn(() => {
                    navigator.Navigator.of(context).pop(core.Object);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C115 || CT.C115}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.chat_bubble_outline, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C120 || CT.C120}), title: new text.Text.new("GPA", {style: new text_style.TextStyle.new({letterSpacing: 1.2, color: colors.Colors.blueAccent, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C124 || CT.C124}), onTap: dart.fn(() => {
                    navigator.Navigator.of(context).pop(core.Object);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C128 || CT.C128}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.developer_board, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C133 || CT.C133}), title: new text.Text.new("Graduation Tracker", {style: new text_style.TextStyle.new({letterSpacing: 1.2, color: colors.Colors.blueAccent, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C137 || CT.C137}), onTap: dart.fn(() => {
                    navigator.Navigator.of(context).pop(core.Object);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C141 || CT.C141}), new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C146 || CT.C146}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.developer_mode, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C148 || CT.C148}), title: new text.Text.new("Classes", {style: new text_style.TextStyle.new({letterSpacing: 1.2, color: colors.Colors.blueAccent, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C152 || CT.C152}), onTap: dart.fn(() => {
                    navigator.Navigator.of(context).pop(core.Object);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C156 || CT.C156}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.call, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C161 || CT.C161}), title: new text.Text.new("Financial Aid", {style: new text_style.TextStyle.new({letterSpacing: 1.2, color: colors.Colors.blueAccent, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C165 || CT.C165}), onTap: dart.fn(() => {
                    navigator.Navigator.of(context).pop(core.Object);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C169 || CT.C169}), new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C174 || CT.C174}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.settings, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C175 || CT.C175}), title: new text.Text.new("Settings", {style: new text_style.TextStyle.new({letterSpacing: 1.2, color: colors.Colors.blue, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C179 || CT.C179}), onTap: dart.fn(() => {
                    navigator.Navigator.of(context).pop(core.Object);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C183 || CT.C183})]), $creationLocationd_0dea112b090073317d4: C188 || CT.C188}), $creationLocationd_0dea112b090073317d4: C191 || CT.C191}), $creationLocationd_0dea112b090073317d4: C194 || CT.C194}), $creationLocationd_0dea112b090073317d4: C197 || CT.C197});
    }
  };
  (home_page._HomePageState.new = function() {
    this.calEvents = JSArrayOfEvent().of([]);
=======
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C55 || CT.C55})]), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), body: new basic.Padding.new({padding: C64 || CT.C64, child: new dashboard.Dashboard.new({email: this.email, name: this.name, $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), drawer: new drawer.Drawer.new({child: new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new circle_avatar.CircleAvatar.new({backgroundImage: new image_resolution.AssetImage.new("assets/teacher.png"), backgroundColor: colors.Colors.red._get(50), radius: 80.0, $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), new container.Container.new({height: 90.0, color: colors.Colors.grey._get(50), child: new user_accounts_drawer_header.UserAccountsDrawerHeader.new({accountName: new text.Text.new(this.name, {style: new text_style.TextStyle.new({color: colors.Colors.redAccent, fontSize: 20.0, letterSpacing: 1.2, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C78 || CT.C78}), accountEmail: new text.Text.new(this.email, {style: new text_style.TextStyle.new({color: colors.Colors.redAccent}), $creationLocationd_0dea112b090073317d4: C82 || CT.C82}), $creationLocationd_0dea112b090073317d4: C86 || CT.C86}), $creationLocationd_0dea112b090073317d4: C90 || CT.C90}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.dashboard, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C95 || CT.C95}), title: new text.Text.new("Dashboard", {style: new text_style.TextStyle.new({letterSpacing: 1.2, color: colors.Colors.blueAccent, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C99 || CT.C99}), onTap: dart.fn(() => {
                    navigator.Navigator.of(context).pop(core.Object);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C103 || CT.C103}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.developer_board, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C108 || CT.C108}), title: new text.Text.new("Graduation Tracker", {style: new text_style.TextStyle.new({letterSpacing: 1.2, color: colors.Colors.blueAccent, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C112 || CT.C112}), onTap: dart.fn(() => {
                    navigator.Navigator.of(context).pop(core.Object);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C116 || CT.C116}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.developer_mode, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C121 || CT.C121}), title: new text.Text.new("Classes", {style: new text_style.TextStyle.new({letterSpacing: 1.2, color: colors.Colors.blueAccent, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), onTap: dart.fn(() => {
                    navigator.Navigator.of(context).pop(core.Object);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C129 || CT.C129}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.call, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C134 || CT.C134}), title: new text.Text.new("Financial Aid", {style: new text_style.TextStyle.new({letterSpacing: 1.2, color: colors.Colors.blueAccent, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C138 || CT.C138}), onTap: dart.fn(() => {
                    navigator.Navigator.of(context).pop(core.Object);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C142 || CT.C142}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.settings, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C147 || CT.C147}), title: new text.Text.new("Settings", {style: new text_style.TextStyle.new({letterSpacing: 1.2, color: colors.Colors.blue, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C151 || CT.C151}), onTap: dart.fn(() => {
                    navigator.Navigator.of(context).pop(core.Object);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C155 || CT.C155})]), $creationLocationd_0dea112b090073317d4: C160 || CT.C160}), $creationLocationd_0dea112b090073317d4: C163 || CT.C163}), $creationLocationd_0dea112b090073317d4: C166 || CT.C166}), $creationLocationd_0dea112b090073317d4: C169 || CT.C169});
    }
  };
  (home_page._HomePageState.new = function() {
    this.name = "";
    this.email = "";
>>>>>>> merge-dashboard-login
    home_page._HomePageState.__proto__.new.call(this);
    ;
  }).prototype = home_page._HomePageState.prototype;
  dart.addTypeTests(home_page._HomePageState);
  dart.setMethodSignature(home_page._HomePageState, () => ({
    __proto__: dart.getMethods(home_page._HomePageState.__proto__),
    signOut: dart.fnType(dart.dynamic, []),
    getCalendarEvents: dart.fnType(async.Future$(core.List$(Event.Event)), []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home_page._HomePageState, "package:firststop/pages/home_page.dart");
  dart.setFieldSignature(home_page._HomePageState, () => ({
    __proto__: dart.getFields(home_page._HomePageState.__proto__),
<<<<<<< HEAD
    calEvents: dart.fieldType(core.List$(Event.Event))
=======
    name: dart.fieldType(core.String),
    email: dart.fieldType(core.String)
>>>>>>> merge-dashboard-login
  }));
  home_page._getMonth = function _getMonth() {
    core.print("widget");
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
  };
  dart.trackLibraries("packages/firststop/pages/home_page", {
    "package:firststop/pages/home_page.dart": home_page
  }, {
<<<<<<< HEAD
  }, '{"version":3,"sourceRoot":"","sources":["home_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"home_page.ddc.js"}');
=======
  }, '{"version":3,"sourceRoot":"","sources":["home_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"home_page.ddc.js"}');
>>>>>>> merge-dashboard-login
  // Exports:
  return {
    pages__home_page: home_page
  };
});

//# sourceMappingURL=home_page.ddc.js.map
