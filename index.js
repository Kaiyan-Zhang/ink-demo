import React from "react";
import { render } from "ink";
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
const Counter = () => {
    return (React.createElement(Gradient, { name: "rainbow" },
        React.createElement(BigText, { text: "Recam" })));
};
render(React.createElement(Counter, null));
