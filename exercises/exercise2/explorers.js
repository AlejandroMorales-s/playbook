const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]

// Name of each explorer using FOR EACH 
explorers.forEach(name => console.log(name.name));

// Stack of each explorer using FOR EACH
explorers.forEach(stack => console.log(stack.stack));

// New array with the stack array of each explorer using MAP
const stackArray = explorers.map(stack => stack.stack);
console.log(stackArray);

// Explorers with 'js' in their stack using FILTER
const js = explorers.filter((explorer) => explorer.stack.includes('js'));
console.log(js);

// First explorer from CDMX using FIND 
const cdmx = explorers.find((cdmx) => cdmx.city === 'CDMX');
console.log(cdmx);

// Sum of exercises completed using REDUCE
const exercises = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0);
console.log(exercises);

// Check if almost one explorer has finished frontend exercises using SOME
const frontend = explorers.some((explorer) => explorer.missions.frontend.exercisesFinished === true);
console.log(frontend); 

// Check if all explorers have finished onboarding mission using EVERY
const finished = explorers.every((onboarding) => onboarding.missions.onboarding.isFinished === true);
console.log(finished); 