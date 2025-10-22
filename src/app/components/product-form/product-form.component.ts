import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CurrencyInputComponent } from "../currency-input/currency-input.component";
import { Observable } from 'rxjs';
import { Product } from '../../../types/product.type';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'product-form',
  imports: [ReactiveFormsModule, CurrencyInputComponent],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnInit{

  productForm!: FormGroup;
  @Input() title = '';
  @Input() productEdit$!:Observable<Product>;
  @Output() save = new EventEmitter;
  @ViewChild("currencyInput") currencyInput!: CurrencyInputComponent;
  waitingRequest: boolean = false; 
  
  constructor(private toastService:ToastrService, private router:Router){
    this.productForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
    });
  }

  ngOnInit(): void {
    if(this.productEdit$){
      this.productEdit$.subscribe({
        next: (product) => {
          if(product.productId && product.name && product.price){
            this.productForm.patchValue({
              name: product.name
            })
            this.currencyInput.setValue(product.price);
          }else{
            this.toastService.error("Erro ao carregar o produto.");
            this.router.navigate(["/"]);
          }
        },
        error: () =>{
          this.toastService.error("Erro ao carregar o produto.");
          this.router.navigate(["/"]);
        }
      })
    }
  }

  isFormComplete(){      
    return this.productForm.valid && this.currencyInput.getPrice() > 0;
  }

  onSave(){
    this.waitingRequest = true;
    const name = this.productForm.value.name;
    const price = this.currencyInput.getPrice();    
    this.save.emit({name,price});
  }

  reset(){
    this.productForm.reset();
    this.currencyInput.reset();
  }
}
