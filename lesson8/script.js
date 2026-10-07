// тема объекттер 
const person = {
  name: "Айгерим",
  age: 17,
  city: "Бишкек"
};
console.log(person.name)
console.log(person['age'])

person.age = 18
person.school = 'Школа № 45'
delete person.city
console.log(person)



const person2 = {
  name: "Айгерим",
  greet: function () {
    console.log("Салам, мен " + this.name);
  }
};

person2.greet();



let array = [
    {
        id: 1,
        name: 'mersedes',
        color: 'black'
    },
        {
        id: 2,
        name: 'bmw',
        color: 'black'
    }
]