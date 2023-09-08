
import './App.css'
import Counter from './cunter'
import Team from './team'
import User from './user'
import Friends from './Friends'

function App(){
  function handleClick(){
    alert('click button')
  }
  const handleClick2 = () => {
    alert('click button two')
  }
   function addFive(num) {
    alert(num+5)
    
  }
  
  return (
    <>
     
      <h1>Vite + React</h1>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>click</button>
      <button onClick={()=>{alert('click')}}>click2</button>
      <button onClick={()=>{addFive(10)}}>click3</button>
     
      
    </>

  )
  }
export default App
