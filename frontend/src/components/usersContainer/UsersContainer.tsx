import { useGlobalContext } from '../../GlobalContext';
import User from '../user/User';
import EditUserModal from '../editUserModal/EditUserModal';
import DeleteUserModal from '../deleteUserModal/DeleteUserModal';
import styles from './usersContainer.module.css';

const UsersContainer = () => {
    const { users, error, loading, isEditUserModal, isDeleteUserModal } = useGlobalContext();

    return (
        <section className={styles.section}>
            <div className={styles.usersWrapper}>
                {loading && <p className={styles.loadingText}>Carregando usuários...</p>}
                {error && <p className={styles.error}>Erro ao carregar usuários</p>}
                {!loading && !error && users && users.map((user) => (
                    <User
                        key={user.id}
                        id={user.id}
                        create_at={user.create_at}
                        email={user.email}
                        name={user.name}
                    />
                ))}
                {!loading && !error && users?.length === 0 && (
                    <p>Nenhum usuário encontrado.</p>
                )}
            </div>
            {isEditUserModal && <EditUserModal />}
            {isDeleteUserModal && <DeleteUserModal />}
        </section>
    );
};

export default UsersContainer;