import 'package:flutter/material.dart';
import 'package:table_calendar/table_calendar.dart';

class Dashboard extends StatefulWidget {
  Dashboard({Key key, this.name, this.email});

  final String name;
  final String email;

  
  _DashboardState createState() => _DashboardState();
}

class _DashboardState extends State<Dashboard> {

  final _calendarController = CalendarController();

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      backgroundColor: Colors.grey[50],
      body: new LayoutBuilder( builder:
            (BuildContext context, BoxConstraints viewportConstraints){
                return SingleChildScrollView(
                                  child: Padding(
          padding: EdgeInsets.all(10.0),
          child: 
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Row(children: <Widget>[
                  SizedBox(width: 80,),
                  Column(children: <Widget>[
                    CircleAvatar(
                  backgroundImage: AssetImage('assets/student.png'),
                  backgroundColor: Colors.red[50],
                  radius: 80.0,
              ),
              Divider(color: Colors.blue[600], height: 20.0),
              Text(widget.name,
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
                    Text(widget.email,
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
                      Icons.calendar_today,
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
              SizedBox(width: 150.0),
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
              ],),
              ],),
              ],),
              SizedBox(height: 60,),
              _getHeader(context),
            ],
          )
        ),
                );
              })
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
    return Container(
              child: TableCalendar(
            calendarController: _calendarController,
          ),
        );
  } 
}
