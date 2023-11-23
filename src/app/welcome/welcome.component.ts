import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  languageService: LanguageService;
  langSubscription: Subscription;

  AppsContent: any[] = [];
  applicationsBannerList: string[] = [];
  applicationsTitleList: string[] = [];
  applicationsTextList: string[] = [];
  applicationsButtonList: string[] = [];

  constructor(
    private http: HttpClient,
    private appComponent: AppComponent,
    languageService: LanguageService
  ) {
    this.getAppsContent(this.getLanguageName());
    this.languageService = languageService;
    this.langSubscription = this.languageService.getNewLang().subscribe((value: string) => {
      this.getAppsContent(value);
    });
  }


  getAppsContent(value: string) {
    const json_path = "/assets/content/app-content-" + value.toLowerCase() + ".json";
    this.http.get(json_path).subscribe((data: any) => {
      let i = 0;
      for (let key in data) {
        this.AppsContent[i] = data[key];
        i++;
      }
      this.buildImageSliderList();
    });
  }

  buildImageSliderList() {
    this.applicationsBannerList = [];
    this.applicationsTitleList = [];
    this.applicationsTextList = [];
    this.AppsContent.forEach(element => {
      this.applicationsBannerList.push(element.bannerSource);
      this.applicationsTitleList.push(element.name);
      this.applicationsTextList.push(element.introductionSentence);
    });
  }

  public getLanguageName(): string {
    return this.appComponent.languageName;
  }
}
