import { Directive, Input, OnInit } from '@angular/core';
import { FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordMatch]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordMatchDirective,
    multi: true
  }]
})
export class PasswordMatchDirective implements Validator, OnInit {
  @Input('appPasswordMatch') passwords: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  validate(formGroup: FormGroup): ValidationErrors {
    return passwordMatchValidator(this.passwords[0], this.passwords[1])(formGroup);
  }
}

function passwordMatchValidator(fieldAName: string, fieldBName: string) {
  return (formGroup: FormGroup) => {
    const fieldA = formGroup.controls[fieldAName];
    const fieldB = formGroup.controls[fieldBName];

    if (!fieldA || !fieldB) {
      return null;
    }

    if (fieldA.value !== fieldB.value) {
      fieldB.setErrors({
        'appPasswordMatch': true
      });
    }
    return null;
  };
}
