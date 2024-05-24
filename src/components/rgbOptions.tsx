export type ControlColourChannel = "red" | "green" | "blue";
export type InterpolationMethod = "floor" | "ceiling" | "linear";

interface Props {
  control: ControlColourChannel;
  interpolation: InterpolationMethod;
  onControlChange: (control: ControlColourChannel) => void;
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

function Menu({ control, interpolation, onControlChange }: Props) {
  return (
    <div className="menu">
      <h2>Options</h2>
      <h3>Control channel</h3>
      {allControlChannels.map((channel) => {
        return (
          <div key={channel}>
            <input
              type="radio"
              name="control"
              id={channel}
              checked={channel == control}
              onClick={() => onControlChange(channel)}
            />
            <label htmlFor={channel}>{channel}</label>
          </div>
        );
      })}
      <h3>Interpolation</h3>
      {allInterpolationMethods.map((method) => {
        return (
          <div key={method}>
            <input
              type="radio"
              name="interpolation"
              id={method}
              checked={method == interpolation}
            />
            <label htmlFor={method}>{method}</label>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
