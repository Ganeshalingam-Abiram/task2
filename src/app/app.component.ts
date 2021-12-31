import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task2';
  nvalue! :number;
  xvalue! :number;
  result!:number;
  
  




  Add(): void{
    
    console.log(this.nvalue,this.xvalue)
    this.result=this.xvalue*Math.pow(this.nvalue,this.xvalue-1)
    


    
  }

}
