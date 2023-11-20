const elButtons = document.querySelectorAll('.btn-1');
const elButtons2 = document.querySelectorAll('.btn-2');
const elSelection = document.querySelector(".hudud");
const elWrapper = document.querySelector('.wrapper');
const elBox = document.querySelector('.box');
const elBox2 = document.querySelector('.box-2');
const elBackTo2 = document.querySelector(".back-to-2");
const elBackTo3 = document.querySelector(".back-to-3");
const elTitle = document.querySelector('.title')


elButtons.forEach(btn => {
    btn.addEventListener('click', ()=> {
        elWrapper.innerHTML = ''
        elWrapper.appendChild(elBox)
        elBox.style.display = 'flex'
    })
})

elBackTo2.addEventListener("click", ()=> {
    elWrapper.innerHTML = ''
    elButtons.forEach(btn => {
        elWrapper.appendChild(btn)
    })
    elWrapper.appendChild(elTitle)
})


elSelection.addEventListener("change", () => {
    elWrapper.innerHTML = ''
    elWrapper.appendChild(elBox2)
    elBox2.style.display = 'block'
})


elBackTo3.addEventListener("click", ()=> {
    elWrapper.innerHTML = ''
    elWrapper.appendChild(elBox)
    elBox.style.display = 'flex'
})

// /////////////////////////////////////////////

const elInfoText = document.querySelector(".js-info");
const elPriceText = document.querySelector(".js-price");
const elTelText = document.querySelector(".js-tel");
const elForm = document.querySelector(".form-elon");
const elFormBtn = document.querySelector(".form-btn");
const elTextArea = document.querySelector(".text-area");
const elPriceInp = document.querySelector(".price-inp");
const elTelInp =document.querySelector(".input-tel");
const elFormBox = document.querySelector(".form-box-2")
elFormBtn.addEventListener("click", () => {
   elInfoText.innerHTML = elTextArea.value;
   elPriceText.innerHTML = "Narxi : " + elPriceInp.value;
   elTelText.innerHTML = "Telefon raqamingiz : " +  elTelInp.value;
   elFormBox.style.display = "block"
})