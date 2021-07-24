// 4 arrays containing strings
// animals, foods, countries and the periodic table

const animals = [
    lion, sheep, wolf, tiger, dog, ant, cat, fox, pig, cow, bird, chicken, monkey, rabbit, camel, cheetah, coyote, eagle,
    elephant, giraffe, hamster, grasshopper, armadillo, caribou, cockroach, hedgehog, hippopotamus, hummingbird, nightingale,
    porcupine, rhinoceros
];

const foods = [
    chips, carrot, cheese, pizza, milk, honey, coffee, butter, cake, bread, oister, lettuce, sausage, dumpling, broccoli,
    mushroom, sandwich, watermelon, milkshake, asparagus, zucchini, hollandaise, fettuccine, macaron, edamame, charcuterie,
    bouillabaisse, tzatziki, bourguignon
];

const countries = [
    togo, fiji, spain, peru, oman, niger, nepal, mali, malta, iran, algeria, albania, belgium, bolivia, Mmuritius,
    ecuador, finland, guinea, ireland, kuwait, uzbekistan, turkmenistan, bangladesh, seychelles, philippines, mozambique, liechtenstein,
    kyrgyzstan, eswatini, djibouti
];

const periodicTable = [
    hydrogen, sodium, calcium, carbon, sulfur, iodine, lead, aluminium, titanium, magnesium, strontium, potassium,
    barium, radium, chromium, cobalt, thorium, zirconium, rutherfordium, oganesson, praseodymium, mendelevium, livermorium, protactinium,
    ytterbium, technetium, gadolinium
];

const wordSelection = {
    // Draw a random word from the theme selected by the user and initiate the game
    selectWord: {
        animals: function () {
            wordToGuess = animals[Math.floor(Math.random() * animals.length)];
            wordSelection.initiate();
        },
        foods: function () {
            wordToGuess = foods[Math.floor(Math.random() * foods.length)];
            wordSelection.initiate();
        },
        countries: function () {
            wordToGuess = countries[Math.floor(Math.random() * countries.length)];
            wordSelection.initiate();
        },
        periodicTable: function () {
            wordToGuess = periodicTable[Math.floor(Math.random() * periodicTable.length)];
            wordSelection.initiate();
        },
    },