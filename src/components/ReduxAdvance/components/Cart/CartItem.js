import classes from './CartItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../slice/cartSlice';
function CartItem(props) {
  const cartItem = useSelector((state) => state.cartItem);
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();
  const handleRemoveClick = () => {
    dispatch(cartActions.remove(id));
  };
  const handleAddClick = () => {
    dispatch(
      cartActions.add({
        id,
        title,
        price,
      })
    );
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)} <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemoveClick}>-</button>
          <button onClick={handleAddClick}>+</button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
