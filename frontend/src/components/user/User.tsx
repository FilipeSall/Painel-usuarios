import { UserInterface } from '../../types';
import styles from './User.module.css';
import { FaUserEdit } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";

const User = ({ create_at, email, name }: UserInterface) => {
    return (
        <div className={styles.container}>
            <div className={styles.infoWrapper}>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>Criado em: {create_at.toString()}</p>
            </div>
            <div className={styles.btnWrapper}>
                <button className={`${styles.userBtn}`}>
                    <FaUserEdit size={38} />
                </button>
                <button className={`${styles.userBtn}`}>
                    <IoPersonRemove size={33} fill='var(--danger)'/>
                </button>
            </div>
        </div>
    )
}

export default User
