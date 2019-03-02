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
1. Wygeneruj service 'emailChecker'
    ```
    ng g s shared/email-checker
    ```
1. utwórz w nim metodę checkEmail zwracającą `Observable<boolean>`
    ```
    checkEmail(email: string): Observable<boolean> {
        return of(email !== 'foo@bar.com').pipe(delay(1000));
    }
    ```
1. Wygeneruj dyrektywę `checkIfLoginIsFree`
    ```
    ng g d shared/checkIfLoginIsFree
    ```
1. Zarejestruj ją jako walidator asynchroniczny
    ```
    @Directive({
      selector: '[appPasswordComplexity]',
      providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: CheckIfLoginIsFreeDirective, multi: true}]
    })
    ```
1. wstrzyknij `EmailCheckerService` do `CheckIfLoginIsFreeDirective`
1. Zadeklaruj implementację interfejsu `AsyncValidator` i dodaj pustą metodę `validate`.
    ```
    export class CheckIfLoginIsFreeDirective implements AsyncValidator {
    ...
    validate(control: AbstractControl): Observable<ValidationErrors> {
        ...
    }
    ```
1. wywołaj serwis `EmailCheckerService` i zamapuj wynik
    ```
    validate(control: AbstractControl): Observable<ValidationErrors> {
        return this.emailCheckerService.checkEmail(control.value)
        .pipe(
            map((isFree: boolean) => isFree ? { } : { 'inUse': true})
        );
    }
    ```
1. dodaj walidator do pola `email`
    ```
    <input name="email" ngModel #email="ngModel" required appCheckIfLoginIsFree>
    ```
1. wyświetl komunikat błędu
    ```
    <div *ngIf="email.hasError('inUse')">
      Login is in use, please select different!
    </div>
    ```
---
13. wygeneruj dyrektywę password-match
    ```
    ng g d shared/password-match
    ```
14. dodaj parametry `mainPassword` i `confirmPassword`
