import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailCheckerService {

  constructor() { }

  checkEmail(email: string): Observable<boolean> {
    return of(email !== 'foo@bar.com').pipe(delay(1000));
  }
}
