// // // For | While

// // For
// let numerosForOne = [];
// for (let i = 0; i < 100; i++) {
//   numerosForOne.push(i + 1);
// }

// // [0,1,2,3,4,...,98,99,100]
// console.log(numerosForOne);

// numerosForTwo = [];

// // For
// for (let i = 0; i < 100; i++) {
//   const payload = i % 2 === 0 ? "Par" : "Impar";
//   numerosForTwo.push([i, payload]);
// }

// // [[1,"impar"],[2,"par"]]
// console.log(numerosForTwo);

// While
// let numerosWhileChallengeOne = [];
// let count = 1;
// while (count <= 100) {
//   numerosWhileChallengeOne.push(count);
//   count++;
// }
// console.log(numerosWhileChallengeOne);
// [1,2,3,4,...,98,99,100]

// While

// ---------------------------
// let n = 0;
// let x = 0;
//
// while (n < 3) {
//   n++;
//   x += n;
// }
// ---------------------------

// let numerosWhileChallengeTwo = [];
// let countTwo = 1;
// while (countTwo <= 100) {
//   // % Remainder > Resto da divisão
//   if (countTwo % 2 === 1) {
//     numerosWhileChallengeTwo.push([countTwo, "ímpar"]);
//   } else {
//     numerosWhileChallengeTwo.push([countTwo, "par"]);
//   }
//   countTwo++
// }
// console.log(numerosWhileChallengeTwo);
// console.log(numerosWhileChallengeTwo[4][1]);

// let lista = []
// let c = 1
// while(c <= 100){
//   if (c % 2 === 0) {
//     lista.push({number: c, type: "par"})
//   } else {
//     lista.push({number: c, type: "ímpar"})
//   }

//   c++
// }
// console.log(lista)

// [{numero:1, type:"par"}]

let list = [] 
 
for (let i = 1; i <= 100; i++) {
  if(i % 2 === 0) {
    list.push({numero: i, type: "par"}) 
  } else {
    list.push({numero: i, type: "ímpar"})
  }
}
console.log(list)

//list

// Desafio tu tem que gerar uma nova lista que vai inverter os valores de Type.
// Map