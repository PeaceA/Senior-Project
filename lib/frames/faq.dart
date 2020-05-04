import 'package:flutter/material.dart';

class FAQ extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: AppBar(
          title: Text("FAQ"),
        ),
    body: Center(
      child: Text('You have pressed the button times.')
    ),
    backgroundColor: Colors.black,
  );
  }
}
