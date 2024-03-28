const botao = document.querySelector('.btn')
const p = document.querySelector('.text');
const player = document.querySelector('.placJog');
const cpu = document.querySelector('.placCpu');

botao.addEventListener('click', (e) => {
    botao.remove();
    iniciaJogo();
})

function adicionaBotao(nome) {
    const btn = document.createElement('button');
    btn.innerText = nome;
    btn.classList.add(nome.toLowerCase());
    p.insertAdjacentElement('afterend', btn);
}

function mostrarEscolhas() {
    p.innerHTML = '<br>Escolha uma das <b>opções.</b>';

    adicionaBotao('Tesoura');
    adicionaBotao('Papel');
    adicionaBotao('Pedra');
}

function randomCPU() {
    const op = ['Tesoura', 'Papel', 'Pedra'];
    const indRand = Math.floor(Math.random() * op.length);
    return op[indRand];
}

function iniciaJogo() {
    mostrarEscolhas();
    const op = ['Tesoura', 'Papel', 'Pedra'];
    //Pedra
    document.querySelector('.pedra').addEventListener('click', e => {
        removerBotões('.pedra');
        removerBotões('.papel');
        removerBotões('.tesoura');
        const rodada = logicaJogo(op[1], randomCPU())

        if (rodada) {
            player.innerHTML++;
        } else if (typeof rodada !== 'boolean') {

        }
        else {
            cpu.innerHTML++;
        }
        adicionaBotao('Parar');
        adicionaBotao('Continuar');
        btnParar()
        btnContinuar()
    })
    //Papel
    document.querySelector('.papel').addEventListener('click', e => {
        removerBotões('.pedra');
        removerBotões('.papel');
        removerBotões('.tesoura');
        const rodada = logicaJogo(op[1], randomCPU());

        if (rodada) {
            player.innerHTML++;
        } else if (typeof rodada !== 'boolean') {

        }
        else {
            cpu.innerHTML++;
        }

        adicionaBotao('Parar');
        adicionaBotao('Continuar');
        btnContinuar();
        btnParar();
    })
    //Tesoura
    document.querySelector('.tesoura').addEventListener('click', e => {
        removerBotões('.pedra');
        removerBotões('.papel');
        removerBotões('.tesoura');
        const rodada = logicaJogo(op[1], randomCPU());

        if (rodada) {
            player.innerHTML++;
        } else if (typeof rodada !== 'boolean') {

        }
        else {
            cpu.innerHTML++;
        }
        adicionaBotao('Parar');
        adicionaBotao('Continuar');
        btnContinuar();
        btnParar();
    })
}

function logicaJogo(escolhaJogador, escolhaCPU) {
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
function btnParar() {
    document.querySelector('.parar').addEventListener('click', e => {
        removerBotões('.parar');
        removerBotões('.continuar');
        if (player.innerHTML === cpu.innerHTML) {
            p.innerHTML = `O jogo terminou em <b>empate.</b>`;
        }
        else if (player.innerHTML > cpu.innerHTML) {
            p.innerHTML = `O jogo terminou. Meus parabéns, você <b>venceu.</b>`;
        }
        else {
            p.innerHTML = `O jogo terminou. Que pena, você <b>perdeu.</b>`;
        }

        adicionaBotao('Reiniciar');
        document.querySelector('.reiniciar').addEventListener('click', e => {
            document.location.reload();
        })
    })
}

function btnContinuar() {
    document.querySelector('.continuar').addEventListener('click', e => {
        removerBotões('.parar');
        removerBotões('.continuar');
        iniciaJogo();
    })
}

function removerBotões(nomeClasse) {
    const btn = document.querySelector(nomeClasse);
    btn.remove();
}

