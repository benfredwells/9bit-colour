type ControlColourChannel = "red" | "green" | "blue";
type InterpolationMethod = "floor" | "ceiling" | "linear";
export interface RGBOptions {
  control: ControlColourChannel;
  interpolation: InterpolationMethod;
}

export const ALL_CONTROL_CHANNELS: Array<ControlColourChannel> = [
  "red",
  "green",
  "blue",
];

export const ALL_INTERPOLATION_METHODS: Array<InterpolationMethod> = [
  "floor",
  "ceiling",
  "linear",
];

export function from3bitTo8(value: number): number {
  let num = value << 5;
  if (num != 0) {
    num |= 0b00011111;
  }
  return num;
}

export function hex2digit(num: number): string {
  let result = num.toString(16);
  if (result.length == 1) {
    result = "0" + result;
  }
  return result;
}

export function copyTextForGridValues(
  red: number,
  green: number,
  blue: number
): string {
  return (
    "#" +
    hex2digit(from3bitTo8(red)) +
    hex2digit(from3bitTo8(green)) +
    hex2digit(from3bitTo8(blue))
  );
}

export function cssColourForGridValues(
  red: number,
  green: number,
  blue: number
): string {
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
}

export function cssColourForControlValue(value: number): string {
  const result = "rgb(0, " + from3bitTo8(value) + ", 0 )";
  return result;
}
