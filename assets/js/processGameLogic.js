const p = document.querySelector('.text');

export default function processGameLogic(escolhaJogador, escolhaCPU) {
    if (escolhaJogador === escolhaCPU) {
        p.innerHTML = `Essa rodada deu <b>empate.</b>`;
        p.innerHTML += `<br><br>Jogador: <b>${escolhaJogador}</b> | CPU: <b>${escolhaCPU}</b>`;
        return 0;
    }

    else if (
        (escolhaJogador === 'Pedra' && escolhaCPU === 'Tesoura') ||
        (escolhaJogador === 'Tesoura' && escolhaCPU === 'Papel') ||
        (escolhaJogador === 'Papel' && escolhaCPU === 'Pedra')
    ) {

        p.innerHTML = `Você venceu essa <b>rodada.</b>`;
        p.innerHTML += `<br><br>Jogador: <b>${escolhaJogador}</b> | CPU: <b>${escolhaCPU}</b>`;
        return true;
    } else {
        p.innerHTML = `Você perdeu essa <b>rodada</>`
        p.innerHTML += `<br><br>Jogador: <b>${escolhaJogador}</b> | CPU: <b>${escolhaCPU}</b>`;
        return false;
    }
}