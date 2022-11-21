import classes from "./classes.module.css";
import { HiShoppingCart } from "react-icons/hi";

const HeaderButton = ({ onClick }) => {
	return (
		<div className={classes["header-button"]} onClick={onClick}>
			<span className={classes["header-button__icon"]}>
				<HiShoppingCart />
			</span>
			<span className={classes["header-button__text"]}>Your Cart</span>
			<span className={classes["header-button__quantity"]}>0</span>
		</div>
	);
};

export default HeaderButton;
