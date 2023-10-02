import { Component } from '@angular/core';
import { APPLICATIONS } from '../mock-applications';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})

export class ApplicationsComponent {
  applications = APPLICATIONS;
  mainApplicationNumber: number = 0;

  changeMainApplication(side: string) {
    if (side == "left") {
      this.mainApplicationNumber -= 1;
    }
    if (side == "right") {
      this.mainApplicationNumber += 1;
    }
  }
}
