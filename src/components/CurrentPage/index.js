import React from "react";

import Contact from "../Contact";
import About from "../About";
import Portfolio from "../Work";
function CurrentPage(props) {
	var whoToDisplay;

	if (props.currentPageState === "work") {
		whoToDisplay = <Portfolio />;
	} else if (props.currentPageState === "about") {
		whoToDisplay = <About />;
	} else if (props.currentPageState === "contact") {
		whoToDisplay = <Contact />;
	}

	return <section>{whoToDisplay}</section>;
}

export default CurrentPage;