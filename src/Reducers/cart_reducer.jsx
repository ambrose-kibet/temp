import {
  COUNT_CART_TOTALS,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  ADD_TO_CART,
} from "../Actions";
const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;

    const tempItem = state.cart.find((i) => i.id === id + color);
    if (tempItem) {
      let tempCart = state.cart.map((i) => {
        const { maxAmount, id } = i;

        if (id === tempItem.id) {
          let tempAmount = Number(amount) + i.amount;
          if (tempAmount > maxAmount) {
            tempAmount = maxAmount;
          }

          return { ...i, amount: tempAmount };
        }
        return i;
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        maxAmount: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { option, id, stock } = action.payload;
    let tempCart = state.cart.map((i) => {
      if (option === "dec" && i.id === id) {
        let tempAmount = i.amount - 1;
        if (tempAmount < 1) {
          tempAmount = 1;
        }
        return { ...i, amount: tempAmount };
      } else if (option === "inc" && i.id === id) {
        let tempAmount = i.amount + 1;
        if (tempAmount > stock) {
          tempAmount = stock;
        }
        return { ...i, amount: tempAmount };
      } else {
        return i;
      }
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === REMOVE_CART_ITEM) {
    let tempCart = state.cart.filter((i) => i.id !== action.payload);
    return { ...state, cart: tempCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === COUNT_CART_TOTALS) {
    let { total_items, total_amount } = state.cart.reduce(
      (total, item) => {
        const tempTotal = item.amount * item.price;
        total.total_items += item.amount;
        total.total_amount += tempTotal;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );
    return { ...state, total_items, total_amount };
  }
  throw new Error(`no Matching '${action.type}' action type`);
};

export default cart_reducer;
