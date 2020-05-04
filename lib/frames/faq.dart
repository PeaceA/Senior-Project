import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter/gestures.dart';
import 'package:url_launcher/url_launcher.dart';

  // stores ExpansionPanel state information
  class Item {
    Item({
      this.expandedValue,
      this.headerValue,
      this.isExpanded = false,
    });

    String expandedValue;
    String headerValue;
    bool isExpanded;
  }

  List<Item> generateItems(int numberOfItems) {
    return List.generate(numberOfItems, (int index) {
      return Item(
        headerValue: 'Panel $index',
        expandedValue: 'This is item number $index',
      );
    });
  }
class FAQ extends StatelessWidget {
  

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        brightness: Brightness.light,
        iconTheme: IconThemeData(color: Colors.black),
        title: Text("FAQ", style: TextStyle(color: Colors.black)),
      ),
      body: Theme(
        data: Theme.of(context).copyWith(accentColor: Colors.black, unselectedWidgetColor:  Colors.black..withOpacity(0.8)),
        child: (ListView(
      padding: const EdgeInsets.only(left:50, right:50),
      children: <Widget>[
        ExpansionTile( 
          title: Text("Advisor", 
          style: TextStyle (
            fontSize: 20.0,
            letterSpacing: 1.0,
          )) ,
          children: <Widget>[
            Container(
              height: 70,
              child: Container(
                alignment: Alignment.center,
                child: Text('Navigate to the Advisor Page from the menu.',
                style: TextStyle (
                  fontSize: 15.0,
                  letterSpacing: 1.0,
                )),
                padding: const EdgeInsets.all(8),
              ),
            ),
        ],
        ),
        ExpansionTile( 
          title: Text("Major Requirements", 
          style: TextStyle (
            fontSize: 20.0,
            letterSpacing: 1.0,
          )) ,
          children: <Widget>[
            Container(
              height: 100,
              child: Container(
                alignment: Alignment.topLeft,
                child: Text('1. How many sciences do I have to take? \n\n - You have to take 2 sciences(with lab) in total. One year of one science and one semester of another', 
                      style: TextStyle (
                        fontSize: 15.0,
                        letterSpacing: 1.0,
                      )),
                padding: const EdgeInsets.all(8),
              ),
            ),
        ],
        ),
        ExpansionTile( 
          title: Text("Electives", 
          style: TextStyle (
            fontSize: 20.0,
            letterSpacing: 1.0,
          )) ,
          children: <Widget>[
            Container(
              padding: const EdgeInsets.only(left: 10),
              child: ExpansionTile( 
              title: Text("Non-Technical Electives", 
                  style: TextStyle (
                    fontSize: 18.0,
                    letterSpacing: 1.0,
                  )) ,
              children: <Widget>[
                Container(
                  height: 70,
                  child: Container(
                    alignment: Alignment.center,
                    child: new RichText(
                        text: TextSpan(
                          children: <TextSpan>[
                            TextSpan(text: 'To find a list of non-technical electives you can choose from, ',
                            style: TextStyle(color: Colors.black, fontSize: 15.0, letterSpacing: 1.0)),
                            TextSpan(
                                text: 'click here',
                                style: TextStyle(
                                  color: Colors.blue,
                                  decoration: TextDecoration.underline,
                                  fontSize: 15.0,
                                  letterSpacing: 1.0
                                ),
                                recognizer: TapGestureRecognizer()
                                  ..onTap = () {
                                    launch('https://ous.howard.edu/sites/ous.howard.edu/files/HowardUniversity_COAS_DivisionalStudiesCourses.pdf');
                                  }),
                          ],
                        ),
                    ),
                    padding: const EdgeInsets.all(8),
                  ),
                ),
            ],
            ),
            ),
            Container (
              padding: const EdgeInsets.only(left: 10),
              child:
            ExpansionTile( 
              title: Text("Technican Electives", 
              style: TextStyle (
                fontSize: 20.0,
                letterSpacing: 1.0,
              )
            ) ,
              children: <Widget>[
                Container(
                  height: 70,
                  child: Container(
                    alignment: Alignment.center,
                    child: new RichText(
                        text: TextSpan(
                          children: <TextSpan>[
                            TextSpan(text: 'To find a list of technical electives you can choose from, ',
                            style: TextStyle(color: Colors.black, fontSize: 15.0, letterSpacing: 1.0)),
                            TextSpan(
                                text: 'click here',
                                style: TextStyle(
                                  color: Colors.blue,
                                  decoration: TextDecoration.underline,
                                  fontSize: 15.0,
                                  letterSpacing: 1.0
                                ),
                                recognizer: TapGestureRecognizer()
                                  ..onTap = () {
                                    launch('http://www.eecs.cea.howard.edu/cs-course-descriptions');
                                  }),
                          ],
                        ),
                    ),
                    padding: const EdgeInsets.all(8),
                  ),
                ),
            ],
            ),
          ),
        ],
        ),
        ExpansionTile( 
          title: Text("Financial Aid",
                style: TextStyle(color: Colors.black, fontSize: 20.0, letterSpacing: 1.0)) ,
          children: <Widget>[
            Container(
              height: 70,
              child: Container(
                alignment: Alignment.center,
                child: Text('Navigate to the Financial Aid Page from the menu.', 
                style: TextStyle (
                  fontSize: 15.0,
                  letterSpacing: 1.0,
                ),
                textAlign: TextAlign.left,),
                padding: const EdgeInsets.all(8),
              ),
            ),
        ],
        ),
      ],
    )
    )
    )
    );
  }
}
