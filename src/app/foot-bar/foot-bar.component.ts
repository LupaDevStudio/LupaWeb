import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-foot-bar',
  templateUrl: './foot-bar.component.html',
  styleUrls: ['./foot-bar.component.scss']
})
export class FootBarComponent {
  constructor(private appComponent: AppComponent) { }
  public getGooglePlayImage(): string {
    return this.appComponent.googlePlayImage;
  }
}
