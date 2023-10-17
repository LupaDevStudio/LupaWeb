import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LupaWebsite';

  // Languages parameters
  languageName: string = "Fr";
  flagName: string = "/assets/french_logo.png";
  googlePlayImage: string = "https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png"
  languageAssociations: { [Name: string]: [string, string, string] } = {
    "en": ["En", "/assets/english_logo.png", "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"],
    "fr": ["Fr", "/assets/french_logo.png", "https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png"]
  }

  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('fr');
  }
  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.languageName = this.languageAssociations[lang][0];
    this.flagName = this.languageAssociations[lang][1];
    this.googlePlayImage = this.languageAssociations[lang][2];
  }
}
