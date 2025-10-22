import { Component, OnInit, ViewChild} from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ProductFormComponent } from "../../components/product-form/product-form.component";
import { Product } from '../../../types/product.type';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-product',
  imports: [HeaderComponent, ProductFormComponent],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent implements OnInit{

  id:string | null = '';
  product$!: Observable<Product>;
  @ViewChild("productForm") productForm!: ProductFormComponent;


  constructor(
    private route:ActivatedRoute,
    private productService:ProductService,
    private toastService:ToastrService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) =>{
      this.id = params.get('id');
      this.product$ = this.productService.get(this.id!);
    })
  }

  edit(product:Product){
    
    this.productService.edit(this.id!,product).subscribe({
        next: () => {
          this.toastService.success("Edição realizada com sucesso.");
          this.router.navigate(["/"]);
        },
        error: () => {
          this.toastService.error("Erro ao editar.")
          this.productForm.waitingRequest = false
        },
      }
    );
  }
}
