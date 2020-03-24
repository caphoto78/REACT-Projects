// setup constructor to take name and age (default to 0)
// getDescription - Antochi Constantin is 42 years old. Anonymous

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }

    getGreeting() {
        return `Hi, I am ${this.name}!`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }

        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`
        }
        return greeting
    }
}

//Traveler => Person
// Add support for homeLocation (third arg)
// Override getGreeting
// 1. Hi. I am Antochi Constantin. I'm visiting from Philadelphia
// 2. Hi. I am Antochi Constantin.

const me = new Traveler('Constantin Antochi', 47, 'Bucharest');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());

