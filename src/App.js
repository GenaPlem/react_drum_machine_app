import './App.scss';
import {Drumpad} from "./components/Drumpad";
import {useEffect} from "react";

function App() {

    const handleKeyDown = (e) => {
        let soundButton = document.getElementById(e.key.toUpperCase())
        if (soundButton !== null) {

            soundButton.play()
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
