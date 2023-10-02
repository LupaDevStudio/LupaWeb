import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from '../application.service';
import { Application } from '../application';
import { APPLICATIONS } from '../mock-applications';
import { NEWS } from '../mock-news';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss']
})
export class ApplicationDetailsComponent {
  application: Application;
  news = NEWS;

  constructor(
    private route: ActivatedRoute,
    private applicationService: ApplicationService
  ) {
    this.application = APPLICATIONS[0];
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
