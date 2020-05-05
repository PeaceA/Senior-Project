import 'Event.dart';

class User {
  String firstName;
  String lastName;
  String id;
  String email;
  String phoneNumber;
  String role;
  String photo;
  String fullName;
  List<Event> events;
}

class Student extends User {
  String major;
  String classification;
  String startSemester;
  String startYear;
  String gpa;
  User advisor;
}

class Advisor extends User {
  String officeBuilding;
  String roomNumber;
  String officeHours;
  String adviseeLastNameRange;
  List<Student> students;
}