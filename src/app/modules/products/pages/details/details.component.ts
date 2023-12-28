import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.model';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  products: Product[] = [];

  product: Product = {
    name: '',
    size: '',
    stock: 0,
    created: '0',
    color: '',
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data) =>  {
      this.products = data;
    })
  }

  createProduct(): void {
    if(this.product.id) {
      this.editProduct()
      return;
    }
    this.productService.create({
      name: this.product.name,
      size: this.product.size,
      stock: Number(this.product.stock),
      created: this.product.created,
      color: this.product.color,}).subscribe((data) =>  {
      this.productService.getAll().subscribe((data) =>  {
        this.products = data;
      })
      this.product = {
        name: '',
        size: '',
        stock: 0,
        created: '0',
        color: '',};
    })
  }

  editProduct(): void {
    this.productService.update(this.product.id, {
      name: this.product.name,
      size: this.product.size,
      stock: Number(this.product.stock),
      created: this.product.created,
      color: this.product.color,}
      ).subscribe((data) =>  {
      this.productService.getAll().subscribe((data) =>  {
        this.products = data;
      })
      this.product = {
        name: '',
        size: '',
        stock: 0,
        created: '0',
        color: '',};
    })
  }

  removeProduct(id: number): void {
    const ok = confirm("Deseja realmente excluir ?");
    if (ok) {
      this.productService.delete(id).subscribe((data) =>  {
        this.productService.getAll().subscribe((data) =>  {
          this.products = data;
        })
        alert('Excluido')
      })
    }

  }

  setProduct(pro: Product): void {
    this.product = {...pro};
  }

}
