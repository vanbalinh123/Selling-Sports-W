let chooseProduct = {
        trendingImg: '',
        trendingName: '',
        trendingPrice: '',
        selectedSizeNode: '',
        selectedColorNode: ''
    }

const createAccNode = document.querySelector('.create');
createAccNode.addEventListener('click', ()=> {
    window.location = `register.html`;
})

let account = JSON.parse(localStorage.getItem('account'));
if(account === null) account = [];
let isSuccessfull = false;

function AccountLogin(firstnamelogin,lastnamelogin,emaillogin,passwordlogin) {
    this.firstnamelogin = firstnamelogin;
    this.lastnamelogin = lastnamelogin;
    this.emaillogin = emaillogin;
    this.passwordlogin = passwordlogin;
}

const loginNode = document.querySelector('.click-input');
loginNode.addEventListener('click', ()=> {
    const email = document.getElementById('emaill').value;
    const password = document.getElementById('passwordd').value;
    for(let i = 0; i < account.length; i +=1) {
        if(account[i].email === email && account[i].password === password) {
            const firstnamelogin = account[i].firstname;
            const lastnamelogin = account[i].lastname;
            const emaillogin = account[i].email;
            const passwordlogin = account[i].password;
            const accountlogin = new AccountLogin(firstnamelogin,lastnamelogin,emaillogin,passwordlogin)
            localStorage.setItem('accountlogin',JSON.stringify(accountlogin));
            isSuccessfull = true;
            localStorage.setItem('isSuccessfull',JSON.stringify(isSuccessfull));
            alert('Logged in successfully');
            window.location = `index.html`;
            break;
        }
    }
    if(isSuccessfull === false) {
        alert('Account does not exist! Try again or create a new account!');
    }
})

// const headerLogo = document.querySelector('.header__logo');
// headerLogo.addEventListener('click',() => {
//     window.location = `index.html`;
// });

// const shoppingBagNode = document.querySelector('.shopping-bag');
// shoppingBagNode.addEventListener('click', ()=> {
//     window.location = `cart.html`;
// })

// const cartNode = document.querySelector('.shopping-bag--amount');
// let cart = JSON.parse(localStorage.getItem('cart'));
// if(cart === null) cart = [];
// const updateCart = (cart) => {
//     let quantity = 0;
//     cart.forEach(element => {
//         quantity += element.index;
//     });
//     cartNode.children[0].children[0].textContent = `${quantity}`;
// }
// updateCart(cart);
// shoppingBagNode.addEventListener('click', ()=> {
//     window.location = `cart.html`;
// })

// function Product(img,name,price,size,color,index) {
//     this.img = img;
//     this.name = name;
//     this.price = price;
//     this.size = size;
//     this.color = color;
//     this.index = index;
// }

// let arraySearch = JSON.parse(localStorage.getItem('arraySearch'));
// if(arraySearch === null) arraySearch = [];
// const checkExistOnSearch = (product) => {
//     let isExist = false;
//     for(let i = 0; i < arraySearch.length; i += 1) {
//         if(arraySearch[i].name === product.name) {
//             isExist = true;
//             break;
//         }
        
//     }
//     return isExist;
// }
// const allItemSearchs = document.querySelectorAll('.choose-item');
// allItemSearchs.forEach(item => {
//     const ProductSearch = new Product(
//     item.children[0].children[0].src,
//     item.children[1].children[0].textContent,
//     item.children[1].children[1].textContent,
//     '',
//     '',
//     ''
//     )
//     if(checkExistOnSearch(ProductSearch) === false)
//         arraySearch.push(ProductSearch);
// })

