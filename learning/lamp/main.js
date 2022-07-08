const imagem = document.getElementById("img");

// Imagem Ligada
// https://cdn.discordapp.com/attachments/980938801906077696/992951221696606289/unknown-removebg-preview_1.png

// Imagem desligado
// https://cdn.discordapp.com/attachments/980938801906077696/992951126993416213/unknown-removebg-preview.png

// function handleClick(event) {
//   if (event.textContent === "Ligar") {
//     event.textContent = "Desligar";
//     imagem.src =
//       "https://cdn.discordapp.com/attachments/980938801906077696/992951221696606289/unknown-removebg-preview_1.png";
//   } else if (event.textContent === "Desligar") {
//     event.textContent = "Ligar";
//     imagem.src =
//       "https://cdn.discordapp.com/attachments/980938801906077696/992951126993416213/unknown-removebg-preview.png";
//   }
// }

function handleClick(event) {
  if (event.textContent === "Ligar") {
    event.textContent = "Desligar";
    imagem.src = "./assets/zyro-image (1).png";
    return;
  }

  event.textContent = "Ligar";
  imagem.src = "./assets/zyro-image.png";
}
