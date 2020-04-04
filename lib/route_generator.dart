import 'package:firststop/frames/dashboard.dart';
import 'package:firststop/pages/advisor_page.dart';
import 'package:firststop/pages/home_page.dart';
import 'package:flutter/material.dart';
import 'package:firststop/main.dart';

class RouteGenerator {
  static const String dashboard = Dashboard.routeName;
  static const String advisor = AdvisorPage.routeName;
  static const String home = HomePage.routeName;
//   static Route<dynamic> generateRoute(RouteSettings settings) {
//     // final args = settings.arguments;

//     switch (settings.name) {
//       case '/':
//         return MaterialPageRoute(builder: (_) => MyApp());
//       // case '/myDashboard':
//       //   return MaterialPageRoute(
//       //     builder: (_) => MyDashboard());
//       default: 
//         return errorRoute();
//     }
//   }
// }

// Route<dynamic> errorRoute() {
//   return MaterialPageRoute(builder: (_) {
//     return Scaffold(
//       appBar: AppBar(
//         title: Text('Error'),
//       ),
//       body: Center(
//         child: Text('ERROR'),
//         ),
//     );
//   });
}

