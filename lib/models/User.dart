class User {
  String firstName;
  String lastName;
  String id;
  String email;
  String phoneNumber;
  String role;
}

class Student extends User {
  String major;
  String classification;
  String startSemester;
}

class Advisor extends User {
  String officeBuilding;
  String roomNumber;
  String officeHours;
}