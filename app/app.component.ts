import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/report" routerLinkActive="active">Report</a>
      <a routerLink="/media" routerLinkActive="active">Media</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['assets/client/app/app.component.css'],
})
export class AppComponent {
  title = 'Donald Manager';
}