import logo from './logo.svg';
import './App.css';
import Api from './Components/ApiData/index';
function App() {
  return (
    <div className="App">
      <h1 className='text-3xl font-bold text-blue-500 tracking-widest my-5'>Api response in list form</h1>
     <Api/>
    </div>
  );
}

export default App;
