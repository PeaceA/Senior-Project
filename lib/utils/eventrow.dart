import 'package:flutter/material.dart';
import 'package:firststop/models/Event.dart';
import 'package:intl/intl.dart';

class EventRow extends StatelessWidget {

  final Event event;

  EventRow(this.event);

  @override
  Widget build(BuildContext context) {
    final cardThumbnail = new Container(
      margin: new EdgeInsets.symmetric(
        vertical: 16.0
      ),
      alignment: FractionalOffset.centerLeft,
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

    Widget date(DateTime value) {
      DateFormat dateFormat =  new DateFormat.yMd();
      String ret;
      if (value == null) {
        ret = "N/A";
      } else {
        ret = dateFormat.format(value);
      }

      return new Row(
        children: <Widget>[
          new Text(ret, style: subHeaderTextStyle),
        ]
      );
    }

    Widget time(DateTime value) {
      DateFormat dateFormat =  new DateFormat.jm();
      String ret;

      if (value == null) {
        ret = "N/A";
      } else {
        ret = dateFormat.format(value);
      }
      return new Row(
        children: <Widget>[
          new Text(ret, style: subHeaderTextStyle),
        ]
      );
    }


    final cardContent = new Container(
      margin: new EdgeInsets.fromLTRB(30.0, 8.0, 8.0, 8.0),
      constraints: new BoxConstraints.expand(),
      child: new Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            new Container(height: 4.0),
            new Text(event.summary ?? "N/A", style: headerTextStyle),
            new Container(
              margin: new EdgeInsets.symmetric(vertical: 8.0),
              height: 2.0,
              width: 400.0,
              color: Colors.yellow[800],
            ),
            new Container(height: 10.0),
            Row(
                children: <Widget>[
                  new Text("Start: ", style: subHeaderTextStyle),
                  new Expanded(
                    child: Row(
                      children: <Widget>[
                        date(event.start ?? null),
                        SizedBox(width: 5,),
                        time(event.start ?? null)
                      ],
                    )
                  ),
                  new Text("End: ", style: subHeaderTextStyle),
                  new Expanded(
                    child: Row(
                      children: <Widget>[
                        date(event.end ?? null),
                        SizedBox(width: 5,),
                        time(event.end ?? null)
                      ],
                    )
                  ),
                ],
              ),
             new Container(height: 10.0),
             Container(
              height: 20,
              child: new Text(event.status, style: subHeaderTextStyle),
            )
          ],
        ),
    );


    final eventCard = new Container(
      child: cardContent,
      height: 126.0,
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