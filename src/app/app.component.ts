import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CommonFunctionalityComponent } from './common-functionality/common-functionality.component';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends CommonFunctionalityComponent {
  title = 'LupaWebsite';
  lang: string = "en";

  // Languages parameters
  languageName: string = "En";
  flagName: string = "/assets/english_logo.png";
  googlePlayImage: string = "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
  languageAssociations: { [Name: string]: [string, string, string] } = {
    "en": ["En", "/assets/english_logo.png", "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"],
    "fr": ["Fr", "/assets/french_logo.png", "https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png"]
  }

  constructor(
    public translate: TranslateService,
    public override router: Router,
    private titleService: Title,
    private http: HttpClient,
  ) {
    super(router);
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
  }

  override ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          // let route: ActivatedRoute = this.router.routerState.root;
          // let routeTitle;
          // while (route!.firstChild) {
          //   route = route.firstChild;
          // }
          // if (route.snapshot.data['title']) {
          //   routeTitle = route!.snapshot.data['title'];
          //   if (routeTitle == "temp") {
          //     routeTitle = route.snapshot.paramMap.get('id');
          //   }
          // }
          return this.getPageTitle();
        })
      )
      .subscribe((title: string) => {
        if (title) {
          this.titleService.setTitle(`${title}`);
        }
      });
  }

  getPageTitle() {
    let route: ActivatedRoute = this.router.routerState.root;
    let routeTitle: string = "";
    while (route!.firstChild) {
      route = route.firstChild;
    }
    if (route.snapshot.data['title']) {
      routeTitle = route!.snapshot.data['title'];
      if (routeTitle == "temp") {
        let temp = route.snapshot.paramMap.get('id');
        if (temp != null) {
          routeTitle = temp;
        }
      }
    }
    const app_content_path = "/assets/content/app-content-" + this.lang.toLowerCase() + ".json";
    this.http.get(app_content_path).subscribe((data: any) => {
      for (let key in data) {
        if (key == routeTitle) {
          routeTitle = data[key].name;
          this.titleService.setTitle(`${routeTitle}`);
        }
      }
    });
    const news_content_path = "/assets/content/news-content-" + this.lang.toLowerCase() + ".json";
    this.http.get(news_content_path).subscribe((data: any) => {
      for (let key in data) {
        if (key == routeTitle) {
          routeTitle = data[key].name;
          this.titleService.setTitle(`${routeTitle}`);
        }
      }
    });
    const lang_content_path = "/assets/i18n/" + this.lang.toLowerCase() + ".json";
    this.http.get(lang_content_path).subscribe((data: any) => {
      for (let key in data) {
        if (key == routeTitle) {
          routeTitle = data[key];
          this.titleService.setTitle(`${routeTitle}`);
        }
      }
    });
    return routeTitle;
  }

  setPageTitle() {
    let routeTitle = this.getPageTitle();
    this.titleService.setTitle(`${routeTitle}`);
  }

  switchLanguage(lang: string) {
    this.lang = lang
    this.translate.use(lang);
    this.languageName = this.languageAssociations[lang][0];
    this.flagName = this.languageAssociations[lang][1];
    this.googlePlayImage = this.languageAssociations[lang][2];
    this.setPageTitle();
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
