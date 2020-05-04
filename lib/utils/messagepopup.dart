import 'package:flutter/material.dart';

void messagepopup(context, user) {
  showModalBottomSheet(
      context: context,
      builder: (BuildContext bc) {
        return Container(
          child: new Wrap(
            children: <Widget>[
              new ListTile(
                  leading: new Icon(Icons.group_add),
                  title: (user.role == "Student") ? new Text('Email Advisor') : new Text('Email all Advisees'),
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
