import 'package:flutter/material.dart';
import 'package:firststop/models/Event.dart';
import 'package:firststop/utils/eventrow.dart';

class Dashboard extends StatefulWidget {
  Dashboard({Key key, this.events});

  final List<Event> events;

  _DashboardState createState() => _DashboardState();
}

class _DashboardState extends State<Dashboard> {

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      backgroundColor: Colors.grey[50],
      body: Padding(
          padding: EdgeInsets.all(10.0),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              SizedBox(width: 50,),
              SizedBox(
                width: 500,
                child: Column(children: <Widget>[
                  SizedBox(height: 30,),
                  Column(children: <Widget>[
                    CircleAvatar(
                  backgroundImage: AssetImage('assets/student.png'),
                  backgroundColor: Colors.red[50],
                  radius: 80.0,
                ),
                Divider(color: Colors.blue[600], height: 20.0),
                Text('Student Name',
                    style: TextStyle(
                      color: Colors.blueAccent,
                      letterSpacing: 1.5,
                      fontSize: 30.0,
                      fontWeight: FontWeight.bold,
                    )),
                SizedBox(height: 10.0),
                Row(
                  children: <Widget>[
                    Icon(
                      Icons.email,
                      color: Colors.redAccent
                    ),
                    SizedBox(width: 10.0),
                    Text('student@example.com',
                        style: TextStyle(
                          color: Colors.black,
                          fontSize: 20.0,
                          letterSpacing: 1.0,
                        )),
                    SizedBox(width: 20.0),
                    Icon(
                      Icons.class_,
                      color: Colors.redAccent,
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
                      color: Colors.redAccent,
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
                  backgroundColor: Colors.red[50],
                  radius: 80.0,
                ),
                Divider(color: Colors.blue[600], height: 20.0),
                Text('Advisor Name',
                    style: TextStyle(
                      color: Colors.blueAccent,
                      letterSpacing: 1.5,
                      fontSize: 30.0,
                      fontWeight: FontWeight.bold,
                    )),
                SizedBox(height: 10.0),
                Row(
                  children: <Widget>[
                    Icon(
                      Icons.email,
                      color: Colors.redAccent
                    ),
                    SizedBox(width: 10.0),
                    Text('advisor@example.com',
                        style: TextStyle(
                          color: Colors.black,
                          fontSize: 20.0,
                          letterSpacing: 1.0,
                        )),
                    SizedBox(width: 20.0),
                    Icon(
                      Icons.phone,
                      color: Colors.redAccent,
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
                      color: Colors.redAccent,
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
              SizedBox(width: 130,),
              SizedBox(
                child: Column(children: <Widget>[
                  SizedBox(height: 40,),
                  Text('Upcoming Events\n',
                    style: TextStyle(
                      color: Colors.blueAccent,
                      letterSpacing: 1.5,
                      fontSize: 30.0,
                      fontWeight: FontWeight.bold,
                    )),
                  _getHeader(context),
                ],),
                width: 650,
                height: 700,
              )
            ],
          )
        ),
    );
  }

  String _getMonth() {
    switch (DateTime.now().month.toString()) {
      case "1":
        return "Jan";
      case "2":
        return "Feb";
      case "3":
        return "Mar";
      case "4":
        return "Apr";
      case "5":
        return "May";
      case "6":
        return "Jun";
      case "7":
        return "Jul";
      case "8":
        return "Aug";
      case "9":
        return "Sep";
      case "10":
        return "Oct";
      case "11":
        return "Nov";
      case "12":
        return "Dec";
      default:
        return DateTime.now().month.toString();
    }
  }

  Widget _getHeader(context) {
     return new Expanded(
      child: new Container(
        color: Colors.blue[50],
        child: new CustomScrollView(
          scrollDirection: Axis.vertical,
          slivers: <Widget>[
            new SliverPadding(
              padding: const EdgeInsets.symmetric(vertical: 24.0),
              sliver: new SliverFixedExtentList(
                itemExtent: 152.0,
                delegate: new SliverChildBuilderDelegate(
                    (context, index) => new EventRow(widget.events[index]),
                  childCount: widget.events.length,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  } 
}
