import 'package:firststop/drawer/app_drawer.dart';
import 'package:flutter/material.dart';

class FaqPage extends StatelessWidget {
  static const String routeName = '/faq';

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: AppBar(
          title: Text("FAQ"),
        ),
        drawer: AppDrawer("", ""),
    body: Center(
      child: Text('You have pressed the button times.')
    ),
    backgroundColor: Colors.black,
    // ),
  );
  }
}
