import React from "react";
import "./index.css";
import Crud from "./Components/Crud";
import Button from "./Components/Button";
import ArrayMethods from "./Components/ArrayMethods";
import TableComponent from "./Components/TableComponent";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const handleClick = () => {
    alert("Button was clicked!");
  };
  return (
    <div>
      {/* <TableComponent/> */}
      <Crud />
      {/* <Button
        onClick={handleClick} 
        style={{ backgroundColor: "blue", color: "white" }} 
      >
        Click Me!
      </Button> */}  
    </div>
  );
};

export default App;
