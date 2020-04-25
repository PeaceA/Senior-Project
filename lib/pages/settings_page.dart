// import 'package:firststop/drawer/app_drawer.dart';
import 'package:flutter/material.dart';

class SettingsPage extends StatelessWidget {
  static const String routeName = '/settings';

  @override
  Widget build(BuildContext context) {
    var buildDivider = Container(
      margin: const EdgeInsets.symmetric(
        horizontal: 8.0,
      ),
      width: double.infinity,
      height: 1.0,
      color: Colors.grey.shade400,
    );
    return new Scaffold(
      backgroundColor: Colors.grey.shade200,
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        brightness: Brightness.light,
        iconTheme: IconThemeData(color: Colors.black),
        title: Text("Settings", style: TextStyle(color: Colors.black)),
      ),
      body: Stack(
        children: <Widget>[
          SingleChildScrollView(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Card(
                  elevation: 8.0,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10.0)),
                  margin: const EdgeInsets.all(8.0),
                  color: Colors.blue[600],
                  child: ListTile(
                    onTap: () {
                      //open edit profile
                    },
                    title: Text(
                      "Shaunelle Thomas",
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                    leading: CircleAvatar(
                      backgroundImage: AssetImage('assets/student.png'),
                    ),
                    trailing: Icon(Icons.edit, color: Colors.white),
                  ),
                ),
                const SizedBox(height: 10.0),
                Card(
                  margin: const EdgeInsets.fromLTRB(32.0, 8.0, 32.0, 16.0),
                  elevation: 8.0,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10.0)),
                  child: Column(
                    children: <Widget>[
                      ListTile(
                        leading: Icon(
                          Icons.lock_outline,
                          color: Colors.blue[600],
                        ),
                        title: Text("Change Password"),
                        trailing: Icon(Icons.keyboard_arrow_right),
                        onTap: () {
                          //open change password info
                        },
                      ),
                      buildDivider,
                      ListTile(
                        leading:
                            Icon(Icons.attach_money, color: Colors.blue[600]),
                        title: Text("Change Financial Aid"),
                        trailing: Icon(Icons.keyboard_arrow_right),
                        onTap: () {
                          //open change financial aid
                        },
                      ),
                      buildDivider,
                      ListTile(
                        leading: Icon(Icons.person, color: Colors.blue[600]),
                        title: Text("Change Classification"),
                        trailing: Icon(Icons.keyboard_arrow_right),
                        onTap: () {
                          //open change classification
                        },
                      )
                    ],
                  ),
                ),
                const SizedBox(height: 20.0),
                Text(
                  "Notification Settings",
                  style: TextStyle(
                      fontSize: 20.0,
                      fontWeight: FontWeight.bold,
                      color: Colors.blue[600]),
                ),
                SwitchListTile(
                  activeColor: Colors.blue[600],
                  contentPadding: const EdgeInsets.all(0),
                  value: true,
                  title: Text("Receive notifications"),
                  onChanged: (val) {},
                ),
                SwitchListTile(
                  activeColor: Colors.blue[600],
                  contentPadding: const EdgeInsets.all(0),
                  value: false,
                  title: Text("Receive emails"),
                  onChanged: null,
                ),
                SwitchListTile(
                  activeColor: Colors.blue[600],
                  contentPadding: const EdgeInsets.all(0),
                  value: true,
                  title: Text("Receive app updates"),
                  onChanged: (val) {},
                ),
                Card(
                  margin: const EdgeInsets.fromLTRB(0.0, 8.0, 32.0, 16.0),
                  elevation: 8.0,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10.0)),
                  child: Column(
                    children: <Widget>[
                      ListTile(
                        leading: Icon(
                          Icons.power,
                          color: Colors.blue[600],
                        ),
                        title: Text("Log Out"),
                        trailing: Icon(Icons.keyboard_arrow_right),
                        onTap: () {
                          //open change password info
                        },
                      )
                    ],
                  ),
                ),
              ],
            ),
          ),
      
        ],
      ),
    );
  }
}
