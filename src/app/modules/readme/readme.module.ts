import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadmeRoutingModule } from './readme-routing.module';
import { MasterPageComponent } from './master-page/master-page.component';
import { ReadmeComponent } from './pages/readme/readme.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';


@NgModule({
  declarations: [
    MasterPageComponent,
    ReadmeComponent,
    NavigationMenuComponent
  ],
  imports: [
    CommonModule,
    ReadmeRoutingModule,
    SharedModule
  ]
})
export class ReadmeModule { }
