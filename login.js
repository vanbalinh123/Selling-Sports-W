const loginNode = document.querySelector('.click-input');
loginNode.addEventListener('click', ()=> {
    window.location = `index.html`;
})

let chooseProduct = {
        trendingImg: '',
        trendingName: '',
        trendingPrice: '',
        selectedSizeNode: '',
        selectedColorNode: ''
    }