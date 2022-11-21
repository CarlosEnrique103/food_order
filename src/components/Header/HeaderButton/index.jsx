import classes from "./classes.module.css";
import { HiShoppingCart } from "react-icons/hi";
import { useContext } from "react";
import CartContext from "./../../../store/Cart/cart-context";

const HeaderButton = ({ onClick }) => {
	const { items } = useContext(CartContext);

	const totalItems = items.reduce((curr, item) => curr + item.amount, 0);

	return (
		<div className={classes["header-button"]} onClick={onClick}>
			<span className={classes["header-button__icon"]}>
				<HiShoppingCart />
			</span>
			<span className={classes["header-button__text"]}>Your Cart</span>
			<span className={classes["header-button__quantity"]}>{totalItems}</span>
		</div>
	);
};

export default HeaderButton;
