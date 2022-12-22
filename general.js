const cartNode = document.querySelector('.shopping-bag--amount');
let cart = JSON.parse(localStorage.getItem('cart'));
if(cart === null) cart = [];
const updateCart = (cart) => {
    let quantity = 0;
    cart.forEach(element => {
        quantity += element.index;
    });
    cartNode.children[0].children[0].textContent = `${quantity}`;
}
updateCart(cart);
// let chooseProduct = {
//     trendingImg: '',
//     trendingName: '',
//     trendingPrice: '',
//     selectedSizeNode: '',
//     selectedColorNode: ''
// }

const headerLogo = document.querySelector('.header__logo');
headerLogo.addEventListener('click',() => {
    window.location = `index.html`;
});

const userNode = document.querySelector('.user');
userNode.addEventListener('click', () => {
    window.location = `login.html`;
})

const deleteNode = document.querySelector('.button-delete');
deleteNode.addEventListener('click', ()=> {
    interfaceSearch.classList.add("hidden");
}) 

const searchNode = document.querySelector('.magnifying-glass');
const interfaceSearch = document.querySelector('.interface-search');
searchNode.addEventListener('click', ()=> {
    interfaceSearch.classList.remove("hidden");
})

const shoppingBagNode = document.querySelector('.shopping-bag');
shoppingBagNode.addEventListener('click', ()=> {
    window.location = `cart.html`;
})


