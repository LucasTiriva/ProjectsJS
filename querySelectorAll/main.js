const listLi = document.querySelectorAll(".li-desafio");

function validar() {
  listLi.forEach((element) => {
    // Desafio 1
    // dar console.log no conteudo do elemento
    // console.log(element.textContent)
    const textContentInNumber = parseInt(element.textContent);

    // Desafio 2
    // Verificar se o numero é impar ou par e dar console.log falando se é par ou imar
    if (textContentInNumber % 2 === 0) {
      element.textContent = `${element.textContent} - Par`;
    } else {
      element.textContent = `${element.textContent} - Impar`;
    }
  });
}

function meunumeroe() {
  // Deixar Pagina Bonita (Tentei, ok)
  // Desafio ver se o numero da pessoa é par ou impar. (OK)
  // prompt / alert (OK)
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/alert

  const number = prompt("Informe seu número");
  if (number % 2 === 0) {
    alert(`${number} é par`);
  } else if (number % 2 === 1) {
    alert(`${number} é impar`);
  } else {
    alert("Por favor envie um número");
    //aqui eu gostaria de invocar o prompt de novo
  }


//tentei fazer um switch sem sucesso, tava sem tempo :(
//   switch (number) {
//     case number % 2 === 0:
//       alert(`${number} é par`);
//       break;

//     case number % 2 === 1:
//       alert(`${number} é impar`);
//       break;

//     case number === "":
//       alert("Por favor envie um número");
//       break;

//     default:
//       alert("Por favor envie um número");
//       break;
//   }
}
