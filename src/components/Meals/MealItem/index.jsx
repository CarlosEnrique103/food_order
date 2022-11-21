import { useContext } from "react";
import classes from "./classes.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "./../../../store/Cart/cart-context";

const MealItem = ({ id, name, description, price }) => {
	const { addItem } = useContext(CartContext);

	const addItemHandler = (amount) => {
		addItem({ id, name, price, amount });
	};
	return (
		<li key={id} className={classes.item}>
			<div className={classes["item-description"]}>
				<h3>{name}</h3>
				<p>{description}</p>
				<span>{`$${price.toFixed(2)}`}</span>
			</div>
			<MealItemForm id={id} onAddItem={addItemHandler} />
		</li>
	);
};

export default MealItem;
