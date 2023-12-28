import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import { DetailsComponent } from './pages/details/details.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator'



@NgModule({
  declarations: [
    ProductsComponent,
    MasterPageComponent,
    NavigationMenuComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule,

    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatInputModule,
    MatCardModule,

  ]
})
export class ProductsModule { }
