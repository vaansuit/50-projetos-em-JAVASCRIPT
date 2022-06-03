const tagsEl = document.getElementById('tags');
const textArea = document.getElementById('textarea');

textArea.focus()

textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value) //pegar o que foi criado na caixa de texto

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
}) 


function createTags(input) {
    // console.log(input) ver se esta funcionando os inputs
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    // console.log(tags) verificar se está criando valores diferentes dentro da array quando utilizada virgula
    // utilizado filter/tag e trim para retirar o valor da barra de espaço da array

    tagsEl.innerHTML = ''

    tags.forEach (tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect() {
    const times = 30 //Quantas vezes vai pular entre as tags

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)

    }, 100);

    setTimeout
    (() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)
    }, times * 100)

}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags [Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}