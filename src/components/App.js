import Todos from "./todos/Todos";
import { TodosProvider } from "./todos/TodosContext";

function App() {
	return (
		<div className="App">
			<TodosProvider>
				<Todos />
			</TodosProvider>
		</div>
	);
}

export default App;
