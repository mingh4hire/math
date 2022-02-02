import { Component } from '@angular/core';
import { timer } from 'rxjs';
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crapang';
  num1 = 33;
  num2 = 44;
  num = 55;
  guess: number;
  
  constructor(){
   }

  random(digs:number):number{
    return Math.floor(Math.random()*Math.pow(10,2));
  }
  getNext():void{
    timer(1000).subscribe(x=>{
      this.num1 = this.random(2);
      this.num2 = this.random(2);
      this.guess = null;
    });
  }


  isCorrect(): boolean {
    const prod = this.num1*this.num2;
    if (this.getNumDigs(prod) === this.getNumDigs(this.guess)){ 
      if (prod === +this.guess){
        return true;
      }
      return false;
    } 
  }

  getNumDigs(num): number{
    let cnt = 0;
    while (num > 0){
      num /= 10;
      num = Math.floor(num);
      cnt++;
    }
    return cnt;

  }
}
