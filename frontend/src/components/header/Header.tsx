import Icon from '../icon/Icon';
import styles from './header.module.css';
import usersIcon from '../../assets/usersicon.svg';
import { IoIosCreate } from "react-icons/io";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.titleWrapper}>
                <Icon icon={usersIcon} description='Painel de usuários' />
                <h1>Painél de usuários</h1>
            </div>
            <div className={styles.btnWrapper}>
                <button type='button' className={styles.addBtn} >
                    Novo Usuário <IoIosCreate size={50}  aria-label='Novo usuário' />
                </button>
            </div>
        </header>
    )
}

export default Header;