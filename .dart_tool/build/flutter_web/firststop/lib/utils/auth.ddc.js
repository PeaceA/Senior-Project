define(['dart_sdk', 'packages/firebase/firebase', 'packages/google_sign_in/google_sign_in', 'packages/firebase/src/app'], function(dart_sdk, packages__firebase__firebase, packages__google_sign_in__google_sign_in, packages__firebase__src__app) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const top_level = packages__firebase__firebase.src__top_level;
  const google_sign_in = packages__google_sign_in__google_sign_in.google_sign_in;
  const auth = packages__firebase__src__app.src__auth;
  var auth$ = Object.create(dart.library);
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  const CT = Object.create(null);
  auth$.BaseAuth = class BaseAuth extends core.Object {};
  (auth$.BaseAuth.new = function() {
    ;
  }).prototype = auth$.BaseAuth.prototype;
  dart.addTypeTests(auth$.BaseAuth);
  dart.setLibraryUri(auth$.BaseAuth, "package:firststop/utils/auth.dart");
  var _firebaseAuth = dart.privateName(auth$, "_firebaseAuth");
  var _googleSignIn = dart.privateName(auth$, "_googleSignIn");
  auth$.FirebaseAuth = class FirebaseAuth extends core.Object {
    googleSignIn() {
      return async.async(core.String, (function* googleSignIn() {
        try {
          let googleUser = (yield this[_googleSignIn].signIn());
          let googleAuth = (yield googleUser.authentication);
          let credential = auth.GoogleAuthProvider.credential(googleAuth.idToken, googleAuth.accessToken);
          let result = (yield this[_firebaseAuth].signInWithCredential(credential));
          let user = result.user;
          if (!!dart.test(user.isAnonymous)) dart.assertFailed(null, "org-dartlang-app:///packages/firststop/utils/auth.dart", 40, 14, "!user.isAnonymous");
          if (!((yield user.getIdToken()) != null)) dart.assertFailed(null, "org-dartlang-app:///packages/firststop/utils/auth.dart", 41, 14, "await user.getIdToken() != null");
          let currentUser = this[_firebaseAuth].currentUser;
          if (!(user.uid == currentUser.uid)) dart.assertFailed(null, "org-dartlang-app:///packages/firststop/utils/auth.dart", 44, 14, "user.uid == currentUser.uid");
          return user.uid;
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(core.Exception.new(e));
        }
      }).bind(this));
    }
    getAuthHeaders() {
      return async.async(MapOfString$String(), (function* getAuthHeaders() {
        return this[_googleSignIn].currentUser.authHeaders;
      }).bind(this));
    }
    getCurrentUser() {
      return async.async(auth.User, (function* getCurrentUser() {
        core.print(this[_firebaseAuth].currentUser);
        if (this[_firebaseAuth].currentUser != null) {
          yield this[_googleSignIn].signInSilently();
        }
        core.print(this[_googleSignIn].currentUser);
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
    this[_googleSignIn] = new google_sign_in.GoogleSignIn.new({scopes: JSArrayOfString().of(["email", "https://www.googleapis.com/auth/spreadsheets", "https://www.googleapis.com/auth/calendar"])});
    ;
  }).prototype = auth$.FirebaseAuth.prototype;
  dart.addTypeTests(auth$.FirebaseAuth);
  auth$.FirebaseAuth[dart.implements] = () => [auth$.BaseAuth];
  dart.setMethodSignature(auth$.FirebaseAuth, () => ({
    __proto__: dart.getMethods(auth$.FirebaseAuth.__proto__),
    googleSignIn: dart.fnType(async.Future$(core.String), []),
    getAuthHeaders: dart.fnType(async.Future$(core.Map$(core.String, core.String)), []),
    getCurrentUser: dart.fnType(async.Future$(auth.User), []),
    signOut: dart.fnType(async.Future$(dart.void), []),
    sendEmailVerification: dart.fnType(async.Future$(dart.void), []),
    isEmailVerified: dart.fnType(async.Future$(core.bool), [])
  }));
  dart.setLibraryUri(auth$.FirebaseAuth, "package:firststop/utils/auth.dart");
  dart.setFieldSignature(auth$.FirebaseAuth, () => ({
    __proto__: dart.getFields(auth$.FirebaseAuth.__proto__),
    [_firebaseAuth]: dart.finalFieldType(auth.Auth),
    [_googleSignIn]: dart.finalFieldType(google_sign_in.GoogleSignIn)
  }));
  dart.trackLibraries("packages/firststop/utils/auth", {
    "package:firststop/utils/auth.dart": auth$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auth.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;EAgBA;;;;;;;AAW6B;AACzB;AAC4B,4BAAa,MAAM,AAAc;AAC1B,4BAC7B,MAAM,AAAW,UAAD;AACC,2BAAgC,mCAAW,AAAW,UAAD,UAAU,AAAW,UAAD;AAE1F,wBAAS,MAAM,AAAc,yCAAqB,UAAU;AAI3D,qBAAO,AAAO,MAAD;AAClB,eAAO,WAAC,AAAK,IAAD;AACZ,gBAA+B,CAAxB,MAAM,AAAK,IAAD,kBAAiB;AAEvB,4BAAc,AAAc;AACvC,gBAAO,AAAK,AAAI,IAAL,QAAQ,AAAY,WAAD;AAC9B,gBAAO,AAAK,KAAD;;cACJ;AACW,UAAlB,WAAM,mBAAU,CAAC;;MAErB;;;AAE0C;AACxC,cAAO,AAAc,AAAY;MACnC;;;AAE2B;AACO,QAAhC,WAAM,AAAc;AACpB,YAAI,AAAc,mCAAe;AACK,UAApC,MAAM,AAAc;;AAEU,QAAhC,WAAM,AAAc;AACpB,cAAO,AAAc;MACvB;;;AAEoB;AAClB,cAAO,AAAc;MACvB;;;AAEkC;AAC3B,mBAAO,AAAc;AACE,QAA5B,AAAK,IAAD;MACN;;;AAE4B;AACrB,mBAAQ,AAAc;AAC3B,cAAO,AAAK,KAAD;MACb;;;;IAxDW,sBAAgB;IACR,sBAAgB,6CAAqB,sBACpD,SACA,gDACA;;EAqDN","file":"auth.ddc.js"}');
  // Exports:
  return {
    utils__auth: auth$
  };
});

//# sourceMappingURL=auth.ddc.js.map
