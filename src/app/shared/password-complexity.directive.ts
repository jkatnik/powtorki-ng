import { Directive, Input, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appPasswordComplexity]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordComplexityDirective, multi: true}]
})
export class PasswordComplexityDirective implements Validator, OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('min-length') minLength: number;
  // tslint:disable-next-line:no-input-rename
  @Input('min-numbers') minNumbers: number;

  constructor() { }

  ngOnInit() {
    this.minLength = this.minLength || 1;
    this.minNumbers = this.minNumbers || 0;
  }

  validate(control: AbstractControl): ValidationErrors {
    if (!control.value || control.value.length < this.minLength) {
      return { 'appPasswordComplexity': 'too-short'};
    }

    const numbersPresent = control.value.replace(/[^0-9]/g, '').length;
    if (numbersPresent < this.minNumbers) {
      return { 'appPasswordComplexity': 'not-enought-numbers' };
    }

    return { };
  }
}
