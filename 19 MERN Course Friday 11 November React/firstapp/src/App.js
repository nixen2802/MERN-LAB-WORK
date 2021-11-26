import logo from './logo.svg';
import './App.css';
import Temp from './Component/Message';
import ClassComponent from './Component/ClassComponent';
import State from './Component/state';
let name="nayan";
function App() {
  return (
    <>
    <h1>Welcome to react</h1>
    <div className="App">
      <Temp name="Nayan" fromWhere="Functional Component" />
      <ClassComponent name="Nayan" lastname="Mandliya" /> 
      <State />
    </div>
    <b>{name}</b>
    </>
  );
}

export default App;
