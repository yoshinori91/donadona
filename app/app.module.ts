import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {HttpModule}    from '@angular/http';

import {AppComponent}         from './app.component';
import {DashboardComponent}   from './dashboard.component';
import {HeroDetailComponent}  from './hero-detail.component';
import {HeroesComponent}      from './heroes.component';
import {MediaComponent}      from './media.component';
import {HeroService}          from './hero.service';
import {MediaService}          from './media.service';
import {routing} from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    MediaComponent
  ],
  providers: [
    HeroService,
    MediaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
