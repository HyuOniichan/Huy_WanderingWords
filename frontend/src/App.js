import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/baseComponents/Navbar";
import HomeView from "./views/HomeView";
import BlogsView from './views/BlogsView';
import BlogDetailView from './views/BlogDetailView';
import BlogCreateView from './views/BlogCreateView';

function App() {
	return (
		<BrowserRouter>
			<div className="App pt-4">
				<Navbar />
				<div className="container mt-5">
					<Routes>
						<Route path='/' element={<HomeView />} />
						<Route path='/blog' element={<BlogsView />} />
						<Route path='/blog/create' element={<BlogCreateView />} />
						<Route path='/blog/:id' element={<BlogDetailView />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App;
