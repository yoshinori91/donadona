import {Component, OnInit} from '@angular/core'

import {Hero} from './hero'
import {HeroService} from './hero.service'

@Component({
  selector: 'media',
  templateUrl: "assets/client/app/media.component.html"
})
export class MediaComponent implements OnInit {
  heroes: Hero[] = []

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5))
  }

  gotoDetail(hero: Hero): void {

  }
}
