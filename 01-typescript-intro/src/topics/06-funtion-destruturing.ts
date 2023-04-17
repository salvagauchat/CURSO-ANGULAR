export interface Product {
  description: string;
  price: number;
}
const phone: Product = {
  description: "Nokia A1",
  price: 150.0,
};

const tablet: Product = {
  description: "Ipad Air",
  price: 250.0,
};

interface IvaCalculationOption {
  iva: number;
  products: Product[];
}

// function ivaCalculation(options:IvaCalculationOption):[number,number]{
// function ivaCalculation({iva, products}: IvaCalculationOption): [number, number] {
export function ivaCalculation(options: IvaCalculationOption): [number, number] {
  
    const {iva, products}=options;
    let total = 0;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * iva];
}

const shoppingCart = [phone, tablet];
const iva = 0.15;

const [total, ivaCalculado] = ivaCalculation({
  products: shoppingCart,
  iva,
});

// console.log("Total", total);
// console.log("Iva", ivaCalculado);

