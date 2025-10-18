/*пример    <article class="recommended-good">
                <img src="./images/cabel-1.png" />
                <p>Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570</p>
            </article>*/

const allGoods = window.innerWidth > 576 ? [
  { img: "./images/cabel-1.png", text: "Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570", length: "50" },
  { img: "./images/cabel-row.png", text: "Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)", length: "0" },
  { img: "./images/cabel-2.png", text: "Стальной канат для лифта GRS 8X19S-NFC 1570", length: "50" },
  { img: "./images/cabel-1.png", text: "Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570", length: "50" },
  { img: "./images/cabel-1.png", text: "Стальной канат для лифта GRS 8X19W-CWC 1570", length: "50" },
  { img: "./images/cabel-row.png", text: "Купить плоский тяговый ремень для лифта GRS AAA717AJ1(8 кордов)", length: "50" }
] : [
  { img: "./images/cabel-1.png", text: "Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570", length: "50" },
  { img: "./images/cabel-row.png", text: "Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)", length: "0" },
  { img: "./images/cabel-2.png", text: "Стальной канат для лифта GRS 8X19S-NFC 1570", length: "50" },
  { img: "./images/cabel-1.png", text: "Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570", length: "50" }
];
const goodsList = document.getElementsByClassName('recommended-goods-section')[0];
let fullfilledGoodsList="<h1 class='recommended-goods-h1'>Рекомендуемое оборудование</h1><div class='recommended-goods' role='list'>";
for (let good of allGoods) {
    fullfilledGoodsList += `<div class='recommended-good'><img class='good-img' src='${good.img}' /><div class='good-content'><p class="good-description">${good.text}</p><div class="good-amount"><img class='amount-img' alt='${good.text}' src='./images/check.svg'/ style='background-color:${good.length > 0 ? '#4FCF36' : '#EE753E'}'>${good.length > 0 ? 'В наличии '+String(good.length)+' м.'  : 'Под заказ'}</div><button class='good-more'>Подробнее</button></div></div>`;
}
fullfilledGoodsList += '</div>'
goodsList.innerHTML=fullfilledGoodsList;
