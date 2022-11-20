import classes from "./classes.module.css";
import ItemForm from "./ItemForm";

const Item = ({ id, name, description, price }) => {
	return (
		<li key={id} className={classes.item}>
			<div className={classes["item-description"]}>
				<h3>{name}</h3>
				<p>{description}</p>
				<span>{`$${price.toFixed(2)}`}</span>
			</div>
			<ItemForm />
		</li>
	);
};

export default Item;
