import { getProductById } from "./Menu.js";

export async function addToCart(id) {
  const product = await getProductById(id);
  const results = app.store.cart.filter((cartProduct) => cartProduct.id == id);
  if (results.length >= 1) {
    app.store.cart = app.store.cart.map((cartItem) =>
      cartItem.product.id == id
        ? { ...cartItem, quantity: cartItem.quantity++ }
        : cartItem
    );
  } else {
    app.store.cart = [...app.store.cart, { product, quantity: 1 }];
  }
}

export function removeFromCart(id) {
  app.store.cart = app.store.cart.filter((item) => item.product.id != id);
}
