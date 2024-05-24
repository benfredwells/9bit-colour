import {
  ALL_CONTROL_CHANNELS,
  ALL_INTERPOLATION_METHODS,
  RGBOptions,
} from "../lib/colourUtils";

interface Props {
  options: RGBOptions;
  onOptionsChange: (options: RGBOptions) => void;
}

function Menu({ options, onOptionsChange }: Props) {
  return (
    <div className="menu">
      <h2>Options</h2>
      <h3>Control channel</h3>
      {ALL_CONTROL_CHANNELS.map((control) => {
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
      {ALL_INTERPOLATION_METHODS.map((interpolation) => {
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
