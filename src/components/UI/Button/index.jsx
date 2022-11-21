import classes from "./classes.module.css";

const Button = ({ onClick, children, type = "button", kind = "primary" }) => {
	const newClasses = `${classes.button} ${classes[`button-${kind}`]}`;
	return (
		<button onClick={onClick} type={type} className={newClasses}>
			{children}
		</button>
	);
};

export default Button;
