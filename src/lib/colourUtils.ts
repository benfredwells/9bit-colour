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

function controlAndVarsToRGB(
  control: number,
  var1: number,
  var2: number,
  options: RGBOptions
): [number, number, number] {
  switch (options.control) {
    case "red":
      return [control, var1, var2];
    case "green":
      return [var1, control, var2];
    default:
      return [var1, var2, control];
  }
}

export function copyTextForValues(
  control: number,
  var1: number,
  var2: number,
  options: RGBOptions
): string {
  let [red, green, blue] = controlAndVarsToRGB(control, var1, var2, options);
  return (
    "#" +
    hex2digit(from3bitTo8(red)) +
    hex2digit(from3bitTo8(green)) +
    hex2digit(from3bitTo8(blue))
  );
}

export function cssColourForValues(
  control: number,
  var1: number,
  var2: number,
  options: RGBOptions
): string {
  let [red, green, blue] = controlAndVarsToRGB(control, var1, var2, options);
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

export function cssColourForControlValue(
  control: number,
  options: RGBOptions
): string {
  return cssColourForValues(control, 0, 0, options);
}
