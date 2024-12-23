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
    isEditUserModal: boolean;
    setIsEditUserModal: React.Dispatch<React.SetStateAction<boolean>>;
    currentUser: UserInterface | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<UserInterface | null>>;
    users: UserInterface[];
    loading: boolean;
    error: string | null;
    fetchUsers: () => void;
}

export interface GlobalProviderProps {
    children: React.ReactNode
}
export interface InputProps {
    id: string
    state: string
    setState: React.Dispatch<React.SetStateAction<string>>;
    type: string
}