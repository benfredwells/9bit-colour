import {
  copyTextForValues,
  cssColourForValues,
  RGBOptions,
} from "../lib/colourUtils";
import ColourSquare from "./colourSquare";
import { Grid, GridCell } from "./grid";

type Props = {
  colourValues: Array<number>;
  rgbOptions: RGBOptions;
  control: number;
  setStatus: (status: string) => void;
};

export function ColourGrid({
  colourValues,
  rgbOptions,
  control,
  setStatus,
}: Props) {
  const cells: Array<JSX.Element> = [];
  for (const var1 of colourValues) {
    for (const var2 of colourValues) {
      const keyStr = var1.toString() + "," + var2.toString();
      cells.push(
        <GridCell key={keyStr} pos={{ row: var1 + 1, col: var2 + 1 }}>
          <ColourSquare
            key={keyStr}
            colour={cssColourForValues(control, var1, var2, rgbOptions)}
            copyable
            onClick={() => {
              navigator.clipboard
                .writeText(copyTextForValues(control, var1, var2, rgbOptions))
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
              setStatus(copyTextForValues(control, var1, var2, rgbOptions))
            }
            onMouseLeave={() => setStatus("")}
          />
        </GridCell>
      );
    }
  }
  return <Grid>{cells}</Grid>;
}
