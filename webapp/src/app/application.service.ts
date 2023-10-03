import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Application } from './application';
import { APPLICATIONS } from './mock-applications';

@Injectable({ providedIn: 'root' })
export class ApplicationService {

  constructor() { }

  getApplications(): Observable<Application[]> {
    const applications = of(APPLICATIONS);
    return applications;
  }

  getApplication(id: string): Observable<Application> {
    const application = APPLICATIONS.find(application => application.id === id)!;
    return of(application);
  }
}