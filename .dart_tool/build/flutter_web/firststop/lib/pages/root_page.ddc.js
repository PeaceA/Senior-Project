define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/firststop/utils/auth', 'packages/firebase/firebase', 'packages/firebase/src/app', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/firststop/pages/auth_page', 'packages/firststop/pages/home_page', 'packages/firststop/pages/data_page'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__firststop__utils__auth, packages__firebase__firebase, packages__firebase__src__app, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__firststop__pages__auth_page, packages__firststop__pages__home_page, packages__firststop__pages__data_page) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const auth = packages__firststop__utils__auth.utils__auth;
  const top_level = packages__firebase__firebase.src__top_level;
  const database = packages__firebase__src__app.src__database;
  const auth$ = packages__firebase__src__app.src__auth;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const auth_page = packages__firststop__pages__auth_page.pages__auth_page;
  const home_page = packages__firststop__pages__home_page.pages__home_page;
  const data_page = packages__firststop__pages__data_page.pages__data_page;
  var root_page = Object.create(dart.library);
  var $toString = dartx.toString;
  var QueryEventToNull = () => (QueryEventToNull = dart.constFn(dart.fnType(core.Null, [database.QueryEvent])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  var UserToFutureOfNull = () => (UserToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [auth$.User])))();
  var UserToNull = () => (UserToNull = dart.constFn(dart.fnType(core.Null, [auth$.User])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: root_page.AuthStatus.prototype,
        [_name$]: "AuthStatus.NOT_DETERMINED",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: root_page.AuthStatus.prototype,
        [_name$]: "AuthStatus.NOT_LOGGED_IN",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: root_page.AuthStatus.prototype,
        [_name$]: "AuthStatus.LOGGED_IN",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: root_page.AuthStatus.prototype,
        [_name$]: "AuthStatus.SIGNED_UP",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], root_page.AuthStatus);
    },
    get C6() {
      return C6 = dart.constList([], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/root_page.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/root_page.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 85,
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
        [_Location_column]: 12,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/root_page.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "auth",
        [_Location_column]: 11,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "loginCallback",
        [_Location_column]: 11,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "signupCallback",
        [_Location_column]: 11,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/root_page.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "userId",
        [_Location_column]: 13,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "auth",
        [_Location_column]: 13,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "logoutCallback",
        [_Location_column]: 13,
        [_Location_line]: 112,
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
        [_Location_column]: 22,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/root_page.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "userId",
        [_Location_column]: 13,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "auth",
        [_Location_column]: 13,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "logoutCallback",
        [_Location_column]: 13,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/root_page.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "userId",
        [_Location_column]: 11,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "loginCallback",
        [_Location_column]: 11,
        [_Location_line]: 124,
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
        [_Location_column]: 20,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/firststop/pages/root_page.dart"
      });
    }
  });
  var _name$ = dart.privateName(root_page, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  root_page.AuthStatus = class AuthStatus extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (root_page.AuthStatus.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = root_page.AuthStatus.prototype;
  dart.addTypeTests(root_page.AuthStatus);
  dart.setLibraryUri(root_page.AuthStatus, "package:firststop/pages/root_page.dart");
  dart.setFieldSignature(root_page.AuthStatus, () => ({
    __proto__: dart.getFields(root_page.AuthStatus.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(root_page.AuthStatus, ['toString']);
  root_page.AuthStatus.NOT_DETERMINED = C0 || CT.C0;
  root_page.AuthStatus.NOT_LOGGED_IN = C1 || CT.C1;
  root_page.AuthStatus.LOGGED_IN = C2 || CT.C2;
  root_page.AuthStatus.SIGNED_UP = C3 || CT.C3;
  root_page.AuthStatus.values = C4 || CT.C4;
  var auth$0 = dart.privateName(root_page, "RootPage.auth");
  root_page.RootPage = class RootPage extends framework.StatefulWidget {
    get auth() {
      return this[auth$0];
    }
    set auth(value) {
      super.auth = value;
    }
    createState() {
      return new root_page._RootPageState.new();
    }
  };
  (root_page.RootPage.new = function(opts) {
    let auth = opts && 'auth' in opts ? opts.auth : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[auth$0] = auth;
    root_page.RootPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = root_page.RootPage.prototype;
  dart.addTypeTests(root_page.RootPage);
  dart.setMethodSignature(root_page.RootPage, () => ({
    __proto__: dart.getMethods(root_page.RootPage.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(root_page.RootPage, "package:firststop/pages/root_page.dart");
  dart.setFieldSignature(root_page.RootPage, () => ({
    __proto__: dart.getFields(root_page.RootPage.__proto__),
    auth: dart.finalFieldType(auth.BaseAuth)
  }));
  var _userId = dart.privateName(root_page, "_userId");
  var C6;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C5;
  var C9;
  var C10;
  var C8;
  var C7;
  var C13;
  var C12;
  var C11;
  var C16;
  var C17;
  var C18;
  var C15;
  var C14;
  var C21;
  var C22;
  var C23;
  var C20;
  var C19;
  var C26;
  var C27;
  var C28;
  var C25;
  var C24;
  var C31;
  var C32;
  var C30;
  var C29;
  root_page._RootPageState = class _RootPageState extends framework.State$(root_page.RootPage) {
    initState() {
      super.initState();
      this.widget.auth.getCurrentUser().then(core.Null, dart.fn(user => async.async(core.Null, (function*() {
        let t0;
        let snap = null;
        if (user != null) {
          this[_userId] = (t0 = user, t0 == null ? null : t0.uid);
          let ref = top_level.database().ref("users/" + dart.notNull(this[_userId]) + "/completeSignUp");
          yield ref.once("value").then(core.Null, dart.fn(e => {
            let t0;
            snap = e.snapshot;
            if (snap != null && dart.equals(dart.dsend(snap, 'val', []), "false")) {
              this.authStatus = root_page.AuthStatus.SIGNED_UP;
            } else {
              this.authStatus = (t0 = user, t0 == null ? null : t0.uid) == null ? root_page.AuthStatus.NOT_LOGGED_IN : root_page.AuthStatus.LOGGED_IN;
            }
          }, QueryEventToNull()));
        } else {
          this.setState(dart.fn(() => {
            let t0;
            this.authStatus = (t0 = user, t0 == null ? null : t0.uid) == null ? root_page.AuthStatus.NOT_LOGGED_IN : root_page.AuthStatus.LOGGED_IN;
          }, VoidToNull()));
        }
      }).bind(this)), UserToFutureOfNull()));
    }
    loginCallback() {
      this.widget.auth.getCurrentUser().then(core.Null, dart.fn(user => {
        this.setState(dart.fn(() => {
          this[_userId] = dart.toString(user.uid);
        }, VoidToNull()));
      }, UserToNull()));
      this.setState(dart.fn(() => {
        this.authStatus = root_page.AuthStatus.LOGGED_IN;
      }, VoidToNull()));
    }
    signUpCallback() {
      this.widget.auth.getCurrentUser().then(core.Null, dart.fn(user => {
        this.setState(dart.fn(() => {
          this[_userId] = dart.toString(user.uid);
        }, VoidToNull()));
      }, UserToNull()));
      this.setState(dart.fn(() => {
        this.authStatus = root_page.AuthStatus.SIGNED_UP;
      }, VoidToNull()));
    }
    logoutCallback() {
      this.setState(dart.fn(() => {
        this.authStatus = root_page.AuthStatus.NOT_LOGGED_IN;
        this[_userId] = "";
      }, VoidToNull()));
    }
    buildWaitingScreen() {
      return new scaffold.Scaffold.new({body: new container.Container.new({alignment: alignment.Alignment.center, child: new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C5 || CT.C5}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11});
    }
    build(context) {
      this.authStatus = root_page.AuthStatus.LOGGED_IN;
      core.print(this.authStatus);
      switch (this.authStatus) {
        case C0 || CT.C0:
        {
          return this.buildWaitingScreen();
          break;
        }
        case C1 || CT.C1:
        {
          return new auth_page.AuthPage.new({auth: this.widget.auth, loginCallback: dart.bind(this, 'loginCallback'), signupCallback: dart.bind(this, 'signUpCallback'), $creationLocationd_0dea112b090073317d4: C14 || CT.C14});
          break;
        }
        case C2 || CT.C2:
        {
          if (this[_userId].length > 0 && this[_userId] != null) {
            return new home_page.HomePage.new({userId: this[_userId], auth: this.widget.auth, logoutCallback: dart.bind(this, 'logoutCallback'), $creationLocationd_0dea112b090073317d4: C19 || CT.C19});
          } else
            return new home_page.HomePage.new({userId: this[_userId], auth: this.widget.auth, logoutCallback: dart.bind(this, 'logoutCallback'), $creationLocationd_0dea112b090073317d4: C24 || CT.C24});
          break;
        }
        case C3 || CT.C3:
        {
          return new data_page.UserData.new({userId: this[_userId], loginCallback: dart.bind(this, 'loginCallback'), $creationLocationd_0dea112b090073317d4: C29 || CT.C29});
        }
        default:
        {
          return this.buildWaitingScreen();
        }
      }
    }
  };
  (root_page._RootPageState.new = function() {
    this.authStatus = root_page.AuthStatus.NOT_DETERMINED;
    this[_userId] = "";
    root_page._RootPageState.__proto__.new.call(this);
    ;
  }).prototype = root_page._RootPageState.prototype;
  dart.addTypeTests(root_page._RootPageState);
  dart.setMethodSignature(root_page._RootPageState, () => ({
    __proto__: dart.getMethods(root_page._RootPageState.__proto__),
    loginCallback: dart.fnType(dart.void, []),
    signUpCallback: dart.fnType(dart.void, []),
    logoutCallback: dart.fnType(dart.void, []),
    buildWaitingScreen: dart.fnType(framework.Widget, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(root_page._RootPageState, "package:firststop/pages/root_page.dart");
  dart.setFieldSignature(root_page._RootPageState, () => ({
    __proto__: dart.getFields(root_page._RootPageState.__proto__),
    authStatus: dart.fieldType(root_page.AuthStatus),
    [_userId]: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/firststop/pages/root_page", {
    "package:firststop/pages/root_page.dart": root_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["root_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAYA;;8CALK;;;;EAKL;;;;;;;;;;;;;;;;IAKiB;;;;;;;AAGwB,YAAI;IAAgB;;;QAL5C;;;AAAf;;EAAqB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAcF,MAAX;AAqBJ,MApBF,AAAO,AAAK,AAAiB,kDAAK,QAAC;;AAC7B;AACJ,YAAI,IAAI,IAAI;AACS,UAAnB,sBAAU,IAAI,eAAJ,OAAM;AACW,oBAAM,AAAc,yBAAI,AAAS,AAAU,wBAAR,iBAAU;AAStE,UARH,MAAM,AAAI,AAAc,GAAf,MAAM,yBAAc,QAAC;;AACV,YAAjB,OAAO,AAAE,CAAD;AACR,gBAAI,IAAI,IAAI,QAAmB,YAAN,WAAL,IAAI,cAAU;AACG,cAAjC,kBAAwB;;AAG6C,cADrE,kBACY,MAAV,IAAI,eAAJ,OAAM,WAAO,OAAkB,qCAA2B;;;;AAOhE,UAHF,cAAS;;AAEgE,YADvE,kBACc,MAAV,IAAI,eAAJ,OAAM,WAAO,OAAkB,qCAA2B;;;MAGnE;IACH;;AAOI,MAJF,AAAO,AAAK,AAAiB,kDAAK,QAAC;AAG/B,QAFF,cAAS;AACsB,UAA7B,gBAAmB,cAAT,AAAK,IAAD;;;AAKhB,MAFF,cAAS;AAC0B,QAAjC,kBAAwB;;IAE5B;;AAOI,MAJF,AAAO,AAAK,AAAiB,kDAAK,QAAC;AAG/B,QAFF,cAAS;AACsB,UAA7B,gBAAmB,cAAT,AAAK,IAAD;;;AAKhB,MAFF,cAAS;AAC0B,QAAjC,kBAAwB;;IAE5B;;AAMI,MAHF,cAAS;AAC8B,QAArC,kBAAwB;AACZ,QAAZ,gBAAU;;IAEd;;AAGE,YAAO,kCACC,wCACiB,mCACd;IAGb;UAG0B;AACS,MAAjC,kBAAwB;AACP,MAAjB,WAAM;AACN,cAAQ;;;AAEJ,gBAAO;AACP;;;;AAEA,gBAAW,mCACH,AAAO,2CACE,kDACC;AAElB;;;;AAEA,cAAI,AAAQ,AAAO,uBAAE,KAAK,iBAAW;AACnC,kBAAW,qCACD,qBACF,AAAO,4CACG;;AAGlB,kBAAW,qCACD,qBACF,AAAO,4CACG;AAEpB;;;;AAEA,gBAAW,qCACD,wCACO;;;;AAGjB,gBAAO;;;IAEb;;;IAxGW,kBAAwB;IAC5B,gBAAU;;;EAwGnB","file":"root_page.ddc.js"}');
  // Exports:
  return {
    pages__root_page: root_page
  };
});

//# sourceMappingURL=root_page.ddc.js.map
