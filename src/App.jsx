import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/UI/Modal";

const App = () => {
	return (
		<div className='App'>
			<Header />
			<main>
				<Meals />
			</main>
		</div>
	);
};

export default App;
