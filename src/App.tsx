import React from 'react';
import './components/_settings/_base.css'
import './App.css';

const App: React.FC = ({children}) => {
    return (
        <div className="App">
            {children}
        </div>
    );
};

export default App;
