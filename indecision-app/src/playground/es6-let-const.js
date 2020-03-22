var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

// var fullName = 'Constantin Antochi';

/* if (fullName) {
    var firstName = fullName.split(' ')[0];
console.log(firstName);
}
//nu merge cu 'let' in if block

console.log(firstName); */

var fullName = 'Carmen Antochi';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
//declari variabila din if in afara blocului

console.log(firstName);

