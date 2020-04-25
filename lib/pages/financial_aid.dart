import 'package:firststop/drawer/app_drawer.dart';
import 'package:flutter/material.dart';

class FinancialAidPage extends StatelessWidget {
  static const String routeName = '/financialAid';

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: AppBar(
          title: Text("Financial Aid"),
        ),
        drawer: AppDrawer("", ""),
    body: Center(
      child: Text('You have pressed the button times.')
    ),
    backgroundColor: Colors.yellow,
    // ),
  );
  }
}
