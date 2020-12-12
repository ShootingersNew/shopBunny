import React, {useEffect, useState} from 'react';
import ResContext from "./components/atoms/ResContext";
import './components/_settings/_base.css'
import './App.css';

const App: React.FC = ({children}) => {

    const [res, setRes] = useState('desktop');
    useEffect(() => {
        const messageHandler = (event: MessageEvent) => {
            typeof event.data === "string" && res !== event.data && setRes(event.data)
        };
        window.addEventListener('message', messageHandler);
        return () => window.removeEventListener('message', messageHandler)
    }, [res]);

    return (
        <ResContext.Provider value={res}>
            <div className="App">
                {children}
            </div>
        </ResContext.Provider>
    );
};
export default App;
