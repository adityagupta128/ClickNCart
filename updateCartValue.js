const cartValue = document.querySelector("#cartValue");

export const updateCartValue = (cartProducts) =>{
    return (cartValue.innerHTML = `<i class="fa fa-shopping-cart" aria-hidden="true"> ${cartProducts.length} </i>`);
};