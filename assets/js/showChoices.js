import addButton from "./addButton";
const p = document.querySelector('.text');

export default function showChoices() {
    p.innerHTML = '<br>Escolha uma das <b>opções.</b>';

    addButton('Tesoura');
    addButton('Papel');
    addButton('Pedra');
}