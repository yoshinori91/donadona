import {Component, OnInit} from '@angular/core'

import {MediaService} from "./media.service";
import {Media} from "./media";


@Component({
  selector: 'media',
  templateUrl: "assets/client/app/media.component.html"
})
export class MediaComponent implements OnInit {

  media: Media[] = []

  constructor(private mediaService: MediaService) {
  }

  ngOnInit(): void {
    this.mediaService.getMedia()
      .then(media => this.media = media)
  }
}
