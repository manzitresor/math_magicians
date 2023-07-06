import './App.css';
import Calculator from './components/calculator';
import Quotes from './components/quotes';

function App() {
  return (
    <>
      <Calculator />
      <div className="qoutes-container">
        <Quotes />
      </div>
    </>

  );
}

export default App;
