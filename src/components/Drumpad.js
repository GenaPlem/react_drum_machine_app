import {SoundButton} from "./SoundButton";
import {drumSounds} from "../data/drumSounds";

export const Drumpad = () => {
    return (
        <div className="drumpad">

            {drumSounds.map(drumSound => <SoundButton btn={drumSound.btn} type={drumSound.type}
                                                      sound={drumSound.audio}/>)}

        </div>
    )
}