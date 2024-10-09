import endGame from "./endGame";
import addButton from "./addButton";
import showChoices from "./showChoices";
import removeButton from "./removeButton";
import continueGame from "./continueGame";
import randomChoiceCPU from "./randomChoiceCPU";
import processGameLogic from "./processGameLogic";

export default function startGame() {
    const p = document.querySelector('.text');
    const player = document.querySelector('.placJog');
    const cpu = document.querySelector('.placCpu');
    showChoices();
    const op = ['Tesoura', 'Papel', 'Pedra'];

    //Pedra
    document.querySelector('.pedra').addEventListener('click', e => {
        removeButton('.pedra');
        removeButton('.papel');
        removeButton('.tesoura');
        const rodada = processGameLogic(op[2], randomChoiceCPU())

        if (rodada) {
            player.innerHTML++;
        } else if (typeof rodada !== 'boolean') {

        }
        else {
            cpu.innerHTML++;
        }
        addButton('Parar');
        addButton('Continuar');
        endGame()
        continueGame()
    })
    //Papel
    document.querySelector('.papel').addEventListener('click', e => {
        removeButton('.pedra');
        removeButton('.papel');
        removeButton('.tesoura');
        const rodada = processGameLogic(op[1], processGameLogic());

        if (rodada) {
            player.innerHTML++;
        } else if (typeof rodada !== 'boolean') {

        }
        else {
            cpu.innerHTML++;
        }

        addButton('Parar');
        addButton('Continuar');
        continueGame();
        endGame();
    })
    //Tesoura
    document.querySelector('.tesoura').addEventListener('click', e => {
        removeButton('.pedra');
        removeButton('.papel');
        removeButton('.tesoura');
        const rodada = processGameLogic(op[0], processGameLogic());

        if (rodada) {
            player.innerHTML++;
        } else if (typeof rodada !== 'boolean') {

        }
        else {
            cpu.innerHTML++;
        }
        addButton('Parar');
        addButton('Continuar');
        continueGame();
        endGame();
    })
}
