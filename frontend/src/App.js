import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import './App.css';
import Form from "./Pages/Form";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Attendees from "./Pages/Attendees";
import Staff from "./Pages/Staff";
import Sponsors from "./Pages/Sponsors";
import Speakers from "./Pages/Speakers";
import Artists from "./Pages/Artists";
import Room from "./Pages/Room";
import Vendor from "./Pages/Vendor";
import Talk from "./Pages/Talk";
import Roundtable from "./Pages/Roundtable";


function App() {
	return <>
		<BrowserRouter>
			<Routes>
				<Route>
					<Route index element={<Home />}></Route>
					<Route path="/home" element={<Home />} />
					<Route path="/register" element={<Form />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/admin/attendee" element={<Attendees />} />
					<Route path="/admin/speaker" element={<Speakers />} />
					<Route path="/admin/artist" element={<Artists />} />
					<Route path="/admin/staff" element={<Staff/>} />
					<Route path="/admin/sponsor" element={<Sponsors/>} />
					<Route path="/admin/talk" element={<Talk/>} />
					<Route path="/admin/roundtable" element={<Roundtable/>} />
					<Route path="/admin/vendor" element={<Vendor/>} />
					<Route path="/admin/room" element={<Room/>} />
				</Route>
			</Routes></BrowserRouter>
	</>
}

export default App;