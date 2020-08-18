import React, { Suspense } from 'react';
import './App.css';

import Header from './Components/Header/Header';

import Footer from './Components/Footer/Footer';


import { LocationContextProvider } from './context/LocationContext';
import Waiting from './Components/Waiting/Waiting';



const Main = React.lazy(
  () => import('./Components/Main/Main')
)


function App() {
  return (
    <div className="App">
      <Header />
      <LocationContextProvider>
        <Suspense fallback = {<Waiting/>}  >
          <Main/>
        </Suspense>
      </LocationContextProvider>
      <Footer />
    </div>
  );
}

export default App;
