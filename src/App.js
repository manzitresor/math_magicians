import './App.css';
import Calculator from './components/calculator';
import Quotes from './components/quotes';

function App() {
  return (
    <>
      <Calculator />
      <div className="qoutes-container">
        <p style={{ fontWeight: 'bold' }}>Quote</p>
        <Quotes />
      </div>
    </>

  );
}

export default App;
