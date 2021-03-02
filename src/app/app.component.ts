import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from '../environment'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform
  ) {
    this.initializeApp();
  }

  initializeApp() {
    firebase.default.initializeApp(FIREBASE_CONFIG); 
  }
}
