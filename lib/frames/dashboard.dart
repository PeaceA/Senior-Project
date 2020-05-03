import 'package:flutter/material.dart';
import 'package:firststop/models/Event.dart';
import 'package:firststop/utils/eventrow.dart';

class Dashboard extends StatelessWidget {
  const Dashboard({this.name, this.email, this.events});

  final List<Event> events;
  final String name;
  final String email;
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      backgroundColor: Colors.grey[50],
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
                Text(name,
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
                    Text(email,
                        style: TextStyle(
                          color: Colors.black,
                          fontSize: 20.0,
                          letterSpacing: 1.0,
                        )),
                    SizedBox(width: 20.0),
                    Icon(
                      Icons.class_,
                      color: Colors.blueAccent[900],
                    ),
                    SizedBox(width: 10.0),
                    Text('Junior',
                        style: TextStyle(
                          color: Colors.black,
                          fontSize: 20.0,
                          letterSpacing: 1.0,
                        ))
                  ],
                ),
                Row(
                  children: <Widget> [
                      Icon(
                      Icons.assessment,
                      color: Colors.blueAccent[900],
                    ),
                    SizedBox(width: 10.0),
                  Text('3.5',
                        style: TextStyle(
                          color: Colors.black,
                          fontSize: 20.0,
                          letterSpacing: 1.0,
                        )
                    )
                ],
                ),
                  ],
                ),
                SizedBox(height: 30.0),
                Column(children: <Widget>[
                  CircleAvatar(
                  backgroundImage: AssetImage('assets/teacher.png'),
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
                Row(
                  children: <Widget> [
                      Icon(
                      Icons.calendar_today,
                      color: Colors.blueAccent[900],
                    ),
                    SizedBox(width: 10.0),
                  Text('MWF 12pm - 4pm',
                        style: TextStyle(
                          color: Colors.black,
                          fontSize: 20.0,
                          letterSpacing: 1.0,
                        )
                    )
                ],
                ),
                ],),
                ],),
              ),
              SizedBox(width: 130),
              SizedBox(
                child: Column(children: <Widget>[
                  SizedBox(height: 40,),
                  Text('Upcoming Events\n',
                    style: TextStyle(
                      color: Colors.blueAccent[900],
                      letterSpacing: 1.5,
                      fontSize: 30.0,
                      fontWeight: FontWeight.bold,
                    )),
                  _getHeader(context),
                ],),
                width: 500,
                height: 650,
              )
            ],
          )
        ),
    );
  }
  Widget _getHeader(context) {
     return new Expanded(
      child: new Container(
        color: Colors.black,
        child: new CustomScrollView(
          scrollDirection: Axis.vertical,
          slivers: <Widget>[
            new SliverPadding(
              padding: const EdgeInsets.symmetric(vertical: 14.0),
              sliver: new SliverFixedExtentList(
                itemExtent: 152.0,
                delegate: new SliverChildBuilderDelegate(
                    (context, index) => new EventRow(events[index]),
                  childCount: events.length,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  } 
}
