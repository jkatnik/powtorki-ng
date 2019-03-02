# template driven form custom validators

**branch startowy**: td-form-validation

**branch końcowy**: td-form-validation-gotowe

## Zadanie:
Potrafię utworzyć walidatory dla formularza typu template driven, zarówno synchroniczne jak i asynchroniczne.
Potrafię utworzyć walidatory działające na kilku polach na raz.

1. Utwórz walidator synchroniczny `passwordComplexity` sprawdzający złożoność hasła.
1. Walidator powinien obsługiwać następujące parametry: `min-length: number`, `min-numbers: number`
   ```
   const numbersPresent = control.value.replace(/[^0-9]/g, '').length;
   ```
1. Podepnij ten walidator do pola `password`
---
1. Utwórz walidator asynchroniczny `checkIfLoginIsFree` symulujący sprawdzenie czy email nie jest już w użyciu.
2. Podepnij ten walidator do pola `email`
---
6. Utwórz walidator synchroniczny `passwordMatch` sprawdzający czy `password` i `password2` zgadzają się.
   Nazwy porównywanych pól przekaż jako parametry. Oznacz pola jako `ng-invalid` jeśli się nie zgadzają.
1. Dodaj komunikat błędu pod polem `password`
1. Podepnij ten walidator

## Linki:
- [Angular.io - Fundamentals](https://angular.io/guide/form-validation)
- [blog o walidacji TDF](http://jasonwatmore.com/post/2018/11/10/angular-7-template-driven-forms-validation-example)
- [Stoper](https://vclock.com/stopwatch/#)
- [Progress](https://docs.google.com/spreadsheets/d/1nRTxDM1nSRz4mBU_tiln9GKsfncoPwonR0h6qGYxb_Q/edit#gid=285080725)
