import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faCoffee = faCoffee;

  constructor(private router: Router) { }

  alert($event): void {
    window.alert($event);
  }

  gotoEcho(): void {
    this.router.navigate(['echo']);
  }
}
