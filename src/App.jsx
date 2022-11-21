import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";

const App = () => {
	const [shownCart, setShownCart] = useState(false);
	const changeShownCartHandler = () => setShownCart(!shownCart);

	return (
		<div className='App'>
			{shownCart && <Cart onClose={changeShownCartHandler} />}
			<Header onShownCart={changeShownCartHandler} />
			<main>
				<Meals />
			</main>
		</div>
	);
};

export default App;
