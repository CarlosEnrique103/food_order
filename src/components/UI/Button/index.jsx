import classes from "./classes.module.css";

const Button = ({ children }) => {
	return (
		<button type='button' className={classes.button}>
			{children}
		</button>
	);
};

export default Button;
