import logo from './logo.svg';
import './App.css';

function App() {
  let num1 = 8;
  let num2 = 2;

  let sumel = document.getElementById("sum")
  

  function Add(){
    
    sumel.innerHTML = num1 + num2
  }
  function subtract(){
 
    sumel.innerHTML = num1 - num2
  }
  function divide(){
   
    sumel.innerHTML = num1 / num2
  }
  function multiply(){
   
    sumel.innerHTML = num1 * num2
  }
  return (

    <div className="App">
     <p>
     <span id='num1-el'>8</span>
     <span id='num2-el'>2</span>
     </p>
     <br />
     <div>
     <button onClick={()=>Add()}>Add</button>
     <button onClick={()=>subtract()}>Subtract</button>
     <button onClick={()=>divide()}>Divide</button>
     <button onClick={()=>multiply()}>multiply</button>
</div>
     <br />
     <span id="sum"></span>
    </div>
  );
}

export default App;
