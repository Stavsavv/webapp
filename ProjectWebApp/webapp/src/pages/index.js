import React from 'react';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);


const Home = () => {
	// const [isOpen, setIsOpen] = useState(false)

	// const toggle = () => {
	// 	setIsOpen(!isOpen)
	// }
	return (
		<>
			
		</>
	)
}

export default Home