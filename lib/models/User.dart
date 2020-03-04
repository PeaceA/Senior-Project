class User {
  String firstName;
  String lastName;
  String id;
  String email;
  String phoneNumber;
  String role;
}

class Student extends User {
  String classification;
  String startSemester;
  String major;
}

class Advisor extends User {
  String officeBuilding;
  String roomNumber;
}