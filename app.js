// let condition1 = true;
// let condition2 = false;
// let condition3 = 'HI';
// let condition4 = 0;


// if(condition4) {
//     console.log("true")
// } else {
//     console.log("false")
// }



// let num1
// let num2 = 100
// let num3

// if((num1 || num2) && num3 > 100){
//    console.log("Gretter") 
// } else {
//     console.log('false')
// }

const car = {
    color: 'red',
    speed: 250,
    price: 15000
}
let color;
if(car.color == 'red' && car.speed > 200)  {
    console.log("car color is: ", car.color)
    if(car.price > 10000){
        color = "Blue"
        console.log("car price is: ", car.price)
    } else {
        color = "Yellow"
        console.log("Yellow console")
    }
}else if(car.color == 'red'){
    console.log("2222 car color is: ", car.color)
} else {
    console.log('false')
}

// let color = car.price > 10000 ? "Blue" : "Yellow"
console.log(color)
    
 