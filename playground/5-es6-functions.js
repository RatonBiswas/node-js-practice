//Object property shortHand

const name = 'Raton'
const userAge = 21
const user = {
 name: name,
 age: userAge,
  location:'Chandpur'
}
console.log(user);

//object destrucring

const product = {
label: 'Red network',
price:3,
stock:20,
salePrice:undefined,
rating:4.3
}
//const label = product.label;
//const stock = product.stock;

const {label:productLabel,stock,rating=5} = product;
console.log(productLabel);
console.log(stock);
console.log(rating);



const transaction = (type,{label,stock})=>{
	console.log(type,label,stock);
}
transaction('order',product);