// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
    let answer = 'No such contact';
    for(let obj of contacts){
        if (obj.firstName === name) {
            if (obj.hasOwnProperty(prop)) {
                answer = obj[prop];
            } else {
                answer = 'No such property'
            }
        } 
        
    }
    return answer;
  // Only change code above this line
}


console.log(lookUpProfile("Akira", "likes"));

console.log(lookUpProfile("Kristian", "lastName"))// should return the string Vos
console.log(lookUpProfile("Sherlock", "likes"))// should return ["Intriguing Cases", "Violin"]
console.log(lookUpProfile("Harry", "likes"))// should return an array
console.log(lookUpProfile("Bob", "number")) //should return the string No such contact
console.log(lookUpProfile("Bob", "potato")) //should return the string No such contact
console.log(lookUpProfile("Akira", "address"))