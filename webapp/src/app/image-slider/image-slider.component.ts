import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
  @Input() images: string[] = [];

  currentIndex = 0;

  ngOnInit() { }

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