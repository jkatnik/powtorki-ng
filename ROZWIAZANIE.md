# Attribute directives - rozwiązanie

1. do `app.component.ts` dodać: `heroes = ['As', 'Jakub Wędrowycz', 'Geralt z Rivii'];`
1. do `app.component.html` dodać:
    ```
    <h2>Heroes</h2>
    <ul>
        <li *ngFor="let hero of heroes">{{ hero }}</li>
    </ul>
    <div style="background-color: yellow">FOO - powiniennem być żółty po utracie focus'a</div>
    ```
1. wygenerować dyrektywę za pomocą

    ```
    ng g d highlight
    ```
