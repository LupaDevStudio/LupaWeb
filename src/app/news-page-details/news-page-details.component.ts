import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-page-details',
  templateUrl: './news-page-details.component.html',
  styleUrls: ['./news-page-details.component.scss']
})
export class NewsPageDetailsComponent {


  newsContent: any[] = [];
  currentNewsContent: any;
  AppsContent: any[] = [];

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
      this.getAppsContent();
      this.getNewsContent();
      this.changeDetection.detectChanges();
    });
  }

  ngOnInit(): void {
    this.getAppsContent();
    this.getNewsContent();
  }

  public getLanguageName(): string {
    return this.appComponent.languageName;
  }

  getAppsContent(): void {
    const lang = this.getLanguageName();
    const json_path = "/assets/content/app-content-" + lang.toLowerCase() + ".json";
    this.http.get(json_path).subscribe((data: any) => {
      let i = 0;
      for (let key in data) {
        this.AppsContent[i] = data[key];
        i++;
      }
    });
  }

  getNewsContent() {
    const id = this.route.snapshot.paramMap.get('id');
    const lang = this.getLanguageName();
    const json_path = "/assets/content/news-content-" + lang.toLowerCase() + ".json";
    this.http.get(json_path).subscribe((data: any) => {
      let i = 0;
      for (let key in data) {
        this.newsContent[i] = data[key];
        i++;
      }
    });
    if (id != undefined) {
      this.http.get(json_path).subscribe((data: any) => {
        this.currentNewsContent = data[id];
      });
    }
    else {
      this.http.get(json_path).subscribe((data: any) => {
        this.currentNewsContent = data["postrias_v100"];
      });
    }
  }
}
