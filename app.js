
const featuresBtn = document.getElementById('features');
const featuresPopDown = document.getElementById('features_pop-down');

const companyBtn = document.getElementById('company');
const companyPopDown = document.getElementById('company_pop-down');

const burger = document.querySelector('.burger');
const navPop = document.getElementById('nav');
console.log(burger);
// -----------------------------------nav pop down 1 - features
featuresBtn.onclick = () => {
    featuresPopDown.classList.toggle('menu_pop-up');
    featuresPopDown.classList.toggle('menu_pop-down');
}
// -----------------------------------nav pop down 2 - company
companyBtn.onclick = () => {
    companyPopDown.classList.toggle('menu_pop-up_2');
    companyPopDown.classList.toggle('menu_pop-down_2');
}
// -----------------------------------mobile menu pop
burger.onclick = () => {
    console.log('hi')
    navPop.classList.toggle('nav_hidden');
    navPop.classList.toggle('nav');
}






