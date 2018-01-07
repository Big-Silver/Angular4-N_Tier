import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { AppCommonModule } from './common/common.module';
import { AppPagesModule } from './components/page/page.module';

// Components
import { AppComponent } from './app.component';

// Services
import { AuthenticationService } from './services/auth/authentication.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [
    AppCommonModule,
    RouterModule,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AppCommonModule,
    AppPagesModule,
    NgbModule.forRoot(),
  ],
  providers: [ AuthenticationService,
    {provide: LOCALE_ID, useValue: 'en-GB'}],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
