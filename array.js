// const array = [50,3,4,6]

// // console.log(array.length)
// array.push(9)
// console.log(array)
// array.pop()


// console.log(array.length)
// console.log(array)


// let cars = {
//     drivers: [
//         {
//             name: "John doe",
//             age: 21
//         },
//         {
//             name: "John Lenon",
//             age: 56
//         },
//         {
//             name: "Lary Page",
//             age: 45
//         }
//     ],
//     getDriver(index){
//         return this.drivers[index];
//     },
//     addDriver(driver){
//         return this.drivers.push(driver);
//     },
//     deleteLastDriver(){
//         return this.drivers.pop();
//     },
//     totalDriver(){
//         return this.drivers.length;
//     },
//     findDriver(name){
//         return this.drivers.find((driver) => driver.name === name);
//     },
//     findDriverByAgeGreeter(name, age){
//         return this.drivers.filter((driver) => driver.age >= age && driver.name.toLowerCase().includes(name.toLowerCase()));
//     }
// }
// const driver = cars.getDriver(1)
// console.log(driver.name)

// cars.addDriver({
//     name: "Stiven King",
//     age: 70
// })
// cars.addDriver({
//     name: "Stiven King",
//     age: 45
// })
// // console.log(cars.drivers)

// // cars.deleteLastDriver()

// // console.log(cars.findDriver("John doe"))
// console.log(cars.findDriverByAgeGreeter("JOHN", 21))

const array = [50,3,4,6]

console.log(typeof array)
console.log(typeof array.toString())