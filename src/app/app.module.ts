import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {YouTubePlayerModule} from '@angular/youtube-player';

import { TitleBarComponent } from './title-bar/title-bar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewsComponent } from './news/news.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { NewsPageDetailsComponent } from './news-page-details/news-page-details.component';
import { FootBarComponent } from './foot-bar/foot-bar.component';
import { LegalComponent } from './legal/legal.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { CommonFunctionalityComponent } from './common-functionality/common-functionality.component';
import { YouTubePlayerComponent } from './you-tube-player/you-tube-player.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    WelcomeComponent,
    NewsComponent,
    ApplicationsComponent,
    ApplicationDetailsComponent,
    NewsPageDetailsComponent,
    FootBarComponent,
    LegalComponent,
    ImageSliderComponent,
    CommonFunctionalityComponent,
    YouTubePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}