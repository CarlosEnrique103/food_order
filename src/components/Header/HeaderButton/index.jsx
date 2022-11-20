import classes from "./classes.module.css";
import { HiShoppingCart } from "react-icons/hi";
import Modal from "../../UI/Modal";
import { Fragment, useState } from "react";

const HeaderButton = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openModalHandler = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Fragment>
			{isOpen && <Modal onClick={openModalHandler}>List of products</Modal>}
			<div className={classes["header-button"]} onClick={openModalHandler}>
				<span className={classes["header-button__icon"]}>
					<HiShoppingCart />
				</span>
				<span className={classes["header-button__text"]}>Your Cart</span>
				<span className={classes["header-button__quantity"]}>0</span>
			</div>
		</Fragment>
	);
};

export default HeaderButton;
