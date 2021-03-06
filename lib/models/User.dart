import 'Event.dart';

class User {
  String key;
  String firstName;
  String lastName;
  String id;
  String email;
  String phoneNumber;
  String role;
  String photo;
  String fullName;
  String calendar;
  List<String> calendars;
  List<Event> events;
}

class Student extends User {
  String major;
  String classification;
  String startSemester;
  String startYear;
  String gpa;
  User advisor;
  bool hasPending;
  Pending pendingItems;
  String userId;
}

class Advisor extends User {
  String officeBuilding;
  String roomNumber;
  String officeHours;
  String adviseeLastNameRange;
  List<Student> students;
}

class Pending {
  String major;
  String classification;
  String gpa;
}