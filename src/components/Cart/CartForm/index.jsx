import React, { useRef } from "react";
import Button from "../../UI/Button";
import classes from "./classes.module.css";

const CartForm = ({ onCancel, onSendData }) => {
	const nameInputRef = useRef();
	const addressInputRef = useRef();
	const cityInputRef = useRef();
	const phoneInputRef = useRef();

	const submitHandler = async (event) => {
		event.preventDefault();
		const userInformation = {
			name: nameInputRef.current.value,
			address: addressInputRef.current.value,
			city: cityInputRef.current.value,
			phone: phoneInputRef.current.value,
		};
		await onSendData(userInformation);
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.form_control}>
				<label htmlFor='name'>Name</label>
				<input type='text' id='name' name='name' ref={nameInputRef} required />
			</div>
			<div className={classes.form_control}>
				<label htmlFor='address'>Address</label>
				<input
					type='text'
					id='address'
					name='address'
					ref={addressInputRef}
					required
				/>
			</div>
			<div className={classes.form_control}>
				<label htmlFor='city'>City</label>
				<input type='text' id='city' name='city' ref={cityInputRef} required />
			</div>
			<div className={classes.form_control}>
				<label htmlFor='phone'>Phone</label>
				<input
					type='text'
					min={9}
					max={12}
					id='phone'
					name='phone'
					ref={phoneInputRef}
					required
				/>
			</div>
			<div className={classes.buttons}>
				<Button type='button' kind='secondary' onClick={onCancel}>
					Cancel
				</Button>
				<Button type='submit'>confirm</Button>
			</div>
		</form>
	);
};

export default CartForm;
