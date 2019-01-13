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

