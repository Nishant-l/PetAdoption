import React from "react";
import ReactDOM from "react-dom";
import Pet from './Pet';
import SearchParams from "./SearchParams";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "my-breed" }, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "donkey",
//       animal: "donkey",
//       breed: "donkey",
//     }),
//     React.createElement(Pet, { name: "a1", animal: "donkey", breed: "mamel" }),
//     React.createElement(Pet, { name: "a2", animal: "donkey", breed: "wild" }),
//     React.createElement(Pet, { name: "a3", animal: "donkey", breed: "donkey" }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="Dog" breed="Havanese"/>
      <Pet name="paper" animal="bird" breed="Cockatiel"/>
      <Pet name="Beam" animal="Dog" breed="pompo"/>
      <Pet/> */}
      <SearchParams/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));
