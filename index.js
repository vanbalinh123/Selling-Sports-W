const sectionTrendingNodes = document.querySelectorAll('.section-five-product');
let productTrendingList1 = [];
let productTrendingList2 = [];
let productTrendingList3 = [];
let productTrendingList4 = [];
let chooseProduct = {
    trendingImg: '',
    trendingName: '',
    trendingPrice: 0,
    selectedSizeNode: '',
    selectedColorNode: ''
}
// let cart = JSON.parse(localStorage.getItem('cart'));
// if(cart === null) cart = [];

for (let i = 0 ; i < sectionTrendingNodes[0].children.length; i += 1)
    productTrendingList1[i] = sectionTrendingNodes[0].children[i];
for (let i = 0 ; i < sectionTrendingNodes[1].children.length; i += 1)
    productTrendingList2[i] = sectionTrendingNodes[1].children[i];
for (let i = 0 ; i < sectionTrendingNodes[2].children.length; i += 1)
    productTrendingList3[i] = sectionTrendingNodes[2].children[i];
for (let i = 0 ; i < sectionTrendingNodes[3].children.length; i += 1)
    productTrendingList4[i] = sectionTrendingNodes[3].children[i];
productTrendingList1.forEach(item => { 
    item.addEventListener('click',() => {
        const trendingImg = item.children[0].children[0].src;
        const trendingName = item.children[1].children[0].textContent;
        const trendingPrice = item.children[1].children[1].textContent;
        chooseProduct.trendingImg = trendingImg;
        chooseProduct.trendingName = trendingName;
        chooseProduct.trendingPrice = trendingPrice;
        localStorage.setItem('chooseProduct',JSON.stringify(chooseProduct));
        window.location = './trending.html';
    });
});
productTrendingList2.forEach(item => { 
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
productTrendingList3.forEach(item => { 
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
productTrendingList4.forEach(item => { 
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

const artistNode = document.querySelector('.four-click');
artistNode.addEventListener('click', ()=> {
    window.location = `artists.html`;
})

// const questloveNode = document.querySelector('.Questlove');
// questloveNode.addEventListener('click', ()=> {
//     window.location = `artistQuestlove.html`;
// })
const notoriousNode = document.querySelector('.NotoriousBIG');
notoriousNode.addEventListener('click', ()=> {
    window.location = `Notorious.html`;
})
const aTribeNode = document.querySelector('.ATribeCalledQuest');
aTribeNode.addEventListener('click', ()=> {
    window.location = `atribe.html`;
})
const princeNode = document.querySelector('.Prince');
princeNode.addEventListener('click', ()=> {
    window.location = `prince.html`;
})
const aaliyah = document.querySelector('.Aaliyah');
aaliyah.addEventListener('click', ()=> {
    window.location = `aaliyah.html`;
})