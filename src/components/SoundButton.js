export const SoundButton = ({btn, type, sound}) => {
    // Btn(KeyboardKey), Key, Type, Sound

    const playSound = (e) => {
        e.target.children[1].play();
    }

    return (
        <div className={`drumpad__button-${type}`} onClick={playSound}>
            <span className={'drumpad__key'}>{btn}</span>
            <audio className="clip" id={btn} src={sound}></audio>
        </div>
    )
}