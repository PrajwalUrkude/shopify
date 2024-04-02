
const backBtn = document.getElementById('backImg');

backBtn.addEventListener('click', () => {
    window.history.back();
})

// Function to retrieve and parse data from session storage
function retrieveDataFromsessionStorage() {
    // Retrieve the values from session storage
    let storedCurrentPrice = sessionStorage.getItem('currentPrice');
    let storedOriginalPrice = sessionStorage.getItem('originalPrice');


    
    let cost1=document.getElementById('cost1a')
    let cost2=document.getElementById('cost1b')
    let disc=document.querySelectorAll('.disc1')
    let finalamt=document.getElementById('finalamt')
    console.log(disc)
    cost1.innerHTML=storedOriginalPrice
    cost2.innerHTML=storedCurrentPrice
    finalamt.innerHTML=storedCurrentPrice
    console.log(storedCurrentPrice)
    console.log(storedOriginalPrice)

    let num1=storedCurrentPrice.replace(/[^\d]/g, '');
    let num2 =storedOriginalPrice.replace(/[^\d]/g, '');
    num1=parseInt(num1)
    num2=parseInt(num2)
    let dis=num2-num1;
    console.log(dis) 
    console.log(""+num1)
    console.log(""+num2)


    disc.forEach(num => {
        num.innerHTML="₹"+dis
    });
}


const setInSessionStorage = () => {
    const uName = document.getElementById('personName').value
    const address = document.getElementById('personAdd').value
    const number = document.getElementById('personNo').value
    const userName = sessionStorage.setItem('name',uName)
    const userAdd = sessionStorage.setItem('add',address)
    const userNo = sessionStorage.setItem('num',number)
    
    
    if(!uName || !address || !number){
        alert("please fill information in Input boxes")
    }else{
        window.location.href = './payment.html'
        alert("Information added successfully")
        
    }
    
    
}
// Event listener for DOMContentLoaded  
document.addEventListener('DOMContentLoaded', () => {
    const add = document.getElementById('cBtn')
    // Call the function when the DOM content is loaded
    const retrievedData = retrieveDataFromsessionStorage();
    add.addEventListener('click', 
    ()=> setInSessionStorage()
)
    // Use the retrieved and parsed data as needed
    // For example, update the DOM with the retrieved data
    // Assuming you have elements with IDs 'displayCurrentPrice' and 'displayOriginalPrice'
    // document.getElementById('displayCurrentPrice').innerText = retrievedData.parsedCurrentPrice;
    // document.getElementById('displayOriginalPrice').innerText = retrievedData.parsedOriginalPrice;
});
