import { useRef } from 'react';
import Form from '../form/Form';
import styles from './createUserModal.module.css';
import useClickOutside from '../../hooks/useClickOutside';
import { useGlobalContext } from '../../GlobalContext';

const CreateUserModal = () => {

    const { setIsAddUserModal, isAddUserModal } = useGlobalContext();

    const modalRef = useRef<HTMLDivElement | null>(null);

    useClickOutside(modalRef, () => setIsAddUserModal(false));
    
    if (!isAddUserModal) return null;

    return (
        <div className={styles.overlay}>
            <section className={styles.modal} ref={modalRef}>
                <h1>Novo Usuário</h1>
                <Form />
            </section>
        </div>
    )
}

export default CreateUserModal;