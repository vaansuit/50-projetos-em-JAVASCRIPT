const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText // Pegando o texto email / senha
        .split('') // Dividindo o texto em array
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) //transformando o texto em span
        .join('') //juntando tudo novamente
})