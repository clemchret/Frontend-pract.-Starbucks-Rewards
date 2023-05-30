/*Menu burger*/
const menuBurger = document.querySelector('.menu-burger');
menuBurger.addEventListener('click', ()=>{
    menuBurger.classList.toggle('active');
});


/*Get your favourites tabs*/
const tabNavAllLi = document.querySelectorAll('.tab-navigation li');

tabNavAllLi.forEach((li, index) => {
    li.addEventListener('click', () =>{
        tabNavAllLi.forEach((li)=>{
            li.classList.remove('active');
        });

        li.classList.add('active');

        const allTabItems = document.querySelectorAll('.tab-item');
        
        allTabItems.forEach(item => {
            item.classList.remove('active');
        });

        allTabItems[index].classList.add('active');
    });
});