import './colourSquare.css'

interface Props {
  colour: string;
  selected?: boolean;
}

function ColourSquare({ colour, selected = false } : Props) {
  console.log(`Colour: ${colour}`)
  const style = {
    backgroundColor: colour
  }

  let classes = "colourSquare";
  if (selected) {
    classes += " selected";
  } 

  return<div className={classes} style={style}/>
}

export default ColourSquare
