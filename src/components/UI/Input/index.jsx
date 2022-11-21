import classes from "./classes.module.css";

const Input = ({ input }) => {
	return (
		<div className={classes.input}>
			<label htmlFor={input.id}>{input.label}</label>
			<input {...input} />
		</div>
	);
};

export default Input;
