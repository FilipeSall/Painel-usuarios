import { createContext, useState } from "react";
import { GlobalContextType, GlobalProviderProps } from "./types";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
    const [addUserModal, setAddUserModal] = useState<boolean>(false);

    return (
        <GlobalContext.Provider value={{ addUserModal, setAddUserModal }}>
            {children}
        </GlobalContext.Provider>
    )
}