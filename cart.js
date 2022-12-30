cart = JSON.parse(localStorage.getItem('cart'));
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

const fullToTalNodes = document.querySelectorAll('.full-total');
let fullTotal = 0;
fullToTalNodes.forEach(item => {
    fullTotal += Number(item.textContent.slice(1,item.textContent.length));
});

const contentCoverNode = document.querySelector('.content-cover');
contentCoverNode.children[0].children[1].textContent = `$${fullTotal.toFixed(2)}`;

const firstTotalNode = document.querySelector('.first-total');
firstTotalNode.children[1].textContent = `$${fullTotal.toFixed(2)}`;
contentCoverNode.children[4].children[1].textContent = `$${fullTotal.toFixed(2)}`;

// const findProduct = (node) => {
//     let index = -1;
//     let nameProduct = node.parentElement.parentElement.parentElement.children[0].children[1].children[0].textContent;
//     let sizeProduct = node.parentElement.parentElement.parentElement.children[0].children[1].children[1].children[0].textContent;
//     let colorProduct = node.parentElement.parentElement.parentElement.children[0].children[1].children[1].children[1].textContent;
//     for(let i = 0; i <= cart.length; i += 1) {
//         if(cart[i].name === nameProduct && cart[i].size === sizeProduct && cart[i].color === colorProduct) {
//             index = i;
//             break;
//         }
//     }
//     return index;
// }

const addNodes = document.querySelectorAll('.add');
const subtractionNodes = document.querySelectorAll('.subtraction');
const indexNodes = document.querySelectorAll('.index');
for(let i = 0; i < addNodes.length; i += 1) {
    addNodes[i].addEventListener('click',()=>{
        cart[i].index += 1;
        indexNodes[i].textContent = `${cart[i].index}`;
        localStorage.setItem('cart',JSON.stringify(cart));
        updateCart(cart);
        const newTotal = Number(fullToTalNodes[i].textContent.slice(1,fullToTalNodes[i].textContent.length)) + Number(cart[i].price.slice(1,cart[i].price.length));
        fullToTalNodes[i].textContent = `$${newTotal.toFixed(2)}`;
        fullTotal += Number(cart[i].price.slice(1,cart[i].price.length));
        firstTotalNode.children[1].textContent = `$${fullTotal.toFixed(2)}`;
        contentCoverNode.children[0].children[1].textContent = `$${fullTotal.toFixed(2)}`;
        contentCoverNode.children[4].children[1].textContent = `$${fullTotal.toFixed(2)}`;
        localStorage.setItem('fullTotal',JSON.stringify(fullTotal));
    });
    subtractionNodes[i].addEventListener('click',()=>{
        if(cart[i].index > 1) {
            cart[i].index -= 1;
            indexNodes[i].textContent = `${cart[i].index}`;
            localStorage.setItem('cart',JSON.stringify(cart));
            updateCart(cart);
            const newTotal = Number(fullToTalNodes[i].textContent.slice(1,fullToTalNodes[i].textContent.length)) - Number(cart[i].price.slice(1,cart[i].price.length));
            fullToTalNodes[i].textContent = `$${newTotal.toFixed(2)}`;
            fullTotal -= Number(cart[i].price.slice(1,cart[i].price.length));
            firstTotalNode.children[1].textContent = `$${fullTotal.toFixed(2)}`;
            contentCoverNode.children[0].children[1].textContent = `$${fullTotal.toFixed(2)}`;
            contentCoverNode.children[4].children[1].textContent = `$${fullTotal.toFixed(2)}`;
            localStorage.setItem('fullTotal',JSON.stringify(fullTotal));
        }
    });
}

const removeNode = document.querySelectorAll('.remove');
for(let i = 0; i < removeNode.length; i+= 1) {
    removeNode[i].addEventListener('click', ()=> {
        for(let j = 0; j < cart.length; j+=1) {
            let nameRemoveNode = removeNode[i].parentElement.parentElement.children[0].children[1].children[0].textContent;
            if(nameRemoveNode === cart[j].name) {
                cart.splice(j, 1);
                removeNode[i].parentElement.parentElement.remove();
            }
        }
        const fullToTalNodes = document.querySelectorAll('.full-total');
        let fullTotal = 0;
        fullToTalNodes.forEach(item => {
        fullTotal += Number(item.textContent.slice(1,item.textContent.length));
        });
        contentCoverNode.children[0].children[1].textContent = `$${fullTotal.toFixed(2)}`;
        firstTotalNode.children[1].textContent = `$${fullTotal.toFixed(2)}`;
        contentCoverNode.children[4].children[1].textContent = `$${fullTotal.toFixed(2)}`;
        localStorage.setItem('cart',JSON.stringify(cart));
        localStorage.setItem('fullTotal',JSON.stringify(fullTotal));
        updateCart(cart);
        // window.location = `cart.html`
    })
}
localStorage.setItem('fullTotal',JSON.stringify(fullTotal));

const checkoutNode = document.querySelector('.buttonCheckout');
checkoutNode.addEventListener('click', ()=> {
    window.location = `checkout.html`
})

