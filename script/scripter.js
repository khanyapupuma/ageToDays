document.querySelector('.submit').addEventListener('click', ()=> {
    let input = +document.querySelector('.input').value
    let paragraph = document.querySelector('.para')
    paragraph.innerHTML = input * 365
})