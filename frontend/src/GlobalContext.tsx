import React, { createContext, useState, useContext, useEffect } from "react";
import axios from 'axios';
import { GlobalContextType, GlobalProviderProps, UserInterface } from "./types";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
    const [isAddUserModal, setIsAddUserModal] = useState<boolean>(false);
    const [isEditUserModal, setIsEditUserModal] = useState<boolean>(false);
    const [isDeleteUserModal, setIsDeleteUserModal] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<UserInterface | null>(null);
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

    return (
        <GlobalContext.Provider value={{
            isAddUserModal,
            setIsAddUserModal,
            isEditUserModal,
            setIsEditUserModal,
            isDeleteUserModal,
            setIsDeleteUserModal,
            currentUser,
            setCurrentUser,
            users,
            loading,
            error,
            fetchUsers
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = (): GlobalContextType => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext deve ser usado dentro de um GlobalProvider");
    }
    return context;
};