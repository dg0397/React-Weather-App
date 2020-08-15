import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Main from './Components/Main'
import Footer from './Components/Footer/Footer';


import { LocationContextProvider } from './context/LocationContext';

function App() {
  return (
    <div className="App">
      <Header />
      <LocationContextProvider>
        <Main />
      </LocationContextProvider>
      <Footer />
    </div>
  );
}

export default App;
