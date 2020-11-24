import React from 'react';
import 'bulma/css/bulma.css';
import Signup from './components/Signup';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Signup />
    </div>
  );
};

export default App;
