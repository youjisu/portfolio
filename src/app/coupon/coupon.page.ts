import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import * as firebase from 'firebase';
import { FIREBASE_CONFIG, snapshotToArray } from '../../app/environment'


@Component({
  selector: 'app-coupon',
  templateUrl: 'coupon.page.html',
  styleUrls: ['coupon.page.scss'],
})
export class CouponPage implements OnInit {

  email: string;
  couponLog: string;
  couponList: string;

  kingdomList = new Array();
  db = firebase.default.database();

  constructor(
    private apiService: ApiService,
  ) {
  }

  ngOnInit() {

    (async () => {

      let listContents = '';

      this.kingdomList = Object.assign(await this.db.ref('cookierun/kingdom/coupon').once('value')).val();
      console.log(Object.keys(this.kingdomList));

      for (let list of Object.keys(this.kingdomList)) {
        const crystal = this.kingdomList[list].crystal;
        const jelly = this.kingdomList[list].jelly;

        listContents += list + '<br>: 크리스탈-' + crystal + (jelly !== undefined ? ' / 고기-' + jelly : '' ) +'<br>';
      }

      this.couponList = listContents;

    })();

  }

  async submit() {
    if (this.email === undefined) { alert('email error'); return; }

    let contents = '[이메일] ' + this.email + ' 코드 입력 준비<br>';
    this.couponLog = contents;

    console.log(Object.keys(this.kingdomList));
    const res = await this.putCoupon(this.email, JSON.stringify(Object.keys(this.kingdomList)));
    console.log(res);
    
    res.result.forEach(el => {
      contents += '[쿠폰 코드] ' + el.c + ' : ' + el.r + '<br>';
    });
    contents += '코드 입력 완료';

    this.couponLog = contents;
  }
  async putCoupon(email, codes) {
    return await this.apiService.remoteApi({ api: 'https://cq514y17s1.apigw.ntruss.com/getApi/stage1/MJTgSUaVrQ/json', param: { email: email, codes: codes } });
  }
}
