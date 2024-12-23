import styles from './deleteUserModal.module.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useGlobalContext } from '../../GlobalContext';
import { useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

const DeleteUserModal = () => {
    const { currentUser, setIsDeleteUserModal, fetchUsers, isDeleteUserModal } = useGlobalContext();

    const modalRef = useRef<HTMLDivElement | null>(null);

    useClickOutside(modalRef, () => setIsDeleteUserModal(false));
    
    if (!isDeleteUserModal) return null;

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3001/users/${currentUser?.id}`);
            toast.success('Usuário deletado com sucesso!');
            fetchUsers();
            setIsDeleteUserModal(false);
        } catch (error) {
            toast.error('Erro ao deletar usuário. Por favor, tente novamente.');
            console.error('Erro:', error);
        }
    };

    const handleClose = () => {
        setIsDeleteUserModal(false);
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent} ref={modalRef}>
                <h2>Confirmar Exclusão</h2>
                <p>Tem certeza de que deseja excluir o usuário {currentUser?.name}?</p>
                <button className={styles.confirmBtn} onClick={handleDelete}>
                    Confirmar
                </button>
                <button className={styles.cancelBtn} onClick={handleClose}>
                    Cancelar
                </button>
            </div>
        </div>
    );
};

export default DeleteUserModal;