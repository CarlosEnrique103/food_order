import ReactDOM from "react-dom";
import classes from "./classes.module.css";
import Card from "./../Card";
import { Fragment } from "react";

const Overlay = ({ onClick }) => (
	<div onClick={onClick} className={classes.overlay}></div>
);

const ModalContent = ({ children, className }) => {
	const newClasses = `${classes["modal-content"]} ${className}`;
	return <Card className={newClasses}>{children}</Card>;
};

const Modal = ({ children, onClick, className }) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Overlay onClick={onClick} />,
				document.getElementById("root-backdrop")
			)}
			{ReactDOM.createPortal(
				<ModalContent className={className}>{children}</ModalContent>,
				document.getElementById("root-modal")
			)}
		</Fragment>
	);
};

export default Modal;
