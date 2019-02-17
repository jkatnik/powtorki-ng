# template driven form

branch **poczatkowy** td-form
branch **końcowy** td-form-gotowe

1. wygeneruj LoginForm `ng g c LoginForm`
1. dodaj do `app.component.html`
   ```
   <app-login-form></app-login-form>
   ```
1. **zobacz** login-form.component.html
    ```
    <form #loginForm="ngForm" (ngSubmit)="onSubmit()">
    ...
    <input name="email" ngModel #email="ngModel" required email>
    <div *ngIf="email.hasError('required')"> ... </div>
    <div *ngIf="email.errors?.email"> ... </div>
    ...
    <input name="password" ngModel required minlength="4">
    <div *ngIf="loginForm.controls['password']?.hasError('required')">
    ...
    <button type="submit" [disabled]="loginForm.invalid">Submit</button>

    ```
1. **zobacz** login-form.component.ts
1. login-form.component.css
    ```
    input.ng-invalid.ng-touched {
        border: 1px solid red;
    }
    ```
