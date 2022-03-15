const firstname = "Patrick"
const lastname = "Pellicciotta"
const city = "Laval"
const age = 18
const isMarried = "No"
const year = 2022

console.log(typeof firstname)
console.log(typeof lastname)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

console.log(typeof "10" == typeof 10)
console.log(parseInt("9.8") == 10)

//true statements
console.log("1" == 1)
console.log(3 > 2)
console.log(10 < 42)

//false statements
console.log("1" === 1)
console.log(90 < 10)
console.log(200 < 0)

 console.log(4 > 3) //true
 console.log(4 >= 3) //true
 console.log(4 < 3) //false
 console.log(4 <= 3) //false
 console.log(4 == 4) //true
 console.log(4 === 4) //true
 console.log(4 != 4) //false
 console.log(4 !== 4) //false
 console.log(4 != '4') //false
 console.log(4 == '4') //true
 console.log(4 === '4') //true
 console.log("python".length != "jargon".length)
 
console.log(4 > 3 && 10 < 12) //true
console.log(4 > 3 && 10 > 12) //false
console.log(4 > 3 || 10 < 12)  //true
console.log(4 > 3 || 10 > 12) //true
console.log(!(4 > 3)) //false
console.log(!(4 < 3)) //true
console.log(!(false)) //true
console.log(!(4 > 3 && 10 < 12)) //false
console.log(!(4 > 3 && 10 > 12)) //true
console.log(!(4 === '4')) //true
console.log(!("dragon".length === "python".length))

const now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth(0-11))
console.log(now.getDate())
console.log(now.getDay(0-6))
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())