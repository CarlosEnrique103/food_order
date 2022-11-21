import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Button from "./../../UI/Button";
import classes from "./classes.module.css";

const CartItem = ({ meal: { name, price } }) => {
	const formatPrice = `$${price.toFixed(2)}`;
	return (
		<li className={classes["cart-item"]}>
			<div className={classes["cart-item__content"]}>
				<div className={classes["cart-item__info"]}>
					<span>{name}</span>
					<span>{formatPrice}</span>
				</div>
				<span className={classes["cart-item__quantity"]}>x1</span>
			</div>
			<div className={classes["cart-item__buttons"]}>
				<button>
					<AiOutlineMinus />
				</button>
				<button>
					<AiOutlinePlus />
				</button>
			</div>
		</li>
	);
};

export default CartItem;
