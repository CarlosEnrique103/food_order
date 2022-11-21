import { useReducer } from "react";
import CartContext from "./cart-context";

const initialState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD_ITEM") {
		const updatedTotal =
			state.totalAmount + action.payload.amount * action.payload.price;
		let itemFindIndex = state.items.findIndex(
			(item) => item.id === action.payload.id
		);
		let itemFind = state.items[itemFindIndex];
		let updatedItems;

		if (itemFind) {
			const updatedItem = {
				...itemFind,
				amount: itemFind.amount + action.payload.amount,
			};
			updatedItems = [...state.items];
			updatedItems[itemFindIndex] = updatedItem;
		} else {
			updatedItems = [...state.items, action.payload];
		}

		return {
			totalAmount: updatedTotal,
			items: updatedItems,
		};
	}
	if (action.type === "REMOVE_ITEM") {
		let itemFindIndex = state.items.findIndex(
			(item) => item.id === action.payload
		);
		let itemFind = state.items[itemFindIndex];
		let updatedItems;

		if (itemFind?.amount === 1) {
			updatedItems = state.items.filter((item) => item.id !== action.payload);
		} else {
			const updatedItem = {
				...itemFind,
				amount: itemFind.amount - 1,
			};
			updatedItems = [...state.items];
			updatedItems[itemFindIndex] = updatedItem;
		}

		const updatedTotal = state.totalAmount - itemFind.price;

		return {
			totalAmount: updatedTotal,
			items: updatedItems,
		};
	}
	return state;
};

const CartProvider = ({ children }) => {
	const [cartState, dispatchCart] = useReducer(cartReducer, initialState);
	const addItemHandler = (item) => {
		dispatchCart({ type: "ADD_ITEM", payload: item });
	};

	const removeItemHandler = (id) => {
		console.log({ id });
		dispatchCart({ type: "REMOVE_ITEM", payload: id });
	};

	const value = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
