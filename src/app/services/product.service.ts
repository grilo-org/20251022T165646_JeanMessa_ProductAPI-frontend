import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../types/product.type';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly APIURL = environment.apiUrl + "/product";

  constructor(private httpClient:HttpClient){}
  
  getAll(){    
    return this.httpClient.get<Product[]>(this.APIURL);
  }

  getAllFiltered(name:string,minPrice:number | null,maxPrice:number | null){    
    let httpParams = new HttpParams()
    .set("name",name);

    if(minPrice){
      httpParams = httpParams.set("minPrice",minPrice);
    }
    if(maxPrice){
      httpParams = httpParams.set("maxPrice",maxPrice);
    }
    
    return this.httpClient.get<Product[]>(this.APIURL,{
      params: httpParams
    });
  }

  get(productId:string){    
    return this.httpClient.get<Product>(this.APIURL+"/"+productId);
  }

  create(product:Product){    
    return this.httpClient.post<Product>(this.APIURL,product);
  }

  edit(id:string,product:Product){    
    return this.httpClient.put<Product>(this.APIURL+"/"+id,product);
  }

  delete(id:string){    
    return this.httpClient.delete(this.APIURL+"/"+id,{ responseType: 'text' });
  }

}
