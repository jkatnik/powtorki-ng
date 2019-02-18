# Attribute directives

**branch startowy**: attr-directives

**branch końcowy**: attr-directives-gotowe

## Zadanie:
1. w `app.component` wyświetlić listę
    ```
    heroes = ['As', 'Jakub Wędrowycz', 'Geralt z Rivii'];
    ```
1. utworzyć dyrektywę `highlight` podświetlającą elementy listy bohaterów
1. kolor podświetlenia może być ustawiony bezpośrednio na dyrektywie
1. domyślny kolor podświetlenia to czerwony
1. dodać atrybut `hl-border`, który ustawiony na true doda klasy BS `border border-dark`
1. jeśli się da to należy unikać operowacji bezpośrednio na DOM
1. po opuszczeniu elemntu przywrócić oryginalne podświetlenie
