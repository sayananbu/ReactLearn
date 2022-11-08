import React from 'react';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import About from '../../pages/About';
import Posts from '../../pages/Posts';

const Navigation = () => {
	return (
		<BrowserRouter >
		<div className="navbar">
			<div className="nav__link">
				<Link to={"/about"}>О чем-то</Link>
			</div>
			<div className="nav__link">
				<Link to={"/posts"}>Посты</Link>
			</div>
			
		</div>
			<Routes>
				<Route path='/posts' element={<Posts/>}/>
				<Route path='/about' element={<About/>}/>
				<Route path='*' element={ <h1>Nothing</h1> }/>
			</Routes>
			
		</BrowserRouter>
	);
}

export default Navigation;
