import 'package:flutter/material.dart';
import 'package:firststop/utils/auth.dart';
import 'package:firststop/utils/boardpopup.dart';
import 'package:firststop/utils/bugpopup.dart';
import 'package:firststop/frames/dashboard.dart';
import 'package:firststop/utils/messagepopup.dart';
import 'package:googleapis/calendar/v3.dart' as calApi;
import 'package:firststop/models/GoogleHttpClient.dart';
import 'package:firststop/models/Event.dart';
import 'package:firststop/drawer/app_drawer.dart';
// import 'package:firststop/main.dart';

class HomePage extends StatefulWidget {
  HomePage({Key key, this.auth, this.userId, this.logoutCallback});
  static const String routeName = '/home';
  final BaseAuth auth;
  final VoidCallback logoutCallback;
  final String userId;

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<Event> calEvents = [];
  String name = "", email = "";
  // profilePic = "";

  @override
  void initState() {
    super.initState();
    widget.auth.getCurrentUser().then((user) {
      setState(() {
        name = user.displayName;
        email = user.email;
        // profilePic = user.photoURL;
      });
    });
    getCalendarEvents().then((value) {
      setState(() {
        print(value);
        calEvents = value;
      });
    });
  }

  signOut() async {
    try {
      await widget.auth.signOut();
      widget.logoutCallback();
    } catch (e) {
      print(e);
    }
  }

  Future<List<Event>> getCalendarEvents() async {
    Map<String, String> authHeaders = await widget.auth.getAuthHeaders();
    List<Event> _events = [];
    DateTime now = DateTime.now();
    final httpClient = GoogleHttpClient(authHeaders);
    var calendar = new calApi.CalendarApi(httpClient);
    var data =
        calendar.events.list("en.usa#holiday@group.v.calendar.google.com");
    await data.then((calApi.Events events) {
      events.items.forEach((calApi.Event event) {
        if (event.start.dateTime != null && event.start.dateTime.isAfter(now)) {
          print(event.summary);
          _events.add(new Event(
              status: event.status,
              summary: event.summary,
              start: event.start.dateTime,
              end: event.end.dateTime));
        } else if (event.start.date != null && event.start.date.isAfter(now)) {
          _events.add(new Event(
              status: event.status,
              summary: event.summary,
              start: event.start.date,
              end: event.end.date));
        }
      });
    });
    return _events;
  }

/*
Top Navigation Bar
*/
  @override
  Widget build(BuildContext context) {
    // var accountName;
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.yellow[800],
        title: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            FlutterLogo(
              colors: Colors.amber,
            ),
            Padding(
              padding: const EdgeInsets.only(left: 8.0),
              child: Text(
                "First Stop",
                style: TextStyle(letterSpacing: 1.2),
              ),
            ),
          ],
        ),
        centerTitle: true,
        actions: <Widget>[
          Column(
            children: <Widget>[
              SizedBox(
                height: 20,
              ),
              Text(
                _getMonth() +
                    " " +
                    DateTime.now().day.toString() +
                    " " +
                    DateTime.now().year.toString(),
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 17.0),
              ),
            ],
          ),
          /*
                Navigation Bar
              */
          IconButton(
            icon: Icon(
              Icons.message,
              color: Colors.blueAccent[900],
            ),
            onPressed: () {
              messagepopup(context);
            },
          ),
          IconButton(
            icon: Icon(
              Icons.developer_board,
              color: Colors.blueAccent[900],
            ),
            onPressed: () {
              boardpopup(context);
            },
          ),
          IconButton(
            icon: Icon(
              Icons.timer,
              color: Colors.blueAccent[900],
            ),
            onPressed: () {
              bugpopup(context);
            },
          ),
          IconButton(
            icon: Icon(
              Icons.exit_to_app,
              color: Colors.blueAccent[900],
            ),
            onPressed: () {
              signOut();
            },
          ),
        ],
      ),
      /*
              Home Dashboard
          */
      body: Padding(
        padding: const EdgeInsets.symmetric(),
        child: new Dashboard(email: email, name: name, events: calEvents),
      ),
      /*
                Side Bar Drawer
              */
      drawer: AppDrawer(name, email)
      
    );
  }
}


String _getMonth() {
  print("widget");
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


/*
Differet Pages from the Side Drawer
*/