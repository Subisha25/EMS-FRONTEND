import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the Context
const UserContext = createContext();

// Create the Provider Component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Load user from sessionStorage on initial load
    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const updateUser = (updatedUserData) => {
        // Update both the state and sessionStorage
        setUser(updatedUserData);
        sessionStorage.setItem('user', JSON.stringify(updatedUserData));
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the UserContext
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};