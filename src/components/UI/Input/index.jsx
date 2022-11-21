import { forwardRef } from "react";
import classes from "./classes.module.css";

const Input = forwardRef(({ input }, ref) => {
	return (
		<div className={classes.input}>
			<label htmlFor={input.id}>{input.label}</label>
			<input {...input} ref={ref} />
		</div>
	);
});

export default Input;
