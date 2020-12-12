// const car = {
//     color: 'Black'
// }

// const car2 = {
//     color: 'green'
// }

// console.log(car.color)

// car.color = 'green';

// console.log(car.color);

// function changeCarColor(theCar1, theCar2){
//     if(theCar1.color === 'red'){
//         theCar1.color = 'blue';
//         theCar2.color = 'blue';
//     } else {
//         theCar1.color = 'blue';
//         theCar2.color = 'Yellow';
//     }
// }

// changeCarColor(car, car2)
// // changeCarColor(car2)
// console.log("car",car.color);
// console.log("car2",car2.color);

// function changeColor(color = 'red'){
//     console.log(color)
// }

// changeColor('green')

// let car = {
//   maxSpeed: 250,
//   update: speedChange,
// };

// function speedChange(speed = car.maxSpeed) {
  
//   car.maxSpeed = speed;
// }



// car.update(1000)
// console.log(car.maxSpeed)


// function watch(color) {
//     if(color === 'red'){
//         return;
//     }
    
//     return color;

// }

// const message = watch("green")

// console.log(message)


function randomNumber(){
    return Math.round(Math.random()  * 100)
}



function result(betNumber){
    const winNumber = randomNumber()
    if(betNumber === winNumber){
        console.log("You are winner, number is: ", winNumber)
    } else {
        console.log("You are loser", winNumber)
    }
}

result(50)