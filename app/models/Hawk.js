class Hawk {
  constructor(name, color, gender, age, weight, tail){
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.age = age;
    this.weight = weight;
    this.tail = tail
  }
  
  eat(food){
    console.log(`ScrREEAccH as I grab ${food}`)
  }
}

export default Hawk;