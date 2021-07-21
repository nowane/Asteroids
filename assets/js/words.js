// 4 arrays containing objects: "animals", "foods", "countries" and "elements"
// Each array contains 3 {name: "value"} pairs
// The names are "word", "difficulty" and "category"
// The value pairing "word" is always different
// The value pairing "difficulty" is either "easy", "medium" or "hard" 
// The value pairing "category" is equal to the current array

var selection = {
    'animals': [{
            word: "lion",
            difficulty: "easy",
            category: "animals"
        },
        {
            word: "sheep",
            difficulty: "easy",
            category: "animals"
        },
        {
            word: "wolf",
            difficulty: "easy",
            category: "animals"
        },
        {
            word: "tiger",
            difficulty: "easy",
            category: "animals"
        },
        {
            word: "dog",
            difficulty: "easy",
            category: "animals"
        },
        {
            word: "ant",
            difficulty: "easy",
            category: "animals"
        },
        {
            word: "cat",
            difficulty: "easy",
            category: "animals"
        },
        {
            word: "fox",
            difficulty: "easy",
            category: "animals"
        },
        {
            word: "pig",
            difficulty: "easy",
            category: "animals"
        }, {
            word: "cow",
            difficulty: "easy",
            category: "animals"
        },
        {
            word: "bird",
            difficulty: "easy",
            category: "animals"
        },
        {
            word: "chicken",
            difficulty: "medium",
            category: "animals"
        },
        {
            word: "monkey",
            difficulty: "medium",
            category: "animals"
        },
        {
            word: "rabbit",
            difficulty: "medium",
            category: "animals"
        },
        {
            word: "camel",
            difficulty: "medium",
            category: "animals"
        },
        {
            word: "cheetah",
            difficulty: "medium",
            category: "animals"
        },
        {
            word: "coyote",
            difficulty: "medium",
            category: "animals"
        },
        {
            word: "eagle",
            difficulty: "medium",
            category: "animals"
        },
        {
            word: "elephant",
            difficulty: "medium",
            category: "animals"
        },
        {
            word: "giraffe",
            difficulty: "medium",
            category: "animals"
        },
        {
            word: "hamster",
            difficulty: "medium",
            category: "animals"
        },
        {
            word: "grasshopper",
            difficulty: "hard",
            category: "animals"
        },
        {
            word: "armadillo",
            difficulty: "hard",
            category: "animals"
        },
        {
            word: "caribou",
            difficulty: "hard",
            category: "animals"
        },
        {
            word: "cockroach",
            difficulty: "hard",
            category: "animals"
        },
        {
            word: "hedgehog",
            difficulty: "hard",
            category: "animals"
        },
        {
            word: "hippopotamus",
            difficulty: "hard",
            category: "animals"
        },
        {
            word: "hummingbird",
            difficulty: "hard",
            category: "animals"
        },
        {
            word: "nightingale",
            difficulty: "hard",
            category: "animals"
        },
        {
            word: "porcupine",
            difficulty: "hard",
            category: "animals"
        },
        {
            word: "rhinoceros",
            difficulty: "hard",
            category: "animals"
        }
    ],
    'foods': [{
            word: "chips",
            difficulty: "easy",
            category: "food"
        },
        {
            word: "carrot",
            difficulty: "easy",
            category: "food"
        },
        {
            word: "cheese",
            difficulty: "easy",
            category: "food"
        },
        {
            word: "pizza",
            difficulty: "easy",
            category: "food"
        },
        {
            word: "milk",
            difficulty: "easy",
            category: "food"
        },
        {
            word: "honey",
            difficulty: "easy",
            category: "food"
        },
        {
            word: "coffee",
            difficulty: "easy",
            category: "food"
        },
        {
            word: "butter",
            difficulty: "easy",
            category: "food"
        },
        {
            word: "cake",
            difficulty: "easy",
            category: "food"
        },
        {
            word: "bread",
            difficulty: "easy",
            category: "food"
        },
        {
            word: "oister",
            difficulty: "medium",
            category: "food"
        },
        {
            word: "lettuce",
            difficulty: "medium",
            category: "food"
        },
        {
            word: "sausage",
            difficulty: "medium",
            category: "food"
        },
        {
            word: "dumpling",
            difficulty: "medium",
            category: "food"
        },
        {
            word: "broccoli",
            difficulty: "medium",
            category: "food"
        },
        {
            word: "mushroom",
            difficulty: "medium",
            category: "food"
        },
        {
            word: "sandwich",
            difficulty: "medium",
            category: "food"
        },
        {
            word: "watermelon",
            difficulty: "medium",
            category: "food"
        },
        {
            word: "milkshake",
            difficulty: "medium",
            category: "food"
        },
        {
            word: "risotto",
            difficulty: "medium",
            category: "food"
        },
        {
            word: "asparagus",
            difficulty: "hard",
            category: "food"
        },
        {
            word: "zucchini",
            difficulty: "hard",
            category: "food"
        },
        {
            word: "hollandaise",
            difficulty: "hard",
            category: "food"
        },
        {
            word: "fettuccine",
            difficulty: "hard",
            category: "food"
        },
        {
            word: "macaron",
            difficulty: "hard",
            category: "food"
        },
        {
            word: "edamame",
            difficulty: "hard",
            category: "food"
        },
        {
            word: "charcuterie",
            difficulty: "hard",
            category: "food"
        },
        {
            word: "bouillabaisse",
            difficulty: "hard",
            category: "food"
        },
        {
            word: "tzatziki",
            difficulty: "hard",
            category: "food"
        },
        {
            word: "bourguignon",
            difficulty: "hard",
            category: "food"
        }
    ],
    'countries': [{
            word: "Togo",
            difficulty: "easy",
            category: "countries"
        },
        {
            word: "Fiji",
            difficulty: "easy",
            category: "countries"
        },
        {
            word: "Spain",
            difficulty: "easy",
            category: "countries"
        },
        {
            word: "Peru",
            difficulty: "easy",
            category: "countries"
        },
        {
            word: "Oman",
            difficulty: "easy",
            category: "countries"
        },
        {
            word: "Niger",
            difficulty: "easy",
            category: "countries"
        },
        {
            word: "Nepal",
            difficulty: "easy",
            category: "countries"
        },
        {
            word: "Mali",
            difficulty: "easy",
            category: "countries"
        },
        {
            word: "Malta",
            difficulty: "easy",
            category: "countries"
        },
        {
            word: "Iran",
            difficulty: "easy",
            category: "countries"
        },
        {
            word: "Algeria",
            difficulty: "medium",
            category: "countries"
        },
        {
            word: "Albania",
            difficulty: "medium",
            category: "countries"
        },
        {
            word: "Belgium",
            difficulty: "medium",
            category: "countries"
        },
        {
            word: "Bolivia",
            difficulty: "medium",
            category: "countries"
        },
        {
            word: "Mauritius",
            difficulty: "medium",
            category: "countries"
        },
        {
            word: "Ecuador",
            difficulty: "medium",
            category: "countries"
        },
        {
            word: "Finland",
            difficulty: "medium",
            category: "countries"
        },
        {
            word: "Guinea",
            difficulty: "medium",
            category: "countries"
        },
        {
            word: "Ireland",
            difficulty: "medium",
            category: "countries"
        },
        {
            word: "Kuwait",
            difficulty: "medium",
            category: "countries"
        },
        {
            word: "Uzbekistan",
            difficulty: "hard",
            category: "countries"
        },
        {
            word: "Turkmenistan",
            difficulty: "hard",
            category: "countries"
        },
        {
            word: "Bangladesh",
            difficulty: "hard",
            category: "countries"
        },
        {
            word: "Seychelles",
            difficulty: "hard",
            category: "countries"
        },
        {
            word: "Philippines",
            difficulty: "hard",
            category: "countries"
        },
        {
            word: "Mozambique",
            difficulty: "hard",
            category: "countries"
        },
        {
            word: "Liechtenstein",
            difficulty: "hard",
            category: "countries"
        },
        {
            word: "Kyrgyzstan",
            difficulty: "hard",
            category: "countries"
        },
        {
            word: "Eswatini",
            difficulty: "hard",
            category: "countries"
        },
        {
            word: "Djibouti",
            difficulty: "hard",
            category: "countries"
        }
    ],
    'periodicTable': [{
            word: "hydrogen",
            difficulty: "easy",
            category: "periodic-table"
        },
        {
            word: "sodium",
            difficulty: "easy",
            category: "periodic-table"
        },

        {
            word: "calcium",
            difficulty: "easy",
            category: "periodic-table"
        },
        {
            word: "lithium",
            difficulty: "easy",
            category: "periodic-table"
        },

        {
            word: "carbon",
            difficulty: "easy",
            category: "periodic-table"
        },
        {
            word: "oxygen",
            difficulty: "easy",
            category: "periodic-table"
        },

        {
            word: "sulfur",
            difficulty: "easy",
            category: "periodic-table"
        },
        {
            word: "iodine",
            difficulty: "easy",
            category: "periodic-table"
        },

        {
            word: "lead",
            difficulty: "easy",
            category: "periodic-table"
        },
        {
            word: "aluminium",
            difficulty: "easy",
            category: "periodic-table"
        },
        {
            word: "titanium",
            difficulty: "medium",
            category: "periodic-table"
        },
        {
            word: "magnesium",
            difficulty: "medium",
            category: "periodic-table"
        }, {
            word: "strontium",
            difficulty: "medium",
            category: "periodic-table"
        },
        {
            word: "potassium",
            difficulty: "medium",
            category: "periodic-table"
        }, {
            word: "barium",
            difficulty: "medium",
            category: "periodic-table"
        },
        {
            word: "radium",
            difficulty: "medium",
            category: "periodic-table"
        }, {
            word: "chromium",
            difficulty: "medium",
            category: "periodic-table"
        },
        {
            word: "cobalt",
            difficulty: "medium",
            category: "periodic-table"
        }, {
            word: "thorium",
            difficulty: "medium",
            category: "periodic-table"
        },
        {
            word: "zirconium",
            difficulty: "medium",
            category: "periodic-table"
        },
        {
            word: "rutherfordium",
            difficulty: "hard",
            category: "periodic-table"
        },
        {
            word: "tellurium",
            difficulty: "hard",
            category: "periodic-table"
        },
        {
            word: "oganesson",
            difficulty: "hard",
            category: "periodic-table"
        },
        {
            word: "praseodymium",
            difficulty: "hard",
            category: "periodic-table"
        },
        {
            word: "mendelevium",
            difficulty: "hard",
            category: "periodic-table"
        },
        {
            word: "livermorium",
            difficulty: "hard",
            category: "periodic-table"
        },
        {
            word: "protactinium",
            difficulty: "hard",
            category: "periodic-table"
        },
        {
            word: "ytterbium",
            difficulty: "hard",
            category: "periodic-table"
        },
        {
            word: "technetium",
            difficulty: "hard",
            category: "periodic-table"
        },
        {
            word: "gadolinium",
            difficulty: "hard",
            category: "periodic-table"
        }
    ]
};