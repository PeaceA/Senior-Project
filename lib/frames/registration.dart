import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:firststop/utils/centered_view.dart';
import 'package:firststop/models/User.dart';
import 'package:firststop/models/Course.dart';
import 'package:firebase/firebase.dart' as fb;
import 'package:firststop/utils/auth.dart';
import 'dart:ui' as ui;



class Registration extends StatefulWidget {
  Registration({Key key, this.auth, this.userId});

  final String userId;
  final BaseAuth auth;
/*
  DataTable courses = DataTable(sortColumnIndex: 2, sortAscending: true, columns: [
              DataColumn(label: Text('Item Code')),
              DataColumn(label: Text('Stock Item')),
              DataColumn(label: Text('Opening Quantity'), numeric: true,),
              DataColumn(label: Text('Quantity In'), numeric: true),
              DataColumn(label: Text('Quantity Out'), numeric: true),
              DataColumn(label: Text('Closing Quantity'), numeric: true)
            ], rows: [
              DataRow(selected: true, cells: [
                DataCell(Text('EL-7861')),
                DataCell(Text('Place holder'), placeholder: true,showEditIcon: true),
                DataCell(Text('87.00')),
                DataCell(Text('14.00')),
                DataCell(Text('5.00')),
                DataCell(Text('96.00'))
              ]),
              DataRow(cells: [
                DataCell(Text('EL-7862')),
                DataCell(Text('Meat grinder')),
                DataCell(Text('538.00'), showEditIcon: true),
                DataCell(Text('133.00')),
                DataCell(TextFormField(initialValue: 'YESSSSS'), showEditIcon: true),
                DataCell(Text('96.00'))
              ]),
              DataRow(cells: [
                DataCell(Text('EL-7862')),
                DataCell(Text('Microwave oven')),
                DataCell(Text('116.00')),
                DataCell(Text('28.00')),
                DataCell(Text('5.00')),
                DataCell(Text('139.00'))
              ]),
            ]);*/
  @override
  _RegistrationState createState() => _RegistrationState();
}

class _RegistrationState extends State<Registration> {
  fb.User fbUser;
  var courses;
  var rows;
  // @override
  // void initState() {
  //   super.initState();
  //   widget.auth.getCurrentUser().then((user) {
  //     setState(() {
  //       fbUser = user;
  //     });
  //   });
  // }

  final _formKey = GlobalKey<FormState>();
  var crnNums = new List(7);
  var courseNums = new List(7);
  var sectionNums = new List(7);
  var courseNames = new List(7);
  var rap = new List(7);
  var creditHours = new List(7);

