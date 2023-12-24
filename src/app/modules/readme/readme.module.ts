import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadmeRoutingModule } from './readme-routing.module';
import { MasterPageComponent } from './master-page/master-page.component';
import { ReadmeComponent } from './pages/readme/readme.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MasterPageComponent,
    ReadmeComponent
  ],
  imports: [
    CommonModule,
    ReadmeRoutingModule,
    SharedModule
  ]
})
export class ReadmeModule { }
