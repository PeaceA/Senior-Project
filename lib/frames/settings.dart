import 'package:cached_network_image/cached_network_image.dart';
import 'package:firebase/firebase.dart' as fb;
import 'package:firststop/models/User.dart';
import 'package:flutter/material.dart';

class Settings extends StatelessWidget {

  Settings({this.user, this.userId});
  final User user;
  final String userId;
  List<String> _cals = [""];
  List<String> _classifications = <String>['', 'Freshman', 'Sophomore', 'Junior', 'Senior'];
  List<String> _majors = <String>['', 'Computer Science', 'Computer Engineering', 'Mechanical Engineering', 'Civil Engineering'];

  FormFieldState _calState;
  FormFieldState _classState;
  FormFieldState _majorState;



  final GlobalKey<ScaffoldState> _scaffoldKey = new GlobalKey<ScaffoldState>();

  TextEditingController passwordController = TextEditingController();
  TextEditingController calendarController = TextEditingController();
  TextEditingController numberController = TextEditingController();
  TextEditingController gpaController = TextEditingController();
  TextEditingController classController = TextEditingController();
  TextEditingController majorController = TextEditingController();

  @override
  Widget build(BuildContext context) {

    _cals.addAll(user.calendars);

    var buildDivider = Container(
      margin: const EdgeInsets.symmetric(
        horizontal: 8.0,
      ),
      width: double.infinity,
      height: 1.0,
      color: Colors.grey.shade400,
    );
    return new Scaffold(
      key: _scaffoldKey,
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
                    title: Text(
                      user.fullName,
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                    leading: CircleAvatar(
                      backgroundImage: CachedNetworkImageProvider(user.photo),
                      radius: 20,
                    ),
                  ),
                ),
                const SizedBox(height: 10.0),
                Card(
                  margin: const EdgeInsets.fromLTRB(12.0, 8.0, 12.0, 16.0),
                  elevation: 8.0,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10.0)),
                  child: Column(
                    children: <Widget>[
                      ExpansionTile(
                        leading:
                            Icon(Icons.phone, color: Colors.blue[600]),
                        title: Text("Change Phone Number"),
                        trailing: Icon(Icons.keyboard_arrow_down),
                        children: <Widget> [
                          Row(
                            children: [
                              Container(
                                width: 40,
                              ),
                              Container(
                                width: 500,
                                child: TextField(
                                  controller: numberController,
                                  decoration: InputDecoration(
                                    labelText: "Enter new phone number",
                                  ),
                                ),
                              ),
                              Container(
                                width: 10,
                              ),
                              OutlineButton(
                                color: Colors.lightBlue[900],
                                textColor: Colors.lightBlue[900],
                                onPressed: () => updateDB("phoneNumber", numberController, false),
                                child: Text("Save"),
                              ),
                            ],
                          ),
                          Container(
                            height: 20,
                          )
                        ],
                      ),
                      buildDivider,
                      ExpansionTile(
                        leading:
                            Icon(Icons.calendar_today, color: Colors.blue[600]),
                        title: Text("Choose Calendar"),
                        trailing: Icon(Icons.keyboard_arrow_down),
                        children: <Widget> [
                          Row(
                            children: [
                              Container(
                                width: 40,
                              ),
                              Container(
                                width: 500,
                                child: new FormField(
                                  builder: (FormFieldState state) {
                                    _calState = state;
                                    return InputDecorator(
                                      decoration: InputDecoration(
                                        labelText: 'Choose Calendar',
                                      ),
                                      isEmpty: calendarController.text == '',
                                      child: new DropdownButtonHideUnderline(
                                        child: new DropdownButton(
                                          value: calendarController.text,
                                          isDense: true,
                                          onChanged: (String newValue) {
                                            state.setState(() {
                                              calendarController.text = newValue;
                                            });
                                          },
                                          items: _cals.map((String value) {
                                            return new DropdownMenuItem(
                                              value: value,
                                              child: new Text(value),
                                            );
                                          }).toList(),
                                        ),
                                      ),
                                    );
                                  },
                                ),
                              ),
                              Container(
                                width: 10,
                              ),
                              OutlineButton(
                                color: Colors.lightBlue[900],
                                textColor: Colors.lightBlue[900],
                                onPressed: () => updateDB("calendar", calendarController, false), 
                                child: Text("Save"),
                              ),
                            ],
                          ),
                          Container(
                            height: 20,
                          )
                        ],
                      ),
                      (user.role == "Student") ? buildDivider : SizedBox.shrink(),
                      (user.role == "Student") ? ExpansionTile(
                        leading:
                            Icon(Icons.grade, color: Colors.blue[600]),
                        title: Text("Update GPA"),
                        trailing: Icon(Icons.keyboard_arrow_down),
                        children: <Widget> [
                          Row(
                            children: [
                              Container(
                                width: 40,
                              ),
                              Container(
                                width: 500,
                                child: TextField(
                                  controller: gpaController,
                                  decoration: InputDecoration(
                                    labelText: "Enter new GPA",
                                  ),
                                ),
                              ),
                              Container(
                                width: 10,
                              ),
                              OutlineButton(
                                color: Colors.lightBlue[900],
                                textColor: Colors.lightBlue[900],
                                onPressed: () => updateDB("gpa", gpaController, true), 
                                child: Text("Save"),
                              ),
                            ],
                          ),
                          Container(
                            height: 20,
                          )
                        ],
                      ) : SizedBox.shrink(),
                      (user.role == "Student") ? buildDivider : SizedBox.shrink(),
                      (user.role == "Student") ? ExpansionTile(
                        leading: Icon(Icons.layers, color: Colors.blue[600]),
                        title: Text("Update Classification"),
                        trailing: Icon(Icons.keyboard_arrow_down),
                        children: <Widget> [
                          Row(
                            children: [
                              Container(
                                width: 40,
                              ),
                              Container(
                                width: 500,
                                child: new FormField(
                                  builder: (FormFieldState state) {
                                    _classState = state;
                                    return InputDecorator(
                                      decoration: InputDecoration(
                                        labelText: 'Choose new classification',
                                      ),
                                      isEmpty: classController.text == '',
                                      child: new DropdownButtonHideUnderline(
                                        child: new DropdownButton(
                                          value: classController.text,
                                          isDense: true,
                                          onChanged: (String newValue) {
                                            state.setState(() {
                                              classController.text = newValue;
                                            });
                                          },
                                          items: _classifications.map((String value) {
                                            return new DropdownMenuItem(
                                              value: value,
                                              child: new Text(value),
                                            );
                                          }).toList(),
                                        ),
                                      ),
                                    );
                                  },
                                ),
                              ),
                              Container(
                                width: 10,
                              ),
                              OutlineButton(
                                color: Colors.lightBlue[900],
                                textColor: Colors.lightBlue[900],
                                onPressed: () => updateDB("classification", classController, true), 
                                child: Text("Save"),
                              ),
                            ],
                          ),
                          Container(
                            height: 20,
                          )
                        ],
                      ) : SizedBox.shrink(),
                      (user.role == "Student") ? buildDivider : SizedBox.shrink(),
                      (user.role == "Student") ? ExpansionTile(
                        leading: Icon(Icons.school, color: Colors.blue[600]),
                        title: Text("Change Major"),
                        trailing: Icon(Icons.keyboard_arrow_down),
                        children: <Widget> [
                          Row(
                            children: [
                              Container(
                                width: 40,
                              ),
                              Container(
                                width: 500,
                                child: new FormField(
                                  builder: (FormFieldState state) {
                                    _majorState = state;
                                    return InputDecorator(
                                      decoration: InputDecoration(
                                        labelText: 'Choose new major',
                                      ),
                                      isEmpty: majorController.text == '',
                                      child: new DropdownButtonHideUnderline(
                                        child: new DropdownButton(
                                          value: majorController.text,
                                          isDense: true,
                                          onChanged: (String newValue) {
                                            state.setState(() {
                                              majorController.text = newValue;
                                            });
                                          },
                                          items: _majors.map((String value) {
                                            return new DropdownMenuItem(
                                              value: value,
                                              child: new Text(value),
                                            );
                                          }).toList(),
                                        ),
                                      ),
                                    );
                                  },
                                ),
                              ),
                              Container(
                                width: 10,
                              ),
                              OutlineButton(
                                color: Colors.lightBlue[900],
                                textColor: Colors.lightBlue[900],
                                onPressed: () => updateDB("major", majorController, true), 
                                child: Text("Save"),
                              ),
                            ],
                          ),
                          Container(
                            height: 20,
                          )
                        ],
                      ) : SizedBox.shrink(),
                    ],
                  ),
                ),
                const SizedBox(height: 20.0),
              ],
            ),
          ),
        ],
      ),
    );
  }

  showMessage(String message, [MaterialColor color = Colors.red]) {
    _scaffoldKey.currentState
      .showSnackBar(new SnackBar(backgroundColor: color, content: new Text(message))); 
  }

  
  updateDB(String tag, TextEditingController controller, bool needsApproval) {
    var map;
    fb.DatabaseReference ref;

    if (controller.text == "") {
      showMessage("Invalid input.");
    }

    if (needsApproval) {
      ref = fb.database().ref("users/" + userId + "/pending");
      map = {
        tag: controller.text,
      };
    } else {
      ref = fb.database().ref("users/" + userId);
      map = {
        tag: controller.text,
      };
    }

    if (tag == "calendar") {
      _calState.setState(() {
        controller.clear();
      });
    } else if (tag == "classification") {
      _classState.setState(() {
        controller.clear();
      });
    } else if (tag == "major") {
      _majorState.setState(() {
        controller.clear();
      });
    } else {
      controller.clear();
    }

    ref.update(map).then((value) {
      if (needsApproval) {
        showMessage("Submitted for approval.", Colors.orange);
      } else {
        showMessage("Saved!", Colors.green);
      }
    });
  }
}
