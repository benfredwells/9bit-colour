import "./colourSquare.css";

interface Props extends React.ComponentPropsWithRef<"div"> {
  colour: string;
  selected?: boolean;
}

function ColourSquare({ colour, selected = false, ...props }: Props) {
  console.log(`Colour: ${colour}`);
  const style = {
    backgroundColor: colour,
  };

  let classes = "colourSquare";
  if (selected) {
    classes += " selected";
  }

  return <div className={classes} style={style} {...props} />;
}

export default ColourSquare;
