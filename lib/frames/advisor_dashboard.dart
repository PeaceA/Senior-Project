import 'package:cached_network_image/cached_network_image.dart';
import 'package:firststop/models/User.dart';
import 'package:firststop/utils/adviseerow.dart';
import 'package:firststop/utils/eventrow.dart';
import 'package:flutter/material.dart';

class AdvisorDashboard extends StatelessWidget {

  const AdvisorDashboard({this.user});
  final Advisor user;

    @override
  Widget build(BuildContext context) {
    return new Scaffold(
      backgroundColor: Colors.grey[50],
      body: SingleChildScrollView(
              child: Padding(
            padding: EdgeInsets.all(20.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Row(
                    children: <Widget>[
                      Container(width: 350),
                      Column(children: <Widget>[
                        Container(height: 30),
                        Column(children: <Widget>[
                          CircleAvatar(
                          backgroundImage: CachedNetworkImageProvider(user.photo),
                          backgroundColor: Colors.blueAccent[900],
                          radius: 80.0,
                        ),
                      Divider(color: Colors.black, height: 20.0),
                      Text(user.fullName,
                          style: TextStyle(
                            color: Colors.blueAccent[900],
                            letterSpacing: 1.5,
                            fontSize: 30.0,
                            fontWeight: FontWeight.bold,
                          )),
                      Container(height: 10.0),
                      Row(
                        children: <Widget>[
                          Icon(
                            Icons.email,
                            color: Colors.blueAccent[900]
                          ),
                          Container(width: 10.0),
                          Text(user.email,
                              style: TextStyle(
                                color: Colors.black,
                                fontSize: 20.0,
                                letterSpacing: 1.0,
                              )),
                          Container(width: 20.0),
                          Icon(
                            Icons.phone,
                            color: Colors.blueAccent[900],
                          ),
                          Container(width: 10.0),
                          Text(user.phoneNumber,
                              style: TextStyle(
                                color: Colors.black,
                                fontSize: 20.0,
                                letterSpacing: 1.0,
                              ))
                        ],
                      ),
                      Row(
                        children: <Widget> [
                            Icon(
                            Icons.calendar_today,
                            color: Colors.blueAccent[900],
                          ),
                          Container(width: 10.0),
                        Text('MWF 12pm - 4pm',
                              style: TextStyle(
                                color: Colors.black,
                                fontSize: 20.0,
                                letterSpacing: 1.0,
                              )
                          )
                      ],),
                      ],),
                    ],),
                  ],),
                Container(height: 20,),
                Row(
                  children: <Widget> [
                    Container(width: 90),
                    Container(
                  child: Column(children: <Widget>[
                    Container(height: 40,),
                    Text('Advisees',
                      style: TextStyle(
                        color: Colors.blueAccent[900],
                        letterSpacing: 1.5,
                        fontSize: 30.0,
                        fontWeight: FontWeight.bold,
                      )),
                    _getWidget(context),
                  ],),
                  width: 500,
                  height: 650,
                ),
                Container(width: 70),
                Container(
                  child: Column(children: <Widget>[
                    Container(height: 40,),
                    Text('Upcoming Events',
                      style: TextStyle(
                        color: Colors.blueAccent[900],
                        letterSpacing: 1.5,
                        fontSize: 30.0,
                        fontWeight: FontWeight.bold,
                      )),
                    _getHeader(context),
                  ],),
                  width: 500,
                  height: 650,
                )
                  ]
                )
              ],
            ),
          ),
      ),
    );
  }

  Widget _getWidget(context) {
     return new Expanded(
      child: new Container(
        color: Colors.transparent,
        child: new CustomScrollView(
          scrollDirection: Axis.vertical,
          slivers: <Widget>[
            new SliverPadding(
              padding: const EdgeInsets.symmetric(vertical: 1.0),
              sliver: new SliverFixedExtentList(
                itemExtent: 152.0,
                delegate: new SliverChildBuilderDelegate(
                    (context, index) => new AdviseeRow(user.students[index]),
                  childCount: user.students.length,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  } 

  Widget _getHeader(context) {
     return new Expanded(
      child: (user.events.length > 0) ? Container(
        color: Colors.transparent,
        child: new CustomScrollView(
          scrollDirection: Axis.vertical,
          slivers: <Widget>[
            new SliverPadding(
              padding: const EdgeInsets.symmetric(vertical: 1.0),
              sliver: new SliverFixedExtentList(
                itemExtent: 152.0,
                delegate: new SliverChildBuilderDelegate(
                    (context, index) => new EventRow(user.events[index]),
                  childCount: user.events.length,
                ),
              ),
            ),
          ],
        ),
      ) : Container(
        child: Column(
          children: <Widget>[
            new Container(
              height: 60,
            ),
            new Text(
              "There are no upcoming events.\n" + 
              "Go to settings and select another calendar.",
              style: TextStyle(
                fontSize: 20.0,
              )
            ),
          ],
        ),
      ),
    );
  } 
}
