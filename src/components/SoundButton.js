export const SoundButton = ({key, type, sound}) => {
    // Key, Type, Sound

    return (
        <div className={`drumpad__button-${type}`}>
            <audio className="clip" id={key} src={sound}></audio>
        </div>
    )
}