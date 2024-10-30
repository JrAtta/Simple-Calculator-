import { Component } from '@angular/core';

@Component({
  selector: 'app-calculater',
  standalone: true,
  imports: [],
  templateUrl: './calculater.component.html',
  styleUrl: './calculater.component.scss'
})
export class CalculaterComponent {

    function : any ='NoFunction';
    calcValue : number = 0;
    calcNumber : string = 'noValue';
    firstNumber : number = 0;
    secondNumber : number = 0;

    onClickValue(value:string , type : any){
      console.log(value , type);
      if(type === 'number'){
        this.onClickNumber(value);
      }
      else if(type === 'function'){
        this.onClickFunction(value);
      }

    }

    onClickNumber(value : string){
      if(this.calcNumber !== "noValue"){
        this.calcNumber +=  value;
      }
      else{
        this.calcNumber = value
      }
      this.calcValue = parseFloat(this.calcNumber)

    }
    onClickFunction(value:string){
      if( value === 'c'){
        this.clearFunction()
      }
     else if(this.function === "NoFunction"){
        this.firstNumber = this.calcValue;
        this.calcValue = 0;
        this.calcNumber = 'noValue';
        this.function = value;
      }
      else if(this.function !== "NoFunction"){
        this.secondNumber = this.calcValue;
        this.calculationValue(value);
      }
    }

    calculationValue(value:string){

       if(this.function === '%'){
       const total =  this.firstNumber % this.secondNumber;
        this.totalAssignValue(total , value);


      }
      else if(this.function === '/'){
       const total =  this.firstNumber / this.secondNumber;
        this.totalAssignValue(total , value);

      }
      else if(this.function === '*'){
       const total =  this.firstNumber * this.secondNumber;
        this.totalAssignValue(total , value);

      }
      else if(this.function === '+'){
       const total =  this.firstNumber + this.secondNumber;
        this.totalAssignValue(total , value);

      }
      else if(this.function === '-'){
       const total =  this.firstNumber - this.secondNumber;
        this.totalAssignValue(total , value);

      }
    }

    totalAssignValue(total : number , value : string){
      this.calcValue =total;
        this.firstNumber = total;
        this.secondNumber = 0;
        this.calcNumber = 'noValue'
        this.function = value;
        if(value === '='){
          this.pressEqualValue();
        }

    }

    pressEqualValue(){
      this.firstNumber = 0;
      this.secondNumber = 0;
      this.calcNumber = "noValue";
      this.function = "NoFunction"
    }

    clearFunction(){
      this.firstNumber = 0;
      this.secondNumber = 0;
      this.calcValue= 0
      this.calcNumber = 'noValue';
      this.function = 'NoFunction';
    }
}
