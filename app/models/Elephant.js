class Elephant {
  constructor(name, color, gender, age, weight, tail){
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.age = age;
    this.weight = weight;
    this.tail = tail
  }
  
  eat(food){
    console.log(`My ${food} is in the highest places`)
  }
}

export default Elephant;