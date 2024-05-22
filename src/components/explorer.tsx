import { useState } from "react";

import "./explorer.css";
import ColourSquare from "./colourSquare";

function Explorer() {
  const [green, setGreen] = useState(0);

  const colourValues: Array<number> = Array.from(Array(8).keys());

  const from3bitTo8 = (value: number): number => {
    let num = value << 5;
    if (num != 0) {
      num |= 0b00011111;
    }
    return num;
  };

  const colourForGridValues = (red: number, blue: number) => {
    const result =
      "rgb(" +
      from3bitTo8(red) +
      "," +
      from3bitTo8(green) +
      "," +
      from3bitTo8(blue) +
      ")";
    console.log(result);
    return result;
  };

  const colourForControlValue = (value: number) => {
    const result = "rgb(0, " + from3bitTo8(value) + ", 0 )";
    return result;
  };

  return (
    <>
      <div className="grid">
        {colourValues.map((red) => {
          return (
            <div key={red} className="row">
              {colourValues.map((blue) => {
                return (
                  <ColourSquare
                    key={blue}
                    colour={colourForGridValues(red, blue)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <h1>9 bit colours</h1>
      <h2>An explorer</h2>
      <div className="row">
        {colourValues.map((green) => {
          return (
            <ColourSquare key={green} colour={colourForControlValue(green)} />
          );
        })}
      </div>
      <button onClick={() => setGreen((green) => green - 1)}>Down</button>
      Green: {green}
      <button onClick={() => setGreen((green) => green + 1)}>Up</button>
    </>
  );
}

export default Explorer;
