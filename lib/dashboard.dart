import 'package:flutter/material.dart';

class Dashboard extends StatefulWidget {
  Dashboard({Key key}) : super(key: key);

  _DashboardState createState() => _DashboardState();
}

class _DashboardState extends State<Dashboard> {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      backgroundColor: Colors.grey[50],
      appBar: new AppBar(
        title: new Text("Profile"),
        centerTitle: true,
        backgroundColor: Colors.blueAccent,
        elevation: 0.0,
      ),
      body: Padding(
          padding: EdgeInsets.all(10.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
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
                    fontSize: 20.0,
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
                        fontSize: 10.0,
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
                        fontSize: 10.0,
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
                        fontSize: 10.0,
                        letterSpacing: 1.0,
                      )
                  )
              ],
              ),
              SizedBox(width: 20.0),
              _getHeader(context),
            ],
          )),
    );
  }
}

Widget _getHeader(context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        Container(
          padding: EdgeInsets.symmetric(horizontal: 10.0),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(25.0),
            color: Colors.black,
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Container(
                margin: EdgeInsets.symmetric(horizontal: 20.0),
                child: RaisedButton(
                  child: Text(
                    "Today",
                    style: TextStyle(
                      color: Colors.white,
                    ),
                  ),
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(20.0)),
                  color: Colors.black,
                  onPressed: () {},
                ),
              ),
              RaisedButton(
                child: Text(
                  "Month",
                  style: TextStyle(
                    color: Colors.white,
                  ),
                ),
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(20.0)),
                color: Colors.blue[900],
                onPressed: () {},
              ),
              Container(
                margin: EdgeInsets.symmetric(horizontal: 20.0),
                child: RaisedButton(
                  child: Text(
                    "Year",
                    style: TextStyle(
                      color: Colors.white,
                    ),
                  ),
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(20.0)),
                  color: Colors.black,
                  onPressed: () {},
                ),
              ),
            ],
          ),
        ),
        Text(
          _getMonth() +
              ", " +
              DateTime.now().day.toString() +
              "th " +
              DateTime.now().year.toString(),
          textAlign: TextAlign.end,
          style: TextStyle(letterSpacing: 1.2, fontSize: 20.0),
        ),
      ],
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
