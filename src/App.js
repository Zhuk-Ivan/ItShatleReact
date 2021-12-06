import logo from './logo.svg';
import './App.css';
import TestComponentFunction from './TestComponentFunction';

function App() {
    let name = 'Ivan';
    return (
      <div className="App">
        <header className="App-header">
        <div>Header</div>
          <div>          
            <TestComponentFunction></TestComponentFunction>  
          </div>  
        </header>
      </div>
  );
}

export default App;
