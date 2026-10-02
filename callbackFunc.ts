
const evens = () => {
    console.log("The list of evens from 1 to 100");
    for (let i = 1; i <= 100; ++i) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

const odds = () => {
    console.log("The list of odds from 1 to 100");
    for (let i = 1; i <= 100; i += 2) {
        console.log(i);
    }
}

const printToN = n => {
    console.log("The list of numbers from 1 to", n);
    for (let i = 1; i <= n; ++i) {
        console.log(i);
    }
}

function printManager(f, n?) { // f = evens = argument
    // f() ~ evens() ~ call outside function into this functiton
    console.log("do something..");
    f(n);
}

// printManager(evens);
// printManager(() => {
//     console.log("The list of odds from 1 to 100");
//     for (let i = 1; i <= 100; i += 2) {
//         console.log(i);
//     }
// });
printManager(printToN, 3);

