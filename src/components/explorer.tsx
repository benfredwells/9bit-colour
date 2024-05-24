import { useState } from "react";

import "./explorer.css";
import ColourSquare from "./colourSquare";
import Menu, { ControlColourChannel } from "./menu";
import {
  copyTextForGridValues,
  cssColourForControlValue,
  cssColourForGridValues,
} from "../lib/colourUtils";

function Explorer() {
  const [controlChannel, setControlChannel] =
    useState<ControlColourChannel>("green");
  const [green, setGreen] = useState(0);
  const [status, setStatus] = useState("");

  const colourValues: Array<number> = Array.from(Array(8).keys());

  return (
    <>
      <h1>9 bit colours</h1>
      <div className="row">
        <div className="panel">
          <Menu
            control={controlChannel}
            interpolation="linear"
            onControlChange={(channel) => setControlChannel(channel)}
          />
        </div>
        <div className="hSpacer"></div>
        <div className="panel">
          <h2>Choose green value</h2>
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
