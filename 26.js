let students=[
   {name:"fasil" ,score:"95"},
   {name:"raju" ,score:"87"},
   {name:"ramu" ,score:"69"}
]
//////////////////////////////////////////


output=students.map((x)=> x.name)
console.log(output);

///////////////////////////////////////



output=students.filter((x)=> x.score>75)
console.log(output);



////////////////////////////////////////

// output=students.reduce((x,y)=> (x.score3)),0
// console.log(output);

////////////////////////////////////////
function grade(score) {
    

if(score>=90){
    return "A"
}else if(score>=80){
    return "B"
}else{
    return "C"
}

}console.log(grade(90));

