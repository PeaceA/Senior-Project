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
        'officeBuilding': advisor.officeBuilding,

      };
      await ref.set(map);
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
                    hintText: 'First Name',
                    labelText: 'First Name',
                  ),
                  inputFormatters: [
                    WhitelistingTextInputFormatter(RegExp("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄ" +
                      "ĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]")),
                    LengthLimitingTextInputFormatter(30),
                  ],
                  onSaved: (val) => newUser.firstName = val,
                ),
                new TextFormField(
                  decoration: const InputDecoration(
                    icon: const Icon(Icons.person_outline),
                    hintText: 'Last Name',
                    labelText: 'Last Name',
                  ),
                  inputFormatters: [
                    WhitelistingTextInputFormatter(RegExp("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄ" +
                      "ĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]")),
                    LengthLimitingTextInputFormatter(30),
                  ],
                  onSaved: (val) => newUser.lastName = val,
                ),
                new TextFormField(
                  decoration: const InputDecoration(
                    icon: const Icon(Icons.school),
                    hintText: 'Id',
                    labelText: 'Id',
                  ),
                  inputFormatters: [
                    WhitelistingTextInputFormatter(RegExp("[0123456789]")),
                    LengthLimitingTextInputFormatter(30),
                  ],
                  onSaved: (val) => newUser.id = val,
                ),
                new TextFormField(
                  decoration: const InputDecoration(
                    icon: const Icon(Icons.phone),
                    hintText: 'Phone Number',
                    labelText: 'Phone Number',
                  ),
                  inputFormatters: [
                    WhitelistingTextInputFormatter(RegExp("[0123456789]")),
                    LengthLimitingTextInputFormatter(30),
                  ],
                  onSaved: (val) => newUser.phoneNumber = val,
                ),
                new FormField(
                  builder: (FormFieldState state) {
                    return InputDecorator(
                      decoration: InputDecoration(
                        icon: const Icon(Icons.fitness_center),
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
                          icon: const Icon(Icons.local_library),
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
                          icon: const Icon(Icons.local_library),
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
                        icon: const Icon(Icons.person_pin),
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
                    icon: const Icon(Icons.phone),
                    hintText: 'Room Number',
                    labelText: 'Room Number',
                  ),
                  inputFormatters: [
                    WhitelistingTextInputFormatter(RegExp("[a-zA-Z 0123456789]")),
                    LengthLimitingTextInputFormatter(30),
                  ],
                  onSaved: (val) => advisor.roomNumber = val,
                ), 
                (_role == "Student") ? new TextFormField(
                  decoration: const InputDecoration(
                    icon: const Icon(Icons.phone),
                    hintText: 'GPA',
                    labelText: 'GPA',
                  ),
                  inputFormatters: [
                    WhitelistingTextInputFormatter(RegExp("[.0123456789]")),
                    LengthLimitingTextInputFormatter(4),
                  ],
                  onSaved: (val) => student.gpa = val,
                ) : SizedBox.shrink(),
                if (_role == 'Student') 
                  new FormField(
                  builder: (FormFieldState state) {
                    return InputDecorator(
                      decoration: InputDecoration(
                        icon: const Icon(Icons.near_me),
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
                    icon: const Icon(Icons.phone),
                    hintText: 'Office Hours',
                    labelText: 'Office Hours',
                  ),
                  inputFormatters: [
                    WhitelistingTextInputFormatter(RegExp("[a-zA-Z 0123456789:-]")),
                    LengthLimitingTextInputFormatter(30),
                  ],
                  onSaved: (val) => advisor.officeHours = val,
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
