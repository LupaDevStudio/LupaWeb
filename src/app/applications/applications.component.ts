import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})

export class ApplicationsComponent {

  languageService: LanguageService;
  langSubscription: Subscription;

  JsonAppsContent: any[] = [];

  applicationsBannerList: string[] = [];
  applicationsTitleList: string[] = [];
  applicationsTextList: string[] = [];
  applicationsButtonList: string[] = [];

  constructor(
    private http: HttpClient,
    private appComponent: AppComponent,
    languageService: LanguageService
  ) {
    this.getJsonAppsContent(this.getLanguageName());
    this.languageService = languageService;
    this.langSubscription = this.languageService.getNewLang().subscribe((value: string) => {
      this.getJsonAppsContent(value);
    });
  }


  getJsonAppsContent(value: string) {
    const json_path = "/assets/app-content-" + value.toLowerCase() + ".json";
    this.http.get(json_path).subscribe((data: any) => {
      let i = 0;
      for (let key in data) {
        this.JsonAppsContent[i] = data[key];
        i++;
      }
      this.buildImageSliderList();
    });
  }

  buildImageSliderList() {
    this.JsonAppsContent.forEach(element => {
      this.applicationsBannerList.push(element.bannerSource);
      this.applicationsTitleList.push(element.name);
      this.applicationsTextList.push(element.introductionSentence);
    });
  }

  public getLanguageName(): string {
    return this.appComponent.languageName;
  }
}
