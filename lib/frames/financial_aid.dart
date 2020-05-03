import 'package:flutter/material.dart';

class FinancialAid extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: AppBar(
          title: Text("Financial Aid"),
        ),
    body: Center(
      child: Text('You have pressed the button times.')
    ),
    backgroundColor: Colors.yellow,
    // ),
  );
  }
}
