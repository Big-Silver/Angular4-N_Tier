import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CommonFunctions } from '../../../common/functions/function';
import { AuthenticationService } from '../../../services/auth/authentication.service';
import { GeoLocationModel } from '../../../models/global.model.data';
import { SpinnerComponent } from '../../../common/components/spinner/spinner.component';
import { error } from 'util';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit, OnDestroy {

  private objectSubscription: Subscription;

  num1: number;
  num2: number;
  sum: number;

  geoFlag: boolean;
  loading: boolean;

  position: GeoLocationModel;

  constructor(
    private _func: CommonFunctions,
    private _auth: AuthenticationService,
  ) {
    this.num1 = 0;
    this.num2 = 0;
    this.sum  = 0;
    this.geoFlag = false;
    this.loading = false;
  }

  ngOnInit() {
  }

  calc() {
    this.sum = this._func.calc(this.num1, this.num2);
  }

  getPosition() {
    this.geoFlag = false;
    this.loading = true;
    this.objectSubscription = this._auth.getPosition().subscribe(res => {
      const loc = res.json().loc.split(',');
      this.position = res.json();
      this.geoFlag = true;
      this.loading = false;
    },
    err => {
      this.loading = false;
      switch (err.status) {
        case 400:
          alert('400 ERROR');
          break;
        case 401:
          alert('401 ERROR');
          break;
        case 403:
          alert('403 ERROR');
          break;
        case 404:
          alert('404 ERROR');
          break;
        default:
          alert('ERROR');
      }
    });
  }

  ngOnDestroy() {
    this.objectSubscription.unsubscribe();
  }
}
