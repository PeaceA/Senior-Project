define(['dart_sdk', 'packages/firebase/firebase', 'packages/firebase/src/app'], function(dart_sdk, packages__firebase__firebase, packages__firebase__src__app) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const top_level = packages__firebase__firebase.src__top_level;
  const auth = packages__firebase__src__app.src__auth;
  var auth$ = Object.create(dart.library);
  const CT = Object.create(null);
  auth$.BaseAuth = class BaseAuth extends core.Object {};
  (auth$.BaseAuth.new = function() {
    ;
  }).prototype = auth$.BaseAuth.prototype;
  dart.addTypeTests(auth$.BaseAuth);
  dart.setLibraryUri(auth$.BaseAuth, "package:firststop/utils/auth.dart");
  var _firebaseAuth = dart.privateName(auth$, "_firebaseAuth");
  auth$.FirebaseAuth = class FirebaseAuth extends core.Object {
    googleSignIn() {
      return async.async(core.String, (function* googleSignIn() {
        try {
          let provider = auth.GoogleAuthProvider.new().addScope("email");
          let result = (yield this[_firebaseAuth].signInWithPopup(provider));
          let user = result.user;
          if (!!dart.test(user.isAnonymous)) dart.assertFailed(null, "org-dartlang-app:///packages/firststop/utils/auth.dart", 25, 14, "!user.isAnonymous");
          if (!((yield user.getIdToken()) != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firststop/utils/auth.dart", 26, 14, "await user.getIdToken() != null");
          let currentUser = this[_firebaseAuth].currentUser;
          if (!(user.uid == currentUser.uid)) dart.assertFailed(null, "org-dartlang-app:///packages/firststop/utils/auth.dart", 29, 14, "user.uid == currentUser.uid");
          return user.uid;
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(core.Exception.new(e));
        }
      }).bind(this));
    }
    getCurrentUser() {
      return async.async(auth.User, (function* getCurrentUser() {
        return this[_firebaseAuth].currentUser;
      }).bind(this));
    }
    signOut() {
      return async.async(dart.void, (function* signOut() {
        return this[_firebaseAuth].signOut();
      }).bind(this));
    }
    sendEmailVerification() {
      return async.async(dart.void, (function* sendEmailVerification() {
        let user = this[_firebaseAuth].currentUser;
        user.sendEmailVerification();
      }).bind(this));
    }
    isEmailVerified() {
      return async.async(core.bool, (function* isEmailVerified() {
        let user = this[_firebaseAuth].currentUser;
        return user.emailVerified;
      }).bind(this));
    }
  };
  (auth$.FirebaseAuth.new = function() {
    this[_firebaseAuth] = top_level.auth();
    ;
  }).prototype = auth$.FirebaseAuth.prototype;
  dart.addTypeTests(auth$.FirebaseAuth);
  auth$.FirebaseAuth[dart.implements] = () => [auth$.BaseAuth];
  dart.setMethodSignature(auth$.FirebaseAuth, () => ({
    __proto__: dart.getMethods(auth$.FirebaseAuth.__proto__),
    googleSignIn: dart.fnType(async.Future$(core.String), []),
    getCurrentUser: dart.fnType(async.Future$(auth.User), []),
    signOut: dart.fnType(async.Future$(dart.void), []),
    sendEmailVerification: dart.fnType(async.Future$(dart.void), []),
    isEmailVerified: dart.fnType(async.Future$(core.bool), [])
  }));
  dart.setLibraryUri(auth$.FirebaseAuth, "package:firststop/utils/auth.dart");
  dart.setFieldSignature(auth$.FirebaseAuth, () => ({
    __proto__: dart.getFields(auth$.FirebaseAuth.__proto__),
    [_firebaseAuth]: dart.finalFieldType(auth.Auth)
  }));
  dart.trackLibraries("packages/firststop/utils/auth", {
    "package:firststop/utils/auth.dart": auth$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auth.dart"],"names":[],"mappings":";;;;;;;;;;;;;EAaA;;;;;;AAK6B;AACzB;AACM,yBAAe,AAAqB,uCAAS;AAC7C,wBAAS,MAAM,AAAc,oCAAgB,QAAQ;AACpD,qBAAO,AAAO,MAAD;AAElB,eAAO,WAAC,AAAK,IAAD;AACZ,gBAA+B,CAAxB,MAAM,AAAK,IAAD,kBAAiB;AAEvB,4BAAc,AAAc;AACvC,gBAAO,AAAK,AAAI,IAAL,QAAQ,AAAY,WAAD;AAC9B,gBAAO,AAAK,KAAD;;cACJ;AACW,UAAlB,WAAM,mBAAU,CAAC;;MAErB;;;AAE2B;AACzB,cAAO,AAAc;MACvB;;;AAEoB;AAClB,cAAO,AAAc;MACvB;;;AAEkC;AAC3B,mBAAO,AAAc;AACE,QAA5B,AAAK,IAAD;MACN;;;AAE4B;AACrB,mBAAQ,AAAc;AAC3B,cAAO,AAAK,KAAD;MACb;;;;IAnCW,sBAAgB;;EAoC7B","file":"auth.ddc.js"}');
  // Exports:
  return {
    utils__auth: auth$
  };
});

//# sourceMappingURL=auth.ddc.js.map
