import { useState } from "react";

import "./explorer.css";
import ColourSquare from "./colourSquare";
import Menu from "./rgbOptions";
import {
  RGBOptions,
  copyTextForGridValues,
  cssColourForControlValue,
  cssColourForGridValues,
} from "../lib/colourUtils";

function Explorer() {
  const [rgbOptions, setRGBOptions] = useState<RGBOptions>({
    control: "green",
    interpolation: "linear",
  });
  const [green, setGreen] = useState(0);
  const [status, setStatus] = useState("");

  const colourValues: Array<number> = Array.from(Array(8).keys());

  return (
    <>
      <h1>9 bit colours</h1>
      <div className="row">
        <div className="panel">
          <Menu
            options={rgbOptions}
            onOptionsChange={(options) => setRGBOptions(options)}
          />
        </div>
        <div className="hSpacer"></div>
        <div className="panel">
          <h2>Choose {rgbOptions.control} value</h2>
          <div className="row">
            {colourValues.map((greenVal) => {
              return (
                <ColourSquare
                  key={greenVal}
                  colour={cssColourForControlValue(greenVal)}
                  selected={greenVal == green}
                  onClick={() => {
                    setGreen(greenVal);
                  }}
                />
              );
            })}
          </div>
          <div className="vSpacer" />
          <div className="grid">
            {colourValues.map((red) => {
              return (
                <div key={red} className="row">
                  {colourValues.map((blue) => {
                    return (
                      <ColourSquare
                        key={blue}
                        colour={cssColourForGridValues(red, green, blue)}
                        copyable
                        onClick={() => {
                          navigator.clipboard
                            .writeText(copyTextForGridValues(red, green, blue))
                            .then(() =>
                              setStatus(
                                `Copied ${copyTextForGridValues(
                                  red,
                                  green,
                                  blue
                                )}`
                              )
                            );
                        }}
                        onMouseEnter={() =>
                          setStatus(copyTextForGridValues(red, green, blue))
                        }
                        onMouseLeave={() => setStatus("")}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="status">{status}</div>
        </div>
      </div>
    </>
  );
}

export default Explorer;
