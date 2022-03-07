const challenge = "30 Days Of JavaScript"
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(3, 7))
console.log(challenge.substring(3))
console.log(challenge.includes("Script"))
console.log(challenge.split(" "))
console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(", "))
console.log(challenge.replace("JavaScript", "Python"))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf("a"))
console.log(challenge.lastIndexOf("a"))

const challenge2 = "You cannot end a sentence with because because because is a conjunction"
console.log(challenge2.indexOf("because"))
console.log(challenge2.lastIndexOf("because"))
console.log(challenge2.search("because"))

const challenge3 = " 30 Days Of JavaScript "
console.log(challenge3.trim())
console.log(challenge.startsWith("30"))
console.log(challenge.endsWith("JavaScript"))
console.log(challenge.match("a"))
console.log("30 Days Of".concat(" JavaScript"))
//console.log("30 Days Of" + " JavaScript")
console.log(challenge.repeat(2))