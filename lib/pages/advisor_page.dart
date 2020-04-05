import 'package:firststop/drawer/app_drawer.dart';
import 'package:flutter/material.dart';

class AdvisorPage extends StatelessWidget {
  static const String routeName = '/advisor';

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: AppBar(
          title: Text("Events"),
        ),
        drawer: AppDrawer("", ""),
    body: Center(
      child: Text('You have pressed the button times.')
    ),
    backgroundColor: Colors.red,
    // ),
  );
  }
}

// class AdvisorPage extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: Text('Advisor'),
//       ),
//       body: Center(
//         child: RaisedButton(
//           child: Text('Advisor Dashboard'),
//           onPressed: () {
//             Navigator.push(
//               context,
//               MaterialPageRoute(builder: (context) => StudentPage()),
//             );
//           },
//         ),
//       ),
//     );
//   }
// }

// class StudentPage extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: Text("Student Dashboard"),
//       ),
//       body: Center(
//         child: RaisedButton(
//           onPressed: () {
//             Navigator.pop(context);
//           },
//           child: Text('Go back!'),
//         ),
//       ),
//     );
//   }
// }