import 'package:flutter/material.dart';

class GraduationTracker extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: AppBar(
          title: Text("Graduation Tracker"),
        ),
    body: Center(
      child: Text('You have pressed the button times.')
    ),
    backgroundColor: Colors.purple,
  );
  }
}
