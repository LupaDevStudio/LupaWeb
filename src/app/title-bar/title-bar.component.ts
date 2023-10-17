import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent {
  languageService: LanguageService;

  constructor(private appComponent: AppComponent, languageService: LanguageService) {
    this.languageService = languageService;
  }

  public switchLanguage(lang: string): void {
    this.appComponent.switchLanguage(lang);
    this.languageService.sendNewLang(lang);
  }

  public getFlagName(): string {
    return this.appComponent.flagName;
  }

  public getLanguageName(): string {
    return this.appComponent.languageName;
  }
}

