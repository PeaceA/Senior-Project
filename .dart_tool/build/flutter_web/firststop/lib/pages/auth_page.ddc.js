define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/firststop/utils/auth', 'packages/firebase/firebase', 'packages/firebase/src/app', 'packages/flutter/material', 'packages/firststop/utils/centered_view', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__firststop__utils__auth, packages__firebase__firebase, packages__firebase__src__app, packages__flutter__material, packages__firststop__utils__centered_view, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const form = packages__flutter__src__widgets__actions.src__widgets__form;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const heroes = packages__flutter__src__widgets__actions.src__widgets__heroes;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const auth = packages__firststop__utils__auth.utils__auth;
  const top_level = packages__firebase__firebase.src__top_level;
  const database = packages__firebase__src__app.src__database;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const colors = packages__flutter__material.src__material__colors;
  const circle_avatar = packages__flutter__material.src__material__circle_avatar;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const centered_view = packages__firststop__utils__centered_view.utils__centered_view;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const rounded_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  var auth_page = Object.create(dart.library);
  var $toString = dartx.toString;
  var GlobalKeyOfFormState = () => (GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  var FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  var QueryEventToFutureOfNull = () => (QueryEventToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [database.QueryEvent])))();
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 101,
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
        [_Location_column]: 26,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/auth_page.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 100,
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
        [_Location_column]: 15,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/auth_page.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/auth_page.dart"
      });
    },
    get C10() {
      return C10 = dart.constList([], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/auth_page.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 111,
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
        [_Location_column]: 14,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/auth_page.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/auth_page.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/auth_page.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkWrap",
        [_Location_column]: 13,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/auth_page.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 11,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/auth_page.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 122,
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
        [_Location_column]: 16,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/auth_page.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 9,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 140,
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
        [_Location_column]: 18,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/auth_page.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 148,
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
        [_Location_column]: 18,
        [_Location_line]: 147,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/auth_page.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 30,
        [_Location_line]: 161,
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
        [_Location_column]: 24,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/auth_page.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 11,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "radius",
        [_Location_column]: 11,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46, C47 || CT.C47], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 158,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/auth_page.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50, C51 || CT.C51], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 156,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/auth_page.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tag",
        [_Location_column]: 7,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 154,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/auth_page.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 35,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58, C59 || CT.C59], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 179,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/auth_page.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 19,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62, C63 || CT.C63, C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 175,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/auth_page.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/auth_page.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72, C73 || CT.C73], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 170,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/auth_page.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76, C77 || CT.C77], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 168,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/auth_page.dart"
      });
    }
  });
  var auth$ = dart.privateName(auth_page, "AuthPage.auth");
  var loginCallback$ = dart.privateName(auth_page, "AuthPage.loginCallback");
  var signupCallback$ = dart.privateName(auth_page, "AuthPage.signupCallback");
  auth_page.AuthPage = class AuthPage extends framework.StatefulWidget {
    get auth() {
      return this[auth$];
    }
    set auth(value) {
      super.auth = value;
    }
    get loginCallback() {
      return this[loginCallback$];
    }
    set loginCallback(value) {
      super.loginCallback = value;
    }
    get signupCallback() {
      return this[signupCallback$];
    }
    set signupCallback(value) {
      super.signupCallback = value;
    }
    createState() {
      return new auth_page._AuthPage.new();
    }
  };
  (auth_page.AuthPage.new = function(opts) {
    let auth = opts && 'auth' in opts ? opts.auth : null;
    let loginCallback = opts && 'loginCallback' in opts ? opts.loginCallback : null;
    let signupCallback = opts && 'signupCallback' in opts ? opts.signupCallback : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[auth$] = auth;
    this[loginCallback$] = loginCallback;
    this[signupCallback$] = signupCallback;
    auth_page.AuthPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = auth_page.AuthPage.prototype;
  dart.addTypeTests(auth_page.AuthPage);
  dart.setMethodSignature(auth_page.AuthPage, () => ({
    __proto__: dart.getMethods(auth_page.AuthPage.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(auth_page.AuthPage, "package:firststop/pages/auth_page.dart");
  dart.setFieldSignature(auth_page.AuthPage, () => ({
    __proto__: dart.getFields(auth_page.AuthPage.__proto__),
    auth: dart.finalFieldType(auth.BaseAuth),
    loginCallback: dart.finalFieldType(dart.fnType(dart.void, [])),
    signupCallback: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  var _formKey = dart.privateName(auth_page, "_formKey");
  var _email = dart.privateName(auth_page, "_email");
  var _password = dart.privateName(auth_page, "_password");
  var _errorMessage = dart.privateName(auth_page, "_errorMessage");
  var _isLoginForm = dart.privateName(auth_page, "_isLoginForm");
  var _isLoading = dart.privateName(auth_page, "_isLoading");
  var _showForm = dart.privateName(auth_page, "_showForm");
  var _showCircularProgress = dart.privateName(auth_page, "_showCircularProgress");
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
  var C7;
  var C6;
  var C10;
  var C9;
  var C13;
  var C12;
  var C11;
  var C16;
  var C17;
  var C15;
  var C14;
  var C20;
  var C19;
  var C18;
  var C23;
  var C24;
  var C22;
  var C21;
  var C27;
  var C28;
  var C26;
  var C25;
  var C31;
  var C32;
  var C30;
  var C29;
  var C35;
  var C36;
  var C34;
  var C33;
  var C39;
  var C38;
  var C37;
  var C42;
  var C41;
  var C40;
  var C45;
  var C46;
  var C47;
  var C44;
  var C43;
  var C50;
  var C51;
  var C49;
  var C48;
  var C54;
  var C55;
  var C53;
  var C52;
  var C58;
  var C59;
  var C57;
  var C56;
  var C62;
  var C63;
  var C64;
  var C65;
  var C61;
  var C60;
  var C68;
  var C69;
  var C67;
  var C66;
  var C72;
  var C73;
  var C71;
  var C70;
  var C76;
  var C77;
  var C75;
  var C74;
  auth_page._AuthPage = class _AuthPage extends framework.State$(auth_page.AuthPage) {
    validateAndSave() {
      let form = this[_formKey].currentState;
      if (dart.test(form.validate())) {
        form.save();
        return true;
      }
      return false;
    }
    initState() {
      this[_errorMessage] = "";
      this[_isLoading] = false;
      this[_isLoginForm] = true;
      super.initState();
    }
    resetForm() {
      this[_formKey].currentState.reset();
      this[_errorMessage] = "";
    }
    signInWithThirdParty() {
      return async.async(dart.void, (function* signInWithThirdParty() {
        this.setState(dart.fn(() => {
          this[_errorMessage] = "";
          this[_isLoading] = true;
        }, VoidToNull()));
        try {
          let userId = "";
          userId = (yield this.widget.auth.googleSignIn());
          this.setState(dart.fn(() => {
            this[_isLoading] = false;
          }, VoidToNull()));
          let ref = top_level.database().ref("users/" + dart.notNull(userId));
          ref.once("value").then(core.Null, dart.fn(e => async.async(core.Null, (function*() {
            if (dart.test(e.snapshot.child("completeSignUp").exists()) && dart.equals(e.snapshot.child("completeSignUp").val(), "true")) {
              this.widget.loginCallback();
            } else if (dart.test(e.snapshot.child("completeSignUp").exists()) && dart.equals(e.snapshot.child("completeSignUp").val(), "false")) {
              this.widget.signupCallback();
            } else {
              let map = new (IdentityMapOfString$String()).from(["completeSignUp", "false"]);
              yield ref.set(map);
              this.widget.signupCallback();
            }
          }).bind(this)), QueryEventToFutureOfNull()));
        } catch (e$) {
          let e = dart.getThrown(e$);
          core.print("Error: " + dart.str(e));
          this.setState(dart.fn(() => {
            this[_isLoading] = false;
            this[_errorMessage] = dart.toString(dart.dload(e, 'message'));
            this[_formKey].currentState.reset();
          }, VoidToNull()));
        }
      }).bind(this));
    }
    build(context) {
      return new scaffold.Scaffold.new({body: new centered_view.CenteredView.new({child: new basic.Stack.new({children: JSArrayOfWidget().of([this[_showForm](), this[_showCircularProgress]()]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6});
    }
    [_showCircularProgress]() {
      if (dart.test(this[_isLoading])) {
        return new basic.Center.new({child: new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11});
      }
      return new container.Container.new({height: 0.0, width: 0.0, $creationLocationd_0dea112b090073317d4: C14 || CT.C14});
    }
    [_showForm]() {
      return new container.Container.new({padding: new edge_insets.EdgeInsets.all(10.0), child: new form.Form.new({key: this[_formKey], child: new scroll_view.ListView.new({shrinkWrap: true, children: JSArrayOfWidget().of([this.showLogo(), this.showThirdPartyButtons(), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), this.showErrorMessage()]), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29});
    }
    showErrorMessage() {
      if (this[_errorMessage].length > 0 && this[_errorMessage] != null) {
        return new text.Text.new(this[_errorMessage], {style: new text_style.TextStyle.new({fontSize: 13.0, color: colors.Colors.red, height: 1.0, fontWeight: ui.FontWeight.w300}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33});
      } else {
        return new container.Container.new({height: 0.0, $creationLocationd_0dea112b090073317d4: C37 || CT.C37});
      }
    }
    showLogo() {
      return new heroes.Hero.new({tag: "hero", child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.fromLTRB(0.0, 50.0, 0.0, 0.0), child: new circle_avatar.CircleAvatar.new({backgroundColor: colors.Colors.transparent, radius: 150.0, child: new image.Image.asset("assets/logo.png", {$creationLocationd_0dea112b090073317d4: C40 || CT.C40}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52});
    }
    showThirdPartyButtons() {
      return new basic.Padding.new({padding: new edge_insets.EdgeInsets.fromLTRB(0.0, 10.0, 0.0, 0.0), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([new basic.SizedBox.new({width: 300.0, child: new flat_button.FlatButton.new({shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(30.0)}), color: colors.Colors.blue, child: new text.Text.new("Bison Login", {style: new text_style.TextStyle.new({fontSize: 15.0, color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), onPressed: dart.fn(() => {
                  this.signInWithThirdParty();
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), $creationLocationd_0dea112b090073317d4: C66 || CT.C66})]), $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), $creationLocationd_0dea112b090073317d4: C74 || CT.C74});
    }
  };
  (auth_page._AuthPage.new = function() {
    this[_formKey] = GlobalKeyOfFormState().new();
    this[_email] = null;
    this[_password] = null;
    this[_errorMessage] = null;
    this[_isLoginForm] = null;
    this[_isLoading] = null;
    auth_page._AuthPage.__proto__.new.call(this);
    ;
  }).prototype = auth_page._AuthPage.prototype;
  dart.addTypeTests(auth_page._AuthPage);
  dart.setMethodSignature(auth_page._AuthPage, () => ({
    __proto__: dart.getMethods(auth_page._AuthPage.__proto__),
    validateAndSave: dart.fnType(core.bool, []),
    resetForm: dart.fnType(dart.void, []),
    signInWithThirdParty: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_showCircularProgress]: dart.fnType(framework.Widget, []),
    [_showForm]: dart.fnType(framework.Widget, []),
    showErrorMessage: dart.fnType(framework.Widget, []),
    showLogo: dart.fnType(framework.Widget, []),
    showThirdPartyButtons: dart.fnType(framework.Widget, [])
  }));
  dart.setLibraryUri(auth_page._AuthPage, "package:firststop/pages/auth_page.dart");
  dart.setFieldSignature(auth_page._AuthPage, () => ({
    __proto__: dart.getFields(auth_page._AuthPage.__proto__),
    [_formKey]: dart.finalFieldType(framework.GlobalKey$(form.FormState)),
    [_email]: dart.fieldType(core.String),
    [_password]: dart.fieldType(core.String),
    [_errorMessage]: dart.fieldType(core.String),
    [_isLoginForm]: dart.fieldType(core.bool),
    [_isLoading]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/firststop/pages/auth_page", {
    "package:firststop/pages/auth_page.dart": auth_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auth_page.dart"],"names":[],"mappings":"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","file":"auth_page.ddc.js"}');
  // Exports:
  return {
    pages__auth_page: auth_page
  };
});

//# sourceMappingURL=auth_page.ddc.js.map
