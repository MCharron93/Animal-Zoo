export default class Zoo {
  addAnimals(animalArr) {
    animalArr.forEach(animal => {
      this.animals.push(animal)
    });
  }

  addPredators(animalArr){
    animalArr.forEach(animal => {
      this.predators.push(animal)
    });
  }

  hasTail(animalArr){
    animalArr.forEach(animal => {
      this.tail.push(animal)
    });
  }

  constructor(){
    this.animals = []
    this.predators = []
    this.tail = []
  }
}