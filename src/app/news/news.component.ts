import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  control = new FormControl('');
  tags: string[] = [];
  filteredTags: Observable<string[]>;

  newsContent: any[] = [];
  AppContent: any;
  filteredNewsContent: any[] = [];

  languageService: LanguageService;
  langSubscription: Subscription;

  constructor(
    private http: HttpClient,
    private appComponent: AppComponent,
    languageService: LanguageService,
    private changeDetection: ChangeDetectorRef

  ) {
    // Init the values of all tags
    this.tags = [];
    this.languageService = languageService;
    this.getNewsContent();
    this.langSubscription = this.languageService.getNewLang().subscribe((value: string) => {
      this.getNewsContent();
      this.changeDetection.detectChanges();
    });

    this.filteredNewsContent = this.newsContent;
    // Sort the array of tags
    this.tags = this.tags.sort((n1, n2) => {
      if (n1 > n2) {
        return 1;
      }

      if (n1 < n2) {
        return -1;
      }

      return 0;
    });
    this.filteredTags = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  ngOnInit() {
    this.filteredTags = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.tags.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  getNewsContent() {
    this.tags = [];
    const lang = this.getLanguageName();
    const json_path = "/assets/content/news-content-" + lang.toLowerCase() + ".json";
    this.http.get(json_path).subscribe((data: any) => {
      let i = 0;
      for (let key in data) {
        this.newsContent[i] = data[key];
        i++;
      }
      for (let id in this.newsContent) {
        let news = this.newsContent[id];
        for (let id_tag in news.tags) {
          let tag = news.tags[id_tag];
          if (!this.tags.includes(tag)) {
            this.tags.push(tag);
          }
        }
      }
      this.filteredTags = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
    });
  }

  public getLanguageName(): string {
    return this.appComponent.languageName;
  }

  launchFilter(arg: string) {
    let filter: string;
    if (arg == "") {
      let searchBar = <HTMLInputElement>document.getElementById("search-bar");
      filter = searchBar?.value;
    }
    else {
      filter = arg;
      let searchBar = <HTMLInputElement>document.getElementById("search-bar");
      searchBar.value = arg;
    }
    console.log(filter)

    if (filter == "") {
      this.filteredNewsContent = this.newsContent;
    }
    else {
      this.filteredNewsContent = [];
      for (let id in this.newsContent) {
        let cond = false;
        let news = this.newsContent[id];
        for (let id_tag in news.tags) {
          let tag = news.tags[id_tag];
          if (filter == tag) {
            cond = true;
          }
        }
        if (cond == true) {
          this.filteredNewsContent.push(news);
        }
      }
    }
  }
}