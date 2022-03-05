import React from "react";
import { Children } from "react/cjs/react.production.min";
import { Wrapper, Content } from "./Grid.styles";

// children is default prop of React
const Grid = ({ header, children }) => (
	<Wrapper>
		<h1>{header}</h1>
		<Content>{children}</Content>
	</Wrapper>
);
// implicit return

export default Grid;
