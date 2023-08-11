import React, { useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
import { Lucid, Blockfrost } from 'lucid-cardano';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

async function lucidConnect() {
  const projectId = 'previewsKVSTHsY3c2sWpsRpJRjs9KiOLaSRmht';
  const lucid = await Lucid.new(
    new Blockfrost('https://cardano-preview.blockfrost.io/api/v0', projectId),
    'Preview'
  );
  console.log('Lucid', lucid);
}

const Popup = () => {
  useEffect(() => {
    console.log('Popup mounted');
    lucidConnect();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
};

export default Popup;
