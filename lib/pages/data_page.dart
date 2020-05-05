import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:firststop/utils/centered_view.dart';
import 'package:firststop/models/User.dart';
import 'package:firebase/firebase.dart' as fb;

class UserData extends StatefulWidget {
   UserData({Key key, this.userId, this.loginCallback}) : super(key: key);

   final VoidCallback loginCallback;
   final String userId;

  @override
  State<StatefulWidget> createState() => _UserDataState();
}
class _UserDataState extends State<UserData> {
  final GlobalKey<FormState> _formKey = new GlobalKey<FormState>();
  final GlobalKey<ScaffoldState> _scaffoldKey = new GlobalKey<ScaffoldState>();

  User newUser = new User();
  Student student = new Student();
  Advisor advisor = new Advisor();
  List<String> _roles = <String>['', 'Student', 'Advisor'];
  List<String> _semesters = <String>['', 'Fall', 'Spring'];
  List<String> _classifications = <String>['', 'Freshman', 'Sophomore', 'Junior', 'Senior'];
  List<String> _majors = <String>['', 'Computer Science', 'Computer Engineering', 'Mechanical Engineering', 'Civil Engineering'];
  List<String> _officeBuildings = <String>['', 'LKD', 'Mackey', 'LKH', 'SOB'];
  String _role = '';  
  String _major = '';
  String _classification = '';
  String _semester = '';
  String _officeBuilding = '';

  void showMessage(String message, [MaterialColor color = Colors.red]) {
    _scaffoldKey.currentState
      .showSnackBar(new SnackBar(backgroundColor: color, content: new Text(message))); 
  }

  Map assignChecklist() {
    var freshman = {
      "fall": {
        "course1": {"date": "", "number": "EGPP-101", "title": "Intro to Engineering", "credits": "2", "grade": ""},
        "course2": {"date": "", "number": "", "title": "Non- Technical Elective", "credits": "3", "grade": ""},
        "course3": {"date": "", "number": "", "title": "Science Lec A", "credits": "4", "grade": ""},
        "course4": {"date": "", "number": "", "title": "Science Lab A", "credits": "0", "grade": ""},
        "course5": {"date": "", "number": "ENGW-102", "title": "English I", "credits": "3", "grade": ""},
        "course6": {"date": "", "number": "CSCI-100", "title": "Intro to CS", "credits": "3", "grade": ""},
      },
      "spring": {
        "course1": {"date": "", "number": "CSCI-135", "title": "Computer Science I", "credits": "4", "grade": ""},
        "course2": {"date": "", "number": "CSCI-211", "title": "UNIX Lab", "credits": "1", "grade": ""},
        "course3": {"date": "", "number": "MATH-156", "title": "Calculus I", "credits": "4", "grade": ""},
        "course4": {"date": "", "number": "ENGW", "title": "English II", "credits": "3", "grade": ""},
        "course5": {"date": "", "number": "SLMC-101", "title": "Principles of Speech", "credits": "3", "grade": ""},
      },
    };

    var sophomore = {
      "fall": {
        "course1": {"date": "", "number": "CSCI-136", "title": "Computer Science II", "credits": "3", "grade": ""},
        "course2": {"date": "", "number": "CSCI-201", "title": "Computer Organization I", "credits": "3", "grade": ""},
        "course3": {"date": "", "number": "MATH-157", "title": "Calculus II", "credits": "4", "grade": ""},
        "course4": {"date": "", "number": "", "title": "Science Lec B (1)", "credits": "4", "grade": ""},
        "course5": {"date": "", "number": "", "title": "Science Lab B (1)", "credits": "0", "grade": ""},
      },
      "spring": {
        "course1": {"date": "", "number": "CSCI-354", "title": "Computer Science III", "credits": "3", "grade": ""},
        "course2": {"date": "", "number": "CSCI-375", "title": "Software Engineering", "credits": "3", "grade": ""},
        "course3": {"date": "", "number": "CSCI-202", "title": "Computer Organization II", "credits": "3", "grade": ""},
        "course4": {"date": "", "number": "MATH-181", "title": "Discrete Structures", "credits": "3", "grade": ""},
        "course5": {"date": "", "number": "", "title": "Science Lec B (2)", "credits": "4", "grade": ""},
        "course6": {"date": "", "number": "", "title": "Science Lab B (2)", "credits": "0", "grade": ""},
      },
    };

    var junior = {
      "fall": {
        "course1": {"date": "", "number": "CSCI-341", "title": "Theory of Computation", "credits": "3", "grade": ""},
        "course2": {"date": "", "number": "CSCI-401", "title": "Operating Systems", "credits": "3", "grade": ""},
        "course3": {"date": "", "number": "CSCI-470", "title": "Fundamentals of Alg.", "credits": "3", "grade": ""},
        "course4": {"date": "", "number": "CSCI-450", "title": "Data Communications and Network Programming", "credits": "3", "grade": ""},
        "course5": {"date": "", "number": "CSCI-453", "title": "Intro to Cybersecurity 1", "credits": "3", "grade": ""},
      },
      "spring": {
        "course1": {"date": "", "number": "CSCI-350", "title": "Structure of Programming Languages", "credits": "3", "grade": ""},
        "course2": {"date": "", "number": "", "title": "Technical Elective", "credits": "3", "grade": ""},
        "course3": {"date": "", "number": "CSCI-432", "title": "Database Systems", "credits": "3", "grade": ""},
        "course4": {"date": "", "number": "ENGL-009", "title": "Technical Writing", "credits": "3", "grade": ""},
        "course5": {"date": "", "number": "MATH-180", "title": "Intro to Linear Algebra", "credits": "3", "grade": ""},
      },
    };

    var senior = {
      "fall": {
        "course1": {"date": "", "number": "CSCI-491", "title": "Senior Project I", "credits": "3", "grade": ""},
        "course2": {"date": "", "number": "CSCI-363", "title": "Large Scale Prog.", "credits": "3", "grade": ""},
        "course3": {"date": "", "number": "CSCI-473", "title": "Applied Data Science", "credits": "3", "grade": ""},
        "course4": {"date": "", "number": "", "title": "Technical Elective", "credits": "3", "grade": ""},
        "course5": {"date": "", "number": "", "title": "Technical Elective", "credits": "3", "grade": ""},
      },
      "spring": {
        "course1": {"date": "", "number": "", "title": "Technical Elective", "credits": "3", "grade": ""},
        "course2": {"date": "", "number": "CSCI-492", "title": "Senior Project II", "credits": "3", "grade": ""},
        "course3": {"date": "", "number": "", "title": "Technical Elective", "credits": "3", "grade": ""},
        "course4": {"date": "", "number": "", "title": "Non- Technical Elective", "credits": "3", "grade": ""},
        "course5": {"date": "", "number": "", "title": "Non- Technical Elective", "credits": "3", "grade": ""},
      },
    };

    var map = {
      "freshman": freshman,
      "sophomore": sophomore,
      "junior": junior,
      "senior": senior,
    };

    return map;
  }

