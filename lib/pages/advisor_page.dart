import 'package:firststop/drawer/app_drawer.dart';
import 'package:firststop/models/Event.dart';
import 'package:flutter/material.dart';

class AdvisorPage extends StatefulWidget {
  static const String routeName = '/advisor';
  AdvisorPage({Key key, this.name, this.email, this.events});

  final List<Event> events;
  final String name;
  final String email;

  _AdvisorState createState() => _AdvisorState();
}

class _AdvisorState extends State<AdvisorPage> {
  // static const String routeName = '/advisor';

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: AppBar(
          title: Text("Dr. Harry Keeling"),
        ),
        drawer: AppDrawer("", ""),
    body: Padding(
          padding: EdgeInsets.all(20.0),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              SizedBox(width: 50,),
              SizedBox(
                width: 520,
                child: Column(children: <Widget>[
                  SizedBox(height: 30),
                  Column(children: <Widget>[
                    CircleAvatar(
                  backgroundImage: AssetImage('assets/student.png'),
                  backgroundColor: Colors.blueAccent[900],
                  radius: 80.0,
                ),
                Divider(color: Colors.black, height: 20.0),
                Text('Advisor Name',
                    style: TextStyle(
                      color: Colors.blueAccent[900],
                      letterSpacing: 1.5,
                      fontSize: 30.0,
                      fontWeight: FontWeight.bold,
                    )),
                SizedBox(height: 10.0),
                Row(
                  children: <Widget>[
                    Icon(
                      Icons.email,
                      color: Colors.blueAccent[900]
                    ),
                    SizedBox(width: 10.0),
                    Text(' @example.com',
                        style: TextStyle(
                          color: Colors.black,
                          fontSize: 20.0,
                          letterSpacing: 1.0,
                        )),
                    SizedBox(width: 20.0),
                    Icon(
                      Icons.phone,
                      color: Colors.blueAccent[900],
                    ),
                    SizedBox(width: 10.0),
                    Text('111-111-2222',
                        style: TextStyle(
                          color: Colors.black,
                          fontSize: 20.0,
                          letterSpacing: 1.0,
                        ))
                  ],
                ),
                  ])]))])),
    backgroundColor: Colors.grey[50],
    // ),
  );
  }
}