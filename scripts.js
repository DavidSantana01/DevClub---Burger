const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-All')
const buttonAllItens = document.querySelector('.map-All')
const buttonSumAll = document.querySelector('.sum-All')
const filterAll = document.querySelector('.filter-All')

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-BR', {
        style: 'currency', 
        currency: 'BRL',
    });
return newValue
}

function showAll(productArray) {
    let myLi = ''
    productArray.forEach(product => {
        myLi += `
       <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price"> ${formatCurrency(product.price)}</p>
        </li>    
        `
    });
    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, // Dar 10% de desconto
    }))

    showAll(newPrice)

}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
    <li>
        <p>O valor total dos itens é de ${formatCurrency(totalValue)}</p>
    </li>
    `
}

function filterAllItems() {
    const filterJustVegam = menuOptions.filter((product) => product.vegan)

    showAll(filterJustVegam)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonAllItens.addEventListener('click', mapAllItems)
buttonSumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)
