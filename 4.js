let a=35;
let b=25;
function shdw() {
    
   
    let a=100 /// legal shadowing 
    var b=500;///ilegal shadowing
    console.log(a);////legal
    console.log(b);///ilegal
    
    
}
shdw()
console.log(a);
console.log(b);


///////////////////////////////


