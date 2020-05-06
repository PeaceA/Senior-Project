import 'package:cached_network_image/cached_network_image.dart';
import 'package:firststop/models/User.dart';
import 'package:firststop/utils/centered_view.dart';
import 'package:flutter/material.dart';
import 'package:firststop/utils/eventrow.dart';

class StudentDashboard extends StatelessWidget {
  
  const StudentDashboard({this.user});
  final Student user;

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      backgroundColor: Colors.grey[50],
      body: Padding(
          padding: EdgeInsets.all(20.0),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Container(width: 50,),
              Container(
                width: 530,
                child: Column(children: <Widget>[
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
                      Icons.class_,
                      color: Colors.blueAccent[900],
                    ),
                    Container(width: 10.0),
                    Text(user.classification,
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
                      Icons.assessment,
                      color: Colors.blueAccent[900],
                    ),
                    Container(width: 10.0),
                  Text(user.gpa,
                        style: TextStyle(
                          color: Colors.black,
                          fontSize: 20.0,
                          letterSpacing: 1.0,
                        )
                    )
                ],
                ),
                  ],
                ),
                Container(height: 30.0),
                Column(children: <Widget>[
                  CircleAvatar(
                  backgroundImage: CachedNetworkImageProvider(user.advisor.photo),
                  backgroundColor: Colors.blueAccent[900],
                  radius: 80.0,
                ),
                Divider(color: Colors.black, height: 20.0),
                Text(user.advisor.firstName + " " + user.advisor.lastName,
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
                    Text(user.advisor.email,
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
                    Text(user.advisor.phoneNumber,
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
                ],
                ),
                ],),
                ],),
              ),
              Container(width: 50),
              Container(
                child: Column(children: <Widget>[
                  Container(height: 40,),
                  Text('Upcoming Events\n',
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
            ],
          )
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
              padding: const EdgeInsets.symmetric(vertical: 14.0),
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
