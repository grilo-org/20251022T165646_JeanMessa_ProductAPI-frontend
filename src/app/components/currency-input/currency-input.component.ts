import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'currency-input',
  imports: [FormsModule],
  templateUrl: './currency-input.component.html',
  styleUrl: './currency-input.component.scss'
})
export class CurrencyInputComponent {

  @Input() inputName: string = '';
  @Input() symbol: string = '';
  @Output() inputEvent = new EventEmitter();
  priceInt: string = '';
  priceDecimal: string = ',00';
  

  onDecimalChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    let numericValue = inputElement.value ? inputElement.value.toString().replace(/,/g, '') : '';
    numericValue = numericValue.replace(/[^0-9]/g, '');

    if (numericValue.length === 0) {
      numericValue = '00';
    } else if (numericValue.length === 1) {
      numericValue = '0' + numericValue;
    } else if (numericValue.length > 2) {
      if (numericValue.charAt(0) == "0") {
        numericValue = numericValue.substring(1, 3);
      } else {
        numericValue = numericValue.substring(0, 2);
      }
    }

    this.priceDecimal = "," + numericValue;


    inputElement.value = this.priceDecimal;
    this.inputEvent.emit();
  }

  onInput(){
    this.inputEvent.emit();
  }

  public getPrice(){
    if(this.priceInt == null){
      this.priceInt = "0";
    }
    
    let price:string = this.priceInt + this.priceDecimal;
    price = price.replace(',', '.');    
    return Number(price);
  }

  public reset(){
    this.priceInt = "";
    this.priceDecimal = ",00"
  }

  public setValue(value:number){
    const integerValue:string = Math.trunc(value).toString();
    const decimalValue:string = (value.toFixed(2)).replace(integerValue+".","");
    
    this.priceInt = integerValue;
    this.priceDecimal = "," + decimalValue;
  }
     

}
