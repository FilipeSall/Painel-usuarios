import { ReactNode } from "react"

export interface UserInterface {
    id?: string
    name: string
    email: string
    create_at: Date
}

export interface GlobalProviderProps {
    children: ReactNode
}

export interface GlobalContextType {
    addUserModal: boolean; 
    setAddUserModal: React.Dispatch<React.SetStateAction<boolean>>; 
}
