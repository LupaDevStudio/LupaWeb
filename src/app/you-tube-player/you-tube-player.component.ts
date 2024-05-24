import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-you-tube-player',
  // imports: [],
  templateUrl: './you-tube-player.component.html',
  styleUrls: ['./you-tube-player.component.scss']
})
export class YouTubePlayerComponent {

  @Input() videoId: string = "";

  ngOnInit()
  {
    const scriptTag = document.createElement('script');
    scriptTag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(scriptTag);
  }

}
