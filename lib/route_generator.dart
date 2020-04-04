import 'package:firststop/frames/dashboard.dart';
import 'package:firststop/pages/advisor_page.dart';
import 'package:firststop/pages/classes.dart';
import 'package:firststop/pages/financial_aid.dart';
import 'package:firststop/pages/graduation_tracker_page.dart';
import 'package:firststop/pages/home_page.dart';

/*
  Use to navigate to different pages
*/
class RouteGenerator {
  static const String dashboard = HomePage.routeName;
  static const String advisor = AdvisorPage.routeName;
  static const String home = HomePage.routeName;
  static const String financialAid = FinancialAidPage.routeName;
  static const String classes = ClassesPage.routeName;
  static const String graduationTracker = GradTrackerPage.routeName;
  }