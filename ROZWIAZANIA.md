# Rozwiązania

## 1. Tworzenie projektu

1. ``` ng new powtorki-ng --directory ./ ```
1. Zainstaluj Bootstrap'a i NG-Bootstrap'a

```
npm install --save bootstrap@latest
npm install --save @ng-bootstrap/ng-bootstrap
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

3. dfgdsa
