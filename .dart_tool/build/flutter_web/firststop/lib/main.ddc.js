define(['dart_sdk', 'packages/flutter/material', 'packages/firststop/pages/root_page', 'packages/firststop/utils/auth', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__material, packages__firststop__pages__root_page, packages__firststop__utils__auth, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = packages__flutter__material.src__material__app;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const colors = packages__flutter__material.src__material__colors;
  const root_page = packages__firststop__pages__root_page.pages__root_page;
  const auth = packages__firststop__utils__auth.utils__auth;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const colors$ = packages__flutter__src__painting___network_image_web.src__painting__colors;
  var main = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "auth",
        [_Location_column]: 26,
        [_Location_line]: 38,
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
        [_Location_column]: 17,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/firststop/main.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "debugShowCheckedModeBanner",
        [_Location_column]: 7,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "theme",
        [_Location_column]: 7,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/firststop/main.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C10() {
      return C10 = dart.constMap(core.int, ui.Color, [50, C11 || CT.C11, 100, C11 || CT.C11, 200, C11 || CT.C11, 300, C11 || CT.C11, 400, C11 || CT.C11, 500, C11 || CT.C11, 600, C11 || CT.C11, 700, C11 || CT.C11, 800, C11 || CT.C11, 900, C11 || CT.C11]);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: colors.MaterialColor.prototype,
        [Color_value]: 4294967295.0,
        [ColorSwatch__swatch]: C10 || CT.C10
      });
    },
    get C13() {
      return C13 = dart.constList([], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 10,
        [_Location_line]: 7,
        [_Location_file]: "org-dartlang-app:///packages/firststop/main.dart"
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
  var C6;
  var C7;
  var C8;
  var C4;
  var C3;
  var Color_value = dart.privateName(ui, "Color.value");
  var C11;
  var C10;
  var ColorSwatch__swatch = dart.privateName(colors$, "ColorSwatch._swatch");
  var C9;
  main.MyApp = class MyApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({debugShowCheckedModeBanner: false, title: "First Stop", theme: theme_data.ThemeData.new({primarySwatch: main.MyApp.white}), home: new root_page.RootPage.new({auth: new auth.FirebaseAuth.new(), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    }
  };
  (main.MyApp.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, "package:firststop/main.dart");
  dart.defineLazy(main.MyApp, {
    /*main.MyApp._whitePrimaryValue*/get _whitePrimaryValue() {
      return 4294967295.0;
    },
    /*main.MyApp.white*/get white() {
      return C9 || CT.C9;
    }
  });
  var C13;
  var C12;
  main.main = function main$() {
    binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: C12 || CT.C12}));
  };
  dart.trackLibraries("packages/firststop/main", {
    "package:firststop/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UA8B4B;AACxB,YAAO,sDACuB,cACrB,qBACA,yCACU,0BAEP,kCAAmB;IAEjC;;;QA7BiB;;AAAQ,8CAAW,GAAG;;EAAC;;;;;;;;MAEvB,6BAAkB;;;MACR,gBAAK;;;;;;;AAPjB,IAAf,eAAO;EACT","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
