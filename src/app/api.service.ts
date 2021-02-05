import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }
  
  remoteApi(args: { api: string, param: any }): Promise<any> {
    const { api, param } = args;
    const paths: Array<string> = api.split('/').filter(s => s.length > 0);
    return new Promise((resolve, reject) => {
      const callTime = new Date();
      this.http.post(`${api}`, param)
        .subscribe(response => {
          const a = new Date().getTime();
          resolve(response);
        }, error => {
          reject(error);
        });
    });
  }
}