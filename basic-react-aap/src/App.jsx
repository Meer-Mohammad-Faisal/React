import './App.css';
// imports
 import Title from "./Title.jsx";
//import { Title } from "./Title.jsx";
import ProductTab  from "./ProductTab.jsx";


// 1st component



function App() {
  // we can create only single root element...
  // if we want to create multiple then we should use div
  return (
      <>
      <ProductTab />
    </>
  );
  
}
  

export default App;
