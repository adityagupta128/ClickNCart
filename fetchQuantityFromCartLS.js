import { getCartProductFromLS } from "./getCartProducts"

export const fetchQuantityFromCartLS = (id,price) => {
    let cartProducts = getCartProductFromLS();

    let existingProduct = cartProducts.find((curProd) => curProd.id === id);

    let quantity = 1;
    if(existingProduct){
        quantity = Number(existingProduct.quantity);
        price = existingProduct.price;
    }

    return {quantity,price};
}