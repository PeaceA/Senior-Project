import 'package:flutter/material.dart';

void messagepopup(context) {
  showModalBottomSheet(
      context: context,
      builder: (BuildContext bc) {
        return Container(
          child: new Wrap(
            children: <Widget>[
              new ListTile(
                  leading: new Icon(Icons.group_add),
                  title: new Text('Message Advisor'),
                  onTap: () => {}),
              new ListTile(
                leading: new Icon(Icons.help),
                title: new Text('Contact Help'),
                onTap: () => {},
              ),
            ],
          ),
        );
      });
}
