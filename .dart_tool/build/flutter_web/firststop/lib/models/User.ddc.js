define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var User = Object.create(dart.library);
  const CT = Object.create(null);
  var firstName = dart.privateName(User, "User.firstName");
  var lastName = dart.privateName(User, "User.lastName");
  var role = dart.privateName(User, "User.role");
  User.User = class User extends core.Object {
    get firstName() {
      return this[firstName];
    }
    set firstName(value) {
      this[firstName] = value;
    }
    get lastName() {
      return this[lastName];
    }
    set lastName(value) {
      this[lastName] = value;
    }
    get role() {
      return this[role];
    }
    set role(value) {
      this[role] = value;
    }
  };
  (User.User.new = function() {
    this[firstName] = null;
    this[lastName] = null;
    this[role] = null;
    ;
  }).prototype = User.User.prototype;
  dart.addTypeTests(User.User);
  dart.setLibraryUri(User.User, "package:firststop/models/User.dart");
  dart.setFieldSignature(User.User, () => ({
    __proto__: dart.getFields(User.User.__proto__),
    firstName: dart.fieldType(core.String),
    lastName: dart.fieldType(core.String),
    role: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/firststop/models/User", {
    "package:firststop/models/User.dart": User
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["User.dart"],"names":[],"mappings":";;;;;;;;;;;IACS;;;;;;IACA;;;;;;IACA;;;;;;;;IAFA;IACA;IACA;;EACT","file":"User.ddc.js"}');
  // Exports:
  return {
    models__User: User
  };
});

//# sourceMappingURL=User.ddc.js.map
