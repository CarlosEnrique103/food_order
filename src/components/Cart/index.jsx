import React, { useContext, useState } from "react";
import CartContext from "../../store/Cart/cart-context";
import Button from "../UI/Button";
import Modal from "./../UI/Modal";
import CartForm from "./CartForm";
import CartItem from "./CartItem";
import classes from "./classes.module.css";
import ConfirmOrder from "./ConfirmOrder";
import { uri } from "../../const/url";

const Cart = ({ onClose }) => {
	const { items, totalAmount, clearItems } = useContext(CartContext);
	const [showCartForm, setShowCartForm] = useState(false);
	const [confirmOrder, setConfirmOrder] = useState(false);

	const cartItems = (
		<ul>
			{items.map((meal) => (
				<CartItem key={meal.id} meal={meal} />
			))}
		</ul>
	);

	console.log({ uri });
	const sendOrderHandler = () => {
		setShowCartForm(true);
	};

	const fetchSendOrder = async (order) => {
		await fetch(`${uri}/orders.json`, {
			method: "POST",
			body: JSON.stringify(order),
		});
	};

	const sendDataHandler = async (userInformation) => {
		const order = {
			...userInformation,
			items: items,
		};
		await fetchSendOrder(order);
		clearItems();
	};

	const onDoneHandler = () => {
		clearItems();
		onClose();
	};

	const formatTotal = `$${totalAmount.toFixed(2)}`;

	const renderCartButtons = (
		<div className={classes["cart-buttons"]}>
			<div>
				<Button kind='secondary' onClick={onClose}>
					Close
				</Button>
				{items.length > 0 && (
					<Button kind='primary' onClick={sendOrderHandler}>
						Order
					</Button>
				)}
			</div>
		</div>
	);

	const modalContent = (
		<React.Fragment>
			{cartItems}
			<div className={classes["cart-amount"]}>
				<span>Total Amount</span>
				<span>{formatTotal}</span>
			</div>
			{showCartForm && (
				<CartForm onCancel={onClose} onSendData={sendDataHandler} />
			)}
			{!showCartForm && renderCartButtons}
		</React.Fragment>
	);

	return (
		<Modal onClick={onClose} className={classes.cart}>
			{confirmOrder && <ConfirmOrder onDone={onDoneHandler} />}
			{!confirmOrder && modalContent}
		</Modal>
	);
};

export default Cart;
