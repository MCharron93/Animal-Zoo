
class Bat {
  constructor(name, color, gender, age, weight, tail){
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.age = age;
    this.weight = weight;
    this.tail = tail
  }
  
  eat(food){
    console.log(`Munch munch, this ${food} is tasty`)
  }
}

export default Bat;