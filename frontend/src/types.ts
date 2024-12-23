import { ReactNode } from "react"

export interface UserInterface {
    id?: string
    name: string
    email: string
    create_at: Date
}

export interface GlobalContextType {
    isAddUserModal: boolean;
    setIsAddUserModal: React.Dispatch<React.SetStateAction<boolean>>;
    users: UserInterface[];
    loading: boolean;
    error: string | null;
    fetchUsers: () => void;
}

export interface GlobalProviderProps {
    children: React.ReactNode;
}
export interface InputProps {
    id: string
    state: string
    setState: React.Dispatch<React.SetStateAction<string>>;
    type: string
}