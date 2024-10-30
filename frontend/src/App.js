import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/baseComponents/Navbar";
import HomeView from "./views/HomeView";
import BlogView from './views/BlogView';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<div className="container">
					<Routes>
						<Route path='/' element={<HomeView />} />
						<Route path='/blog' element={<BlogView />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App;
