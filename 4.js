let a = 35;
try{
    let b = 25;
    }catch(error){
        console.log("this value not declared");  
    }  


////////////////////////////function////////

function shdw() {
    let a = 100 /// legal shadowing 
    console.log(a);////legal

}
///////////////////////////////block///////////////

{
   
        var b = 500;///ilegal shadowing
        console.log(b);///ilegal
    

}
shdw()
console.log(a);
console.log(b);






