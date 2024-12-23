import axios from 'axios';
import { useEffect, useState } from 'react';
import { UserInterface } from '../types';

export const useUsers = () => {
    const [users, setUsers] = useState<UserInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchUsers = async () => {
        setLoading(true); 
        setError(null);    

        try {
            const response = await axios.get('http://localhost:3001/users/');
            if (response && response.data) {
                setUsers(response.data);
            }
        } catch (err) {
            setError('Erro ao carregar os usuários.');  
            console.error('Error fetching users:', err);
        } finally {
            setLoading(false);  
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);  

    return { users, loading, error };
};
