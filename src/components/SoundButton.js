export const SoundButton = ({btn, type, sound}) => {
    // Key, Type, Sound

    return (
        <div className={`drumpad__button-${type}`}>
            <span className={'drumpad__key'}>{btn}</span>
            <audio className="clip" id={btn} src={sound}></audio>
        </div>
    )
}