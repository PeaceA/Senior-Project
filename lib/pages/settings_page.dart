// import 'package:firststop/drawer/app_drawer.dart';
import 'package:flutter/material.dart';

class SettingsPage extends StatelessWidget {
  static const String routeName = '/settings';

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
       backgroundColor: Colors.white,
        appBar: AppBar(
          backgroundColor: Colors.white,
          elevation: 0,
          brightness: Brightness.light,
          iconTheme: IconThemeData(color: Colors.black),
          title: Text("Settings", style: TextStyle(color: Colors.black)),
        ),
        body: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Card(
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10.0)),
                margin: const EdgeInsets.all(8.0),
                color: Colors.blue[600],
                child: ListTile(
                  onTap: (){
                    //open edit profile
                  },
                  title: Text("Shaunelle Thomas", style: TextStyle(color: Colors.white, fontWeight: FontWeight.w500,),),
                  leading: CircleAvatar(
                    backgroundImage: AssetImage('assets/student.png'),),
                    ),
              ),
              const SizedBox(height: 10.0),
              Card(
                elevation: 8.0,
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10.0)),
                child: Column(
                  children: <Widget>[
                    ListTile(
                      leading: Icon(Icons.lock_outline, color: Colors.blue[600],),
                      title: Text("Change Password"),
                      trailing: Icon(Icons.keyboard_arrow_right),
                      onTap: (){
                        //open change password info
                      },),
                      ListTile(
                        leading: Icon(Icons.language ,color: Colors.blue[600]),
                        title: Text("Change LAnguage"),
                        trailing: Icon(Icons.keyboard_arrow_right)),
                      // ListTile(
                      //   leading: Icon(Icons.
                      //    ),
                      //   trailing: ,)
                  ] ,),)
            ],) 
        ,)
    // ), 
  );
  }
}
