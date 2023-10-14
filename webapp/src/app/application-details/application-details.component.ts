import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { NEWS } from '../mock-news';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss']
})

export class ApplicationDetailsComponent {
  news = NEWS;
  JsonAppContent: any;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private appComponent: AppComponent
  ) {
  }


  ngOnInit(): void {
    this.getAppDict();
  }

  getAppDict(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const lang = this.getLanguageName();
    const json_path = "/assets/app-content-" + lang.toLowerCase() + ".json";
    if (id != undefined) {
      this.http.get(json_path).subscribe((data: any) => {
        this.JsonAppContent = data[id];
      });
    }
    else {
      this.http.get(json_path).subscribe((data: any) => {
        this.JsonAppContent = data["postrias"];
      });
    }
  }

  public getLanguageName(): string {
    return this.appComponent.languageName;
  }

  public getGooglePlayImage(): string {
    return this.appComponent.googlePlayImage;
  }
} 
