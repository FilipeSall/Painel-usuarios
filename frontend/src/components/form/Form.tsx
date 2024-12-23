import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Input from '../input/Input';
import styles from './form.module.css';
import { useGlobalContext } from '../../GlobalContext';

const Form = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const { setIsAddUserModal, fetchUsers } = useGlobalContext();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        const data = {
            name,
            email,
        };

        try {
            await axios.post('http://localhost:3001/users', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            toast.success('Usuário criado com sucesso!');
            fetchUsers(); 
            setIsAddUserModal(false); 
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                setErrorMessage(error.response.data.message || 'Erro ao criar usuário');
                toast.error(error.response.data.message || 'Erro ao criar usuário');
            } else {
                setErrorMessage('Erro desconhecido. Por favor, tente novamente.');
                toast.error('Erro desconhecido. Por favor, tente novamente.');
            }
            console.error('Erro:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
                <label htmlFor='createNewUserNameInput'>Qual o nome do usuário</label>
                <Input
                    id='createNewUserNameInput'
                    state={name}
                    setState={setName}
                    type='text'
                />
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor='createNewUserEmailInput'>Qual email do usuário?</label>
                <Input
                    id='createNewUserEmailInput'
                    state={email}
                    setState={setEmail}
                    type='email'
                />
            </div>
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            <button className={styles.submitBtn} type='submit' disabled={loading}>
                {loading ? 'Criando...' : 'Criar'}
            </button>
        </form>
    );
};

export default Form;