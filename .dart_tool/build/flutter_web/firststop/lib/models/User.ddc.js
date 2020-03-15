define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var User = Object.create(dart.library);
  const CT = Object.create(null);
  var firstName = dart.privateName(User, "User.firstName");
  var lastName = dart.privateName(User, "User.lastName");
  var id = dart.privateName(User, "User.id");
  var email = dart.privateName(User, "User.email");
  var phoneNumber = dart.privateName(User, "User.phoneNumber");
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
    get id() {
      return this[id];
    }
    set id(value) {
      this[id] = value;
    }
    get email() {
      return this[email];
    }
    set email(value) {
      this[email] = value;
    }
    get phoneNumber() {
      return this[phoneNumber];
    }
    set phoneNumber(value) {
      this[phoneNumber] = value;
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
    this[id] = null;
    this[email] = null;
    this[phoneNumber] = null;
    this[role] = null;
    ;
  }).prototype = User.User.prototype;
  dart.addTypeTests(User.User);
  dart.setLibraryUri(User.User, "package:firststop/models/User.dart");
  dart.setFieldSignature(User.User, () => ({
    __proto__: dart.getFields(User.User.__proto__),
    firstName: dart.fieldType(core.String),
    lastName: dart.fieldType(core.String),
    id: dart.fieldType(core.String),
    email: dart.fieldType(core.String),
    phoneNumber: dart.fieldType(core.String),
    role: dart.fieldType(core.String)
  }));
  var classification = dart.privateName(User, "Student.classification");
  var startSemester = dart.privateName(User, "Student.startSemester");
  var major = dart.privateName(User, "Student.major");
  User.Student = class Student extends User.User {
    get classification() {
      return this[classification];
    }
    set classification(value) {
      this[classification] = value;
    }
    get startSemester() {
      return this[startSemester];
    }
    set startSemester(value) {
      this[startSemester] = value;
    }
    get major() {
      return this[major];
    }
    set major(value) {
      this[major] = value;
    }
  };
  (User.Student.new = function() {
    this[classification] = null;
    this[startSemester] = null;
    this[major] = null;
    User.Student.__proto__.new.call(this);
    ;
  }).prototype = User.Student.prototype;
  dart.addTypeTests(User.Student);
  dart.setLibraryUri(User.Student, "package:firststop/models/User.dart");
  dart.setFieldSignature(User.Student, () => ({
    __proto__: dart.getFields(User.Student.__proto__),
    classification: dart.fieldType(core.String),
    startSemester: dart.fieldType(core.String),
    major: dart.fieldType(core.String)
  }));
  var officeBuilding = dart.privateName(User, "Advisor.officeBuilding");
  var roomNumber = dart.privateName(User, "Advisor.roomNumber");
  User.Advisor = class Advisor extends User.User {
    get officeBuilding() {
      return this[officeBuilding];
    }
    set officeBuilding(value) {
      this[officeBuilding] = value;
    }
    get roomNumber() {
      return this[roomNumber];
    }
    set roomNumber(value) {
      this[roomNumber] = value;
    }
  };
  (User.Advisor.new = function() {
    this[officeBuilding] = null;
    this[roomNumber] = null;
    User.Advisor.__proto__.new.call(this);
    ;
  }).prototype = User.Advisor.prototype;
  dart.addTypeTests(User.Advisor);
  dart.setLibraryUri(User.Advisor, "package:firststop/models/User.dart");
  dart.setFieldSignature(User.Advisor, () => ({
    __proto__: dart.getFields(User.Advisor.__proto__),
    officeBuilding: dart.fieldType(core.String),
    roomNumber: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/firststop/models/User", {
    "package:firststop/models/User.dart": User
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["User.dart"],"names":[],"mappings":";;;;;;;;;;;;;;IACS;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;IALA;IACA;IACA;IACA;IACA;IACA;;EACT;;;;;;;;;;;;;;;;IAGS;;;;;;IACA;;;;;;IACA;;;;;;;;IAFA;IACA;IACA;;;EACT;;;;;;;;;;;;IAGS;;;;;;IACA;;;;;;;;IADA;IACA;;;EACT","file":"User.ddc.js"}');
  // Exports:
  return {
    models__User: User
  };
});

//# sourceMappingURL=User.ddc.js.map
