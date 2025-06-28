let person={
    fistName : "fasil" ,
    lastName : "ahammed",
    age :21,
    getFullName:function(){
        return this.fistName+" "+this.lastName
         
    },

    celebrateBirthday:function(){
        this.age+=1;
        return this.age
    }

};
console.log(person.getFullName());
console.log(person.celebrateBirthday());

