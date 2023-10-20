import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { NEWS } from '../mock-news';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss']
})

export class ApplicationDetailsComponent {


  // news = NEWS;
  NewsContent: any[] = [];
  AppContent: any;
  safeItchIoFrameLink: any;

  languageService: LanguageService;
  langSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private appComponent: AppComponent,
    private changeDetection: ChangeDetectorRef,
    languageService: LanguageService
  ) {
    this.languageService = languageService;
    this.langSubscription = this.languageService.getNewLang().subscribe((value: string) => {
      this.getAppContent();
      this.getNewsContent();
      this.changeDetection.detectChanges();
    });
  }


  ngOnInit(): void {
    this.getAppContent();
    this.getNewsContent();
  }

  getAppContent(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const lang = this.getLanguageName();
    const json_path = "/assets/content/app-content-" + lang.toLowerCase() + ".json";
    if (id != undefined) {
      this.http.get(json_path).subscribe((data: any) => {
        this.AppContent = data[id];
      });
    }
    else {
      this.http.get(json_path).subscribe((data: any) => {
        this.AppContent = data["postrias"];
      });
    }
  }

  getNewsContent() {
    const lang = this.getLanguageName();
    const json_path = "/assets/content/news-content-" + lang.toLowerCase() + ".json";
    this.http.get(json_path).subscribe((data: any) => {
      let i = 0;
      for (let key in data) {
        this.NewsContent[i] = data[key];
        i++;
      }
    });
  }

  public getLanguageName(): string {
    return this.appComponent.languageName;
  }

  public getGooglePlayImage(): string {
    return this.appComponent.googlePlayImage;
  }
} 
