import { InputProps } from '../../types';
import styles from './Input.module.css';

const Input = ({ id, state, setState, type = 'text' }: InputProps) => {
    return (
        <input
            id={id}
            value={state}
            onChange={(e) => setState(e.target.value)}
            className={styles.input}
            type={type}
            required
        />
    )
}

export default Input