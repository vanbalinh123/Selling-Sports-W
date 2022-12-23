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

function searchfunc(){
    const menusearch = document.querySelector('.menu__search');
    const menuitems = Array.from(document.querySelectorAll('.menu__item'));
    // menusearch.value = menusearch.value.toLowerCase();
    // an va hien len khi search
    menuitems.forEach(function(el) {
        let text = el.innerText;
        if(text.indexOf(menusearch.value)>-1)
        el.style.display="";
        else el.style.display="none";
    })
}

const menuitems = Array.from(document.querySelectorAll('.menu__item'));
menuitems.forEach(item => { 
    item.addEventListener('click',() => {
        const trendingImg = item.children[0].children[0].src;
        const trendingName = item.children[1].children[0].textContent;
        const trendingPrice = item.children[1].children[1].textContent;
        chooseProduct.trendingImg = trendingImg;
        chooseProduct.trendingName = trendingName;
        chooseProduct.trendingPrice = trendingPrice;
        localStorage.setItem('chooseProduct',JSON.stringify(chooseProduct));
        window.location = 'trending.html';
    });
});
