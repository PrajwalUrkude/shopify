function finallyData() {
    let storedCurrentPrice = sessionStorage.getItem('currentPrice');
    let ogprice = document.getElementById('finalprice')
    
    console.log(ogprice)
ogprice.innerHTML=storedCurrentPrice
}

document.addEventListener('DOMContentLoaded', () => {
    const retrievedData = finallyData();
})

const backBtn = document.getElementById('backImg');

backBtn.addEventListener('click', () => {
    window.history.back();
})