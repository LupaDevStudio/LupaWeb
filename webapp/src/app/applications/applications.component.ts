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
  applicationsBannerList: string[] = [
    'assets/apps_images/postrias_banner.png',
    'assets/apps_images/lumacryte_banner.png',
    'assets/apps_images/tramway_collector_banner.png',
  ];

  changeMainApplication(side: string) {
    if (side == "left") {
      this.mainApplicationNumber -= 1;
    }
    if (side == "right") {
      this.mainApplicationNumber += 1;
    }
  }
}
