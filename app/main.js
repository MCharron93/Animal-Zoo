import Alligator from './models/Alligator.js'
import Bat from './models/Bat.js'
import Capybara from './models/Capybara.js'
import Dingo from "./models/Dingo.js"
import Elephant from "./models/Elephant.js"
import Frog from "./models/Frog.js"
import Giraffe from "./models/Giraffe.js"
import Hawk from "./models/Hawk.js"

// import Zoo from './models/zoo.js'


let gator = new Alligator("Gator", "Green", "Male", 43, "210lbs", true)
gator.eat('ham')

 let batsy = new Bat ("Batsy", "Black", "Female", 2, "8lbs", true)
batsy.eat("fruit")

let cappy = new Capybara("Cappy", "Brown", "Female", 28, "180lbs", true)
cappy.eat("leaves")

let diago = new Dingo("Diago", "Tan", "Male", 4, "50lbs", true)
diago.eat("scraps")

let ellie = new Elephant("Ellie", "Grey", "Female", 66, "2500lbs", true)
ellie.eat("leaves")

let finn = new Frog("Finn", "Green", "Male", 1, "1lbs", false)
finn.eat("flies")

let greg = new Giraffe("Greg", "Yellow", "Male", 16, "800lbs", true)
greg.eat("leaves")

let horris = new Hawk("Horris", "Multi", "Male", 3, "25lbs", true)
horris.eat("mice")


// let animals = [gator]

// function drawAnimals(){
//   let template = ""
  
// }