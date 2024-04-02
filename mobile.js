let btn1 = document.getElementById('btn1');
let price1 = document.getElementById('price1');
let orgPrice1 = document.getElementById('orgprice1');




// Function to handle button click events
function handleButtonClick(btn, priceElement, orgPriceElement) {
    btn.addEventListener('click', () => {
        // Get the values from the DOM elements
        let currentPrice = priceElement.innerText;
        let originalPrice = orgPriceElement.innerText;

        // Store the values in session storage
        sessionStorage.setItem('currentPrice', currentPrice);
        sessionStorage.setItem('originalPrice', originalPrice);

        // You can also console log the values if needed
        console.log('Values stored in session storage:', currentPrice, originalPrice);
    });
}

// Add event listeners for buttons 1 to 10
for (let i = 1; i <= 12; i++) {
    let btn = document.getElementById('btn' + i);
    let priceElement = document.getElementById('price' + i);
    let orgPriceElement = document.getElementById('orgprice' + i);

    // Call the function to handle button click events
    handleButtonClick(btn, priceElement, orgPriceElement);
}




// // document.addEventListener("DOMContentLoaded",function () {

    
// //     // Fetch the content from the first HTML file
// //     fetch("mobiles.html")
// //         .then(response => response.text())
// //         .then(data => {console.log(data)})})
            
            
           
// //             // Create a temporary element to hold the content
            
// //             const tempElement = document.createElement("div");
// //             tempElement.innerHTML = data;

// //             let btn1=tempElement.querySelector('#btn1')
// //             console.log("btn1"+btn1)
// //             btn1.addEventListener('click',()=>{

// //             // Get the inner HTML content from the specified element in the first file
// //             let contentToAppend = tempElement.querySelector("#price1").textContent;
// //             console.log(contentToAppend);
// //             let contoApend=tempElement.querySelector('#orgprice1').textContent;
// //             console.log(contoApend);


// //             // Append the content to the specified element in the second file
            
// //             let num2=contoApend.replace(/[^\d.]/g, '');
// //             let num1 =contentToAppend.replace(/[^\d.]/g, '');
// //             num1=Number.parseInt(num1);
// //             num2=Number.parseInt(num2);
// //             console.log(num1)
// //             console.log(num2)
// //             let dis=num1-num2;
// //             console.log(dis) 
        
            
// //             let dicountApend=document.querySelectorAll('.disc1')
// //             console.log(dicountApend);
// //             dicountApend.forEach(disc=>{
// //                 disc.innerHTML=dis;
// //             })

// //             const appendedContentElement1 = document.querySelector(".cost1a");
// //             console.log(appendedContentElement1);
// //             appendedContentElement1.innerHTML=contentToAppend
// //             let appendedContentElement2=document.querySelector('.cost1b')
// //             appendedContentElement2.innerHTML=contoApend
// //         })
  
// //         })
// //         .catch(error => console.error("Error fetching content:", error));
// // });


    




















// // function storeData(){
// //     let orgprice=document.getElementById('orgprice1')
// // let price=document.getElementById('price1')
// // console.log(orgprice.innerText)
// // console.log(price.innerText)
// //       sessionStorage.setItem("price1",orgprice.innerText)
// //       sessionStorage.setItem("price2",price.innerText)

      
// // }





// // function getData(){
//     // let data1=sessionStorage.getItem('price1')
//     // let data2=sessionStorage.getItem('price2')
//     // console.log(data1)
//     // console.log(data2)
// //     let appendedContentElement1 = document.querySelector(".cost1a");    
// //     let appendedContentElement2=document.querySelector('.cost1b')
// //     console.log("a"+appendedContentElement1)
// //     console.log("b"+appendedContentElement2)
// //     appendedContentElement1.innerHTML=data1
// //     appendedContentElement2.innerHTML=data2
// // }

// // btn1.addEventListener(storeData);

// // // script.js


// // // // script.js
// // // let btn2=document.getElementById('btn2')
// // // console.log(btn1)
// // // document.addEventListener("DOMContentLoaded", function () {
// // //     // Fetch the content from the first HTML file
// // //     fetch("mobiles.html")
// // //         .then(response => response.text())
// // //         .then(data => {
// // //             // Create a temporary element to hold the content
// // //             const tempElement = document.createElement("div");
// // //             tempElement.innerHTML = data;

// // //             // Get the inner HTML content from the specified element in the first file
// // //             let contentToAppend = tempElement.querySelector("#price2").textContent;
// // //             console.log(contentToAppend);
// // //             let contoApend=tempElement.querySelector('#orgprice2').textContent;
// // //             console.log(contoApend);

// // //             // Append the content to the specified element in the second file
// // //             const appendedContentElement1 = document.querySelector(".cost1a");
// // //             console.log(appendedContentElement1);
// // //             appendedContentElement1.innerHTML=contentToAppend
// // //             let appendedContentElement2=document.querySelector('.cost1b')
// // //             appendedContentElement2.innerHTML=contoApend
            

// // //             let num2=contoApend.replace(/[^\d.]/g, '');
// // //             let num1 =contentToAppend.replace(/[^\d.]/g, '');
// // //             num1=Number.parseInt(num1);
// // //             num2=Number.parseInt(num2);
// // //             console.log(num1)
// // //             console.log(num2)
// // //             let dis=num1-num2;
// // //             console.log(dis) 
            
// // //             let dicountApend=document.querySelectorAll('.disc1')
// // //             console.log(dicountApend);
// // //             dicountApend.forEach(disc=>{
// // //                 disc.innerHTML=dis;
// // //             })
  
// // //         })
// // //         .catch(error => console.error("Error fetching content:", error));
// // // });


// // // // box 3
// // // let btn3=document.getElementById('btn3')
// // // console.log(btn1)
// // // document.addEventListener("DOMContentLoaded", function () {
// // //     // Fetch the content from the first HTML file
// // //     fetch("mobiles.html")
// // //         .then(response => response.text())
// // //         .then(data => {
// // //             // Create a temporary element to hold the content
// // //             const tempElement = document.createElement("div");
// // //             tempElement.innerHTML = data;

// // //             // Get the inner HTML content from the specified element in the first file
// // //             let contentToAppend = tempElement.querySelector("#price3").textContent;
// // //             console.log(contentToAppend);
// // //             let contoApend=tempElement.querySelector('#orgprice3').textContent;
// // //             console.log(contoApend);

// // //             // Append the content to the specified element in the second file
// // //             const appendedContentElement1 = document.querySelector(".cost1a");
// // //             console.log(appendedContentElement1);
// // //             appendedContentElement1.innerHTML=contentToAppend
// // //             let appendedContentElement2=document.querySelector('.cost1b')
// // //             appendedContentElement2.innerHTML=contoApend
            

// // //             let num2=contoApend.replace(/[^\d.]/g, '');
// // //             let num1 =contentToAppend.replace(/[^\d.]/g, '');
// // //             num1=Number.parseInt(num1);
// // //             num2=Number.parseInt(num2);
// // //             console.log(num1)
// // //             console.log(num2)
// // //             let dis=num1-num2;
// // //             console.log(dis) 
            
// // //             let dicountApend=document.querySelectorAll('.disc1')
// // //             console.log(dicountApend);
// // //             dicountApend.forEach(disc=>{
// // //                 disc.innerHTML=dis;
// // //             })
  
// // //         })
// // //         .catch(error => console.error("Error fetching content:", error));
// // // });

