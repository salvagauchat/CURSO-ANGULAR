
import{Product, ivaCalculation} from './06-funtion-destruturing';

const shoppingCart: Product[]=[
    {
        description:"Nokia",
        price:100
    },
    {
        description:"Ipad",
        price:200
    }
];

const [total, ivaCalculado] = ivaCalculation({
    products:shoppingCart,
    iva:0.15    
});

console.log('Total', total);
console.log('Iva', ivaCalculado);

