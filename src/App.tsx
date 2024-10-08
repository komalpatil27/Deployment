import React from 'react';
import logo from './logo.svg';
import Folder from './components/folderStrcuture/Folder';
import './App.css';
import dataStructure from './components/folderStrcuture/structure'

function App() {
  return (
    <div className="folder">
      <Folder
      dataStructure={dataStructure}
      />
    </div>
  );
}

export default App;
