import Summary from "./Summary";
import classes from "./classes.module.css";
import List from "./List";

const Meals = () => {
	return (
		<div className={classes.meals}>
			<Summary />
			<List />
		</div>
	);
};

export default Meals;
