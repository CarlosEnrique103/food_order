import classes from "./classes.module.css";
import { HiShoppingCart } from "react-icons/hi";
import { useContext, useEffect, useState } from "react";
import CartContext from "./../../../store/Cart/cart-context";

const HeaderButton = ({ onClick }) => {
	const [addItemHandle, setAddItemHandle] = useState(false);
	const { items } = useContext(CartContext);

	const totalItems = items.reduce((curr, item) => curr + item.amount, 0);

	const btnClasses = `${classes["header-button"]} ${
		addItemHandle ? classes.bump : ""
	}`;

	useEffect(() => {
		if (!items.length) {
			return;
		}
		setAddItemHandle(true);
		const timer = setTimeout(() => setAddItemHandle(false), 300);
		return () => clearInterval(timer);
	}, [items]);

	return (
		<div className={btnClasses} onClick={onClick}>
			<span className={classes["header-button__icon"]}>
				<HiShoppingCart />
			</span>
			<span className={classes["header-button__text"]}>Your Cart</span>
			<span className={classes["header-button__quantity"]}>{totalItems}</span>
		</div>
	);
};

export default HeaderButton;
