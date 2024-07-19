import { cssColourForControlValue, RGBOptions } from "../lib/colourUtils";
import ColourSquare from "./colourSquare";
import { Grid, GridCell } from "./grid";

type Props = {
  colourValues: Array<number>;
  rgbOptions: RGBOptions;
  control: number;
  setControl: (control: number) => void;
};

export function ColourSwatch({
  colourValues,
  rgbOptions,
  control,
  setControl,
}: Props) {
  return (
    <Grid>
      {colourValues.map((controlVal) => {
        return (
          <GridCell pos={{ row: 1, col: controlVal+1 }}>
            <ColourSquare
              key={controlVal}
              colour={cssColourForControlValue(controlVal, rgbOptions)}
              selected={controlVal == control}
              onClick={() => {
                setControl(controlVal);
              }}
            />
          </GridCell>
        );
      })}
    </Grid>
  );
}
