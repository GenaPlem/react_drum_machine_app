import './App.scss';
import {Drumpad} from "./components/Drumpad";
import {useEffect} from "react";

function App() {

    const handleKeyDown = (e) => {
        if (document.getElementById(e.key.toUpperCase()) !== null) {
            document.getElementById(e.key.toUpperCase()).play()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [])

    return (
        <div className="App">
            <Drumpad/>
        </div>
    );
}

export default App;
