import 'package:firststop/frames/advisor_dashboard.dart';
import 'package:firststop/frames/student_dashboard.dart';
import 'package:firststop/models/User.dart';
import 'package:flutter/material.dart';

class Dashboard extends StatelessWidget {
  
  const Dashboard({this.user});
  final User user;

  @override
  Widget build(BuildContext context) {
    return getDashboard();
  }

  Widget getDashboard() {
    if (user.role == "Advisor") {
      return new AdvisorDashboard(user: user,);
    }
    return new StudentDashboard(user: user,);
  }
}