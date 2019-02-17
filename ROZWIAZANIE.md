# Prosta nawigacja - rozwiązanie

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
        <a routerLink="">Echo</a> |
        <a routerLink="team">team</a>

        <hr>
        ```
1. podkreśl bieżący link
    1. do linków dodaj atrybut `routerLink` oraz `routerLinkActiveOptions`
        ```
        <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{extact: true}">Echo</a> |
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
