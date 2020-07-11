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

const PetNames = pets.map((pet) => {
    return pet.age
})

console.log(PetNames)