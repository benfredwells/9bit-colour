export type ControlColourChannel = "red" | "green" | "blue";
export type InterpolationMethod = "floor" | "ceiling" | "linear";
export interface RGBOptions {
  control: ControlColourChannel;
  interpolation: InterpolationMethod;
}

interface Props {
  options: RGBOptions;
  onOptionsChange: (options: RGBOptions) => void;
}

const allControlChannels: Array<ControlColourChannel> = [
  "red",
  "green",
  "blue",
];

const allInterpolationMethods: Array<InterpolationMethod> = [
  "floor",
  "ceiling",
  "linear",
];

function Menu({ options, onOptionsChange }: Props) {
  return (
    <div className="menu">
      <h2>Options</h2>
      <h3>Control channel</h3>
      {allControlChannels.map((control) => {
        return (
          <div key={control}>
            <input
              type="radio"
              name="control"
              id={control}
              checked={control == options.control}
              onClick={() => onOptionsChange({ ...options, control })}
            />
            <label htmlFor={control}>{control}</label>
          </div>
        );
      })}
      <h3>Interpolation</h3>
      {allInterpolationMethods.map((interpolation) => {
        return (
          <div key={interpolation}>
            <input
              type="radio"
              name="interpolation"
              id={interpolation}
              checked={interpolation == options.interpolation}
              onClick={() => onOptionsChange({ ...options, interpolation })}
            />
            <label htmlFor={interpolation}>{interpolation}</label>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
