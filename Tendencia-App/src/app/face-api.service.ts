import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class FaceApiService {

  private url = 'http://localhost:8000/Tendencia';
  private options;
  constructor(private http: Http) {
    

  }

  GetDataFb(idPost: string) {
    //console.log(idPost);
    let headers = new Headers({
      'Content-type': 'application/json'
    });
    this.options = new RequestOptions({ headers: headers });
    let data={
      idPost:idPost
    }
    let iJson = JSON.stringify(data);
    console.log(iJson);
    return this.http.post(this.url, iJson, this.options).map(r => r.json())
      .subscribe(us => console.log(us));

  }

}
