"use strict"

let nameA = 'Mevin'
let nameB = 'Zooey'
let nameCompared = nameA !== nameB

console.log(nameA)

console.log(nameB)

console.log(nameCompared)


const ageA = 18
const ageB = 25

if (ageA > ageB) {
  console.log(false)
} else if (ageA < ageB) {
  console.log(true)
} else {
  console.log('sama')
}




const personA = {
    name: 'Alpha',
    age: 20,
    hobby: 'movigoers'
  }
  
  const personB = {
    name: 'Betty',
    age: 20,
    hobby: 'reading'
  }
  
  switch (personA.hobby === personB.hobby) {
    case true:
      console.log('You can date with her')
      break
  
    case false:
      console.log('You are out of her league!!!')
      break
  
    default:
      console.log('Damn! pity you')
  }
  