// localStorage.setItem('arraySearch',JSON.stringify(arraySearch));
// const menuListSearchNode = document.querySelector('.menu___list-search');
// arraySearch.forEach(item => {
//     const productSearch = document.createElement('li');
//     productSearch.classList.add('menu__item');
//     menuListSearchNode.appendChild(productSearch);
//     productSearch.innerHTML = `
//         <div class="image__item">
//             <img src="${item.img}">
//         </div>
//         <div class="content__item">
//             <a href="#" class="title__item">${item.name}</a>
//             <div clas="price__item">${item.price}</div>
//         </div>
//     `;
// })

// const menusearch = document.querySelector('.menu__search');
// menusearch.addEventListener('input', (e)=> {
//     const arrayTempSearch = [];
//     arraySearch.forEach(item => {
//         if(item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
//             arrayTempSearch.push(item);
//         }
//     });
//     menuListSearchNode.innerHTML = ``;
//     arrayTempSearch.forEach(item => {
//     const productSearch = document.createElement('li');
//     productSearch.classList.add('menu__item');
//     menuListSearchNode.appendChild(productSearch);
//     productSearch.innerHTML = `
//         <div class="image__item">
//             <img src="${item.img}">
//         </div>
//         <div class="content__item">
//             <a href="#" class="title__item">${item.name}</a>
//             <div clas="price__item">${item.price}</div>
//         </div>
//     `;
//     productSearch.addEventListener('click',() => {
//         console.log('hahaa')
//         const searchImg = productSearch.children[0].children[0].src;
//         const searchName = productSearch.children[1].children[0].textContent;
//         const searchPrice = productSearch.children[1].children[1].textContent;
//         chooseProduct.trendingImg = searchImg;
//         chooseProduct.trendingName = searchName;
//         chooseProduct.trendingPrice = searchPrice;
//         localStorage.setItem('chooseProduct',JSON.stringify(chooseProduct));
//         window.location = 'trending.html';
//     });
//     })
// })

// const searchs = document.querySelectorAll('.menu__item');
// for(let i = 0; i < searchs.length; i+=1) {
//     searchs[i].addEventListener('click',() => {
//         console.log('hahaa')
//         const searchImg = searchs[i].children[0].children[0].src;
//         const searchName = searchs[i].children[1].children[0].textContent;
//         const searchPrice = searchs[i].children[1].children[1].textContent;
//         chooseProduct.trendingImg = searchImg;
//         chooseProduct.trendingName = searchName;
//         chooseProduct.trendingPrice = searchPrice;
//         localStorage.setItem('chooseProduct',JSON.stringify(chooseProduct));
//         window.location = 'trending.html';
//     });
// }

// isSuccessfull = JSON.parse(localStorage.getItem('isSuccessfull'));
// if(isSuccessfull === true) {
//     let accountlogin = JSON.parse(localStorage.getItem('accountlogin'));
//     const nameAccountNode = document.querySelector('.name-account');
//     const firstnamelogin = document.querySelector('.firstnamelogin');
//     const lastnamelogin = document.querySelector('.lastnamelogin');
//     nameAccountNode.classList.add('hidden-if-no-login')
//     firstnamelogin.textContent = `${accountlogin.firstnamelogin}`;
//     lastnamelogin.textContent = `${accountlogin.lastnamelogin}`;
// } 

// const svgUserNode = document.querySelector('.svg-user');
// const logregNode = document.querySelector('.log-reg')
// const bodyNode = document.querySelector('.body');

// svgUserNode.addEventListener('click', () => {
//     logregNode.classList.add('hidden-log-reg');
//     const userLoginNode = document.querySelector('.user-login');
//     userLoginNode.addEventListener('click', ()=> {
//         window.location = `login.html`
//     });

//     const userREgisterNode = document.querySelector('.user-register');
//     userREgisterNode.addEventListener('click', ()=> {
//         window.location = `register.html`
//     });

//     const userLogoutNode = document.querySelector('.user-logout');
//     userLogoutNode.addEventListener('click', ()=> {
//         accountlogin = {};
//         localStorage.setItem('accountlogin',JSON.stringify(accountlogin));
//         window.location = `index.html`;
//     })
// })