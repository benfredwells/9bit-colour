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
      <h1>9 bit colours</h1>
      <h2>Choose green value</h2>
      <div className="row">
        {colourValues.map((greenVal) => {
          return (
            <ColourSquare
              key={greenVal}
              colour={colourForControlValue(greenVal)}
              selected={greenVal == green}
              onClick={() => {
                setGreen(greenVal);
              }}
            />
          );
        })}
      </div>
      <div className="spacer" />
      <div className="grid">
        {colourValues.map((red) => {
          return (
            <div key={red} className="row">
              {colourValues.map((blue) => {
                return (
                  <ColourSquare
                    key={blue}
                    colour={colourForGridValues(red, blue)}
                    copyable
                    onClick={() => {
                      navigator.clipboard.writeText(
                        colourForGridValues(red, blue)
                      );
                    }}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Explorer;
