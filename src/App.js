import react from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
