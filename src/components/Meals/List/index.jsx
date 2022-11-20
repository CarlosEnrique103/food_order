import Card from "../../UI/Card";
import Item from "../Item";
import classes from "./classes.module.css";

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
	{
		id: "m3",
		name: "Barbecue Burger",
		description: "American, raw, meaty",
		price: 12.99,
	},
	{
		id: "m4",
		name: "Green Bowl",
		description: "Healthy...and green...",
		price: 18.99,
	},
];

const List = () => {
	const renderList = DUMMY_MEALS.map((meal) => (
		<Item key={meal.id} {...meal} />
	));
	return (
		<Card className={classes.list}>
			<ul>{renderList}</ul>
		</Card>
	);
};

export default List;
