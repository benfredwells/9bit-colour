import { cssColourForControlValue, RGBOptions } from "../lib/colourUtils";
import ColourSquare from "./colourSquare";
import { Grid, GridCell } from "./grid";

type Props = {
  colourValues: Array<number>;
  rgbOptions: RGBOptions;
  control: number;
  setControl: (control: number) => void;
};

export function ColorSwatch({
  colourValues,
  rgbOptions,
  control,
  setControl,
}: Props) {
  return (
    <Grid cellSize={"50px"}>
      {colourValues.map((controlVal) => {
        return (
          <GridCell pos={{ row: 1, col: controlVal }}>
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
