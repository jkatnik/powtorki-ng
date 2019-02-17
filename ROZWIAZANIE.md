# Tworzenie komponentu i binding

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
    zaimportuj `FormsModule` w `app.module.ts`
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
    <button class="btn btn-danger" (click)="emit()">Emit</button>
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
