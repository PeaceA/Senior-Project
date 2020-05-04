import 'dart:async';
import 'package:firebase/firebase.dart';
import 'package:google_sign_in/google_sign_in.dart';

abstract class BaseAuth {
  Future<String> googleSignIn();

  Future<User> getCurrentUser();

  Future<void> sendEmailVerification();

  Future<void> signOut();

  Future<bool> isEmailVerified();

  dynamic getAuthHeaders();
}

class FirebaseAuth implements BaseAuth {
  final Auth _firebaseAuth = auth();
  final GoogleSignIn _googleSignIn = GoogleSignIn(scopes: [
      'email',
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/calendar",
    ],
  );

  Future<String> googleSignIn() async {
    try {
      final GoogleSignInAccount googleUser = await _googleSignIn.signIn();
      final GoogleSignInAuthentication googleAuth =
          await googleUser.authentication;
      final AuthCredential credential = GoogleAuthProvider.credential(googleAuth.idToken, googleAuth.accessToken);

      var result = await _firebaseAuth.signInWithCredential(credential);

      // var headers = _googleSignIn.currentUser.authHeaders;

      User user = result.user;
      assert(!user.isAnonymous);
      assert(await user.getIdToken() != null);

      final User currentUser = _firebaseAuth.currentUser;
      assert(user.uid == currentUser.uid);
      return user.uid;
    } catch (e) {
      throw Exception(e);
    }
  }

  Future<Map<String, String>> getAuthHeaders() async {
    return _googleSignIn.currentUser.authHeaders;
  }

  Future<User> getCurrentUser() async {
    if (_firebaseAuth.currentUser != null) {
      await _googleSignIn.signInSilently();
    }
    return _firebaseAuth.currentUser;
  }

  Future<void> signOut() async {
    return _firebaseAuth.signOut();
  }

  Future<void> sendEmailVerification() async {
    User user = _firebaseAuth.currentUser;
    user.sendEmailVerification();
  }

  Future<bool> isEmailVerified() async {
    User user =  _firebaseAuth.currentUser;
    return user.emailVerified;
  }
}