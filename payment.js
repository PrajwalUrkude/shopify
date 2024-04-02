function gettingData() {
    let storedCurrentPrice = sessionStorage.getItem('currentPrice');
    let ogprice = document.querySelectorAll('.ogprice')
    let displayName = document.getElementById('name')
    let displayAdd= document.getElementById('address')
    let displayNum = document.getElementById('phoneNum')

    let name = sessionStorage.getItem('name')
    let phoneNumber = sessionStorage.getItem('num')
    let address = sessionStorage.getItem('add')
    
    console.log(ogprice, name, phoneNumber, address)
    ogprice.forEach(num => {
        num.innerHTML= storedCurrentPrice
    })

    displayName.innerHTML ="Name: " +name
    displayAdd.innerHTML ="Address: "+ address
    displayNum.innerHTML ="Mobile no. "+ phoneNumber

}

document.addEventListener('DOMContentLoaded', () => {
    const retrievedData = gettingData();
})




const backBtn = document.getElementById('backImg');

backBtn.addEventListener('click', () => {
    window.history.back();
})



