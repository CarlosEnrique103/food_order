import classes from "./classes.module.css";

const Card = ({ className, children, onClick }) => {
	const newClass = `${classes.card} ${className}`;
	return (
		<div className={newClass} onClick={onClick}>
			{children}
		</div>
	);
};

export default Card;
