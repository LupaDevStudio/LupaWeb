import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { NewsPageDetailsComponent } from './news-page-details/news-page-details.component';
import { NewsComponent } from './news/news.component';
import { LegalComponent } from './legal/legal.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'applications', component: ApplicationsComponent },
  { path: 'applications/:id', component: ApplicationDetailsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: NewsPageDetailsComponent },
  { path: 'legal', component: LegalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
