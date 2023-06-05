// function countWords(text) {
//     let count = 0;
//     let wordStarted = false;

//     for (let index = 0; index < text.length; index++) {
//       if (text[index] !== ' ') {
//         if (!wordStarted) {
//           count++;
//           wordStarted = true;
//         }
//       } else {
//         wordStarted = false;
//       }
//     }

//     return count;
//   }



function countWords(input) {
    let spaceCount = 1;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ') {
            spaceCount++;
        }
    }

    return spaceCount;
}

let userInput = prompt("cumle yazin");
let spaceCount = countWords(userInput);
alert("cumledeki sozlerin sayisi: " + spaceCount);


