import { formatPrice } from '../utils';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { useCartContext } from '../Context/CartCOntext';
const CartItem = ({ item }) => {
  const { id, color, amount, image, price, maxAmount, name } = item;
  const { toggleAmount, removeItem } = useCartContext();
  return (
    <article className="cart-items">
      <div className="item-info">
        <img src={image} alt={name} className="cart-img" />
        <div>
          <p>{name}</p>
          <p
            className={'color-btn active-color'}
            style={{ background: `${color}` }}
          ></p>
          <p className="price temp-price">{formatPrice(price)}</p>
        </div>
      </div>
      <div className="price-container">
        <p className="price">{formatPrice(price)}</p>
      </div>
      <div className="cart-amount">
        <button onClick={() => toggleAmount('dec', id, maxAmount)}>
          <FaMinus />
        </button>
        <p>{amount}</p>
        <button onClick={() => toggleAmount('inc', id, maxAmount)}>
          <FaPlus />
        </button>
      </div>
      <div className="subtotal-container">
        <p className="price-container price">{formatPrice(amount * price)}</p>
        <button className="btn btn-danger" onClick={() => removeItem(id)}>
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
