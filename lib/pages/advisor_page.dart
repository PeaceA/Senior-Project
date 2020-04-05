import 'package:firststop/drawer/app_drawer.dart';
import 'package:firststop/models/Event.dart';
import 'package:flutter/material.dart';

class AdvisorPage extends StatefulWidget {
  static const String routeName = '/advisor';
  AdvisorPage({Key key, this.name, this.email, this.events});

  final List<Event> events;
  final String name;
  final String email;

  _AdvisorState createState() => _AdvisorState();
}

 class _AdvisorState extends State<AdvisorPage> {
      @override
      Widget build(BuildContext context) {
        return MaterialApp(
          debugShowCheckedModeBanner: false,
          title: 'Advisor',
          // theme: ThemeData(
          //   primarySwatch: Colors.teal,
          // ),
          home: Scaffold(
            appBar: AppBar(title: Text('My Advisor')),
             drawer: AppDrawer("", ""),
             
            body: Row(
              children: <Widget>[
                Container(height: 600, width: 800, child: AdvisorInfo()),

                Column(
                  children: <Widget>[
                    Text('Advisor Availability',
                        style: TextStyle(
                          color: Colors.black,
                          fontSize: 50.0,
                          letterSpacing: 1.0,
                        )),
                        Divider(height: 10),
                    Container(height: 600, width: 600, child: BodyLayout()),
                  ],
                ),                
              ],
            ),
              backgroundColor: Colors.grey[50],
          ),
        );
      }
    }

class AdvisorInfo extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      return Padding(
          padding: EdgeInsets.all(20.0),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              SizedBox(width: 50,),
              SizedBox(
                width: 520,
                child: Column(children: <Widget>[
                  SizedBox(height: 30),
                  Column(children: <Widget>[
                    CircleAvatar(
                  backgroundImage: AssetImage('assets/student.png'),
                  backgroundColor: Colors.blueAccent[900],
                  radius: 80.0,
                ),
                Divider(color: Colors.black, height: 20.0),
                Center(
                  child: Text('Dr. Harry Keeling',
                      style: TextStyle(
                        color: Colors.blueAccent[900],
                        letterSpacing: 1.5,
                        fontSize: 30.0,
                        fontWeight: FontWeight.bold,
                      )),
                ),
                SizedBox(height: 10.0),
                Row(
                  children: <Widget>[
                    Icon(
                      Icons.email,
                      color: Colors.blueAccent[900]
                    ),
                    SizedBox(width: 10.0),
                    Text('harry.keeling@example.com',
                        style: TextStyle(
                          color: Colors.black,
                          fontSize: 20.0,
                          letterSpacing: 1.0,
                        )),
                    SizedBox(width: 20.0),
                    Icon(
                      Icons.phone,
                      color: Colors.blueAccent[900],
                    ),
                    SizedBox(width: 10.0),
                    Text('111-111-2222',
                        style: TextStyle(
                          color: Colors.black,
                          fontSize: 20.0,
                          letterSpacing: 1.0,
                        ))
                  ],
                ),
              ])]))]
                  ));
    }
}

class BodyLayout extends StatelessWidget {
      @override
      Widget build(BuildContext context) {
        return _myListView(context);
      }
}

    Widget _myListView(BuildContext context) {

      // the Expanded widget lets the columns share the space
      Widget column = Expanded(
        child: Column(
          // align the text to the left instead of centered
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Text('Monday, Jan 14, 2020', style: TextStyle(fontSize: 16),),
            Text('2:10 pm'),
          ],
        ),
      );

  return ListView.builder(
        itemBuilder: (context, index) {
          return Card(
            child: InkWell(
              onTap: () {
                print('tapped');
              },
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Row(
                  children: <Widget>[
                    column,
                    column,
                  ],
                ),
              ),
            ),
          );
        },
      );

    }