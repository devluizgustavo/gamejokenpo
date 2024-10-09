import removeButton from "./removeButton";
import addButton from "./addButton";

const p = document.querySelector('.text');

export default function endGame() {
    document.querySelector('.parar').addEventListener('click', e => {
        removeButton('.parar');
        removeButton('.continuar');
        if (player.innerHTML === cpu.innerHTML) {
            p.innerHTML = `O jogo terminou em <b>empate.</b>`;
        }
        else if (player.innerHTML > cpu.innerHTML) {
            p.innerHTML = `O jogo terminou. Meus parabéns, você <b>venceu.</b>`;
        }
        else {
            p.innerHTML = `O jogo terminou. Que pena, você <b>perdeu.</b>`;
        }

        addButton('Reiniciar');
        document.querySelector('.reiniciar').addEventListener('click', e => {
            document.location.reload();
        })
    })
}
