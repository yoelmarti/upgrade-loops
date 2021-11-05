// Iteración#4

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (let key in alien){
    console.log("Alien tiene key " + key + ": con valor: " + alien[key])
}