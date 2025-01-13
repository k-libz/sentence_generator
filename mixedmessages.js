//random data

const languages = ["Spanish", "French", "Portuguese", "Mandarin", "Russian"];

const hobbies = ["Chess", "Poker", "Football", "Cards", "Violin"];

const foods = ["Prawns", "Eggs", "Steak", "Chocolate", "Noodles"];


//Generate index of random selection

const getIndex = arr => {
    return arr(Math.floor(Math.random() * arr.length)); //returns a random number, in line with arr length
}

//Defines random item per array and returns string

const generateRandomString = () => {
    const lang = getIndex(languages);
    const hobby = getIndex(hobbies);
    const food = getIndex(foods);

    return `I learn ${lang}, I play ${hobby} and I like to eat ${food}`
}

console.log(generateRandomString());