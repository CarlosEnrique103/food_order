import ReactDOM from "react-dom";
import classes from "./classes.module.css";
import Card from "./../Card";
import { Fragment } from "react";

const Overlay = ({ onClick }) => (
	<div onClick={onClick} className={classes.overlay}></div>
);

const ModalContent = ({ children }) => (
	<Card className={classes["modal-content"]}>{children}</Card>
);

const Modal = ({ children, onClick }) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Overlay onClick={onClick} />,
				document.getElementById("root-backdrop")
			)}
			{ReactDOM.createPortal(
				<ModalContent>{children}</ModalContent>,
				document.getElementById("root-modal")
			)}
		</Fragment>
	);
};

export default Modal;
