export default function randomChoiceCPU() {
    const op = ['Tesoura', 'Papel', 'Pedra'];
    const indRand = Math.floor(Math.random() * op.length);
    return op[indRand];
}