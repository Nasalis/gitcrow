import { Moon, Sun, SunDim } from "phosphor-react";
import { BrowserRouter } from "react-router-dom";
import { SearchBar } from "./components/SearchBar";
import { SearchBarContextProvider } from "./contexts/SearchBarContext";
import { ThemeContextProvider, useTheme } from "./contexts/ThemeContext";
import { Router } from "./Router";
import "./styles/global.css";

function App() {

  const {
    isDark,
    handleTheme
  } = useTheme();

  return (
    <div className={isDark ? "dark": ""}>
      <BrowserRouter>
        <div className="relative flex flex-col items-center justify-center w-full h-full bg-white-100 dark:bg-black-100">
          <div className="flex flex-col w-full max-w-[1170px] h-full mt-14 gap-y-8">
            <SearchBarContextProvider>
              <SearchBar isDark={isDark}/>
              <Router/>
            </SearchBarContextProvider>
          </div>
          <button 
            className="absolute top-5 right-5 w-12 h-12 flex items-center justify-center bg-white-100 dark:bg-black-200 bg-opacity-50 rounded-md shadow-md"
            onClick={handleTheme}
          >
            {isDark ? (
              <Moon  weight="fill" size={25} color="#CDCDCD"/>
            ) : (
              <SunDim weight="fill" size={25} color="#000000"/>
            )}
          </button>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
