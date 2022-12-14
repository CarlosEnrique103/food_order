import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import CartProvider from "./store/Cart/CartProvider";

const App = () => {
	const [shownCart, setShownCart] = useState(false);
	const changeShownCartHandler = () => setShownCart(!shownCart);

	return (
		<CartProvider>
			{shownCart && <Cart onClose={changeShownCartHandler} />}
			<Header onShownCart={changeShownCartHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
};

export default App;
