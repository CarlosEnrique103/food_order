import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import classes from "./classes.module.css";
import CartContext from "../../../store/Cart/cart-context";
import { useContext } from "react";

const CartItem = ({ meal: { id, name, price, amount } }) => {
	const { addItem, removeItem } = useContext(CartContext);

	const addItemHandler = () => {
		addItem({ id, name, price, amount });
	};

	const formatPrice = `$${price.toFixed(2)}`;
	return (
		<li className={classes["cart-item"]}>
			<div className={classes["cart-item__content"]}>
				<div className={classes["cart-item__info"]}>
					<span>{name}</span>
					<span>{formatPrice}</span>
				</div>
				<span className={classes["cart-item__quantity"]}>x{amount}</span>
			</div>
			<div className={classes["cart-item__buttons"]}>
				<button onClick={removeItem.bind(this, id)}>
					<AiOutlineMinus />
				</button>
				<button onClick={addItemHandler}>
					<AiOutlinePlus />
				</button>
			</div>
		</li>
	);
};

export default CartItem;
