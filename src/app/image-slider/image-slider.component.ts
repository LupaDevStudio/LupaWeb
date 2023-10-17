import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
  @Input() images: string[] = [];
  @Input() titles: string[] = [];
  @Input() texts: string[] = [];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    // Start the timer when the component is initialized
    this.startSlideShow();
  }

  startSlideShow() {
    // Set an interval to switch images every 3 seconds (adjust as needed)
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 10000);
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
    else if (this.currentIndex == 0) {
      this.currentIndex = this.images.length - 1;
    }
  }

  nextSlide() {
    if (this.currentIndex == this.images.length - 1) {
      this.currentIndex = 0;
    }
    else if (this.currentIndex < this.images.length - 1) {

      this.currentIndex++;

    }
  }
}