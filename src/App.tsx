import { SearchBar } from "./components/SearchBar";
import { Home } from "./pages/Home";
import "./styles/global.css";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full bg-black-100">
        <div className="w-full max-w-[1170px] h-full mt-14">
          <SearchBar/>
          <Home/>
        </div>
      </div>
    </>
  )
}

export default App
