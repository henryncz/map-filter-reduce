const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10,
        weight: 0.01
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2,
        weight: 2
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1,
        weight: 0.5
    },
]

//const totalWeight = pets.reduce((total, pet) => {
/* console.log('Total: ', total)
 console.log('Pet: ', pet.name)

 return total + pet.

 return {
     totalAge: total.totalAge + pet.age,
     totalWeight: total.totalWeight + pet.weight
 }
}, {totalAge: 0, totalWeight: 0} )

if( pet.type !=='dog') return total

return total + pet.weight
}, 0)
console.log(totalWeight)*/

/*const dogs = pets.filter((pet)=> {
    return pet.type === 'dog'
})
console.log (dogs)*/

const totalWeightDogs = pets.filter((pet) => {
    return pet.type === 'dog'
}).reduce((total, pet) => {
    return total + pet.weight
}, 0)

console.log(totalWeightDogs)