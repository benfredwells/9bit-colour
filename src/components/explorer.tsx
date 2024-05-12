import { useState } from "react";

import "./explorer.css";
import ColourSquare from "./colourSquare";

function Explorer() {
  const [green, setGreen] = useState(8);

  const redValues: Array<number> = Array.from(Array(8).keys());
  const blueValues: Array<number> = Array.from(Array(8).keys());

  const colourComponentForValue = (value: number) => {
    let num = value << 5;
    if (num != 0) {
      num |= 0b00011111;
    }
    let result = num.toString(16);
    if (result.length == 1) {
      result = "0" + result;
    }
    return result;
  };

  const colourForValues = (red: number, blue: number) => {
    const result =
      "#" +
      colourComponentForValue(red) +
      colourComponentForValue(green) +
      colourComponentForValue(blue);
    console.log(result);
    return result;
  };

  return (
    <>
      <div className="grid">
        {redValues.map((red) => {
          return (
            <div key={red} className="row">
              {blueValues.map((blue) => {
                return (
                  <ColourSquare
                    key={blue}
                    colour={colourForValues(red, blue)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <h1>9 bit colours</h1>
      <h2>An explorer</h2>
      <div className="card">
        <button onClick={() => setGreen((green) => green + 1)}>Up</button>
        Green: {green}
        <button onClick={() => setGreen((green) => green - 1)}>Down</button>
      </div>
    </>
  );
}

export default Explorer;
