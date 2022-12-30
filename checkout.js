cart = JSON.parse(localStorage.getItem('cart'));
fullTotal = JSON.parse(localStorage.getItem('fullTotal'));
let chooseProduct = {
    trendingImg: '',
    trendingName: '',
    trendingPrice: '',
    selectedSizeNode: '',
    selectedColorNode: ''
}
const priceSubtotalNode = document.querySelector('.price-subtotal');
priceSubtotalNode.textContent = `$${fullTotal.toFixed(2)}`;
const priceTotalNode = document.querySelector('.price-total')
priceTotalNode.textContent = `$${fullTotal.toFixed(2)}`;
const infoProducts = document.querySelector('.information-products');
cart.forEach(item => {
    const price = item.price.slice(1,item.price.length);
    const total = Number(price) * item.index;
    const infoProduct = document.createElement('div');
    infoProduct.classList.add('information-product');
    infoProducts.appendChild(infoProduct);
    infoProduct.innerHTML = `
    <div class="information-product">
    <div class="information">
        <div class="img-produt">
            <img src="${item.img}">
            <div>
                <div class="number-product">${item.index}</div>
            </div>
        </div>
        <div class="title-product">
            <div class="name-product">${item.name}</div>
            <div class="size-color-product">
                <div class="size-product">${item.size}/</div>
                <div class="color-product">${item.color}</div>
            </div>
        </div>
    </div>
    <div class="price-product">$${total.toFixed(2)}</</div>
</div>
    `
});
const checkoutNode = document.querySelector('.checkoutnode');
const emailNode = document.querySelector('.emailnode');
const countryNode = document.querySelector('.countrynode');
const textcontentEmail = document.querySelector('.textcontent-email');
const textcontentCountry = document.querySelector('.textcontent-country');
const firstnameNode = document.querySelector('.firstnamenode');
const textcontentFirstname = document.querySelector('.textcontent-firstname');
const lastnameNode = document.querySelector('.lastnamenode');
const textcontentLastname = document.querySelector('.textcontent-lastname');
const addressNode = document.querySelector('.addressnode');
const textcontentAddress = document.querySelector('.textcontent-address');
const cityNode = document.querySelector('.citynode');
const textcontentCity = document.querySelector('.textcontent-city');
const postalNode = document.querySelector('.postalnode');
const textcontentPostal = document.querySelector('.textcontent-postal');
const phoneNode = document.querySelector('.phonenode');
const textcontentPhone = document.querySelector('.textcontent-phone');

accountlogin = JSON.parse(localStorage.getItem('accountlogin'));
isSuccessfull = JSON.parse(localStorage.getItem('isSuccessfull'));
const checkValid = function(item) {
    kt = 0;
    if(item.value === '') kt = 1;
    return kt;
}
checkoutNode.addEventListener('click', ()=> {
    let temp = 0;
    if(cart.length === 0) {
        alert("Cart is empty!");
    } else {
        if(checkValid(emailNode) === 1) {
            textcontentEmail.textContent = `Enter a valid email!`;
            emailNode.classList.add('error');
            temp = temp + 1;
        } else {
            emailNode.classList.remove('error');
            textcontentEmail.textContent = ``;
            // if(isSuccessfull === true) {
            //     // if(emailNode.value !== accountlogin.emaillogin) {
            //         alert('This is not the email you signed up with!');
            //     // }; 
            // } 
            if(isSuccessfull === false) {
                alert('Can not pay because you have not logged into your account!');
            }
        }

        if(checkValid(countryNode) === 1) {
            textcontentCountry.textContent = `Enter a country!`;
            countryNode.classList.add('error');
            temp = temp + 1;
        }else {
            countryNode.classList.remove('error');
            textcontentCountry.textContent = ``;
        }
    
        if(checkValid(firstnameNode) === 1) {
            textcontentFirstname.textContent = `Enter a first name!`;
            firstnameNode.classList.add('error');
            temp = temp + 1;
        } else {
            firstnameNode.classList.remove('error');
            textcontentFirstname.textContent = ``;
        }
    
        if(checkValid(lastnameNode) === 1) {
            textcontentLastname.textContent = `Enter a last name!`;
            lastnameNode.classList.add('error');
            temp = temp + 1;
        } else {
            lastnameNode.classList.remove('error');
            textcontentLastname.textContent = ``;
        }
    
        if(checkValid(addressNode) === 1) {
            textcontentAddress.textContent = `Enter an address!`;
            addressNode.classList.add('error');
            temp = temp + 1;
        } else {
            addressNode.classList.remove('error');
            textcontentAddress.textContent = ``;
        }
    
        if(checkValid(cityNode) === 1) {
            textcontentCity.textContent = `Enter a city!`;
            cityNode.classList.add('error');
            temp = temp + 1;
        } else {
            cityNode.classList.remove('error');
            textcontentCity.textContent = ``;
        }
        
        if(checkValid(postalNode) === 1) {
            textcontentPostal.textContent = `Enter a postal!`;
            postalNode.classList.add('error');
            temp = temp + 1;
        } else {
            postalNode.classList.remove('error');
            textcontentPostal.textContent = ``;
        }
    
        if(checkValid(phoneNode) === 1) {
            textcontentPhone.textContent = `Enter a phone number to use this delivery method!`;
            phoneNode.classList.add('error');
            temp = temp + 1;
        } else {
            phoneNode.classList.remove('error');
            textcontentPhone.textContent = ``;
        }
    }

    if(temp === 0 && cart.length > 0 && isSuccessfull === true) {
        alert('Order Success!');
        cart = [];
        localStorage.setItem('cart',JSON.stringify(cart));
        updateCart(cart);
        fullTotal = 0;
        localStorage.setItem('fullTotal',JSON.stringify(fullTotal));
        fullTotal = JSON.parse(localStorage.getItem('fullTotal'));
        window.location = `checkout.html`;
    } 
})

const loginNode = document.querySelector('.loginnode');
loginNode.addEventListener('click', ()=> {
    window.location = `login.html`;
})