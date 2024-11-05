import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar, Footer, Toast } from './components';
import HomeView from "./views/HomeView";
import BlogsView from './views/BlogsView';
import BlogDetailView from './views/BlogDetailView';
import BlogCreateView from './views/BlogCreateView';
import BlogEditView from './views/BlogEditView'; 
import BlogTrashView from './views/BlogTrashView'; 
import UserView from './views/UserView';

export const BackendContext = createContext(); 
export const UserContext = createContext(); 
export const ToastContext = createContext(); 

function App() {

	const backendLink = `https://wanderingwords-server.onrender.com/v1`; 

	const [currentUser, setCurrentUser] = useState(); 
	const currentUsername = 'hyuhyu'; 
	const [toast, setToast] = useState([])

	useEffect(() => {
		fetch(`${backendLink}/user/${currentUsername}`) 
			.then(res => res.json())
			.then(data => setCurrentUser(data))
			.catch(err => console.log(err))
	}, [currentUsername])

	function handleToast(type = 'warn', header = '?', msg = '???') {
		const toastId = Date.now(); 
		setToast(prev => [
			...prev, 
			{
				id: toastId, 
				type, 
				header, 
				msg, 
			}
		])
		setTimeout(() => {
			setToast(prev => {
				const cur = prev.filter(e => e.id !== toastId); 
				return cur;
			})
		}, 5000)
	}

	if (toast.length === 3) handleToast('warn', 'warning', 'Please slow down');

	return (
		<BackendContext value={backendLink}>
			<UserContext.Provider value={currentUser}>
				<ToastContext.Provider value={handleToast}>
					<BrowserRouter>
						<div className="App pt-4">
							<Navbar />
							<div className="container mt-5">
								<Routes>
									<Route path='/' element={<HomeView />} />
									<Route path='/blog/create' element={<BlogCreateView />} />
									<Route path='/blog/trash' element={<BlogTrashView />} />
									<Route path='/blog/:id/edit' element={<BlogEditView />} />
									<Route path='/blog/:id' element={<BlogDetailView />} />
									<Route path='/blog' element={<BlogsView />} />
									<Route path='/user/:username' element={<UserView />} />
								</Routes>
							</div>
							<Footer />
							<Toast toastList={toast} />
						</div>
					</BrowserRouter>
				</ToastContext.Provider>
			</UserContext.Provider>
		</BackendContext>
	)
}

export default App;
