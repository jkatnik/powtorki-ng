# Rozwiązania

## 1. Tworzenie projektu

1. ``` ng new powtorki-ng --directory ./ ```
1. Zainstaluj Bootstrap'a i NG-Bootstrap'a

    ```
    npm install bootstrap@latest
    npm install @ng-bootstrap/ng-bootstrap
    ```

    Zaimportuj NgbModule w app.module
    ```
    import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
    ...
    imports: [
    NgbModule
    ]
    ```

    Dodaj
    ``` node_modules/bootstrap/dist/css/bootstrap.min.css ```
    do angular.json w sekcji "styles"

    Do app.component.html dodaj
    ```
    <button class="btn btn-danger">Test</button>
    ```
    aby sprawdzić czy style Bootstrap'a załadowały się prawidłowo.

1. Zainstaluj Font-Awesome
    ```
    npm install @fortawesome/fontawesome-svg-core
    npm install @fortawesome/free-solid-svg-icons
    npm install @fortawesome/angular-fontawesome
    ```

    Zaimportuj FontAwesomeModule w app.module

    W app.component.ts zaimportuj
    ```
    import { faCoffee } from '@fortawesome/free-solid-svg-icons';
    ```
    i utwórz pole klasy:
    ```
    faCoffee = faCoffee;
    ```

    Do app.component.html dodaj wewnątrz button'a
    ```
    <fa-icon [icon]="faCoffee"></fa-icon>
    ```

## 2. Tworzenie komponentu i binding

1. wygeneruj komponent
    ```
    ng g c echo
    ```
1. dodaj go do app-component.html
    ```
    <hr/>
    <app-echo></app-echo>
    ```
1. dodaj input i powiąż go z polem komponentu myValue
    zaimportuj FormsModule w app.module.ts
    ```
    imports: [
      ...
      FormsModule,
    ],
    ```

    ```
    myValue: string;

    <input type="text" [(ngModel)]="myValue">
    ```
1. wyświetl obok inputu myValue przy użyciu interpolacji
    ```
    value: {{ myValue }}
    ```
1. ustaw wartość myValue za pomocą parametru wejściowego
    ```
    @Input() myValue: string;
    ```

    ```
    <app-echo [myValue]="'initValue'"></app-echo>
    ```
1. wyemituj wartość myValue po kliknięciu w przycisk i wyświetl wartość event'u w alert'cie w app-component

    w echo.component.ts
    ```
    @Output() myValueUpdated = new EventEmitter<string>();
    ...
    emit() {
      this.myValueUpdated.emit(this.myValue);
    }
    ```

    w echo.component.html
    ```
    <button class="btn btn-danger" (click)="emit()">Update</button>
    ```

    w app.component.html
    ```
    <app-echo [myValue]="'initValue'" (myValueUpdated)="alert($event)"></app-echo>
    ```

    w app.component.ts
    ```
    alert($event): void {
      window.alert($event);
    }
    ```

## 3. Prosta nawigacja

1. utwórz komponent `team`

    ```
    ng g c team
    ```

1. utwórz moduł `app-routing`

    ```
    ng g m app-routing
    ```

    W tym module:

    1. zaimportuj typ `Routes` z `@angular/router`
    1. zdefiniuj routing:

        ```
        const routes: Routes = [];
        ```
    1. dodaj `RouterModule.forRoot(routes)` do sekcji `imports` dekoratora `@NgModule`

    1. dodaj `RouterModule` do sekcji `exports` dekoratora `@NgModule`.

    1. zaimportuj `AppRoutingModule` do `AppModule`

        ```
        imports: [
            ...
            AppRoutingModule
        ]
        ```

1. utwórz linki przekierowujące do TeamComponent (`team`) i EchoComponent (``)

    1. w `app.component.html` dodaj `<router-outlet></router-outlet>`

    1. dodaj linki

        ```
        <a routerLink="">Echo</a>
        <a routerLink="team">team</a>
        ```
1. podkreśl bieżący link
    1. do linków dodaj atrybut `routerLink` oraz `routerLinkActiveOptions`
        ```
        <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{extact: true}">Echo</a>
        <a routerLink="team" routerLinkActive="active">team</a>
        ```
    2. w app.component.css dodaj
        ```
        .active {
            border-bottom: 2px solid black;
        }
        ```

1. dodaj ścieżkę 'echo' przekierowującą do ''

    1. do AppRoutingModule dodaj:
        ```
        {
            path: 'echo',
            redirectTo: ''
        }
        ```

1. dodaj przycisk przekierowujący do komponentu EchoComponent

    1. dodaj <button (click)="gotoEcho()"> do app.component.html

    1. wstrzyknij `Router` do komponentu `AppComponent`

        ```
        constructor(private router: Router) { }
        ```

    1. zdefinuj funkcję przekierowującą na ścieżkę `echo`

        ```
        gotoEcho(): void {
            this.router.navigate(['echo']);
        }
        ```

1. dodaj komponent NotFound i przekieruj do niego niedopasowane ścieżki

    1. wygeneruj komponent NotFound

        ```
        ng g c not-found
        ```

    1. do AppRoutingModule dodaj:
        ```
        {
            path: '**',
            component: NotFoundComponent
        }
        ```
## 4. template driven form
1. wygeneruj LoginForm `ng g c LoginForm`
1. rozszerz routing w app-routing.mpdule.ts
    ```
    {
        path: 'login',
        component: LoginComponent
    }
    ```
1. dodaj linka w `app.component.html`
   ```
   <a routerLink="login"
     routerLinkActive="active">
       login
   </a>
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

