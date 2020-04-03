import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    title: 'Advisor Dashboard',
    home: AdvisorPage(),
  ));
}

class AdvisorPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Advisor'),
      ),
      body: Center(
        child: RaisedButton(
          child: Text('Advisor Dashboard'),
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => StudentPage()),
            );
          },
        ),
      ),
    );
  }
}

class StudentPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Student Dashboard"),
      ),
      body: Center(
        child: RaisedButton(
          onPressed: () {
            Navigator.pop(context);
          },
          child: Text('Go back!'),
        ),
      ),
    );
  }
}