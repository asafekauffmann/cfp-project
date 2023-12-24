import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { LogoComponent } from './components/logo/logo.component';
import { TemplateMasterComponent } from './components/template-master/template-master.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    MainComponent,
    LogoComponent,
    TemplateMasterComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    NavComponent,
    MainComponent,
    LogoComponent,
    TemplateMasterComponent

   ],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
