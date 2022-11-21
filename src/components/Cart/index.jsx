import { useContext } from "react";
import CartContext from "../../store/Cart/cart-context";
import Button from "../UI/Button";
import Modal from "./../UI/Modal";
import CartItem from "./CartItem";
import classes from "./classes.module.css";

const Cart = ({ onClose }) => {
	const { items, totalAmount } = useContext(CartContext);

	const cartItems = (
		<ul>
			{items.map((meal) => (
				<CartItem key={meal.id} meal={meal} />
			))}
		</ul>
	);
	const formatTotal = `$${totalAmount.toFixed(2)}`;

	return (
		<Modal onClick={onClose} className={classes.cart}>
			{cartItems}
			<div className={classes["cart-amount"]}>
				<span>Total Amount</span>
				<span>{formatTotal}</span>
			</div>
			<div className={classes["cart-buttons"]}>
				<div>
					<Button kind='secondary' onClick={onClose}>
						Close
					</Button>
					{items.length > 0 && (
						<Button kind='primary' onClick={() => console.log("Ordering...")}>
							Order
						</Button>
					)}
				</div>
			</div>
		</Modal>
	);
};

export default Cart;
