import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	BrowserRouter,
} from "react-router-dom";

import Form from "./Pages/Form";
import Home from "./Pages/Home";


function App() {
	return <>
	<BrowserRouter>
	<Routes>
		<Route>
			<Route index element={<Home/>}></Route>
			<Route path="/home" element={<Home />} />
			<Route path="/register" element={<Form />} />
		</Route>
		</Routes></BrowserRouter>
	</>
}
	
	export default App;