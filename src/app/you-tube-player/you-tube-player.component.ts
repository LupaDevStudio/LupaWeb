import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-you-tube-player',
  templateUrl: './you-tube-player.component.html',
  styleUrls: ['./you-tube-player.component.scss']
})
export class YouTubePlayerComponent {

  @Input() videoId: string = "";
  width: number = 0;
  height: number = 0;

  ngOnInit()
  {
    const scriptTag = document.createElement('script');
    scriptTag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(scriptTag);

    let windowWidth = window.innerWidth;
    if (windowWidth > 800) {
      this.width = 700;
    }
    else {
      this.width = 0.8 * windowWidth;
    }
    this.height = this.width * 9/16;
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    let windowWidth = window.innerWidth;
    if (windowWidth > 800) {
      this.width = 700;
    }
    else {
      this.width = 0.8 * windowWidth;
    }
    this.height = this.width * 9/16;
  }

}
