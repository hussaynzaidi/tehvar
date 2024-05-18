import React from "react";
// import { useState, useEffect } from "react";
// import axios from 'axios';
// import {
// 	BrowserRouter as Router,
// 	Routes,
// 	Route,
// } from "react-router-dom";

import Form from "./Pages/Form";

function App() {
	return <><Form/></>
}
	
	export default App;
	
	//const [message, setMessage] = useState("");
	// useEffect(() => {~
	// 	axios.get('http://localhost:8000/all/')
	// 	.then((res) => {
	// 	  console.log(res.data); // Log the response data
	// 	  setMessage(res.data); // Set the response data to the state
	// 	})
	// 	.catch((err) => {
	// 	  console.error('Error fetching data:', err);
	// 	});
	//   }, []);
	
	//   const hrStyle = {
	// 	color: "grey",
	// 	margin: "50px",
	// 	textAlign: "left" // Align text to the left
	//   };
	  
	//   return (
	// 	<div className="App">
	// 	  <h2 style={hrStyle}>Here's your registration data {message.fname} </h2>
	// 	  <div>
	// 		Full Name: {message.fname} {message.lname} <br />
	// 		Provided Email: {message.email}
	// 	  </div>
	// 	</div>
	//   );



// 	useEffect(() => {
// 	  axios.get('http://localhost:8000/xxx')
// 	  .then((res) => {
// 		console.log(res.data); // Log the response data
// 		setMessage(res.data); // Set the response data to the state
// 	  })
// 	  .catch((err) => {
// 		console.error('Error fetching data:', err);
// 	  });
// 	}, []);

// 	return (
// 		<Router>
// 			<Navbar />
// 			<Routes>
// 				<Route exact path="/" element={<Home />} />
// 				<Route path="/about" element={<About />} />
// 				<Route
// 					path="/contact"
// 					element={<Contact />}
// 				/>
// 				<Route path="/blogs" element={<Blogs />} />
// 				<Route
// 					path="/sign-up"
// 					element={<SignUp />}
// 				/>
// 			</Routes>
// 		</Router>
// 	);
// }

// export default App;
