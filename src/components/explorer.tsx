import { useState } from "react";

import "./explorer.css";
import ColourSquare from "./colourSquare";
import Menu from "./rgbOptions";
import {
  RGBOptions,
  copyTextForValues,
  cssColourForControlValue,
  cssColourForValues,
} from "../lib/colourUtils";

function Explorer() {
  const [rgbOptions, setRGBOptions] = useState<RGBOptions>({
    control: "green",
    interpolation: "linear",
  });
  const [control, setControl] = useState(0);
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
            {colourValues.map((controlVal) => {
              return (
                <ColourSquare
                  key={controlVal}
                  colour={cssColourForControlValue(controlVal, rgbOptions)}
                  selected={controlVal == control}
                  onClick={() => {
                    setControl(controlVal);
                  }}
                />
              );
            })}
          </div>
          <div className="vSpacer" />
          <div className="grid">
            {colourValues.map((var1) => {
              return (
                <div key={var1} className="row">
                  {colourValues.map((var2) => {
                    return (
                      <ColourSquare
                        key={var2}
                        colour={cssColourForValues(
                          control,
                          var1,
                          var2,
                          rgbOptions
                        )}
                        copyable
                        onClick={() => {
                          navigator.clipboard
                            .writeText(
                              copyTextForValues(control, var1, var2, rgbOptions)
                            )
                            .then(() =>
                              setStatus(
                                `Copied ${copyTextForValues(
                                  control,
                                  var1,
                                  var2,
                                  rgbOptions
                                )}`
                              )
                            );
                        }}
                        onMouseEnter={() =>
                          setStatus(
                            copyTextForValues(control, var1, var2, rgbOptions)
                          )
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
