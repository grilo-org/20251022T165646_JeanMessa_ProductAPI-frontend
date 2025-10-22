import { Component, ViewChild } from '@angular/core';
import { ProductFormComponent } from "../../components/product-form/product-form.component";
import { HeaderComponent } from "../../components/header/header.component";
import { Product } from '../../../types/product.type';

import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-create-products',
  imports: [ProductFormComponent, HeaderComponent],
  templateUrl: './create-products.component.html',
  styleUrl: './create-products.component.scss'
})
export class CreateProductsComponent {

  @ViewChild("productForm") productForm!: ProductFormComponent;

  constructor(private productService:ProductService, private toastService:ToastrService){}

  create(product:Product){
    this.productService.create(product).subscribe({
        next: () => {
          this.toastService.success("Cadastro realizado com sucesso.")
          this.productForm.reset();
          this.productForm.waitingRequest = false
        },
        error: () => {
          this.toastService.error("Erro ao cadastrar.")
          this.productForm.waitingRequest = false
        }
      }
    );
  }
}
