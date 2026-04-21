const Hello = (props) => {
  const bornYear = new Date().getFullYear() - props.age
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old. So you were probably born in {bornYear}.
      </p>
    </div>
  )
}

const App = () => {
  const {counter} = props

  return (
    <div>
     {counter}
    </div>
  )
}


export default App