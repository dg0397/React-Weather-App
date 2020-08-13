import React from 'react';
import './App.css';

import Header from './Components/Header';
import Main from './Components/Main'
import Footer from './Components/Footer';


import { LocationContextProvider } from './context/LocationContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <LocationContextProvider>
          <Main />
        </LocationContextProvider>
        <Footer />
      </header>
    </div>
  );
}

export default App;
