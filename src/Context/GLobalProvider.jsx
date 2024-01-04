/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [icons, setIcons] = useState([]);
    const [inputIcons, setInputIcons] = useState([]);
    const [styles, setStyles] = useState();

    useEffect(() => {
        const fetchIconsData = async () => {
            try {
                const response = await fetch('icons.json');
                const data = await response.json();
                setIcons(data);
            } catch (error) {
                console.error('Error fetching icons data:', error);
            }
        };

        fetchIconsData();
    }, []);

    return (
        <GlobalContext.Provider value={{ icons, setIcons, inputIcons, setInputIcons, styles, setStyles }}>
            {children}
        </GlobalContext.Provider>
    );
};
