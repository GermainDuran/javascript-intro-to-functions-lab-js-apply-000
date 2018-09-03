function shout (string) {
  return string.toUpperCase()
}
function whisper (string) {
  return string.toLowerCase()
}

function logShout (string) {
  var aux = string.toUpperCase()
  console.log(aux);
}
function logWhisper (string) {
  var aux = string.toLowerCase()
  console.log(aux);
}
function sayHiToGrandma(string){
  
  var uppercase = "HELLO"
  string.toUpperCase() === uppercase// true
  stringaux2 = "YES INDEED!"
  return stringaux2()
 
  var lowercase = 'hello!'
  string.toLowerCase() === lowercase // true
  stringaux = "I can't hear you"
  return stringaux()
  
  string = "I love you, Grandma."
  stringaux3= "I love you, too."
  return stringaux3()
  
}
