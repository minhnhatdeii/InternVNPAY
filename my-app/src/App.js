import logo from './logo.svg';
import './App.css';
import ParentComponent from './parentComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ParentComponent />
      </header>
    </div>
  );
}

export default App;
