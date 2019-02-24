import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmailCheckerService } from './email-checker.service';

@Directive({
  selector: '[appCheckIfLoginIsFree]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: CheckIfLoginIsFreeDirective, multi: true}]
})
export class CheckIfLoginIsFreeDirective implements AsyncValidator {
  constructor(private emailCheckerService: EmailCheckerService) { }

  validate(control: AbstractControl): Observable<ValidationErrors> {
    return this.emailCheckerService.checkEmail(control.value)
      .pipe(
        map((isFree: boolean) => isFree ? { } : { 'inUse': true})
      );
  }
}
