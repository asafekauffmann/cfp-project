import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    HomeComponent,
    MasterPageComponent,
    NavigationMenuComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatTooltipModule
  ]
})
export class HomeModule { }
