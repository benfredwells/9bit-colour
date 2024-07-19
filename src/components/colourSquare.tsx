interface Props extends React.ComponentPropsWithRef<"div"> {
  colour: string;
  selected?: boolean;
  copyable?: boolean;
}

function ColourSquare({
  colour,
  selected = false,
  copyable = false,
  ...props
}: Props) {
  console.log(`Colour: ${colour}`);
  const style = {
    backgroundColor: colour,
    borderColor: colour,
  };

  let classes = "colourSquare";
  if (selected) {
    classes += " selected";
  }
  if (copyable) {
    classes += " copyable";
  }

  return <div className={classes} style={style} {...props} />;
}

export default ColourSquare;
