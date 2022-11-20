import { Fragment } from "react";
import foodBackground from "./../../assets/header.jpg";
import HeaderButton from "./HeaderButton";
import classes from "./classes.module.css";
import Meal from "./../../assets/icon/food.svg";
const Header = () => {
	return (
		<Fragment>
			<div className={classes.header}>
				<div className={classes["header-icon"]}>
					<img src={Meal} alt='Icon meal' />
					<h1>ReactJS Food</h1>
				</div>

				<HeaderButton />
			</div>

			<div className={classes["header-image"]}>
				<img src={foodBackground} alt='Portal images' />
			</div>
		</Fragment>
	);
};

export default Header;
