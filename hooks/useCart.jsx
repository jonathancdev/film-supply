import React, { useState } from "react";

export default function useCart() {
  const [cart, setCart] = useState([]);

  const subtotal = cart.reduce((accumulator, { pricePerUnit, quantity }) => {
    return accumulator + pricePerUnit * quantity;
  }, 0);

  const quantity = cart.reduce((accumulator, { quantity }) => {
    return accumulator + quantity;
  }, 0);

  //makes array of uniqueids currently in shopping cart and returns bool for checked item
  const checkItemInCart = (obj) => {
    const idList = cart.map((item) => item.uniqueId);

    return idList.includes(obj.uniqueId);
  };

  const addToCart = (item) => {
    const obj = createCartObject(item);
    const prevCart = cart;
    //if item isn't already in cart, add obj to carte
    if (!checkItemInCart(obj)) {
      prevCart.push(obj);
      setCart([...prevCart]);
    } else {
      //else find the item already in cart and increment it's quantity
      const uniqueId = prevCart.find((item) => item.uniqueId === obj.uniqueId);
      const index = prevCart.indexOf(uniqueId);
      prevCart[index].increment();
      setCart([...prevCart]);
    }
    console.log(cart);
  };

  const decrementItem = (obj) => {
    //if item falls below 1 quantity in cart, remove from cart
    const prevCart = cart;
    const uniqueId = prevCart.find((item) => item.uniqueId === obj.uniqueId);
    const index = prevCart.indexOf(uniqueId);
    if (obj.quantity > 1) {
      prevCart[index].decrement();
      setShoppingCart([...prev]);
    } else if (obj.quantity <= 1) {
      prevCart.splice(index, 1);
      setShoppingCart([...prevCart]);
    }
  };
  const createCartObject = (item) => {
    const obj = {
      uniqueId: item.uniqueId,
      brand: item.brand,
      title: item.title,
      price: item.price,
      image: item.image,
      type: item.type,
      format: item.format,
      iso: item.iso,
      quantity: 1,
      increment() {
        this.quantity += 1;
      },
      decrement() {
        this.quantity -= 1;
      },
    };
    return obj;
  };
  return {
    cart,
    subtotal,
    quantity,
    addToCart,
    decrementItem,
    createCartObject,
  };
}

//  //shopping cart functions
//   const addToCart = (obj) => {
//     const prev = shoppingCart;
//     const item = obj;
//     if (!checkObj(item)) {
//       prev.push(obj);
//       setShoppingCart([...prev]);
//     } else {
//       const findId = prev.find((item) => item.cartId === obj.cartId);
//       const index = prev.indexOf(findId);
//       prev[index].increment();
//       setShoppingCart([...prev]);
//     }
//   };

//   const decrementItem = (obj) => {
//       //if item falls below 1 quantity in cart, remove from cart
//     const prevCart = cart;
//     const uniqueId = prevCart.find((item) => item.uniqueId === obj.uniqueId);
//     const index = prevCart.indexOf(uniqueId);
//     if (obj.quantity > 1) {
//       prevCart[index].decrement();
//       setShoppingCart([...prev]);
//     } else if (obj.quantity <= 1) {
//       prevCart.splice(index, 1);
//       setShoppingCart([...prevCart]);
//     }
//   };
//   const checkObj = (obj) => {
//     const cart = shoppingCart;
//     const idList = cart.map((item) => item.cartId);
//     return idList.includes(obj.cartId);
//   };

// export default function createCartObject(item) {
//     const obj = {
//         uniqueId: item.uniqueId,
//         brand: item.brand,
//         title: item.title,
//         price: item.price,
//         image: item.image,
//         type: item.type,
//         format: item.format,
//         iso: item.iso,
//         quantity: 1,
//         increment() { this.quantity += 1},
//         decrement() { this.quantity -= 1}
//     }
//     return obj
// }
