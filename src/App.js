
import './App.css';
const onButtonClick =() => {
  alert("Welcome")

}

function App() {
  return (
    <div className= "App" >
      <h1>Hello World</h1>
      <button onClick = {onButtonClick}> Click Me </button>
      
    </div>
  );
}

export default App;
