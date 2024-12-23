import { UserInterface } from '../../types';
import styles from './User.module.css';
import { FaUserEdit } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
import { useGlobalContext } from '../../GlobalContext';

const User = ({ id, create_at, email, name }: UserInterface) => {
    const { setIsEditUserModal, setIsDeleteUserModal, setCurrentUser } = useGlobalContext();

    const handleEditClick = () => {
        setCurrentUser({ id, create_at, email, name });
        setIsEditUserModal(true);
    };

    const handleDeleteClick = () => {
        setCurrentUser({ id, create_at, email, name });
        setIsDeleteUserModal(true);
    };

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div className={styles.container}>
            <div className={styles.infoWrapper}>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>Criado em: {formatDate(create_at.toString())}</p>
            </div>
            <div className={styles.btnWrapper}>
                <button className={`${styles.userBtn}`} onClick={handleEditClick}>
                    <FaUserEdit size={33} />
                </button>
                <button className={`${styles.userBtn}`} onClick={handleDeleteClick}>
                    <IoPersonRemove size={30} fill='var(--danger)' />
                </button>
            </div>
        </div>
    );
};

export default User;