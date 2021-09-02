import React from "react";
import ReactDOM from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-breed" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "donkey",
      animal: "donkey",
      breed: "donkey",
    }),
    React.createElement(Pet, { name: "a1", animal: "donkey", breed: "mamel" }),
    React.createElement(Pet, { name: "a2", animal: "donkey", breed: "wild" }),
    React.createElement(Pet, { name: "a3", animal: "donkey", breed: "donkey" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
