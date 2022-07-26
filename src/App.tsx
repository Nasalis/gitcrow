import { Moon } from "phosphor-react";
import { SearchBar } from "./components/SearchBar";
import { Home } from "./pages/Home";
import "./styles/global.css";

function App() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-full h-full bg-black-100">
        <div className="flex flex-col w-full max-w-[1170px] h-full mt-14 gap-y-8">
          <SearchBar/>
          <Home/>
        </div>
        <button className="absolute top-5 right-5 w-12 h-12 flex items-center justify-center bg-black-200 bg-opacity-50 rounded-md shadow-md">
            <Moon  weight="fill" size={25} color="#CDCDCD"/>
        </button>
      </div>
    </>
  )
}

export default App
