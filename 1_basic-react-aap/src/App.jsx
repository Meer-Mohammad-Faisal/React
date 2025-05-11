import './App.css';
// imports

//import { Title } from "./Title.jsx";
import ProductTab  from "./ProductTab.jsx";


// 1st component



function App() {
  // we can create only single root element...
  // if we want to create multiple then we should use div
  return (
      <>
       <h2>Blockbuster Deals | shop now</h2>
      <ProductTab />
    </>
  );
  
}
  

export default App;
