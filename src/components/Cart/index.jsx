import Button from "../UI/Button";
import Modal from "./../UI/Modal";
import CartItem from "./CartItem";
import classes from "./classes.module.css";

const Cart = ({ onClose }) => {
	const DUMMY_MEALS = [
		{
			id: "m1",
			name: "Sushi",
			description: "Finest fish and veggies",
			price: 22.99,
		},
		{
			id: "m2",
			name: "Schnitzel",
			description: "A german specialty!",
			price: 16.5,
		},
	];

	const cartItems = (
		<ul>
			{DUMMY_MEALS.map((meal) => (
				<CartItem key={meal.id} meal={meal} />
			))}
		</ul>
	);
	const formatPrice = `$${(35, 76).toFixed(2)}`;

	return (
		<Modal onClick={onClose} className={classes.cart}>
			{cartItems}
			<div className={classes["cart-amount"]}>
				<span>Total Amount</span>
				<span>{formatPrice}</span>
			</div>
			<div className={classes["cart-buttons"]}>
				<div>
					<Button kind='secondary' onClick={onClose}>
						Close
					</Button>
					<Button kind='primary' onClick={() => console.log("Ordering...")}>
						Order
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default Cart;
