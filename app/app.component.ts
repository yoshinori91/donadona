import {Component} from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
<h2>{{hero.name}} details!!!!</h2>
<div><label>id: </label>{{hero.id}}</div>
<div>
  <label>name: </label>
  <input value="{{hero.name}}" placeholder="name">
  <input [(ngModel)]="hero.name" placeholder="name">
</div>
<h2>My Heroes</h2>
<ul class="heros">
  <li *ngFor="let hero of heroes">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>
  `
})
export class AppComponent {
  title: string = 'Tour of Heroes';
  heroes = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}


export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  {id: 11, name: 'Mr. Nice'},
  {id: 12, name: 'Narco'},
  {id: 13, name: 'Bombasto'},
  {id: 14, name: 'Celeritas'},
  {id: 15, name: 'Magneta'},
  {id: 16, name: 'RubberMan'},
  {id: 17, name: 'Dynama'},
  {id: 18, name: 'Dr IQ'},
  {id: 19, name: 'Magma'},
  {id: 20, name: 'Tornado'}
];