  getUserInfo() async {
    print(widget.userId);
    final fb.DatabaseReference ref = fb.database().ref("users/" + widget.userId);
    rows = new List<DataRow>(7);
    await ref.once("value").then((e) async {
      var snap = e.snapshot;
      var pendingClasses = snap.child("pendingClasses").val();
      courses = new List<Course>(7);
      //print(pendingClasses.toString());
      if (snap.hasChild("pendingClasses") == false) {
        print("clearrr");
        var course = new Course();
        for (int i = 0; i < 7; i++) {
          course.crnNum = "";
          course.courseNum = "";
          course.sectionNum = "";
          course.courseName = "";
          course.rap = "";
          course.creditHours = "";
          courses[i] = course;
          course = new Course();
        }
      }
      else {
        var course = new Course();
        for (int i = 0; i < 7; i++) {
          var courseSnap = snap.child("pendingClasses").child(i.toString());
          course.crnNum = courseSnap.child("crnNum").val();
          course.courseNum = courseSnap.child("courseNum").val();
          course.sectionNum = courseSnap.child("sectionNum").val();
          course.courseName = courseSnap.child("courseName").val();
          course.rap = courseSnap.child("rap").val();
          course.creditHours = courseSnap.child("creditHours").val();
          courses[i] = course;
          course = new Course();
        }
      }
      for (int i = 0; i < 7; i++) {
      var row = new DataRow(cells: [
        DataCell(TextFormField(initialValue: courses[i].crnNum, onSaved: (val) => courses[i].crnNum = val),showEditIcon: true),
        DataCell(TextFormField(initialValue: courses[i].courseNum, onSaved: (val) => courses[i].courseNum = val), showEditIcon: true),
        DataCell(TextFormField(initialValue: courses[i].sectionNum, onSaved: (val) => courses[i].sectionNum = val), showEditIcon: true),
        DataCell(TextFormField(initialValue: courses[i].courseName, onSaved: (val) => courses[i].courseName = val), showEditIcon: true),
        DataCell(TextFormField(initialValue: courses[i].rap, onSaved: (val) => courses[i].rap = val), showEditIcon: true),
        DataCell(TextFormField(initialValue: courses[i].creditHours, onSaved: (val) => courses[i].creditHours = val), showEditIcon: true),
      ]);
      rows[i] = row;
    }
    });
    return rows;
  }


  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: getUserInfo(),
      builder: (context, AsyncSnapshot snapshot) {
        return Scaffold(
      appBar: AppBar(
        title: Text("Registration"),
      ),
      body: Center(
        child: SingleChildScrollView(
                padding: const EdgeInsets.all(8.0),
                child: Form(
        key: _formKey,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start, 
            children: <Widget>[
                DataTable(sortColumnIndex: 2, sortAscending: true, columns: [
                    DataColumn(label: Text('CRN Number'), numeric: true),
                    DataColumn(label: Text('Course Number')),
                    DataColumn(label: Text('Section Number'), numeric: true),
                    DataColumn(label: Text('Course Name')),
                    DataColumn(label: Text('R/A/P')),
                    DataColumn(label: Text('Credit Hours'), numeric: true)
                  ], rows: rows ?? DataRow(cells: [
                      DataCell(TextFormField(initialValue: courses[0].crnNum, onSaved: (val) => courses[0].crnNum = val),showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[0].courseNum, onSaved: (val) => courses[0].courseNum = val), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[0].sectionNum, onSaved: (val) => courses[0].sectionNum = val), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[0].courseName, onSaved: (val) => courses[0].courseName = val), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[0].rap, onSaved: (val) => courses[0].rap = val), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[0].creditHours, onSaved: (val) => courses[0].creditHours = val), showEditIcon: true),
                      ]), /*[
                    DataRow(cells: [
                      DataCell(TextFormField(initialValue: courses[0].crnNum, onSaved: (val) => courses[0].crnNum = val),showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[0].courseNum, onSaved: (val) => courses[0].courseNum = val), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[0].sectionNum, onSaved: (val) => courses[0].sectionNum = val), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[0].courseName, onSaved: (val) => courses[0].courseName = val), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[0].rap, onSaved: (val) => courses[0].rap = val), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[0].creditHours, onSaved: (val) => courses[0].creditHours = val), showEditIcon: true),
                      ],  
                    ),
                    DataRow(cells: [
                      DataCell(TextFormField(initialValue: courses[1].crnNum), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[1].courseNum), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[1].sectionNum), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[1].courseName), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[1].rap), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[1].creditHours), showEditIcon: true),
                      ],  
                    ),
                    DataRow(cells: [
                      DataCell(TextFormField(initialValue: courses[2].crnNum), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[2].courseNum), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[2].sectionNum), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[2].courseName), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[2].rap), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[2].creditHours), showEditIcon: true),
                      ],  
                    ),
                    DataRow(cells: [
                      DataCell(TextFormField(initialValue: courses[3].crnNum), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[3].courseNum), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[3].sectionNum), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[3].courseName), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[3].rap), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[3].creditHours), showEditIcon: true),
                      ],  
                    ),
                    DataRow(cells: [
                      DataCell(TextFormField(initialValue: courses[4].crnNum), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[4].courseNum), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[4].sectionNum), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[4].courseName), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[4].rap), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[4].creditHours), showEditIcon: true),
                      ],  
                    ),
                    DataRow(cells: [
                      DataCell(TextFormField(initialValue: courses[5].crnNum), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[5].courseNum), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[5].sectionNum), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[5].courseName), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[5].rap), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[5].creditHours), showEditIcon: true),
                      ],  
                    ),
                    DataRow(cells: [
                      DataCell(TextFormField(initialValue: courses[6].crnNum), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[6].courseNum), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[6].sectionNum), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[6].courseName), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[6].rap), showEditIcon: true),
                      DataCell(TextFormField(initialValue: courses[6].creditHours), showEditIcon: true),
                      ],  
                    ),
                  ]*/),

            Container(
                  padding: const EdgeInsets.only(left: 40.0, top: 20.0),
                  child: new RaisedButton(
                    elevation: 1.0,
                    shape: new RoundedRectangleBorder(
                        borderRadius: new BorderRadius.circular(30.0)),
                    color: Colors.lightBlue[900],
                    child: const Text('Save', style: const TextStyle(fontSize: 15.0, color: Colors.white)),
                    onPressed: saveForm,
                  ),
                  
                ),
            ],
        ),
      ),
      ),
      ),
      );
    });
  }

  void tryingSumn() {
    final fb.DatabaseReference ref = fb.database().ref("users/" + widget.userId);
  }

  void saveForm() async {
    final FormState form = _formKey.currentState;
    form.save();
    final fb.DatabaseReference ref = fb.database().ref("users/" + widget.userId);
    var map = {};
    for (int i = 0; i < 7; i++) {
      map[i.toString()] = {
        "crnNum": courses[i].crnNum,
        "courseNum": courses[i].courseNum,
        "sectionNum": courses[i].sectionNum,
        "courseName": courses[i].courseName,
        "rap": courses[i].rap,
        "creditHours": courses[i].creditHours,
      };
    }
    var pendingClassesMap = {"pendingClasses": map};
    await ref.update(pendingClassesMap);
    // for (int i = 0; i < widget.courses.rows.length; i++) {
    //   print(widget.courses.rows[i].cells[4].child.toStringDeep());
    // }
  }
}