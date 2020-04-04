import 'package:firststop/frames/dashboard.dart';
import 'package:firststop/pages/advisor_page.dart';
import 'package:firststop/pages/classes.dart';
import 'package:firststop/pages/financial_aid.dart';
import 'package:firststop/pages/graduation_tracker_page.dart';
import 'package:firststop/pages/home_page.dart';
import 'package:flutter/material.dart';

import '../route_generator.dart';

class AppDrawer extends StatelessWidget{
  String name = "", email = "";
        @override
      Widget build(BuildContext context) {
        return Drawer(
        child: ListView(
          children: <Widget>[
            DrawerHeader(
                decoration: BoxDecoration(
                    gradient: RadialGradient(
                        colors: <Color>[ Colors.grey[350], Colors.lightBlue[900],])),
                /*
                    Student Profile Image
                */
                child: Container(
                  child: Column(
                    children: <Widget>[
                      Material(
                        borderRadius: BorderRadius.all(Radius.circular(50.0)),
                        elevation: 10,
                        child: Padding(
                          padding: EdgeInsets.all(8.0),
                          child: Image.asset('assets/student.png',
                              width: 80, height: 80),
                        ),
                      ),
                      Text(
                        name,
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 20.0,
                          letterSpacing: 1.2,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      Text(
                        email,
                        style: TextStyle(
                          color: Colors.white,
                        ),
                      ),
                    ],
                  ),
                )),
            CustomListTile(Icons.dashboard, "Dashboard", () => Navigator.push(context, new MaterialPageRoute(
                                                              builder: (context) =>
                                                                new HomePage()))),
            CustomListTile(
                Icons.developer_board, "Graduation Tracker", () => Navigator.push(context, new MaterialPageRoute(
                                                              builder: (context) =>
                                                                new GradTrackerPage()))),
            CustomListTile(Icons.developer_mode, "Classes", () => Navigator.push(context, new MaterialPageRoute(
                                                              builder: (context) =>
                                                                new ClassesPage()))),
            CustomListTile(Icons.call, "Financial Aid", () =>  Navigator.push(context, new MaterialPageRoute(
                                                              builder: (context) =>
                                                                new FinancialAidPage()))),
            CustomListTile(Icons.settings, "Settings", () => {}),
            CustomListTile(Icons.person, "Advisor", () => Navigator.push(context, new MaterialPageRoute(
                                                              builder: (context) =>
                                                                new AdvisorPage()))),
            ListTile(
            title: Text(' Version 0.0.1'),
            onTap: () {},
          ),
          ],
        ),
      );
      }
}


class CustomListTile extends StatelessWidget {
  IconData icon;
  String text;
  Function onTap;
  CustomListTile(this.icon, this.text, this.onTap);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(8.0, 0, 8.0, 0),
      child: Container(
        decoration: BoxDecoration(
            border: Border(bottom: BorderSide(color: Colors.grey))),
        child: InkWell(
          splashColor: Colors.blueAccent,
          onTap: onTap,
          child: Container(
            height: 75,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Row(
                  children: <Widget>[
                    Icon(icon, color: Colors.lightBlue[900]),
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Text(text,
                          style: TextStyle(
                              fontSize: 16.0,
                              letterSpacing: 1.2,
                              color: Colors.lightBlue[900],
                              fontWeight: FontWeight.bold)),
                    ),
                  ],
                ),
                Icon(Icons.arrow_right,  color: Colors.lightBlue[900])
              ],
            ),
          ),
        ),
      ),
    );
  }
}