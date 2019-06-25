console.log('javascript no frontend')



const cotacoesForm = document.querySelector('form')
const mainMensage = document.querySelector('h3')
const price = document.querySelector('#price')
const price_open = document.querySelector('#price_open')
const day_high = document.querySelector('#day_high')
const day_low = document.querySelector('#day_low')

cotacoesForm.addEventListener('submit', () =>{
    mainMensage.innerText = 'buscando...'

    price.innerHTML = ``
            price_open.innerHTML = ``
            day_high.innerHTML = ``
            day_low.innerHTML = ``

    event.preventDefault()
    const ativo = document.querySelector('input').value

    if(!ativo){
        mainMensage.innerText = 'O ativo dese ser informado!'
        return;
    }

    fetch(`http://localhost:3000/cotacoes?ativo=${ativo}`).then((response) => {

    response.json().then((data) =>{
        if(data.error){
            mainMensage.innerText  = `Alguma coisa deu errado `
            price.innerHTML = `${data.error.message} | código ${data.error.code}`
        }else{
            mainMensage.innerText  = ` ${data.symbol}`
            price.innerHTML = `Preço do ativo: R$${data.price}`
            price_open.innerHTML = `Preço de abertura: R$${data.price_open}`
            day_high.innerHTML = `Alta do dia: R$${data.day_high}`
            day_low.innerHTML = `Baixa do dia: R$${data.day_low}`
        }

    
})
})
})