import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  private sources: any[];

  constructor() {
    this.sources = [
      {
        src: "http://static.videogular.com/assets/videos/videogular.mp4",
        type: "video/mp4"
      },
      {
        src: "http://static.videogular.com/assets/videos/videogular.ogg",
        type: "video/ogg"
      },
      {
        src: "http://static.videogular.com/assets/videos/videogular.webm",
        type: "video/webm"
      }
    ];
  }

  ngOnInit() {
  }

}
