import './colourSquare.css'

interface Props {
  colour: string;
}

function ColourSquare({ colour } : Props) {
  const style = {
    backgroundColor: colour
  }

  return<div className="colourSquare" style={style}/>
}

export default ColourSquare
