import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:firststop/models/Course.dart';
import 'package:firststop/models/User.dart';
import 'package:firebase/firebase.dart' as fb;
import 'package:firststop/utils/auth.dart';
import 'dart:ui' as ui;



class AdvisorRegistration extends StatefulWidget {
  AdvisorRegistration({Key key, this.auth, this.userId});

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
  _AdvisorRegistrationState createState() => _AdvisorRegistrationState();
}

class _AdvisorRegistrationState extends State<AdvisorRegistration> {
  fb.User fbUser;
  var courses;
  var students;
  var rows;

  var crnNums = new List(7);
  var courseNums = new List(7);
  var sectionNums = new List(7);
  var courseNames = new List(7);
  var rap = new List(7);
  var creditHours = new List(7);

  getUserInfo() async {
    print(widget.userId + "WOW");
    final fb.DatabaseReference ref = fb.database().ref("users/" + widget.userId);
    await ref.once("value").then((e) async {
      var snap = e.snapshot;
      //print(pendingClasses.toString());
      /*
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
    }*/
      await getAdvisees().then((value) {
            students = value;
          });
      print(students[0].firstName + " HERE");
      rows = new List<DataRow>(students.length);
      for (int i = 0; i < students.length; i++) {
        var row = new DataRow(cells: [
          DataCell(Text(students[i].firstName)),
          DataCell(Text(students[i].lastName)),
          DataCell(Text(students[i].id)),
          DataCell(Text(students[i].email)),
          DataCell(Text(students[i].phoneNumber)),
          DataCell(CircleAvatar(
                          backgroundImage: CachedNetworkImageProvider(students[i].photo),
                          backgroundColor: Colors.blueAccent[900],
                          radius: 20.0,
                        ),),
          DataCell(RaisedButton(
                    elevation: 1.0,
                    shape: new RoundedRectangleBorder(
                        borderRadius: new BorderRadius.circular(10.0)),
                    color: Colors.lightBlue[900],
                    child: const Text('View Form', style: const TextStyle(fontSize: 12.0, color: Colors.white)),
                    onPressed: () => viewForm(students[i].userId),
                  ),
                  ),
        ]);
        rows[i] = row;
      }
    });
    print(rows);
    return rows;
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
        student.userId = st.key;
        _students.add(student);
      });
    }).then((value) {
    });
    return _students;
  }


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
        title: Text("Registration"),
      ),
      body: Center(
        child: SingleChildScrollView(
                padding: const EdgeInsets.all(8.0),
                child: Column(
          crossAxisAlignment: CrossAxisAlignment.start, 
            children: <Widget>[
              Text('Students',
                      style: TextStyle(
                        color: Colors.blueAccent[900],
                        letterSpacing: 1.5,
                        fontSize: 24.0,
                        fontWeight: FontWeight.bold,
                      )),
                SingleChildScrollView(
                  padding: const EdgeInsets.all(8.0),
                  scrollDirection: Axis.horizontal,
                  child: (
                DataTable(sortColumnIndex: 1, sortAscending: true, columns: [
                    DataColumn(label: Text('First Name')),
                    DataColumn(label: Text('Last Name')),
                    DataColumn(label: Text('ID')),
                    DataColumn(label: Text('Email')),
                    DataColumn(label: Text('Phone')),
                    DataColumn(label: Text('Photo')),
                    DataColumn(label: Text('Registration')),
                  ], rows: rows, /*[
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
                  ]*/)),
                  ),

            ],
        ),
      ),
      ),
      );
        }
    });
  }

  void saveForm() async {
    // final FormState form = _formKey.currentState;
    // form.save();
    // final fb.DatabaseReference ref = fb.database().ref("users/" + widget.userId);
    // var map = {};
    // for (int i = 0; i < 7; i++) {
    //   map[i.toString()] = {
    //     "crnNum": courses[i].crnNum,
    //     "courseNum": courses[i].courseNum,
    //     "sectionNum": courses[i].sectionNum,
    //     "courseName": courses[i].courseName,
    //     "rap": courses[i].rap,
    //     "creditHours": courses[i].creditHours,
    //   };
    // }
    // var pendingClassesMap = {"pendingClasses": map};
    // await ref.update(pendingClassesMap);
    // // for (int i = 0; i < widget.courses.rows.length; i++) {
    // //   print(widget.courses.rows[i].cells[4].child.toStringDeep());
    // // }
  }

  viewForm(String id) async {
    var name;
    final fb.DatabaseReference ref = fb.database().ref("users/" + id);
    rows = new List<DataRow>(7);
    await ref.once("value").then((e) async {
      var snap = e.snapshot;
      courses = new List<Course>(7);
      name = snap.child("firstName").val();
      if (snap.hasChild("pendingClasses") == false) {
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
        DataCell(Text(courses[i].crnNum)),
        DataCell(Text(courses[i].courseNum)),
        DataCell(Text(courses[i].sectionNum)),
        DataCell(Text(courses[i].courseName)),
        DataCell(Text(courses[i].rap)),
        DataCell(Text(courses[i].creditHours)),
      ]);
      rows[i] = row;
    }
    });

    // flutter defined function
    showDialog(
      context: context,
      builder: (BuildContext context) {
        // return object of type Dialog
        return AlertDialog(
          title: new Text(name + "'s Registration Form"),
          content: new DataTable(columns: [
            DataColumn(label: Text('CRN Number'), numeric: true),
            DataColumn(label: Text('Course Number')),
            DataColumn(label: Text('Section Number'), numeric: true),
            DataColumn(label: Text('Course Name')),
            DataColumn(label: Text('R/A/P')),
            DataColumn(label: Text('Credit Hours'), numeric: true),
          ], rows: rows),
          actions: <Widget>[
            // usually buttons at the bottom of the dialog
            new FlatButton(
              child: new Text("Close"),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }
}