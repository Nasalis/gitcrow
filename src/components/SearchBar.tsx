import { MagnifyingGlass } from "phosphor-react"
import { useState } from "react";
import { useSearchBar } from "../contexts/SearchBarContext"
import { Logo } from "./Logo"

export function SearchBar() {

    const [input, setInput] = useState("");

    const {
        getUserData,
    } = useSearchBar();

    return (
        <header className="flex flex-col items-start gap-4 w-full">
            <Logo/>
            <div className="relative flex flex-col sm/2:flex-row w-full gap-7">
                <MagnifyingGlass 
                    className="absolute top-3 sm/2:top-1/4 mt-[0.1rem] translate-x-2 text-white-100 text-opacity-50"
                    size={20}
                    weight="bold"
                />
                <input 
                    className="w-full sm/2:flex-1 h-12 bg-black-200 text-white-100 text-opacity-50 text-xs font-medium rounded-2xl pl-9" 
                    type="text" 
                    placeholder="Searching for a user"
                    onChange={(event) => setInput(event.target.value)}
                />
                <button 
                    className="w-full sm/2:max-w-sm h-12 flex items-center justify-center bg-purple-100 bg-opacity-50 rounded-md shadow-md text-white-100 font-bold tracking-wide hover:bg-opacity-40 transition-all"
                    onClick={() => getUserData(input)}
                >
                    Search
                </button>
            </div>
        </header>
    )
}