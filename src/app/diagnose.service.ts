import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiagnoseService {

  private diagnoseURL = 'http://103.44.220.100:28186/advise_api/';
  private headers = {
    'Proxy-Connection': 'keep-alive',
    'Access-Control-Allow-Origin': '*',
    'Accept': '*/*',
    'Origin': 'http://brain.zini.ai',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Mobile Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Referer': 'http://brain.zini.ai/advise/',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'en-US,en;q=0.9,ja-JP;q=0.8,ja;q=0.7',
  }
  constructor(private http: HttpClient) { }

  postDiagnose(data){
    let headers = new HttpHeaders();
    for (let head in this.headers) {
      //console.log(this.headers[head])
      //console.log(head)
      headers.append(this.headers[head], head)
    }

    let formData: FormData = new FormData(); 
    formData.append('query', data); 
    //headers.append()
    //this.createAuthorizationHeader(headers);
    return this.http.post(this.diagnoseURL, formData, {
      headers: headers
    });
    
  }



}
