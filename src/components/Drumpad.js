import {SoundButton} from "./SoundButton";

export const Drumpad = () => {
    return (
        <div className="drumpad">
            <SoundButton key={'Q'} type={'keys'}/>
            <SoundButton key={'W'} type={'keys'}/>
            <SoundButton key={'E'} type={'keys'}/>

            <SoundButton key={'A'} type={'pad'}/>
            <SoundButton key={'S'} type={'pad'}/>
            <SoundButton key={'D'} type={'pad'}/>

            <SoundButton key={'Z'} type={'drums'}/>
            <SoundButton key={'X'} type={'drums'}/>
            <SoundButton key={'C'} type={'drums'}/>

        </div>
    )
}