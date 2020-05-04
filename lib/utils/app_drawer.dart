import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';

class AppDrawer extends StatelessWidget{

  const AppDrawer({this.onFrameSelect, this.email, this.photo, this.name, this.role});

  final FrameCallback onFrameSelect;
  final String email;
  final String name;
  final String photo;
  final String role;

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        children: <Widget>[
          Container(
            height: 240,
            child: DrawerHeader(
                decoration: BoxDecoration(
                  color: Colors.lightBlue[900],
                  ),
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
                          child: CircleAvatar(
                            backgroundImage: CachedNetworkImageProvider(photo),
                            backgroundColor: Colors.blueAccent[900],
                            radius: 60.0,
                          ),
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
          CustomListTile(Icons.view_list, "Registration", () => onFrameSelect("Registration")),
          (role == "Student") ? CustomListTile(
              Icons.track_changes, "Graduation Tracker", () => onFrameSelect("Tracker")) : SizedBox.shrink(),
          (role == "Student") ? CustomListTile(Icons.attach_money, "Financial Aid", () => onFrameSelect("Aid")) : SizedBox.shrink(),
          (role == "Student") ? CustomListTile(Icons.forum, "FAQ", () => onFrameSelect("FAQ")) : SizedBox.shrink(),
          CustomListTile(Icons.settings, "Settings", () => onFrameSelect("Settings")),
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
  
  const CustomListTile(this.icon, this.text, this.onTap);
  final IconData icon;
  final String text;
  final Function onTap;

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