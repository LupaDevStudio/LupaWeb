import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CommonFunctionalityComponent } from './common-functionality/common-functionality.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends CommonFunctionalityComponent {
  title = 'LupaWebsite';

  // Languages parameters
  languageName: string = "En";
  flagName: string = "/assets/english_logo.png";
  googlePlayImage: string = "https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png"
  languageAssociations: { [Name: string]: [string, string, string] } = {
    "en": ["En", "/assets/english_logo.png", "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"],
    "fr": ["Fr", "/assets/french_logo.png", "https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png"]
  }

  constructor(
    public translate: TranslateService,
    public override router: Router
  ) {
    super(router);
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.languageName = this.languageAssociations[lang][0];
    this.flagName = this.languageAssociations[lang][1];
    this.googlePlayImage = this.languageAssociations[lang][2];
  }

  reloadCurrent() {
    this.reloadComponent(true);
  }

  onActivate(event: any) {
    // window.scroll(0,0);

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
    //  ...
  }
}
