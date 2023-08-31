import styles from './Checkbox.module.css'
import { ICheckbox } from './Checkbox.d'

const Checkbox: React.FC<ICheckbox> = (props) => {
    const { label, checked, disabled, onChangeInputChecked } = props

    if (!onChangeInputChecked || !label) {
        return null
    }

    return (
        <label className={styles.checkbox_container}>
            <input
                type="checkbox"
                className={styles.checkbox_input}
                checked={checked}
                onChange={() => onChangeInputChecked()}
                disabled={disabled}
            />
            <span className={styles.checkbox_text}>{label}</span>
        </label>
    )
}

export default Checkbox
