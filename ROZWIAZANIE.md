# Tworzenie projektu - rozwiązanie

1. ``` ng new powtorki-ng --directory . ```
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
    `node_modules/bootstrap/dist/css/bootstrap.min.css`
    do `angular.json` w sekcji `styles`

    Do `app.component.html` dodaj
    ```
    <button class="btn btn-danger">Test</button>
    ```
    aby sprawdzić czy style Bootstrap'a załadowały się prawidłowo.

1. Zainstaluj Font-Awesome
    ```
    npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/angular-fontawesome
    ```

    Zaimportuj FontAwesomeModule w `app.module`
    ```
    import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
    ...
    imports: [
      NgbModule,
      FontAwesomeModule
    ]
    ```

    W `app.component.ts` zaimportuj
    ```
    import { faCoffee } from '@fortawesome/free-solid-svg-icons';
    ```

    i utwórz pole klasy:

    ```
    faCoffee = faCoffee;
    ```

    Do `app.component.html` dodaj wewnątrz button'a
    ```
    <fa-icon [icon]="faCoffee"></fa-icon>
    ```
