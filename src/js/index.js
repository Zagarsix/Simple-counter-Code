//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Counter from "./component/counter.js"


let U = -1;
let D = 0;
let C = 0;
let UM = 0;
let DM = 0;
let CM = 0;


setInterval (()=> {
U++;
(U==10)?(U=0,D++):true;
(D==10)?(D=0,C++):true;
(C==10)?(C=0,UM++):true;
(UM==10)?(UM=0,DM++):true;
(DM==10)?(DM=0,CM++):true;
(CM==10)?(CM=0):true;

console.log(U, D, C, UM)

ReactDOM.render(<Counter 
    sixth={CM}
    fifth={DM}
    fourth={UM} 
    third={C}
    second={D}
    first={U}
/>, document.querySelector("#app"))
}
,1000)
