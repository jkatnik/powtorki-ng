# Zadania
## 1. Tworzenie projektu
**tag startowy**: nowy-projekt

**tag końcowy**: nowy-projekt-gotowe

### Zadanie:
1. utworzyć nowy projekt angularowy przy użyciu CLI, bez routingu w bieżącym katalogu
1. zaimportować bootstrap'a
1. zaimportować font-awersome

## 2. Tworzenie komponentu i binding
**tag startowy**: komponent-i-binding

**tag końcowy**: komponent-i-binding-gotowe

### Zadanie:
1. utwórz komponent "echo"
1. dodaj go do app-component
1. dodaj input i powiąż go z polem komponentu myValue
1. wyświetl obok inputu myValue przy użyciu interpolacji
1. ustaw wartość myValue za pomocą parametru wejściowego
1. wyemituj wartość myValue po kliknięciu w przycisk i wyświetl wartość event'u w alert'cie w app-component

## 3. Prosta nawigacja
**tag startowy**: prosta-nawigacja

**tag końcowy**: prosta-nawigacja-gotowe

### Zadanie:
1. utwórz komponent `team`
1. utwórz moduł `app-routing`
1. utwórz linki przekierowujące do TeamComponent (`team`) i EchoComponent (``)
1. podkreśl bieżący link
1. dodaj przycisk przekierowujący do komponentu EchoComponent
1. dodaj ścieżkę 'echo' przekierowującą do ''
1. dodaj komponent NotFound i przekieruj do niego niedopasowane ścieżki

## 4. template driven form
**tag startowy**: td-form

**tag końcowy**: td-form-gotowe

### Zadanie:
Potrafię utworzyć Template Driven form i zalogować na konsoli wartości formularza.
Zablokować submitowanie jeśli formularz jest wypełniony niepoprawnie.
Podświetlić błędnie wypełnione pola.
Wyświetlić komunikat błędu.

1. Utwórz komponent LoginForm, dodaj go do menu i routingu
1. Utwórz formularz z polami: email oraz password
1. Dodaj przycisk submit
1. Po submicie wyświetl wartość formularza na ekranie w postaci JSON
1. Zaznacz pola formularza jako required, email jako email a password jako pole o minimalnej długości 4 znaków
1. Ustaw kolor ramki niepoprawnie wypełnionych pól na czerwony
1. Jeśli pole jest niewypełnione to wyświetl pod nim komunikat "Pole wymagane"
1. Jeśli email jest niepoprawny to wyświetl pod nim "Niepoprawny format email'a"
1. Jeśli hasło ma mniej niż 4 znaki to wyświetl "Za krótkie hasło."
1. Jeśli formularz jest niepoprawnie wypełniony to zablokuj przyciski Submit.

# Pomoc
## Kasowanie tagu

    git tag --delete tagname
    git push --delete origin tagname

## Wypychanie tagu/tagów

    git push tagname

lub

    git push --tags

## [Postęp - link](https://docs.google.com/spreadsheets/d/1nRTxDM1nSRz4mBU_tiln9GKsfncoPwonR0h6qGYxb_Q/edit#gid=285080725)

