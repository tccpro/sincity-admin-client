import { v4 as uuid } from 'uuid';
import { config } from '../config'
let tempProducts = [];

for (let i = 0; i < 500 ; i++) {
  tempProducts.push({
    id: 'test-product-'+i,
    title: "test-product-" + i,
    description: 'This is a test product descriptoin - ' + i,
    media: `${config.serverDomain}/img/img(${Math.floor(Math.random() * 214) + 1}).png`,
    category: Math.floor(Math.random() * 5) + 1,
    price: (Math.floor(Math.random() * i * 100) + 1) * 10 % 1000,
    manufacture: "Test Manufacture",
    stock: 20,
    status: 'active'
  });  
}

export const products =  tempProducts;
