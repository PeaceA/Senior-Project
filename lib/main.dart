  
import 'package:firststop/pages/home_page.dart';
import 'package:flutter/material.dart';
import 'package:firststop/pages/root_page.dart';
import 'package:firststop/utils/auth.dart';

void main() {
  runApp(new MaterialApp(
    home: new MyApp(), 
  ));
}

class MyApp extends StatelessWidget {
  const MyApp({Key key}) : super(key: key);

  static const int _whitePrimaryValue = 0xFFFFFFFF;
  static const MaterialColor white = MaterialColor(
    _whitePrimaryValue,
    <int, Color>{
      50: Color(0xFFFFFFFF),
      100: Color(0xFFFFFFFF),
      200: Color(0xFFFFFFFF),
      300: Color(0xFFFFFFFF),
      400: Color(0xFFFFFFFF),
      500: Color(_whitePrimaryValue),
      600: Color(0xFFFFFFFF),
      700: Color(0xFFFFFFFF),
      800: Color(0xFFFFFFFF),
      900: Color(0xFFFFFFFF),
    },
  );

  @override
  Widget build(BuildContext context) {
 Center(
        child: RaisedButton(
          child: Text('Open route'),
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => MyDashboard()),
            );
          }
        )
 );
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'First Stop',
      theme: ThemeData(
        primarySwatch: white,
      ),
      home: new RootPage(auth: new FirebaseAuth()),
    );
  }
}

class MyDashboard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // void _myDashboard() {
    //   Navigator.popAndPushNamed(context, "/Dashboard");
    // }
      Center(
        child: RaisedButton(
          onPressed: () {
            Navigator.pop(context);
          },
          child: Text('Go back!'),
        ),);
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'My Dashboard',
      theme: ThemeData(
        primarySwatch: Colors.grey
      )
    );
  }
}

