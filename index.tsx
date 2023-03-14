import React from "react";
import { render } from "ink";
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

const Counter = () => {
  return (
	<Gradient name="rainbow">
		<BigText text="Recam"/>
	</Gradient>
  )
};

render(<Counter />);
