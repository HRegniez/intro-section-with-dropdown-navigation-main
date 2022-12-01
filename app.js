
const featuresBtn = document.getElementById('features');
const featuresPopDown = document.getElementById('features_pop-down');
const featuresArrow = document.getElementById('arrow_1');

const companyBtn = document.getElementById('company');
const companyPopDown = document.getElementById('company_pop-down');
const companyArrow = document.getElementById('arrow_2');

const burger = document.querySelector('.burger');
const navPop = document.getElementById('nav');

// -----------------------------------nav pop down 1 - features
featuresBtn.onclick = () => {
    featuresPopDown.classList.toggle('menu_pop-up');
    featuresPopDown.classList.toggle('menu_pop-down');
    featuresArrow.classList.toggle('active');
}
// -----------------------------------nav pop down 2 - company
companyBtn.onclick = () => {
    companyPopDown.classList.toggle('menu_pop-up_2');
    companyPopDown.classList.toggle('menu_pop-down_2');
    companyArrow.classList.toggle('active');
}
// -----------------------------------mobile menu pop
burger.onclick = () => {
    navPop.classList.toggle('nav_hidden');
    navPop.classList.toggle('nav');
}






