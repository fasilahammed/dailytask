let a=35;
let b=25;
function shdw() {
    
   
    let a=100 /// legal shadowing 
    var b=500;///ilegal shadowing
    console.log(a);////legal
    console.log(b);///ilegal
    
    try{
    console.log(c) //////its a catch error
    }catch(error){
        console.log("this value not declared");
        
    }
    
    
}
shdw()
console.log(a);
console.log(b);


///////////////////////////////


