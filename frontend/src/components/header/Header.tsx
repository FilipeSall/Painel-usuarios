import Icon from '../icon/Icon';
import styles from './header.module.css';
import usersIcon from '../../assets/usersicon.svg';
import { useGlobalContext } from '../../GlobalContext';

const Header = () => {

    const { setIsAddUserModal, isAddUserModal } = useGlobalContext();

    return (
        <header className={styles.header}>
            <div className={styles.titleWrapper}>
                <Icon icon={usersIcon} description='Painel de usuários' />
                <h1>Painél de usuários</h1>
            </div>
                <button type='button' className={styles.addBtn} onClick={() => setIsAddUserModal(!isAddUserModal)}>
                    Novo Usuário
                </button>
        </header>
    )
}

export default Header;