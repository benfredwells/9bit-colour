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

export function from3bitTo8(value: number, options: RGBOptions): number {
  switch (options.interpolation) {
    case "ceiling": {
      let num = value << 5;
      if (num != 0) {
        num |= 0b00011111;
      }
      return num;
    }
    case "floor": {
      let num = value << 5;
      if (num == 0b11100000) {
        num = 0b11111111;
      }
      return num;
    }
    case "linear": {
      return Math.round(value * 255 / 7);
    }
  }
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
    hex2digit(from3bitTo8(red, options)) +
    hex2digit(from3bitTo8(green, options)) +
    hex2digit(from3bitTo8(blue, options))
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
    from3bitTo8(red, options) +
    "," +
    from3bitTo8(green, options) +
    "," +
    from3bitTo8(blue, options) +
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
