let show = true;
const ConteudoDoMenu = document.querySelector('.conteudo')
const AlterarMenu = ConteudoDoMenu.querySelector('.AlterarMenu')

AlterarMenu.addEventListener('click', ()=>{
    ConteudoDoMenu.classList.toggle('on', show)
    show = !show;
    
})

