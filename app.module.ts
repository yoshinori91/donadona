import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HelloWorldComponent} from './hello-world.component';
import {HelloWorldComponent2} from './hello-world.component2';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloWorldComponent2
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
