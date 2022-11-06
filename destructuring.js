

// // //DESTRCTURING ARRAYS

// // function calc(a,b){
// //     return[
// //         a+b,
// //         undefined,
// //         a-b,
// //         a*b,
// //         a/b
// //     ]
// // }

// // // console.log(calc(23,4))

// // // const result = calc(23,4)
// // // let sum0 = result[0]
// // // let sum = result[1]

// // // console.log(sum,sum0)

// // //TO WRITE LESS CODE - DESTRUCTURING
// // //, , - allowed (skip 2)

// const result = calc(233,2)
// const [sum1,sum2 = 'No subtraction',...rest] = calc(233,2)
// // //default ONLY f u

// // console.log(sum1,sum2,rest)


// //DESTRUCTURING OBJECTS

// const human = {
//     name: "Elizaveta",
//     age: 23,
//     address: {
//         country: 'Sweden',
//         city: 'Stockholm'
//     }
// }

// // //const name = human.name
// const {
// name: firstName = 'No name',
// car = 'have a car',
// address: {country, city},
// } = human

// console.log(car,country,city)

// // const {
// //     age,
// //     address: {country,city}
// // } = human
// // console.log(city)

// const {age,...rest} = human

// console.log({...rest})

//CLEAR CODE - WE SHOULDN'T USE BOILED CODE = CLEAN CODE
// function infoPerson(one){
//       //default 
//     //   const {name = 'NameSm', age} = one
//     const {[name]: na} = one
// console.log(name)
      

// }

// infoPerson({
// name:  undefined,
// age: 33
// })


//PRACTICE WITH POP AND PUSH

function interactive(arr){
    const [a,b, ...{push,pop}] = arr
    //push () / unshift() - return the length of an array 
    //pop ()  / shift () - return the last/firsssst element
    console.log(a,b,arr.unshift())
}

interactive([223,11])





