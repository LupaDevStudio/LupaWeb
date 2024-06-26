import { Component, OnInit, Input } from '@angular/core';
import { CommonFunctionalityComponent } from '../common-functionality/common-functionality.component';
import { Router } from '@angular/router';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent extends CommonFunctionalityComponent implements OnInit {
  @Input() images: string[] = [];
  @Input() titles: string[] = [];
  @Input() texts: string[] = [];
  @Input() enable_buttons: boolean = true;
  @Input() center_title: boolean = false;
  @Input() slide_delay = 10000;
  @Input() orientation: string = "horizontal";

  languageService: LanguageService;
  langSubscription: Subscription;

  currentIndex: number = 0;
  intervalId: any;
  hasTouchedButton: boolean = false;

  constructor(
    public override router: Router,
    languageService: LanguageService) {
    super(router);
    this.languageService = languageService;
    this.langSubscription = this.languageService.getNewLang().subscribe((value: string) => {
      this.reloadCurrent()
    });
  }

  override ngOnInit() {
    // Start the timer when the component is initialized
    this.startSlideShow();
  }

  startSlideShow() {
    // Set an interval to switch images every slide_delay seconds
    this.intervalId = setInterval(() => {
      this.nextSlide(false);
    }, this.slide_delay);
  }

  prevSlide(buttonTouched: boolean) {
    if (buttonTouched) {
      this.hasTouchedButton = true;
    }

    if (!this.hasTouchedButton || buttonTouched) {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
      else if (this.currentIndex == 0) {
        this.currentIndex = this.images.length - 1;
      }
    }
  }

  nextSlide(buttonTouched: boolean) {
    if (buttonTouched) {
      this.hasTouchedButton = true;
    }

    if (!this.hasTouchedButton || buttonTouched) {
      if (this.currentIndex == this.images.length - 1) {
        this.currentIndex = 0;
      }
      else if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      }
    }
  }

  reloadCurrent() {
    this.reloadComponent(true);
  }
}