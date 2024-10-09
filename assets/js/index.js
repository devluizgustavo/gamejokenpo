import startGame from "./startGame";

const botao = document.querySelector('.btn')

botao.addEventListener('click', (e) => {
    botao.remove();
    startGame();
});