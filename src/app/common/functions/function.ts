import { Injectable } from '@angular/core';
import { BrowserXhr } from '@angular/http';
import { Router } from '@angular/router';
import { Configuration } from '../config/configuration';

import 'rxjs/Rx';

@Injectable()
export class CommonFunctions {
    public calc(num1, num2) {
        return (num1 + num2);
    }
}
