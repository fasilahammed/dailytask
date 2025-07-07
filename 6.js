class product{
 constructor(name,price){
    this.name=name;
    this.price=price;
 }
 displayInfo(){
    console.log(`product name is ${this.name} and its price is ${this.price}`);
    
 }
}

const p1=new product("pen",20);
const p2=new product("shirt",350);

p1.displayInfo()
p2.displayInfo()


///////////////////////////////////////

const plainProduct = {
  name: "pant",
  price: 400,
  displayInfo: function () {
    console.log(`product name is ${this.name} and its price is ${this.price}`);
  }
}


