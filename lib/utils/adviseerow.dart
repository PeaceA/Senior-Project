import 'package:cached_network_image/cached_network_image.dart';
import 'package:firststop/models/User.dart';
import 'package:flutter/material.dart';

class AdviseeRow extends StatelessWidget {

  final Student student;
  AdviseeRow(this.student);

  @override
  Widget build(BuildContext context) {
    final cardThumbnail = new Container(
      margin: new EdgeInsets.symmetric(
        vertical: 16.0
      ),
      alignment: FractionalOffset.centerLeft,
      child:new Hero(
         tag: "${student.firstName}-${student.lastName}",
         child: new CircleAvatar(
           backgroundImage: CachedNetworkImageProvider(student.photo),
           radius: 46,
         ),
      ),
    );

    final baseTextStyle = const TextStyle(
      fontFamily: 'Poppins'
    );
    final regularTextStyle = baseTextStyle.copyWith(
      color: Colors.blueAccent[900],
      fontSize: 12.0,
      fontWeight: FontWeight.w400
    );
    final subHeaderTextStyle = regularTextStyle.copyWith(
      fontSize: 14.0
    );
    final headerTextStyle = baseTextStyle.copyWith(
      color: Colors.blueAccent[900],
      fontSize: 16.0,
      fontWeight: FontWeight.w700
    );

    final cardContent = new Container(
      margin: new EdgeInsets.fromLTRB(52.0, 8.0, 8.0, 8.0),
      // constraints: new BoxConstraints.expand(),
      child: new Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            new Text(student.firstName + " " + student.lastName + "   @" + student.id, style: headerTextStyle),
            new Container(
              margin: new EdgeInsets.symmetric(vertical: 8.0),
              height: 2.0,
              width: 300.0,
              color: Colors.yellow[800],
            ),
            Expanded(
              child: new Row(
                children: <Widget>[
                  Container(
                    height: 20,
                    child: new Text(student.email, style: subHeaderTextStyle),
                  ),
                  Container(width: 10,),
                  Container(
                    height: 20,
                    child: new Text(student.phoneNumber, style: subHeaderTextStyle),
                  )
                ],
              ),
            ),
            Expanded(
              child: new Row(
                children: <Widget>[
                  Container(
                    height: 20,
                    child: new Text(student.classification, style: subHeaderTextStyle),
                  ),
                  Container(width: 10,),
                  Container(
                    height: 20,
                    child: new Text(student.major, style: subHeaderTextStyle),
                  )
                ],
              ),
            ),
            Container(
              height: 20,
              child: new Text("3.5", style: subHeaderTextStyle),
            )
          ],
        ),
    );


    final eventCard = new Container(
      child: cardContent,
      height: 124.0,
      margin: new EdgeInsets.only(left: 46.0),
      decoration: new BoxDecoration(
        color: new Color(0xFFdfe2e0),
        shape: BoxShape.rectangle,
        borderRadius: new BorderRadius.circular(8.0),
        boxShadow: <BoxShadow>[
          new BoxShadow(  
            color: Colors.black12,
            blurRadius: 10.0,
            offset: new Offset(0.0, 10.0),
          ),
        ],
      ),
    );


    return new Container(
      height: 120.0,
      margin: const EdgeInsets.symmetric(
        vertical: 16.0,
        horizontal: 24.0,
      ),
      child: new Stack(
        children: <Widget>[
          eventCard,
          cardThumbnail,
        ],
      )
    );
  }
}