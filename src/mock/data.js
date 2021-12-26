import { countBy, random } from 'lodash';
const Products = [
    'Shirt',
    'Jeans',
    'Shoes',
    'Socks'
];
const Colors = [
    'red',
    'blue',
    'white',
    'green',
    'orange'];

let lastIndex = 0;
function getProductName() {
    const product = Products[random(0, Products.length - 1)]
    const color = Colors[random(0, Colors.length - 1)]
    return `${product} ${color}`;
}
function getProduct() {
    return{
        id:lastIndex++,
        title:getProductName(),
        price:random(99, 999)
    }
}
function getProductList(count) {
    //return new Array(count).map(()=> getProduct());
    let products=[];
    for (let i=0; i<count; i++){
        products.push(getProduct());
    }

    return products;
}
export default getProductList;