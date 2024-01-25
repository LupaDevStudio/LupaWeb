import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { NewsPageDetailsComponent } from './news-page-details/news-page-details.component';
import { NewsComponent } from './news/news.component';
import { LegalComponent } from './legal/legal.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, data: { title: "LupaDevStudio" } },
  { path: 'applications', component: ApplicationsComponent, data: { title: "Applications" } },
  { path: 'applications/:id', component: ApplicationDetailsComponent, data: { title: "temp" } },
  { path: 'news', component: NewsComponent, data: { title: "News" } },
  { path: 'news/:id', component: NewsPageDetailsComponent, data: { title: "temp" } },
  { path: 'legal', component: LegalComponent, data: { title: "Legal" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
