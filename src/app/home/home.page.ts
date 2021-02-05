import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    console.log(await this.apiService.remoteApi({ api: 'https://cq514y17s1.apigw.ntruss.com/getApi/stage1/MJTgSUaVrQ/json', param: {email: 'babojisu@hanmail.net'} }));
  }
}
