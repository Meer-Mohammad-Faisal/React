import Button from "./Button"
import Card from "./components/Card"
import React from 'react'

function App() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <Button handleClick = {handleClick} text="Click me">
        <h1>{count}</h1>
        </Button>


      <Card name = "faisal">
        <h1>hello</h1>
        <p>this is a child</p>

      </Card>

      <Card children = "children component" name = "faisal">
        <h1>hello ji</h1>
        <p>this is a child2</p>
      </Card>

    </div>
  )
}

export default App
