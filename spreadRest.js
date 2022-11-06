

//spread
//rest


//spread operator - WILL OUTPUT EVERYTHING

//ITERABLE OBJECTS ONLY!
// const numbersArr = [1,22,32,12331,111]

// console.log(...numbersArr)

// const AmericanCitiesPopulation = {
//     'DC': '12mil',
//     'LA': '2mil',
//     'San-Fransisco': '13mil'
// }

// const EuropeanCitiesPopulation = {
//     'DC': '15mil',
//     'Berlin': '12mil',
//     'Madrid': '2mil',
//     'Prague': '1mil'
// }

// // console.log({...citiesPopulation})
// console.log({...AmericanCitiesPopulation,...EuropeanCitiesPopulation})


// console.log(Math.min(...[5,2323,233,22,10]))
// console.log(Math.max.apply(null,[1,23,2,232,78]))


// const divsGroup = document.querySelectorAll("div")

// const nodes = [...divsGroup]

// //apply to a pseudoArray
// //in this case - map+
// console.log(nodes,Array.isArray(nodes))
// console.log(nodes, Array.isArray(divsGroup))

// //rest - WILL OUTPUT THE RESTS


// function sum(x,...args){ //rest operator
//     //spread
//    console.log(...args)
//    return console.log( x + args.reduce((accumulator,iterableElement) => accumulator += iterableElement,0) )
// }

// sum(...[1,2,3,4,5])

// const arr = [1,22,33,22,100]

// // const x = arr[1]
// // const y = arr[4]

// // console.log(x,y)

// //rest operator
// const [x,y,...rest] = arr

// //spread operator
// console.log(x,y,...rest)

// //rest
// function output(...args){
//     //spread
//     console.log(...args)
// }

// output([1221,13,133333])

const human = {
    age : 20,
    city: 'Madrid',
    position: 'Full-stack developer'
}

//rest operator - INSERTION AS PARAMETERS
const {age,city,...rest} = human

//rest operator itself
console.log(age,city,rest)

const array = [11,213,133]

const [x,y] = array

console.log(x,y)



// console.log([1,2,3].reduce((accumulator,iterableV)=> accumulator + iterableV ,2))