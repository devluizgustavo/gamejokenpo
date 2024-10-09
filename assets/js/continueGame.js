import startGame from "./startGame";
import removeButton from "./removeButton";

export default function continueGame() {
    document.querySelector('.continuar').addEventListener('click', e => {
        removeButton('.parar');
        removeButton('.continuar');
        startGame();
    })
}