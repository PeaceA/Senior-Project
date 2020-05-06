import 'package:cached_network_image/cached_network_image.dart';
import 'package:firststop/models/User.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class CustomDialog extends StatelessWidget {
  final Function approve;
  final Function disapprove;
  final Student student;

  CustomDialog({
    @required this.approve,
    @required this.disapprove,
    @required this.student,
  });

  dialogContent(BuildContext context) {
    var buildDivider = Container(
      margin: const EdgeInsets.symmetric(
        horizontal: 8.0,
      ),
      width: double.infinity,
      height: 1.0,
      color: Colors.grey.shade400,
    );
    
    return Stack(
      children: <Widget>[
        Row(
          children: [
            // Text(
            //   "Needs Approval",
            //   style: TextStyle(
            //     fontSize: 10,
            //     fontWeight: FontWeight.bold,
            //   ),
            //   // textScaleFactor: 5,
            // ),
          ],
        ),
        SingleChildScrollView(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Card(
                elevation: 8.0,
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10.0)),
                margin: const EdgeInsets.all(8.0),
                color: Colors.blue[600],
                child: ListTile(
                  title: Text(
                    student.firstName + " " + student.lastName,
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                  leading: CircleAvatar(
                    backgroundImage: CachedNetworkImageProvider(student.photo),
                    radius: 20,
                  ),
                ),
              ),
              const SizedBox(height: 10.0),
              Card(
                margin: const EdgeInsets.fromLTRB(12.0, 8.0, 12.0, 16.0),
                elevation: 8.0,
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10.0)),
                child: Column(
                  children: <Widget>[
                    (student.pendingItems.gpa == null) ? SizedBox.shrink() :
                    ListTile(
                      title: Container (
                        width: 10,
                        child: Row(
                          children: [
                            Row(
                              children: [
                                Text(
                                  student.gpa + " to " + student.pendingItems.gpa
                                ),
                                Container(
                                  width:70,
                                ),
                                OutlineButton(
                                color: Colors.lightBlue[900],
                                textColor: Colors.green,
                                onPressed: () => approve("gpa"),
                                child: Text("Approve"),
                                ),
                                Container(
                                  width:10,
                                ),
                                OutlineButton(
                                  color: Colors.lightBlue[900],
                                  textColor: Colors.red,
                                  onPressed: () => disapprove("gpa"),
                                  child: Text("Disapprove"),
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),
                      subtitle: Text(
                        "GPA",
                      ),
                    ),
                    (student.pendingItems.gpa == null) ? SizedBox.shrink() : buildDivider,
                    (student.pendingItems.major == null) ? SizedBox.shrink() :
                    ListTile(
                      title: Container (
                        width: 10,
                        child: Row(
                          children: [
                            Row(
                              children: [
                                Text(
                                  student.major + " to " + student.pendingItems.major,
                                ),
                                Container(
                                  width:50,
                                ),
                                OutlineButton(
                                color: Colors.lightBlue[900],
                                textColor: Colors.green,
                                onPressed: () => approve("major"),
                                child: Text("Approve"),
                                ),
                                Container(
                                  width:10,
                                ),
                                OutlineButton(
                                  color: Colors.lightBlue[900],
                                  textColor: Colors.red,
                                  onPressed: () => {
                                    disapprove("major")
                                    
                                  },
                                  child: Text("Disapprove"),
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),
                      subtitle: Text(
                       "Major"
                      ),
                    ),
                    (student.pendingItems.major == null) ? SizedBox.shrink() : buildDivider,
                    (student.pendingItems.classification == null) ? SizedBox.shrink() :
                    ListTile(
                      title: Container (
                        width: 10,
                        child: Row(
                          children: [
                            Row(
                              children: [
                                Text(
                                  student.classification + " to " + student.pendingItems.classification
                                ),
                                Container(
                                  width:50,
                                ),
                                OutlineButton(
                                color: Colors.lightBlue[900],
                                textColor: Colors.green,
                                onPressed: () => approve("classification"),
                                child: Text("Approve"),
                                ),
                                Container(
                                  width:10,
                                ),
                                OutlineButton(
                                  color: Colors.lightBlue[900],
                                  textColor: Colors.red,
                                  onPressed: () => disapprove("classification"),
                                  child: Text("Disapprove"),
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),
                      subtitle: Text(
                        "Classification"
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 20.0),
            ],
          ),
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Dialog(  
      elevation: 0.0,
      backgroundColor: Colors.transparent,
      child: dialogContent(context),
    );
  }
}