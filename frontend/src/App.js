import './App.css';
import Header from './component/Header';
import SelectList from './component/SelectList ';
import About from './component/About';
function App() {


  return (
    <div className="App">
    <div className="Content">
      <Header/>
      <SelectList/>
    </div>
    <About/>
    </div>
  );
}

export default App;
