type ControlColourChannel = "red" | "green" | "blue";
type InterpolationMethod = "floor" | "ceiling" | "linear";

interface Props {
  control: ControlColourChannel;
  interpolation: InterpolationMethod;
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

function Menu({ control, interpolation }: Props) {
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
