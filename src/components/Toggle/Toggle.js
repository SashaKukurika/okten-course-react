import css from './Toggle.module.css';
const Toggle = () => {
    return (
        <div className={css.toggleSwitch}>
            <label>
                <input type="checkbox"/>
                <span className={css.slider}></span>
            </label>
        </div>
    );
};

export {Toggle};