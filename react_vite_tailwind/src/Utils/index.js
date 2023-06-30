/**
 * This function calculates total price of a new order
 * @param {Array} products cartProducts: Array of objects 
 * @returns {Number} Total price
 */
export const totalPrice = (products) => {
    let totalPrice = 0
    products.forEach(product => totalPrice += product.price)
    return totalPrice
}