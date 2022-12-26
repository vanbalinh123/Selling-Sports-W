let chooseProduct = {
    trendingImg: '',
    trendingName: '',
    trendingPrice: 0,
    // selectedSizeNode: '',
    // selectedColorNode: ''
}

const artistProductNode = document.querySelectorAll('.product');
for(let i = 0; i < artistProductNode.length; i += 1) {
    artistProductNode[i].addEventListener('click', ()=> {
        const artistImg = artistProductNode[i].children[0].children[0].src;
        const artistName = artistProductNode[i].children[1].children[0].textContent;
        const artistPrice = artistProductNode[i].children[1].children[1].textContent;
        chooseProduct.trendingImg = artistImg;
        chooseProduct.trendingName = artistName;
        chooseProduct.trendingPrice = artistPrice;
        localStorage.setItem('chooseProduct',JSON.stringify(chooseProduct));
        window.location = 'trending.html';
    })
}

const menNode = document.querySelector('.men');
const womenNode = document.querySelector('.women');
const kidsNode = document.querySelector('.kids');
const accessoryNode = document.querySelector('.accessory');
menNode.addEventListener('click', ()=> {
    window.location = `Notorious.html`;
})
womenNode.addEventListener('click', ()=> {
    window.location = `atribe.html`;
})
kidsNode.addEventListener('click', ()=> {
    window.location = `prince.html`;
})
accessoryNode.addEventListener('click', ()=> {
    window.location = `aaliyah.html`;
})