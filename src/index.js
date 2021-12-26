import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";

/*const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 100 },
    { title: 'Jeans', price: 200 },
    { title: 'Shoes', price: 250 },
]*/
const productList = getProductList(20);
//const $goodsList = document.querySelector('.goods-list');
/*const renderGoodsItem = ({ title, price }) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};
const renderGoodsList = (list = goods) => {
    let goodsList = list.map((item) => { return renderGoodsItem(item) }).join('');
    $goodsList.insertAdjacentHTML('beforeend', goodsList);
};*/
renderGoodsList(productList);