export class Animal{
   name:string;
   age:number;
   type:AnimalTypes;

   constructor(name:string,type:AnimalTypes,age?:number){
       this.name = name;
       this.type = type;
       this.age = age;
   }
}

export enum AnimalTypes { Type1, Type2 }

export interface Walk{
    
    walking(nameL:string);
}


