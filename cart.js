cart = JSON.parse(localStorage.getItem('cart'));
if(cart === null) cart = [];
const allProductNode = document.querySelector('.allProduct');
let chooseProduct = {
    trendingImg: '',
    trendingName: '',
    trendingPrice: '',
    selectedSizeNode: '',
    selectedColorNode: ''
}
cart.forEach(item => {
    const price = item.price.slice(1,item.price.length);
    const total = Number(price) * item.index;
    const productNode = document.createElement('div');
    productNode.classList.add('products')
    allProductNode.appendChild(productNode);
    productNode.innerHTML = `
        <div class="product">
            <div class="product-img">
                <img src="${item.img}">
            </div>
            <div class="content-img">
                <div>${item.name}</div>
                    <div class="choose-size-color">
                        <div class="size">${item.size}</div>
                        <div class="color">/${item.color}</div>
                    </div>
                    <div>${item.price}</div>
                </div>
            </div>
            <div class="quantity">
                <div class="amount-product">
                    <p class="subtraction">-</p>
                    <p class="index">${item.index}</p>
                    <p class="add">+</p>
                </div>
                <div class="remove">Remove</div>
            </div>
            <div class="total full-total">$${total.toFixed(2)}</div>
        </div>`;
});

let fullTotal = 0;
cart.forEach(item => {
    fullTotal += Number(item.price.slice(1,item.price.length)) * item.index;
})

const contentCoverNode = document.querySelector('.content-cover');
contentCoverNode.children[0].children[1].textContent = `$${fullTotal.toFixed(2)}`;

const firstTotalNode = document.querySelector('.first-total');
firstTotalNode.children[1].textContent = `$${fullTotal.toFixed(2)}`;
contentCoverNode.children[4].children[1].textContent = `$${fullTotal.toFixed(2)}`;

const findProduct = (node) => {
    let index = -1;
    let nameProduct = node.parentElement.parentElement.parentElement.children[0].children[1].children[0].textContent;
    let sizeProduct = node.parentElement.parentElement.parentElement.children[0].children[1].children[1].children[0].textContent;
    let colorProduct = node.parentElement.parentElement.parentElement.children[0].children[1].children[1].children[1].textContent;
    colorProduct = colorProduct.slice(1,colorProduct.length);
    for(let i = 0; i < cart.length; i += 1) {
        if(cart[i].name === nameProduct && cart[i].size === sizeProduct && cart[i].color === colorProduct) {
            index = i;
            break;
        }
    }
    return index;
}
const addNodes = document.querySelectorAll('.add');
const subtractionNodes = document.querySelectorAll('.subtraction');
addNodes.forEach(item => {
    item.addEventListener('click',()=>{
        let id = findProduct(item);
        cart[id].index += 1;
        item.parentElement.children[1].textContent = `${cart[id].index}`;
        const newTotal = Number(cart[id].price.slice(1,cart[id].price.length)) * cart[id].index;
        item.parentElement.parentElement.parentElement.children[2].textContent = `$${newTotal.toFixed(2)}`;
        fullTotal += Number(cart[id].price.slice(1,cart[id].price.length));
        firstTotalNode.children[1].textContent = `$${fullTotal.toFixed(2)}`;
        contentCoverNode.children[0].children[1].textContent = `$${fullTotal.toFixed(2)}`;
        contentCoverNode.children[4].children[1].textContent = `$${fullTotal.toFixed(2)}`;
        localStorage.setItem('cart',JSON.stringify(cart));
        updateCart(cart);
        cart = JSON.parse(localStorage.getItem('cart'));
        localStorage.setItem('fullTotal',JSON.stringify(fullTotal));
    });
})

subtractionNodes.forEach(item => {
    item.addEventListener('click',()=>{
        let id = findProduct(item);
        if(cart[id].index > 1) {
            cart[id].index -= 1;
            item.parentElement.children[1].textContent = `${cart[id].index}`;
            const newTotal = Number(cart[id].price.slice(1,cart[id].price.length)) * cart[id].index;
            item.parentElement.parentElement.parentElement.children[2].textContent = `$${newTotal.toFixed(2)}`;
            fullTotal -= Number(cart[id].price.slice(1,cart[id].price.length));
            firstTotalNode.children[1].textContent = `$${fullTotal.toFixed(2)}`;
            contentCoverNode.children[0].children[1].textContent = `$${fullTotal.toFixed(2)}`;
            contentCoverNode.children[4].children[1].textContent = `$${fullTotal.toFixed(2)}`;
            localStorage.setItem('cart',JSON.stringify(cart));
            updateCart(cart);
            cart = JSON.parse(localStorage.getItem('cart'));
            localStorage.setItem('fullTotal',JSON.stringify(fullTotal));
        }
    });
})

let removeNodes = document.querySelectorAll('.remove');
for(let i = 0; i < removeNodes.length; i+= 1) {
    removeNodes[i].addEventListener('click', ()=> {
        let id = findProduct(removeNodes[i].parentElement.children[0].children[2]);
        fullTotal -= Number(cart[id].price.slice(1,cart[id].price.length)) * cart[id].index;
        contentCoverNode.children[0].children[1].textContent = `$${fullTotal.toFixed(2)}`;
        firstTotalNode.children[1].textContent = `$${fullTotal.toFixed(2)}`;
        contentCoverNode.children[4].children[1].textContent = `$${fullTotal.toFixed(2)}`;
        cart.splice(id,1);
        removeNodes[i].parentElement.parentElement.remove();
        localStorage.setItem('cart',JSON.stringify(cart));
        updateCart(cart);
        cart = JSON.parse(localStorage.getItem('cart'));
        localStorage.setItem('fullTotal',JSON.stringify(fullTotal));
    });
}


const checkoutNode = document.querySelector('.buttonCheckout');
checkoutNode.addEventListener('click', ()=> {
    window.location = `checkout.html`
})

