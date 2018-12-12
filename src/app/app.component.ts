import { Component } from '@angular/core';
import {Animal,AnimalTypes} from './animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title:string= "some title"
  Somedata:any = ["sun","mon","thu"];
  Dog:any;
  AnimalName :string;
  flag:boolean = true;
  
   constructor(){
     this.Dog = new Animal("Volf",AnimalTypes.Type1);
     console.log(AnimalTypes[0])

  }

}




