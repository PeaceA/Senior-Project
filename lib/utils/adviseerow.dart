import 'package:cached_network_image/cached_network_image.dart';
import 'package:firebase/firebase.dart' as fb;
import 'package:firststop/models/User.dart';
import 'package:flutter/material.dart';
import 'customdialog.dart';

class AdviseeRow extends StatelessWidget {

  final Student student;
  AdviseeRow(this.student);

  // if (student.pendingItems == null) {
  //   print("no items");
  // }

  @override
  Widget build(BuildContext context) {
    if (student.pendingItems == null) {
    print("no pending");
  }

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
      constraints: new BoxConstraints.expand(),
      child: new Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            new Text(student.firstName + " " + student.lastName + "   " + student.id, style: headerTextStyle),
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
              child: new Text(student.gpa, style: subHeaderTextStyle),
            )
          ],
        ),
    );


    final eventCard = new Container(
      child: cardContent,
      height: 124.0,
      margin: new EdgeInsets.only(left: 46.0),
      decoration: new BoxDecoration(
        color: (student.hasPending == false || student.hasPending == null) ? new Color(0xFFdfe2e0) : Colors.red[100],
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


    return GestureDetector(
      onTap: (student.hasPending != null && student.hasPending == true) ? () {
        showDialog(context: context, builder: (context) {
          return new CustomDialog(student: student, approve: _approve, disapprove: _disapprove);
        });
      } : () {
        return null;
      },
      child: new Container(
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
      ),
    );
  }

  _approve(String tag) {

    var map;
    fb.DatabaseReference ref;

    ref = fb.database().ref("users/" + student.key);

    if (tag == "gpa") {
      map = {
        tag: student.pendingItems.gpa,
      };

      ref.update(map).then((value) {
        student.pendingItems.gpa = null;
        ref.child("pending").child(tag).remove();
      });

    } else if (tag == "major") {
      map = {
        tag: student.pendingItems.major,
      };

      ref.update(map).then((value) {
        student.pendingItems.major = null;
        ref.child("pending").child(tag).remove();
      });

    } else if (tag == "classification") {
      map = {
        tag: student.pendingItems.classification,
      };

      ref.update(map).then((value) {
        student.pendingItems.classification = null;
        ref.child("pending").child(tag).remove();
      });
    }

    if (student.pendingItems.classification == null && student.pendingItems.major == null && student.pendingItems.gpa == null) {
      student.pendingItems = null;
      student.hasPending = false;
    }
  }

  _disapprove(String tag) {
    fb.DatabaseReference ref;

    ref = fb.database().ref("users/" + student.key);

    if (tag == "gpa") {
      student.pendingItems.gpa = null;
      ref.child("pending").child(tag).remove();

    } else if (tag == "major") {
      student.pendingItems.major = null;
      ref.child("pending").child(tag).remove();

    } else if (tag == "classification") {
      student.pendingItems.major = null;
      ref.child("pending").child(tag).remove();
    }

    if (student.pendingItems.classification == null && student.pendingItems.major == null && student.pendingItems.gpa == null) {
      student.pendingItems = null;
      student.hasPending = false;
    }
  }

}