import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from '../application.service';
import { Application } from '../application';
import { APPLICATIONS } from '../mock-applications';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NEWS } from '../mock-news';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss']
})

export class ApplicationDetailsComponent {
  application: Application;
  news = NEWS;
  JsonAppContent: any;


  constructor(
    private route: ActivatedRoute,
    private applicationService: ApplicationService,
    private http: HttpClient
  ) {
    this.application = APPLICATIONS[0];
    this.JsonAppContent = this.getJSON("/assets/app-content-fr.json");
  }

  public getJSON(url: string): Observable<any> {
    return this.http.get(url);
  }
  ngOnInit(): void {
    this.getApplication();
  }

  getApplication(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != undefined) {
      this.applicationService.getApplication(id)
        .subscribe(application => this.application = application);
    }
  }

}
