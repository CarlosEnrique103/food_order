import Button from "../../../UI/Button";
import Input from "../../../UI/Input";
import classes from "./classes.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

const ItemForm = () => {
	return (
		<div className={classes["item-form"]}>
			<div className={classes["item-form__amount"]}>
				<span>Amount</span>
				<Input type='number' value={0} />
			</div>
			<div className={classes["item-form__button"]}>
				<Button>
					<AiOutlinePlusCircle />
					Add
				</Button>
			</div>
		</div>
	);
};

export default ItemForm;
