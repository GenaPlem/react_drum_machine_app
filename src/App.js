import './App.scss';
import {Drumpad} from "./components/Drumpad";
import {useEffect} from "react";

function App() {

    const handleKeyDown = (e) => {
        let soundButton = document.getElementById(e.key.toUpperCase())
        if (soundButton !== null) {
            soundButton.parentElement.classList.add('active');
            soundButton.play();
        }
    }

    const handleKeyUp = (e) => {
        let soundButton = document.getElementById(e.key.toUpperCase())
        if (soundButton !== null) {
            soundButton.parentElement.classList.remove('active');
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.addEventListener('keyup', handleKeyUp);
        };
    }, [])

    return (
        <div className="App">
            <Drumpad/>
        </div>
    );
}

export default App;
