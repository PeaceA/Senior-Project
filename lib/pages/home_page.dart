import 'package:flutter/material.dart';
import 'package:firststop/utils/auth.dart';
import 'package:firststop/utils/boardpopup.dart';
import 'package:firststop/utils/bugpopup.dart';
import 'package:firststop/utils/dashboard.dart';
import 'package:firststop/utils/messagepopup.dart';

class HomePage extends StatefulWidget {
  HomePage({Key key, this.auth, this.userId, this.logoutCallback});
  
  final BaseAuth auth;
  final VoidCallback logoutCallback;
  final String userId;

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {

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
  }
  
  signOut() async {
    try {
      await widget.auth.signOut();
      widget.logoutCallback();
    } catch (e) {
      print(e);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(  
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
          Column(children: <Widget>[
              SizedBox(height: 20,),
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
          IconButton(
            icon: Icon(
              Icons.message,
              color: Colors.deepPurple,
            ),
            onPressed: () {
              messagepopup(context);
            },
          ),
          IconButton(
            icon: Icon(
              Icons.developer_board,
              color: Colors.green,
            ),
            onPressed: () {
              boardpopup(context);
            },
          ),
          IconButton(
            icon: Icon(
              Icons.timer,
              color: Colors.red,
            ),
            onPressed: () {
              bugpopup(context);
            },
          ),
          IconButton(
            icon: Icon(
              Icons.exit_to_app,
              color: Colors.amber,
            ),
            onPressed: () {
              signOut();
            },
          ),
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(30.0),
        child: new Dashboard(email: email, name: name,),
      ),
      drawer: Drawer(
        child: SingleChildScrollView(
          child: Column(
            children: <Widget>[
               CircleAvatar(
                backgroundImage: AssetImage('assets/teacher.png'),
                backgroundColor: Colors.red[50],
                radius: 80.0,
              ),
              Container(
                height: 90.0,
                color: Colors.grey[50],
              child: UserAccountsDrawerHeader(
                accountName: Text(
                  name,
                  style: TextStyle(
                    color: Colors.redAccent,
                    fontSize: 20.0,
                    letterSpacing: 1.2,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                 accountEmail: Text(
                  email,
                  style: TextStyle(
                    color: Colors.redAccent,
                  ),
                ),
              ),
              ),
               
              ListTile(
                leading: Icon(
                  Icons.dashboard,
                  color: Colors.blueAccent,
                ),
                title: Text(
                  "Dashboard",
                  style: TextStyle(
                    letterSpacing: 1.2,
                    color: Colors.blueAccent,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                onTap: () {
                  Navigator.of(context).pop();
                },
              ),
              ListTile(
                leading: Icon(
                  Icons.developer_board,
                  color: Colors.blueAccent,
                ),
                title: Text(
                  "Graduation Tracker",
                  style: TextStyle(
                    letterSpacing: 1.2,
                    color: Colors.blueAccent,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                onTap: () {
                  Navigator.of(context).pop();
                },
              ),
              ListTile(
                leading: Icon(
                  Icons.developer_mode,
                  color: Colors.blueAccent,
                ),
                title: Text(

                  
                  "Classes",
                  style: TextStyle(
                    letterSpacing: 1.2,
                    color: Colors.blueAccent,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                onTap: () {
                  Navigator.of(context).pop();
                },
              ),
              ListTile(
                leading: Icon(
                  Icons.call,
                  color: Colors.blueAccent,
                ),
                title: Text(
                  "Financial Aid",
                  style: TextStyle(
                    letterSpacing: 1.2,
                    color: Colors.blueAccent,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                
                onTap: () {
                  Navigator.of(context).pop();
                },
              ),
              ListTile(
                leading: Icon(
                  Icons.settings,
                  color: Colors.blueAccent,
                ),
                title: Text(
                  "Settings",
                  style: TextStyle(
                    letterSpacing: 1.2,
                    color: Colors.blue,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                onTap: () {
                  Navigator.of(context).pop();
                },
              ),
            ],
          ),
        ),
      ),
    );
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