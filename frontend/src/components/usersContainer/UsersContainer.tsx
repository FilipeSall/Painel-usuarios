import { useUsers } from '../../hooks/useUsers';
import styles from './usersContainer.module.css';

const UsersContainer = () => {

    const { users, error, loading } = useUsers();
    console.log(users)

    return(
        <section className={styles.section}>

        </section>
    )
}

export default UsersContainer