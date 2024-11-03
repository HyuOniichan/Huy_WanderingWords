import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/baseComponents/Navbar";
import HomeView from "./views/HomeView";
import BlogsView from './views/BlogsView';
import BlogDetailView from './views/BlogDetailView';
import BlogCreateView from './views/BlogCreateView';
import UserView from './views/UserView';

export const UserContext = createContext(); 

function App() {

	const [currentUser, setCurrentUser] = useState(); 
	const currentUsername = 'hyuhyu'; 

	useEffect(() => {
		fetch(`http://localhost:8000/v1/user/${currentUsername}`) 
			.then(res => res.json())
			.then(data => setCurrentUser(data))
			.catch(err => console.log(err))
	}, [currentUsername])

	return (
		<UserContext.Provider value={[currentUser, setCurrentUser]}>
			<BrowserRouter>
				<div className="App pt-4">
					<Navbar />
					<div className="container mt-5">
						<Routes>
							<Route path='/' element={<HomeView />} />
							<Route path='/blog' element={<BlogsView />} />
							<Route path='/blog/create' element={<BlogCreateView />} />
							<Route path='/blog/:id' element={<BlogDetailView />} />
							<Route path='/user/:username' element={<UserView />} />
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</UserContext.Provider>
	)
}

export default App;
