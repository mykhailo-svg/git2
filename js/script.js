
const burgerButton = document.querySelector('.burger-button');

console.log(burgerButton);
const burgerBody = document.querySelector('.burger__body');

const mainBody = document.querySelector('body');



burgerButton.addEventListener('click', function ()  {
    

    
    if(burgerBody.classList.length<2){
        burgerBody.classList.toggle('burger__show');
    }
    else{
        burgerBody.classList.toggle('burger__hide');
        burgerBody.classList.toggle('burger__show');
    }
    burgerButton.classList.toggle('burger-active');
});