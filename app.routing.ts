import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {HelloWorldComponent2} from './hello-world.component2'

const appRoutes: Routes = [
  {
    path: 'hero',
    component: HelloWorldComponent2
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


