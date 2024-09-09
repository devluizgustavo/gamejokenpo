const p = document.querySelector('.text');

export default function addButton(nome) {
    const btn = document.createElement('button');
    btn.innerText = nome;
    btn.classList.add(nome.toLowerCase());
    p.insertAdjacentElement('afterend', btn);
}