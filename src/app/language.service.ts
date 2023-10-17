import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private subject = new Subject<any>();

  sendNewLang(value: string) {
    this.subject.next(value);
  }

  getNewLang(): Observable<any> {
    return this.subject.asObservable();
  }
}
