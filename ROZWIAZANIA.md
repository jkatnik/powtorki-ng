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

3. Zainstaluj Font-Awesome
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

Do app.component.html dodaj
```
<fa-icon [icon]="faCoffee"></fa-icon>
```
