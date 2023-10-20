import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent {

  languageService: LanguageService;
  langSubscription: Subscription;
  LegalContent: any;

  constructor(
    private http: HttpClient,
    private appComponent: AppComponent,
    languageService: LanguageService
  ) {
    this.getLegalContent(this.getLanguageName());
    this.languageService = languageService;
    this.langSubscription = this.languageService.getNewLang().subscribe((value: string) => {
      this.getLegalContent(value);
    });
  }

  getLegalContent(value: string) {
    const json_path = "/assets/content/legal-content-" + value.toLowerCase() + ".json";
    this.http.get(json_path).subscribe((data: any) => {
      this.LegalContent = data;
    });
  }

  public getLanguageName(): string {
    return this.appComponent.languageName;
  }

}
