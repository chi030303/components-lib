function Cat(name,age){
    this.name = name;
    this.age = age;
}

Cat.prototype.food = 'chicken';
var cat1 = new Cat('cat1',1);
var cat2 = new Cat('cat2',2);
cat1.food;
cat2.food;
Cat.prototype.food = 'fish';