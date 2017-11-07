import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  createUser(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(respond) {
        let user = firebase.auth().currentUser;
        return user.updateProfile({
          displayName: firstName + " " + lastName,
          photoURL: ""
        });
      })
      .then(() => firebase.auth().signOut())
      .then(() => firebase.auth().signInWithEmailAndPassword(email, password))
      .catch(function(error) {
        let errorCode = error;
        let errorMessage = error.message;
      });
  }
}

// let user = firebase.auth().currentUser;
