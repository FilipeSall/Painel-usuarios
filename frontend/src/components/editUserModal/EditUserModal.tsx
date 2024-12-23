import React, { useState, useEffect } from 'react';
import Input from '../input/Input';
import styles from './editUserModal.module.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useGlobalContext } from '../../GlobalContext';

const EditUserModal = () => {
    const { currentUser, setIsEditUserModal, fetchUsers } = useGlobalContext();
    const [name, setName] = useState<string>(currentUser?.name || '');
    const [email, setEmail] = useState<string>(currentUser?.email || '');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (currentUser) {
            setName(currentUser.name);
            setEmail(currentUser.email);
        }
    }, [currentUser]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        try {
            await axios.put(`http://localhost:3001/users/${currentUser?.id}`, { name, email }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            toast.success('Usuário atualizado com sucesso!');
            fetchUsers();
            setIsEditUserModal(false); // Feche o modal após a atualização
        } catch (error) {
            toast.error('Erro ao atualizar usuário. Por favor, tente novamente.');
            console.error('Erro:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        setIsEditUserModal(false); // Feche o modal ao clicar em "Cancelar"
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Editar Usuário</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputWrapper}>
                        <label htmlFor='editUserNameInput'>Nome</label>
                        <Input
                            id='editUserNameInput'
                            state={name}
                            setState={setName}
                            type='text'
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor='editUserEmailInput'>Email</label>
                        <Input
                            id='editUserEmailInput'
                            state={email}
                            setState={setEmail}
                            type='email'
                        />
                    </div>
                    <button className={styles.submitBtn} type='submit' disabled={loading}>
                        {loading ? 'Atualizando...' : 'Atualizar'}
                    </button>
                    <button className={styles.cancelBtn} type='button' onClick={handleClose}>
                        Cancelar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditUserModal;