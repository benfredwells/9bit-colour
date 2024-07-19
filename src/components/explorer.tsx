import { useState } from "react";

import "./explorer.css";
import Menu from "./rgbOptions";
import { RGBOptions } from "../lib/colourUtils";
import { ColourSwatch } from "./colourSwatch";
import { ColourGrid } from "./colourGrid";

function Explorer() {
  const [rgbOptions, setRGBOptions] = useState<RGBOptions>({
    control: "red",
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
          <Menu options={rgbOptions} onOptionsChange={setRGBOptions} />
        </div>
        <div className="hSpacer"></div>
        <div className="panel">
          <h2>Choose {rgbOptions.control} value</h2>
          <ColourSwatch
            colourValues={colourValues}
            rgbOptions={rgbOptions}
            control={control}
            setControl={setControl}
          />
          <div className="vSpacer" />
          <ColourGrid
            colourValues={colourValues}
            rgbOptions={rgbOptions}
            control={control}
            setStatus={setStatus}
          />
          <div className="status">{status}</div>
        </div>
      </div>
    </>
  );
}

export default Explorer;
