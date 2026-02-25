const obj ={
    name: "John",
    age: 30,
    city: "New York"
}

obj.greeting = function f1(){
    console.log("Hello, my name is " + this.name);
}
console.log(obj.name); 
console.log(obj["age"]);
obj.greeting();
