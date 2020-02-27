import 'package:flutter/material.dart';

void boardpopup(context) {
  showModalBottomSheet(
      context: context,
      builder: (BuildContext bc) {
        return Container(
          child: new Wrap(
            children: <Widget>[
              new ListTile(
                  leading: new Icon(Icons.calendar_today),
                  title: new Text('Personal TimeTable'),
                  onTap: () => {}),
              new ListTile(
                leading: new Icon(Icons.subject),
                title: new Text('Classes'),
                onTap: () => {},
              ),
            ],
          ),
        );
      });
}
