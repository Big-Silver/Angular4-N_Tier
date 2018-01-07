import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import { Configuration } from '../../common/config/configuration';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  private headers: Headers;

  constructor(
    private _config: Configuration,
    private _http: Http,
  ) { }

  public setHTTPHeaders(key: string = '') {
    this.headers = new Headers();
    if (key !== '') {
      this.headers.set('Authorization', key);
    }
    this.headers.set('Content-Type', 'application/json');
    this.headers.set('Accept', 'application/json');

    return this.headers;
  }

  public getPosition() {
    this.headers = new Headers();
    this.headers.set('Accept', 'application/json');
    this.headers.set('Content-Type', 'application/json');
    return this._http.get(this._config.TEST_IP_URL, { headers: this.headers });
  }
}
