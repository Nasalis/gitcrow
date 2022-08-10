import { createContext, ReactNode, useContext, useState } from "react";

interface ThemeContextData {
    isDark: boolean;
    handleTheme: () => void;
}

interface ThemeContextProps {
    children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeContextProvider({ children }: ThemeContextProps) {
    const [isDark, setIsDark] = useState<boolean>(false);

    function handleTheme() {
        setIsDark(prevState => !prevState);
    }

    return (
        <ThemeContext.Provider value={{
            isDark,
            handleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext)
}