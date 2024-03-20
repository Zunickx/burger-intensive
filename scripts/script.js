const mainActionButton = document.getElementById('main-action-button');

mainActionButton.addEventListener('click', () => {
    const smoothScrolling = document.getElementById('products').scrollIntoView({ behavior: "smooth" });
})

const links = document.querySelectorAll('.menu-item > a'); //находим все ссылки в меню навигации

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({ behavior: "smooth" });
    })
}

const buttonsAction = document.getElementsByClassName('product-button'); //находим все кнопки "Заказать"

for (let i = 0; i < buttonsAction.length; i++) {
    buttonsAction[i].addEventListener('click', () => {
        document.getElementById('order').scrollIntoView({ behavior: "smooth" });
    })
}

//валидация формы

const burger = document.getElementById('burger');
const nameUser = document.getElementById('name');
const phone = document.getElementById('phone');
const orderAction = document.getElementById('order-action');

orderAction.addEventListener('click', () => {
    let hasError = false;

    [burger, nameUser, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = "red";
            hasError = true;
        } else {
            item.parentElement.style.background = "";
        }
    });

    if (!hasError) {
        [burger, nameUser, phone].forEach(item => {
            item.value = "";
        });
        alert("Спасибо за заказ! Мы скоро свяжемся с Вами.");
    }
})

// document.getElementById('order-action').onclick = function() {
//     let hasError = false;

//     [burger, nameUser, phone].forEach(item => {
//         if (!item.value) {
//             item.parentElement.style.background = "red";
//             hasError = true;
//         } else {
//             item.parentElement.style.background = "";
//         }
//     });

//     if (!hasError) {
//         [burger, nameUser, phone].forEach(element => {
//             item.value = "";
//         });
//         alert("Спасибо за заказ! Мы скоро свяжемся с Вами.");
//     }
// }


//Изменение курсов валют

const prices = document.getElementsByClassName('products-item-price');

const changeCurrency = document.getElementById('change-currency');

changeCurrency.addEventListener('click', (e) => {
    let currentCurrency = e.target.innerText;

    let newCurrency = "$";
    let coefficient = 1;

    if (currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = 92;
    } else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = 3;
    } else if (currentCurrency === "BYN") {
        newCurrency = "€";
        coefficient = 0.9;
    } else if (currentCurrency === "€") {
        newCurrency = "¥";
        coefficient = 6.9;
    }

    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute('data-base-price') * coefficient).toFixed(1) + " " + newCurrency ;
    }
})