import React, {useState} from 'react';
import ConfirmCode from './ConfirmCode';
import './App.css';

function App() {
  const [confirmPage, setConfirmPage] = useState(true);
  if (confirmPage)
    return (
      <div className="App">
        <br />
        <br />
        <ConfirmCode />
      </div>
    );
  return (
    <div className="App">
      <input type="text" />
      <input type="text" />
      <input type="button" value="gir" onClick={() => setConfirmPage(true)} />
      {/*  <div style={{display:confirmPage ? 'block' :'none'}}>
        <ConfirmCode/>
      </div> */}
    </div>
  );
}

export default App;
