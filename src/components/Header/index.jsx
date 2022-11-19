import { Fragment } from "react";
import foodBackground from "./../../assets/header.jpg";
import HeaderButton from "./HeaderButton";
import classes from "./classes.module.css";

const Header = () => {
	return (
		<Fragment>
			<div className={classes.header}>
				<h1>ReactJS Food</h1>
				<HeaderButton />
			</div>

			<div className={classes["header-image"]}>
				<img src={foodBackground} alt='Portal images' />
			</div>
		</Fragment>
	);
};

export default Header;
