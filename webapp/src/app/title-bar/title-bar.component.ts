import { Component } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent {

  // Languages parameters
  languageName: string = "Fr";
  flagName: string = "/assets/french_logo.png";
  languageAssociations: { [Name: string]: [string, string]} = {
    "english": ["En", "/assets/english_logo.png"],
    "french": ["Fr", "/assets/french_logo.png"]
  }

  changeLanguage(newLanguage: string) {
    this.languageName = this.languageAssociations[newLanguage][0];
    this.flagName = this.languageAssociations[newLanguage][1];
  }
}
