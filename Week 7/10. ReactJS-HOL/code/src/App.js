import React from "react";
import "./App.css"; // Import the styles

function App() {
  // Step 1: Simple heading stored in a variable
  const element = "Office Space";

  // Step 2: JSX element to show the image
  const jsxAttr = (
    <img
      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
      width="25%"
      height="25%"
      alt="Office Space"
    />
  );

  // Step 3: Create an object with office details
  const ItemName = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai",
  };

  // Step 4: Apply conditional styling to Rent using logic
  let colors = [];
  if (ItemName.Rent <= 60000) {
    colors.push("textRed");
  } else {
    colors.push("textGreen");
  }

  // Step 5: JSX structure to render the data
  return (
    <div style={{ marginLeft: "30px", fontFamily: "Arial" }}>
      <h1>{element}, at Affordable Range</h1>
      {jsxAttr}

      <h1>Name: {ItemName.Name}</h1>
      <h3 className={colors.join(" ")}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>
    </div>
  );
}

export default App;
