import classes from "./classes.module.css";
import orderImage from "../../../assets/order_confirm.svg";
import Button from "../../UI/Button";

const ConfirmOrder = ({ onDone }) => {
	return (
		<div className={classes.confirm_order}>
			<img src={orderImage}></img>
			<div className={classes.content}>
				<p>Your order is confirm successfully</p>
				<Button onClick={onDone} kind='secondary'>
					Done
				</Button>
			</div>
		</div>
	);
};

export default ConfirmOrder;
