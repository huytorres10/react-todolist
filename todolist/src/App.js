import React from "react";
import "./App.css";
import ToDo from "./ToDo";
import TodoDone from "./TodoDone";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Router>
						<div>
							<ul>
								<li>
									<Link to="/">Home - Todo List</Link>
								</li>
								<li>
									<Link to="/contact">Contact</Link>
								</li>
								<li>
									<Link to="/about">About</Link>
								</li>
							</ul>
						</div>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="contact" element={<Contact />} />
							<Route path="about" element={<About />} />
						</Routes>
					</Router>
				</header>
			</div>
		);
	}
}

export default App;
