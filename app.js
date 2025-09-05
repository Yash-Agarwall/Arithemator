let btnNum=document.querySelectorAll(".btn-number");
let btnOp=document.querySelectorAll(".btn-operator");
let display=document.querySelector("#display");

for (btn of btnNum){
    btn.addEventListener("click",numPress);
}
function numPress(){
    if(display.innerText=="Syntax error"){
        display.innerText="";
    }
    display.innerText=display.innerText + this.innerText;
    // console.log(this.innerText);
}

for(op of btnOp){
    op.addEventListener("click",opPress);
}
function opPress(){
    let val=this.innerText;
    if(val=="Clear"){
        display.innerText="";
        return;
    }
    if(val=="="){
        // console.log(eval(display.innerText));
        
        try{
            let ans=eval(display.innerText);
            display.innerText=ans;
        }
        catch(e){
            console.log("syntax error", e.message);
            display.innerText="Syntax error";
        }
        return;
    }
    display.innerText=display.innerText + val;
    
}
// function solve(str){
//     i=0;
//     while(i<str.size()){
//         if(str[i]=="")
            
//     }
// }





