let menu=document.getElementById('menubtn')
let nav=document.getElementById('nav')
menu.addEventListener('click',(e)=>{
    nav.classList.toggle('hidden')
})

let inpbox=document.getElementById('inpbox')
let inpbtn=document.getElementById('inpbtn')
inpbtn.addEventListener('click',(e)=>{
    inpbox.classList.toggle('hidden')
})

// For mobile box
let buttonstate1 = 0;
let seemore=document.getElementById('seemore1')
let mobmore=document.getElementById('mobmore1');
mobmore.addEventListener('click' , (e) => {
    switch(buttonstate1){
case 0:
    mobmore1.innerHTML = 'see Less'
    buttonstate1 = 1;
    break
    case 1:
    mobmore1.innerHTML = 'see More'
    buttonstate1 = 0
    break
    default:
    mobmore1.innerHTML = 'see More'
    buttonstate1 = 0;
    break
    }
seemore1.classList.toggle('hidden')
})

// For Fashion box
let buttonstate2 = 0;
let seemore2=document.getElementById('seemore2')
let fashmore=document.getElementById('fashmore2');
fashmore.addEventListener('click' , (e) => {
    switch(buttonstate2){
case 0:
    fashmore2.innerHTML = 'see Less'
    buttonstate2 = 1;
    break
    case 1:
    fashmore2.innerHTML = 'see More'
    buttonstate2 = 0
    break
    default:
    fashmore2.innerHTML = 'see More'
    buttonstate2 = 0;
    break
    }
seemore2.classList.toggle('hidden')
})

// For Deal box
let buttonstate3 = 0;
let seemore3=document.getElementById('seemore3')
let dealmore=document.getElementById('dealmore3');
dealmore.addEventListener('click' , (e) => {
    switch(buttonstate3){
case 0:
    dealmore3.innerHTML = 'see Less'
    buttonstate3 = 1;
    break
    case 1:
    dealmore3.innerHTML = 'see More'
    buttonstate3 = 0
    break
    default:
    dealmore3.innerHTML = 'see More'
    buttonstate3 = 0;
    break
    }
seemore3.classList.toggle('hidden')
})

// For Shoe box
let buttonstate4 = 0;
let seemore4=document.getElementById('seemore4')
let shoemore=document.getElementById('shoemore4');
shoemore.addEventListener('click' , (e) => {
    switch(buttonstate4){
case 0:
    shoemore4.innerHTML = 'see Less'
    buttonstate4 = 1;
    break
    case 1:
    shoemore4.innerHTML = 'see More'
    buttonstate4 = 0
    break
    default:
    shoemore4.innerHTML = 'see More'
    buttonstate4 = 0;
    break
    }
seemore4.classList.toggle('hidden')
})

// For electric box
let buttonstate5 = 0;
let seemore5=document.getElementById('seemore5')
let electricmore=document.getElementById('electricmore5');
electricmore.addEventListener('click' , (e) => {
    switch(buttonstate5){
case 0:
    electricmore5.innerHTML = 'see Less'
    buttonstate5 = 1;
    break
    case 1:
    electricmore5.innerHTML = 'see More'
    buttonstate5 = 0
    break
    default:
    electricmore5.innerHTML = 'see More'
    buttonstate5 = 0;
    break
    }
seemore5.classList.toggle('hidden')
})

// For home box
let buttonstate6 = 0;
let seemore6=document.getElementById('seemore6')
let homemore=document.getElementById('homemore6');
homemore.addEventListener('click' , (e) => {
    switch(buttonstate6){
case 0:
    homemore6.innerHTML = 'see Less'
    buttonstate6 = 1;
    break
    case 1:
    homemore6.innerHTML = 'see More'
    buttonstate6 = 0
    break
    default:
    homemore6.innerHTML = 'see More'
    buttonstate6 = 0;
    break
    }
seemore6.classList.toggle('hidden')
})

// For Beauty box
let buttonstate7 = 0;
let seemore7=document.getElementById('seemore7')
let beautymore=document.getElementById('beautymore7');
beautymore.addEventListener('click' , (e) => {
    switch(buttonstate7){
case 0:
    beautymore7.innerHTML = 'see Less'
    buttonstate7 = 1;
    break
    case 1:
    beautymore7.innerHTML = 'see More'
    buttonstate7 = 0
    break
    default:
    beautymore7.innerHTML = 'see More'
    buttonstate7 = 0;
    break
    }
seemore7.classList.toggle('hidden')
})

// For Watch box
let buttonstate8 = 0;
let seemore8=document.getElementById('seemore8')
let watchmore=document.getElementById('watchmore8');
watchmore.addEventListener('click' , (e) => {
    switch(buttonstate8){
case 0:
    watchmore8.innerHTML = 'see Less'
    buttonstate8 = 1;
    break
    case 1:
    watchmore8.innerHTML = 'see More'
    buttonstate8 = 0
    break
    default:
    watchmore8.innerHTML = 'see More'
    buttonstate8 = 0;
    break
    }
seemore8.classList.toggle('hidden')
})

// For furn box
let buttonstate9 = 0;
let seemore9=document.getElementById('seemore9')
let furnmore=document.getElementById('furnmore9');
furnmore.addEventListener('click' , (e) => {
    switch(buttonstate9){
case 0:
    furnmore9.innerHTML = 'see Less'
    buttonstate9 = 1;
    break
    case 1:
    furnmore9.innerHTML = 'see More'
    buttonstate9 = 0
    break
    default:
    furnmore9.innerHTML = 'see More'
    buttonstate9 = 0;
    break
    }
seemore9.classList.toggle('hidden')
})

// For toy box
let buttonstate10 = 0;
let seemore10=document.getElementById('seemore10')
let toymore=document.getElementById('toymore10');
toymore.addEventListener('click' , (e) => {
    switch(buttonstate10){
case 0:
    toymore10.innerHTML = 'see Less'
    buttonstate10 = 1;
    break
    case 1:
    toymore10.innerHTML = 'see More'
    buttonstate10 = 0
    break
    default:
    toymore10.innerHTML = 'see More'
    buttonstate10 = 0;
    break
    }
seemore10.classList.toggle('hidden')
})

// For access box
let buttonstate11 = 0;
let seemore11=document.getElementById('seemore11')
let accessmore=document.getElementById('accessmore11');
accessmore.addEventListener('click' , (e) => {
    switch(buttonstate11){
case 0:
    accessmore11.innerHTML = 'see Less'
    buttonstate11 = 1;
    break
    case 1:
    accessmore11.innerHTML = 'see More'
    buttonstate11 = 0
    break
    default:
    accessmore11.innerHTML = 'see More'
    buttonstate11 = 0;
    break
    }
seemore11.classList.toggle('hidden')
})

// For Laptop box
let buttonstate12 = 0;
let seemore12=document.getElementById('seemore12')
let lapmore=document.getElementById('lapmore12');
lapmore.addEventListener('click' , (e) => {
    switch(buttonstate12){
case 0:
    lapmore12.innerHTML = 'see Less'
    buttonstate12 = 1;
    break
    case 1:
    lapmore12.innerHTML = 'see More'
    buttonstate12 = 0
    break
    default:
    lapmore12.innerHTML = 'see More'
    buttonstate12 = 0;
    break
    }
seemore12.classList.toggle('hidden')
})