  void submitForm() async {
    final FormState form = _formKey.currentState;
    if (!form.validate()) {
      showMessage('Some form entries are not valid!');
    } 
    else { 
      form.save();
      final fb.DatabaseReference ref = fb.database().ref("users/" + widget.userId);
      var map = {
        "completeSignUp": "true",
        'firstName': newUser.firstName,
        'lastName': newUser.lastName,
        'id': "@" + newUser.id,
        'phoneNumber': newUser.phoneNumber,
        'role': newUser.role,
        'classification': student.classification,
        'startSemester': student.startSemester,
        'major': student.major,
        'gpa': student.gpa,
        'startYear': student.startYear,
        'officeBuilding': advisor.officeBuilding,
        'advisee_last_name_range': advisor.adviseeLastNameRange,
        'checklist': assignChecklist(),
      };
      await ref.update(map);
      widget.loginCallback();
    }
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      key: _scaffoldKey,
      appBar: new AppBar(
        title: new Text('Get Started'),
        backgroundColor: Colors.lightBlue[900],
        elevation: 1,
      ),
      body: CenteredView(
          child: new SafeArea(
          top: false,
          bottom: false,
          child: new Form(
            key: _formKey,
            autovalidate: true,
            child: new ListView(
              padding: const EdgeInsets.symmetric(horizontal: 16.0),
              children: <Widget>[
                new TextFormField(
                  decoration: const InputDecoration(
                    icon: const Icon(Icons.person_outline),
                    hintText: 'Jane',
                    labelText: 'First Name',
                  ),
                  inputFormatters: [
                    WhitelistingTextInputFormatter(RegExp("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄ" +
                      "ĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]")),
                    LengthLimitingTextInputFormatter(30),
                  ],
                  onSaved: (val) => newUser.firstName = val,
                  validator: (val) {
                    return val != '' ? null : 'Please enter a value';
                  },
                ),
                new TextFormField(
                  decoration: const InputDecoration(
                    icon: const Icon(Icons.person_outline),
                    hintText: 'Doe',
                    labelText: 'Last Name',
                  ),
                  inputFormatters: [
                    WhitelistingTextInputFormatter(RegExp("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄ" +
                      "ĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]")),
                    LengthLimitingTextInputFormatter(30),
                  ],
                  onSaved: (val) => newUser.lastName = val,
                  validator: (val) {
                    return val != '' ? null : 'Please enter a value';
                  },
                ),
                new TextFormField(
                  decoration: const InputDecoration(
                    icon: const Icon(Icons.fingerprint),
                    hintText: '@012345678',
                    labelText: 'Id',
                  ),
                  inputFormatters: [
                    WhitelistingTextInputFormatter(RegExp("[@0123456789]")),
                    LengthLimitingTextInputFormatter(30),
                  ],
                  onSaved: (val) => newUser.id = val,
                  validator: (val) {
                    return val != '' ? null : 'Please enter a value';
                  },
                ),
                new TextFormField(
                  decoration: const InputDecoration(
                    icon: const Icon(Icons.phone),
                    hintText: '123-456-7890',
                    labelText: 'Phone Number',
                  ),
                  inputFormatters: [
                    WhitelistingTextInputFormatter(RegExp("[0123456789-]")),
                    LengthLimitingTextInputFormatter(30),
                  ],
                  onSaved: (val) => newUser.phoneNumber = val,
                  validator: (val) {
                    return val != '' ? null : 'Please enter a value';
                  },
                ),
                new FormField(
                  builder: (FormFieldState state) {
                    return InputDecorator(
                      decoration: InputDecoration(
                        icon: const Icon(Icons.supervised_user_circle),
                        labelText: 'Role',
                      ),
                      isEmpty: _role == '',
                      child: new DropdownButtonHideUnderline(
                        child: new DropdownButton(
                          value: _role,
                          isDense: true,
                          onChanged: (String newValue) {
                            setState(() {
                              newUser.role = newValue;
                              _role = newValue;
                              state.didChange(newValue);
                            });
                          },
                          items: _roles.map((String value) {
                            return new DropdownMenuItem(
                              value: value,
                              child: new Text(value),
                            );
                          }).toList(),

                        ),
                      ),
                    );
                  },
                  validator: (val) {
                    return val != '' ? null : 'Please select an option';
                  },
                ),
                if (_role == 'Student')
                  new FormField(
                    builder: (FormFieldState state) {
                      return InputDecorator(
                        decoration: InputDecoration(
                          icon: const Icon(Icons.school),
                          labelText:'Major',
                        ),
                        isEmpty: _major == '' ,
                        child: new DropdownButtonHideUnderline(
                          child: new DropdownButton(
                            value:  _major ,
                            isDense: true,
                            onChanged: (String newValue) {
                              setState(() {
                                  student.major = newValue;
                                  _major = newValue;
                              });
                            },
                            items:  _majors.map((String value) {
                              return new DropdownMenuItem(
                                value: value,
                                child: new Text(value),
                              );
                            }).toList(),
                          ),
                        ),
                      );
                    },
                    validator: (val) {
                      return val != '' ? null : 'Please select an option';
                    },
                  ) 
                else if (_role == 'Advisor') 
                  new FormField(
                    builder: (FormFieldState state) {
                      return InputDecorator(
                        decoration: InputDecoration(
                          icon: const Icon(Icons.room),
                          labelText:'Office Building',
                        ),
                        isEmpty: _officeBuilding == '' ,
                        child: new DropdownButtonHideUnderline(
                          child: new DropdownButton(
                            value:  _officeBuilding ,
                            isDense: true,
                            onChanged: (String newValue) {
                              setState(() {
                                  advisor.officeBuilding = newValue;
                                  _officeBuilding = newValue;
                              });
                            },
                            items:  _officeBuildings.map((String value) {
                              return new DropdownMenuItem(
                                value: value,
                                child: new Text(value),
                              );
                            }).toList(),
                          ),
                        ),
                      );
                    },
                    validator: (val) {
                      return val != '' ? null : 'Please select an option';
                    },
                  ), 
                if (_role =='Student')
                  new FormField(
                  builder: (FormFieldState state) {
                    return InputDecorator(
                      decoration: InputDecoration(
                        icon: const Icon(Icons.class_),
                        labelText: 'Classification',
                      ),
                      isEmpty: _classification == '',
                      child: new DropdownButtonHideUnderline(
                        child: new DropdownButton(
                          value: _classification,
                          isDense: true,
                          onChanged: (String newValue) {
                            setState(() {
                              student.classification = newValue;
                              _classification = newValue;
                              state.didChange(newValue);
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
                  validator: (val) {
                    return val != '' ? null : 'Please select an option';
                  },
                ) else if (_role == 'Advisor') 
                  new TextFormField(
                  decoration: const InputDecoration(
                    icon: const Icon(Icons.work),
                    hintText: '512A',
                    labelText: 'Room Number',
                  ),
                  inputFormatters: [
                    WhitelistingTextInputFormatter(RegExp("[a-zA-Z 0123456789]")),
                    LengthLimitingTextInputFormatter(30),
                  ],
                  onSaved: (val) => advisor.roomNumber = val,
                  validator: (val) {
                    return val != '' ? null : 'Please enter a value';
                  },
                ), 
                (_role == "Student") ? new TextFormField(
                  decoration: const InputDecoration(
                    icon: const Icon(Icons.grade),
                    hintText: '3.50',
                    labelText: 'GPA',
                  ),
                  inputFormatters: [
                    WhitelistingTextInputFormatter(RegExp("[.0123456789]")),
                    LengthLimitingTextInputFormatter(4),
                  ],
                  onSaved: (val) => student.gpa = val,
                  validator: (val) {
                    return val != '' ? null : 'Please enter a value';
                  },
                ) : SizedBox.shrink(),
                if (_role == 'Student') 
                  new FormField(
                  builder: (FormFieldState state) {
                    return InputDecorator(
                      decoration: InputDecoration(
                        icon: const Icon(Icons.turned_in),
                        labelText: 'Start Semester',
                      ),
                      isEmpty: _semester == '',
                      child: new DropdownButtonHideUnderline(
                        child: new DropdownButton(
                          value: _semester,
                          isDense: true,
                          onChanged: (String newValue) {
                            setState(() {
                              student.startSemester = newValue;
                              _semester = newValue;
                              state.didChange(newValue);
                            });
                          },
                          items: _semesters.map((String value) {
                            return new DropdownMenuItem(
                              value: value,
                              child: new Text(value),
                            );
                          }).toList(),
                        ),
                      ),
                    );
                  },
                  validator: (val) {
                    return val != '' ? null : 'Please select an option';
                  },
                )
                else if (_role == 'Advisor') 
                  new TextFormField(
                  decoration: const InputDecoration(
                    icon: const Icon(Icons.access_time),
                    hintText: 'MWF 8:00-9:00 / by appointment',
                    labelText: 'Office Hours',
                  ),
                  inputFormatters: [
                    WhitelistingTextInputFormatter(RegExp("[a-zA-Z 0123456789:-]")),
                    LengthLimitingTextInputFormatter(30),
                  ],
                  onSaved: (val) => advisor.officeHours = val,
                  validator: (val) {
                    return val != '' ? null : 'Please enter a value';
                  },
                  ),
                if (_role == 'Advisor') 
                  new TextFormField(
                  decoration: const InputDecoration(
                    icon: const Icon(Icons.person_add),
                    hintText: 'a-j, j-p, p-z, etc...',
                    labelText: 'Advisee last name range',
                  ),
                  inputFormatters: [
                    WhitelistingTextInputFormatter(RegExp("[a-zA-Z-]")),
                    LengthLimitingTextInputFormatter(3),
                  ],
                  onSaved: (val) => advisor.adviseeLastNameRange = val,
                  validator: (val) {
                    return val != '' ? null : 'Please enter a value';
                  },
                )
                else if (_role == 'Student') 
                  new TextFormField(
                  decoration: const InputDecoration(
                    icon: const Icon(Icons.person_add),
                    hintText: '2016',
                    labelText: 'Start Year',
                  ),
                  inputFormatters: [
                    WhitelistingTextInputFormatter(RegExp("[0123456789]")),
                    LengthLimitingTextInputFormatter(4),
                  ],
                  onSaved: (val) => student.startYear = val,
                  validator: (val) {
                    return val != '' ? null : 'Please enter a value';
                  },
                  ),

                new Container(
                  padding: const EdgeInsets.only(left: 40.0, top: 20.0),
                  child: new RaisedButton(
                    elevation: 1.0,
                    shape: new RoundedRectangleBorder(
                        borderRadius: new BorderRadius.circular(30.0)),
                    color: Colors.lightBlue[900],
                    child: const Text('Submit', style: const TextStyle(fontSize: 15.0, color: Colors.white)),
                    onPressed: submitForm,
                  ),
                ),
              ],
            )
          )
        ),
      ),
    );
  }
}
