class Person {
 constructor(firstName, lastName, age){
  this._firstName = firstName;
  this._lastName = lastName;
  this._age = age;
 }
//  getLastName(){
//   return this.lastName
//  }
//  setLastName(param1){
//   this.lastName = param1
//  }
//  getFirstName(){
//   return this.firstName
//  }
//  setFirstName(param1){
//   this.firstName = param1
//  }
//  getAge(){
//   return this.age
//  }
//  setAge(param1){
//   this.age = param1
//  }
//  fullName(){
//   return `${this.firstName} ${this.lastName}`
//  }
get firstName() {
  return this._firstName;
}

set firstName(param1) {
  this._firstName = param1;
}

get lastName() {
  return this._lastName;
}

set lastName(param1) {
  this._lastName = param1;
}

get age() {
  return this.age;
}

set age(param1) {
  this._age = param1;
}

get fullName() {
  return this._firstName + " " + this._lastName;
}
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);