// part 1 

function sumArray(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}


// part 2 

function averageArray(numbers) {
    return sumArray(numbers) / numbers.length;
}


// part 3 

function longestString(strings) {
    return strings.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}


// part 4 

function stringsLongerThan(strings, length) {
    return strings.filter(str => str.length > length);
}


// part 5 

function printNumbers(n, current = 1) {
    if (current > n) return;
    console.log(current);
    printNumbers(n, current + 1);
}

// thinking methodically 

const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// Sort by age
const sortedByAge = data.sort((a, b) => a.age - b.age);

// Filter out ages greater than 50
const filteredByAge = data.filter(person => Number(person.age) <= 50);

// Map to change occupation to job and increment age
const updatedJobs = data.map(person => ({
    ...person,
    job: person.occupation,
    age: Number(person.age) + 1
}));

// Sum of ages using reduce
const totalAge = data.reduce((acc, person) => acc + Number(person.age), 0);
const averageAge = totalAge / data.length;

/./ thinking critcally step 1 

function incrementAge(person) {
    if (!person.age) {
        person.age = 0;
    }
    person.age += 1;
    person.updated_at = new Date();
}

// thinking critacally step 2 
function copyAndIncrementAge(person) {
    const newPerson = { ...person, updated_at: new Date() };
    if (!newPerson.age) {
        newPerson.age = 0;
    }
    newPerson.age += 1;
    return newPerson;
}



