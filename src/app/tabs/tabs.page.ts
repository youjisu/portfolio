import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public tabName;
  db = firebase.default.database();


  constructor() {
    const sCnt = location.href.split('/').length;
    this.tabName = location.href.split('/')[sCnt - 1];
    
    (async () => {
      console.log((await this.db.ref('cookierun/kingdom/coupon').once('value')).val());
    })();
  }

  scrollToMyElement() {
    document.getElementsByClassName('feedBox')[1].scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }
}
