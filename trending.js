let chooseProduct = JSON.parse(localStorage.getItem('chooseProduct'));
const sectionImg = document.querySelector('.section-img');
const sectionContent = document.querySelector('.section-content');
sectionImg.children[0].src = chooseProduct.trendingImg;
sectionContent.children[0].textContent = `${chooseProduct.trendingName}`;
sectionContent.children[1].textContent = `${chooseProduct.trendingPrice}`;
const addCart = document.querySelector('.add-cart');
function Product(img,name,price,size,color,index) {
    this.img = img;
    this.name = name;
    this.price = price;
    this.size = size;
    this.color = color;
    this.index = index;
}

const selectedColorNode = document.querySelector('.selected-color');
const chooseColorBlackNode = document.querySelector('.color1');
const chooseColorWhiteNode = document.querySelector('.color2');
const chooseColorBlueNode = document.querySelector('.color3');
const chooseColor = document.querySelector('.choose-color');
chooseColorBlackNode.addEventListener('click', ()=> {
    selectedColorNode.textContent = ` Black`;
    chooseColorBlackNode.classList.remove('addClickColors')
    chooseColorWhiteNode.classList.add('addClickColors');
    chooseColorBlueNode.classList.add('addClickColors');
})
chooseColorWhiteNode.addEventListener('click', ()=> {
    selectedColorNode.textContent = ` White`;
    chooseColorWhiteNode.classList.remove('addClickColors')
    chooseColorBlackNode.classList.add('addClickColors');
    chooseColorBlueNode.classList.add('addClickColors');
})
chooseColorBlueNode.addEventListener('click', ()=> {
    selectedColorNode.textContent = ` Blue`;
    chooseColorBlueNode.classList.remove('addClickColors')
    chooseColorBlackNode.classList.add('addClickColors');
    chooseColorWhiteNode.classList.add('addClickColors');
})

const selectedSizeNode = document.querySelector('.selected-size');
const chooseSizeXS = document.querySelector('.sizeXS');
const chooseSizeS = document.querySelector('.sizeS');
const chooseSizeM = document.querySelector('.sizeM');
const chooseSizeL = document.querySelector('.sizeL');
const chooseSizeXL = document.querySelector('.sizeXL');
const chooseSize2XL = document.querySelector('.size2XL');
const chooseAllSize = document.querySelectorAll('.choose-size');

chooseSizeXS.addEventListener('click', ()=> {
    selectedSizeNode.textContent = `${chooseSizeXS.textContent}`;
    chooseSizeXS.classList.add('addClickSizes');
    chooseSizeS.classList.remove('addClickSizes');
    chooseSizeM.classList.remove('addClickSizes');
    chooseSizeL.classList.remove('addClickSizes');
    chooseSizeXL.classList.remove('addClickSizes');
    chooseSize2XL.classList.remove('addClickSizes');
})
chooseSizeS.addEventListener('click', ()=> {
    selectedSizeNode.textContent = `${chooseSizeS.textContent}`;
    chooseSizeS.classList.add('addClickSizes');
    chooseSizeXS.classList.remove('addClickSizes');
    chooseSizeM.classList.remove('addClickSizes');
    chooseSizeL.classList.remove('addClickSizes');
    chooseSizeXL.classList.remove('addClickSizes');
    chooseSize2XL.classList.remove('addClickSizes');
})
chooseSizeM.addEventListener('click', ()=> {
    selectedSizeNode.textContent = `${chooseSizeM.textContent}`;
    chooseSizeM.classList.add('addClickSizes');
    chooseSizeS.classList.remove('addClickSizes');
    chooseSizeXS.classList.remove('addClickSizes');
    chooseSizeL.classList.remove('addClickSizes');
    chooseSizeXL.classList.remove('addClickSizes');
    chooseSize2XL.classList.remove('addClickSizes');
})
chooseSizeL.addEventListener('click', ()=> {
    selectedSizeNode.textContent = `${chooseSizeL.textContent}`;
    chooseSizeL.classList.add('addClickSizes');
    chooseSizeS.classList.remove('addClickSizes');
    chooseSizeM.classList.remove('addClickSizes');
    chooseSizeXS.classList.remove('addClickSizes');
    chooseSizeXL.classList.remove('addClickSizes');
    chooseSize2XL.classList.remove('addClickSizes');
})
chooseSizeXL.addEventListener('click', ()=> {
    selectedSizeNode.textContent = `${chooseSizeXL.textContent}`;
    chooseSizeXL.classList.add('addClickSizes');
    chooseSizeS.classList.remove('addClickSizes');
    chooseSizeM.classList.remove('addClickSizes');
    chooseSizeL.classList.remove('addClickSizes');
    chooseSizeXS.classList.remove('addClickSizes');
    chooseSize2XL.classList.remove('addClickSizes');
})
chooseSize2XL.addEventListener('click', ()=> {
    selectedSizeNode.textContent = `${chooseSize2XL.textContent}`;
    chooseSize2XL.classList.add('addClickSizes');
    chooseSizeS.classList.remove('addClickSizes');
    chooseSizeM.classList.remove('addClickSizes');
    chooseSizeL.classList.remove('addClickSizes');
    chooseSizeXL.classList.remove('addClickSizes');
    chooseSizeXS.classList.remove('addClickSizes');
})

// addCart.addEventListener('click',()=>{
//     const product = new Product(chooseProduct.trendingImg,chooseProduct.trendingName,chooseProduct.trendingPrice);
//     cart.push(product);
//     localStorage.setItem('cart',JSON.stringify(cart));
//     alert('More successful products!');
//     window.location = `trending.html`;
// });
let index = 1;
const indexNode = document.querySelector('.index');
const subtractionNode = document.querySelector('.subtraction');
const addNode = document.querySelector('.add');
addNode.addEventListener('click', ()=> {
    index += 1;
    indexNode.textContent = `${index}`;
})
subtractionNode.addEventListener('click', ()=> {  
    if(index > 1) {
        index -= 1;
        indexNode.textContent = `${index}`;
    }
})
const checkExist = (product) => {
    let isExist = false;
    for(let i = 0; i < cart.length; i += 1) {
        if(cart[i].name === product.name && cart[i].size === product.size && cart[i].color === product.color) {
            isExist = true;
            cart[i].index += product.index;
            break;
        }
        
    }
    return isExist;
}
// let allProductNodes = JSON.parse(localStorage.getItem('allProductNode'));
addCart.addEventListener('click',()=>{
    if(selectedSizeNode.textContent === '' || selectedColorNode.textContent === '') {
        alert("Please choose size/color!");
    } 
    else {
        cart = JSON.parse(localStorage.getItem('cart'));
        if(cart === null) cart = [];
        const product = new Product(chooseProduct.trendingImg,chooseProduct.trendingName,chooseProduct.trendingPrice,selectedSizeNode.textContent,selectedColorNode.textContent,index);
        if(checkExist(product) === false)
            cart.push(product);
        localStorage.setItem('cart',JSON.stringify(cart));
        alert('Product added successfully!');
        updateCart(cart);
        window.location = `trending.html`;
    }
});

