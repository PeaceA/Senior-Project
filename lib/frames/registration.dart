import 'package:firststop/frames/advisor_registration.dart';
import 'package:firststop/frames/student_registration.dart';
import 'package:firststop/models/User.dart';
import 'package:firststop/utils/auth.dart';
import 'package:flutter/material.dart';

class Registration extends StatelessWidget {
  
  const Registration({this.user, this.auth, this.userId});
  final User user;
  final String userId;
  final BaseAuth auth;

  @override
  Widget build(BuildContext context) {
    return getRegistration();
  }

  Widget getRegistration() {
    if (user.role == "Advisor") {
      return new AdvisorRegistration(auth: auth, userId: userId);
    }
    return new StudentRegistration(auth: auth, userId: userId);
  }
}
