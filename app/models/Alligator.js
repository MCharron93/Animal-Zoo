class Alligator {
  constructor(name, color, gender, age, weight, tail){
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.age = age;
    this.weight = weight;
    this.tail = tail
  }
  
  eat(food){
    console.log(`Crunch crunch this ${food} is delicious`)
  }
}

export default Alligator;

