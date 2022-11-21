import { useRef } from "react";
import Button from "../../../UI/Button";
import Input from "../../../UI/Input";
import classes from "./classes.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

const MealItemForm = ({ id, onAddItem }) => {
	const inputRef = useRef();

	const onSubmitHandler = (event) => {
		event.preventDefault();
		const amount = +inputRef.current.value;
		onAddItem(amount);
		inputRef.current.value = "";
	};

	return (
		<form className={classes["item-form"]} onSubmit={onSubmitHandler}>
			<Input
				ref={inputRef}
				input={{
					id,
					type: "number",
					min: 1,
					max: 5,
					label: "Amount",
				}}
			/>
			<div className={classes["item-form__button"]}>
				<Button type='submit'>
					<AiOutlinePlusCircle />
					Add
				</Button>
			</div>
		</form>
	);
};

export default MealItemForm;
