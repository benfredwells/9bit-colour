import './colourSquare.css'

interface Props {
  colour: string;
}

function ColourSquare({ colour } : Props) {
  console.log(`Colour: ${colour}`)
  const style = {
    backgroundColor: colour
  }

  return<div className="colourSquare" style={style}/>
}

export default ColourSquare
