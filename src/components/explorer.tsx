import { useState } from "react";

import "./explorer.css";
import ColourSquare from "./colourSquare";
import Menu, { ControlColourChannel } from "./menu";

function Explorer() {
  const [controlChannel, setControlChannel] =
    useState<ControlColourChannel>("green");
  const [green, setGreen] = useState(0);
  const [status, setStatus] = useState("");

  const colourValues: Array<number> = Array.from(Array(8).keys());

  const from3bitTo8 = (value: number): number => {
    let num = value << 5;
    if (num != 0) {
      num |= 0b00011111;
    }
    return num;
  };

  const hex2digit = (num: number): string => {
    let result = num.toString(16);
    if (result.length == 1) {
      result = "0" + result;
    }
    return result;
  };

  const copyTextForGridValues = (red: number, blue: number): string => {
    return (
      "#" +
      hex2digit(from3bitTo8(red)) +
      hex2digit(from3bitTo8(green)) +
      hex2digit(from3bitTo8(blue))
    );
  };

  const colourForGridValues = (red: number, blue: number): string => {
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
                  colour={colourForControlValue(greenVal)}
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
                        colour={colourForGridValues(red, blue)}
                        copyable
                        onClick={() => {
                          navigator.clipboard
                            .writeText(copyTextForGridValues(red, blue))
                            .then(() =>
                              setStatus(
                                `Copied ${copyTextForGridValues(red, blue)}`
                              )
                            );
                        }}
                        onMouseEnter={() =>
                          setStatus(copyTextForGridValues(red, blue))
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
