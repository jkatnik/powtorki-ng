# template driven form custom validators

1. Wygeneruj dyrektywę `passwordComplexity`
    ```
    ng g d shared/passwordComplexity
    ```
1. Zarejestruj ją jako walidator synchroniczny
    ```
    @Directive({
      selector: '[appPasswordComplexity]',
      providers: [{provide: NG_VALIDATORS, useExisting: PasswordComplexityDirective, multi: true}]
    })
    ```
1. Zadeklaruj implementację interfejsu `Validator` i dodaj pustą metodę `validate`.
    ```
    export class PasswordComplexityDirective implements Validator {
    ...
    validate(control: AbstractControl): ValidationErrors {
        ...
    }
    ```