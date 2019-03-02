import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PasswordComplexityDirective } from './shared/password-complexity.directive';
import { CheckIfLoginIsFreeDirective } from './shared/check-if-login-is-free.directive';
import { PasswordMatchDirective } from './shared/password-match.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PasswordComplexityDirective,
    CheckIfLoginIsFreeDirective,
    PasswordMatchDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
