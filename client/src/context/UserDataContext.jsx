import React, {createContext, useContext} from "react";

const UserDataContext = createContext();

const UserProvider = ({children}) => {
    const userData = {
        username: "John",
        level: "platinum",
    };

    const [user, setUser] = useContext(userData);

    return (
        <UserDataContext.Provider value={user}>
            {children}
        </UserDataContext.Provider>
    );
};

export { UserDataContext, UserProvider };
