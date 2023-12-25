import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    ProductsComponent,
    MasterPageComponent,
    NavigationMenuComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    MatTooltipModule
  ]
})
export class ProductsModule { }
