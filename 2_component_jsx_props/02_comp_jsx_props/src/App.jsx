
import './App.css'
import UserCard from './components/UserCard'
import fasial_image from './assets/me_hair.jpg';
import model_two from './assets/Model-2.jpeg';
import model_three from './assets/Model-3.jpeg';

function App() {
  

  return (
    <>
     <div className='app-container'>
      <UserCard name="faisal" desc="desc1" image= {fasial_image} style={{ "border-radius":"10px"}}/>
      <UserCard name="Model-2" desc="desc2" image= {model_two} style={{ "border-radius":"10px"}}/>
      <UserCard name="Model-3" desc="desc3" image={model_three} style={{ "border-radius":"10px"}}/>

     </div>
    </>
  )
}

export default App
