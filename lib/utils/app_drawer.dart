import 'package:flutter/material.dart';

class AppDrawer extends StatelessWidget{

  const AppDrawer({this.onFrameSelect, this.email, this.name});

  final FrameCallback onFrameSelect;
  final String email;
  final String name;

      @override
      Widget build(BuildContext context) {
        return Drawer(
        child: ListView(
          children: <Widget>[
            Container(
              height: 220,
              child: DrawerHeader(
                  decoration: BoxDecoration(
                      gradient: RadialGradient(
                          colors: <Color>[ Colors.grey[350], Colors.lightBlue[900],])),
                  /*
                      Student Profile Image
                  */
                  child: Container(
                    child: Column(
                      children: <Widget>[
                        SizedBox(height: 10,),
                        Material(
                          borderRadius: BorderRadius.all(Radius.circular(70.0)),
                          elevation: 10,
                          child: Padding(
                            padding: EdgeInsets.all(8.0),
                            child: Image.asset('assets/student.png',
                                width: 100, height: 100),
                          ),
                        ),
                        SizedBox(height: 10,),
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
            ),
            CustomListTile(Icons.dashboard, "Dashboard", () => onFrameSelect("Dashboard")),
            CustomListTile(
                Icons.developer_board, "Graduation Tracker", () => onFrameSelect("Tracker")),
            CustomListTile(Icons.developer_mode, "Classes", () => onFrameSelect("Classes")),
            CustomListTile(Icons.call, "Financial Aid", () => onFrameSelect("Aid")),
            CustomListTile(Icons.settings, "Settings", () => onFrameSelect("Settings")),
            CustomListTile(Icons.person, "Advisor", () => onFrameSelect("Advisor")),
            CustomListTile(Icons.person, "FAQ", () => onFrameSelect("FAQ")),
            ListTile(
            title: Text(''),
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

typedef FrameCallback = void Function(String widget);