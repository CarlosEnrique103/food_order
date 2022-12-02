import { useEffect, useState, memo } from "react";
import Card from "../../UI/Card";
import MealItem from "../MealItem";
import classes from "./classes.module.css";
import { uri } from "../../../const/url";

const List = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [responseError, setResponseError] = useState();

	useEffect(() => {
		const fetchMeals = async () => {
			const response = await fetch(`${uri}/meals.json`);
			if (!response.ok) {
				throw new Error("Something went wrong!");
			}
			const data = await response.json();
			if (!data) {
				throw new Error("Data not found...");
			}
			let loadedData = [];
			for (const key in data) {
				loadedData.push({
					id: key,
					name: data[key].name,
					description: data[key].description,
					price: data[key].price,
				});
			}
			setMeals(loadedData);
			setIsLoading(false);
		};

		fetchMeals().catch((error) => {
			setIsLoading(false);
			setResponseError(error.message);
		});
	}, []);

	if (isLoading) {
		return (
			<Card className={classes.list}>
				<p>Loading data...</p>{" "}
			</Card>
		);
	}

	if (responseError) {
		return (
			<Card className={classes.list}>
				<p>{responseError}</p>
			</Card>
		);
	}

	const renderList = meals.map((meal) => <MealItem key={meal.id} {...meal} />);
	return (
		<Card className={classes.list}>
			<ul>{renderList}</ul>
		</Card>
	);
};

export default List;
