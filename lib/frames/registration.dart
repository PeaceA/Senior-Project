import 'package:flutter/material.dart';

class Registration extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: AppBar(
        title: Text("Registration"),
      ),
      body: Center(
        child: Text('You have pressed the button times.')
      ),
      backgroundColor: Colors.orange,
    );
  }
}
