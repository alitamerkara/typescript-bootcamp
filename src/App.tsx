import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
let val:string= "tamer"
let tam: number= 0
//any - unknown
let tamer: any= 10;
tamer= "azra";
tamer= false; 
//union types
let azra: string|number= 10;
//literal types
let value: "test1"|"test2"|"test3"="test3";
//array
let arr: Array<string|number> //string|number[];
arr=["tamer","azra",3]
//type-interface
type Iprops={
  name:string,
  age?: number //optional
}
const obj: Iprops={
  name: "tamer",
  // age: 26
}
//tuple
let arra: [number,string,boolean];
arra=[10,"tamer",false]
//functions
let func= (a:number,b:number):number=>{//void olsaydı return olmazdı
return a+b
}
console.log(func(3,5))
//generic types******
interface Tip<T>{
  name: T
};
let arr1: Tip<string>[]=[
  {
    name:"Tamer"
  }
];
let arr2: Tip<number>[]=[
  {
    name:23
  }
]
//key of
type Test={
  test1: "string",
  test2: "string",
  test3: "string"
}
type Test2 = keyof Test
  return (
    <div className="App">
     {val}
    </div>
  );
}

export default App;
