import 'core-js';
import 'rxjs/Rx';
import 'zone.js/dist/zone';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// import {AppModule} from './app.module';
//
// platformBrowserDynamic().bootstrapModule(AppModule);

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);