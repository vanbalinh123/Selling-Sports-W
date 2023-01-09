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

const inputCmtNode = document.querySelector('.input-cmt');
const closeAndCmtNode = document.querySelector('.close-cmt');

inputCmtNode.addEventListener('focus', ()=> {
    closeAndCmtNode.classList.remove('hiddenn');
})

inputCmtNode.addEventListener('blur', (e)=> {
    if(e.target.value === '')
        closeAndCmtNode.classList.add('hiddenn');
})

const cancelNode = document.querySelector('.close');
cancelNode.addEventListener('click', ()=> {
    closeAndCmtNode.classList.add('hiddenn');
    inputCmtNode.value = ``;
})
function UserCmt(id,name,year,month,day,hour,minute,comment) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = hour;
    this.minute = minute;
    this.comment = comment;
}
const contentFeedbackNode = document.querySelector('.content-feedback');
let userCmtList = JSON.parse(localStorage.getItem('userCmtList'));
if(userCmtList === null) userCmtList = [];
const pushCmtNode = document.querySelector('.push-cmt');
let feedbackUserList = document.querySelectorAll('.feedback-user');
userCmtList.forEach(item => {
    const feedbackUser = document.createElement('div');
    feedbackUser.classList.add('feedback-user');
    contentFeedbackNode.insertBefore(feedbackUser,feedbackUserList[0]);
    feedbackUser.innerHTML = `
    <div class="info-user">
    <div class="hiddenn">${item.id}</div>
    <div>
        <img src=".images/iconuser.webp">
    </div>
    <div>
        <div class="name-user">${item.name}</div>
        <div class="user-choose-star">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
        </div>
    </div>
</div>
<!-- info user -->
<div class="cmt-of-user">
    <div class="day-cmt">${item.year}-${item.month+1}-${item.day} ${item.hour}:${item.minute}</div>
    <div class="user-cmt"> 
        ${item.comment}
    </div>
    <div class="delete-cmt">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>  
    </div>
</div>
    `;
    feedbackUserList = document.querySelectorAll('.feedback-user');

})

let deleteCmtNodes = document.querySelectorAll('.delete-cmt');
function findIdUserCmt(node) {
    let index = 0;
    const idUser = node.parentElement.parentElement.children[1].textContent;
    for(let i = 0; i < userCmtList.length; i += 1) {
        if(userCmtList[i].id === idUser) {
            index = i;
            break;
        }
    }
    return index;
}


let idUser = userCmtList.length - 1;
isSuccessfull = JSON.parse(localStorage.getItem('isSuccessfull'));
pushCmtNode.addEventListener('click',() => {
    if(isSuccessfull === false) {
        alert('You must be logged in to be able to comment!');
        closeAndCmtNode.classList.add('hiddenn');
        inputCmtNode.value = '';
    } else {
        idUser += 1;
    const dateTime = new Date();
    const userCmt = new UserCmt(
        idUser,
        accountlogin.lastnamelogin,
        dateTime.getFullYear(),
        dateTime.getMonth(),
        dateTime.getDate(),
        dateTime.getHours(),
        dateTime.getMinutes(),
        inputCmtNode.value);
    userCmtList.push(userCmt);
    localStorage.setItem('userCmtList',JSON.stringify(userCmtList));
    const feedbackUser = document.createElement('div');
    feedbackUser.classList.add('feedback-user');
    contentFeedbackNode.insertBefore(feedbackUser,feedbackUserList[0]);
    feedbackUser.innerHTML = `
    <div class="info-user">
    <div class="hiddenn">${userCmt.id}</div>
    <div>
        <img src=".images/iconuser.webp">
    </div>
    <div>
        <div class="name-user">${userCmt.name}</div>
        <div class="user-choose-star">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
        </div>
    </div>
</div>
<!-- info user -->
<div class="cmt-of-user">
    <div class="day-cmt">${userCmt.year}-${userCmt.month+1}-${userCmt.day} ${userCmt.hour}:${userCmt.minute}</div>
    <div class="user-cmt"> 
        ${userCmt.comment}
    </div>
    <div class="delete-cmt">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>  
    </div>
</div>
    `;
    feedbackUserList = document.querySelectorAll('.feedback-user');
    inputCmtNode.value = '';
    const deleteCmtNode = feedbackUser.children[1].children[2];
    deleteCmtNode.addEventListener('click',()=>{
        let index = findIdUserCmt(deleteCmtNode);
        userCmtList.splice(index,1);
        localStorage.setItem('userCmtList',JSON.stringify(userCmtList));
        deleteCmtNode.parentElement.parentElement.remove();
        alert('Do you want to delete this cmt?');
        window.location = `trending.html`;
    })
    }
})

deleteCmtNodes.forEach(item => {
    item.addEventListener('click',() => {
        let index = findIdUserCmt(item);
        userCmtList.splice(index,1);
        localStorage.setItem('userCmtList',JSON.stringify(userCmtList));
        item.parentElement.parentElement.remove();
        alert('Do you want to delete this cmt?');
        window.location = `trending.html`;
    })
})
