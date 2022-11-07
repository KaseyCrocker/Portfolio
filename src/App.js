import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <About></About>
        <Work></Work>
      </main>
    </div>
  );
}

export default App;
