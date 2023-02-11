import Comp from "./Comp"
import propTypes from 'prop-types'

const Stundent = ({name, age}) => {
  return (
   <>
    <Comp 
        name={name}
    />
    <div>Stundents {name}</div>
    <h1>{age}</h1>
   </>
  )
}

Stundent.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
}

Stundent.defaultProps = {
    name: 'hello defalut name',
    age: 9,
}
export default Stundent