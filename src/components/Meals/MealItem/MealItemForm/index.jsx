import Button from "../../../UI/Button";
import Input from "../../../UI/Input";
import classes from "./classes.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

const MealItemForm = ({ id }) => {
	return (
		<form className={classes["item-form"]}>
			<Input
				input={{
					id,
					type: "number",
					min: 1,
					max: 5,
					label: "Amount",
				}}
			/>
			<div className={classes["item-form__button"]}>
				<Button>
					<AiOutlinePlusCircle />
					Add
				</Button>
			</div>
		</form>
	);
};

export default MealItemForm;
