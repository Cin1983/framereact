import React, { useState } from "react";
import "./SearchBar.css";

const products = ["tooth paste", "tooth brush", "mouth wash", "dental floss"];

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const [hideMyText, setHideMyText] = useState("");

  const hideSomeOfText = () => {
    alert("Hide some of text");
  };

  const handleInputChange = (e) => {};

  const handleClearClick = (e) => {
    setSearchValue("");
  };

  // document.write(
  //   products.map((product) => {
  //     return `<li>${product}</li>`;
  //   })
  // );

  // document.write(
  //   products.filter(product =>{
  //     return product.includes("wash");
  //   })
  // )

  const shouldDisplayButton = searchValue.length > 0;

  console.log(shouldDisplayButton);

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
      ></input>
      {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}
      <div>
        <br />
        <div className="giveMyButtonSpace">
          <input className="myField" type="text" value={hideMyText}></input>
          <button className="myButton" onClick={hideSomeOfText}>
            clear
          </button>
        </div>
      </div>
      <ul>
        {products.map((product) => {
          return <li key={product}>{product}</li>;
        })}

        {/* {products.filter((product) => {
          return product.includes("mouth");
        })} */}
      </ul>
    </div>
  );
}

export default SearchBar;
