import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../authentication.service";
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import * as firebase from "firebase/app";
import { Router } from "@angular/router";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
  providers: [AuthenticationService]
})
export class SignUpComponent implements OnInit {
  user: Observable<firebase.User>;
  constructor(
    public authService: AuthenticationService,
    private route: ActivatedRoute,
    private location: Location,
    public afAuth: AngularFireAuth,
    public router: Router
  ) {
    this.user = afAuth.authState;
  }

  ngOnInit() {}

  submitSignUpForm(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    this.authService.createUser(email, password, firstName, lastName);
  }

  assignUserName(firstName: string, lastName: string) {}
}
