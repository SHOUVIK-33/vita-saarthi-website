import React from 'react';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>VICTORY AT LAST! VITA SAARTHI IS LIVE!</h1>
        <p>This unique code is the final test. If you see this, we won!</p>
        <button onClick={() => alert('JAI MATA DI!')}>Final Button</button>
      </header>
    </div>
  );
}

export default App;