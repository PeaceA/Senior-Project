import 'package:firststop/frames/registration.dart';
import 'package:flutter/material.dart';
import 'package:firststop/utils/auth.dart';
import 'package:firststop/utils/boardpopup.dart';
import 'package:firststop/utils/bugpopup.dart';
import 'package:firststop/frames/dashboard.dart';
import 'package:firststop/frames/faq.dart';
import 'package:firststop/frames/financial_aid.dart';
import 'package:firststop/frames/graduation_tracker.dart';
import 'package:firststop/frames/settings.dart';
import 'package:firststop/utils/messagepopup.dart';
import 'package:googleapis/calendar/v3.dart' as calApi;
import 'package:firststop/models/GoogleHttpClient.dart';
import 'package:firststop/models/Event.dart';
import 'package:firststop/models/User.dart';
import 'package:firststop/utils/app_drawer.dart';
import 'package:firebase/firebase.dart' as fb;

class HomePage extends StatefulWidget {
  HomePage({Key key, this.auth, this.userId, this.logoutCallback});
  final BaseAuth auth;
  final VoidCallback logoutCallback;
  final String userId;

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<Event> calEvents = [];
  var current;
  String frame;

  fb.User fbUser;

  @override
  void initState() {
    super.initState();
    widget.auth.getCurrentUser().then((user) {
      setState(() {
        fbUser = user;
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

  getUserInfo() async {
    final fb.DatabaseReference ref = fb.database().ref("users/" + widget.userId);
    await ref.once("value").then((e) async {
      var snap = e.snapshot;
      var role = snap.child("role").val();

      if (role  == "Student") {
        current = new Student();
        current.major = snap.child("major").val();
        current.classification = snap.child("classification").val();
        current.startSemester = snap.child("startSemester").val();
        current.gpa = snap.child("gpa").val();

        final fb.DatabaseReference aRef = fb.database().ref("users/" + snap.child("advisor").val());
        await aRef.once("value").then((e){
          var aSnap = e.snapshot;

          current.advisor = new Advisor();
          current.advisor.officeBuilding = aSnap.child("officeBuilding").val();
          current.advisor.roomNumber = aSnap.child("roomNumber").val();
          current.advisor.officeHours = aSnap.child("officeHours").val();
          current.advisor.firstName = aSnap.child("firstName").val();
          current.advisor.lastName = aSnap.child("lastName").val();
          current.advisor.email = aSnap.child("email").val();
          current.advisor.photo = aSnap.child("photo").val();
          current.advisor.role = aSnap.child("role").val();
          current.advisor.id = aSnap.child("id").val();
          current.advisor.phoneNumber = aSnap.child("phoneNumber").val();
        });

      } else {
          current = new Advisor();
          current.officeBuilding = snap.child("officeBuilding").val();
          current.roomNumber = snap.child("roomNumber").val();
          current.officeHours = snap.child("officeHours").val();
      }
      current.fullName = fbUser.displayName;
      current.email = fbUser.email;
      current.photo = fbUser.photoURL;
      current.role = role;
      current.id = snap.child("id").val();
      current.phoneNumber = snap.child("phoneNumber").val();
      
      await getCalendarEvents().then((value) {
          current.events = value;
      });

      if (role == "Advisor") {
        await getAdvisees().then((value) {
          current.students = value;
        });
      }
    });
    return current;
  }

  Future<List<Student>> getAdvisees() async {
    List<Student> _students = [];

    final fb.DatabaseReference sRef = fb.database().ref("users/");
    await  sRef.orderByChild("advisor").equalTo(widget.userId).once("value").then((e) {
      var sSnap = e.snapshot;

      sSnap.forEach((st) {
        Student student = new Student();
        student.firstName = st.child("firstName").val();
        student.lastName = st.child("lastName").val();
        student.email = st.child("email").val();
        student.classification = st.child("classification").val();
        student.major = st.child("major").val();
        student.id = st.child("id").val();
        student.phoneNumber = st.child("phoneNumber").val();
        student.photo = st.child("photo").val();
        student.gpa = st.child("gpa").val();
        _students.add(student);
      });
    }).then((value) {
    });
    return _students;
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
  // Widget frame;
  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: getUserInfo(),
      builder: (context, AsyncSnapshot snapshot) {  
        if (!snapshot.hasData) {
          return Center(child: CircularProgressIndicator());
        }else {
          return Scaffold(
            appBar: AppBar(
              backgroundColor: Colors.lightBlue[900],
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
                          ", " +
                          DateTime.now().year.toString() +
                          "  |",
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 17.0),
                    ),
                  ],
                ),
                /*
                      Navigation Bar
                    */
                IconButton(
                  tooltip: "Contact Advisor",
                  icon: Icon(
                    Icons.email,
                    color: Colors.blueAccent[900],
                  ),
                  onPressed: () {
                    messagepopup(context, current);
                  },
                ),
                IconButton(
                  tooltip: "Class Schedule",
                  icon: Icon(
                    Icons.calendar_today,
                    color: Colors.blueAccent[900],
                  ),
                  onPressed: () {
                    boardpopup(context);
                  },
                ),
                // IconButton(
                //   icon: Icon(
                //     Icons.timer,
                //     color: Colors.blueAccent[900],
                //   ),
                //   onPressed: () {
                //     bugpopup(context);
                //   },
                // ),
                IconButton(
                  tooltip: "Sign out",
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
              child: _getFrame(),
            ),
            /*
                      Side Bar Drawer
                    */
            drawer: 
            AppDrawer(
              name: fbUser.displayName,
              email: fbUser.email,
              photo: fbUser.photoURL,
              role: current.role,
              onFrameSelect: (String selectedFrame) {
                  Navigator.of(context).pop();
                  setState(() {
                    frame = selectedFrame;
                  });
              },)
          );
        }

      },
    );
  }

  Widget _getFrame() {
    if (frame == "FAQ") {
      return new FAQ();
    } else if (frame == "Registration") {
      return new Registration();
    } else if (frame == "Aid") {
      return new FinancialAid();
    } else if (frame == "Tracker") {
      return new GraduationTracker();
    } else if (frame == "Settings") {
      return new Settings();
    } 
    return new Dashboard(user: current);
  }
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


/*
Differet Pages from the Side Drawer
*/