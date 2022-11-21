import classes from "./classes.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ id, name, description, price }) => {
	return (
		<li key={id} className={classes.item}>
			<div className={classes["item-description"]}>
				<h3>{name}</h3>
				<p>{description}</p>
				<span>{`$${price.toFixed(2)}`}</span>
			</div>
			<MealItemForm id={id} />
		</li>
	);
};

export default MealItem;
