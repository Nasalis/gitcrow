import { MagnifyingGlass } from "phosphor-react"
import { useState } from "react";
import { useSearchBar } from "../contexts/SearchBarContext"
import { Logo } from "./Logo"

export function SearchBar() {

    const [input, setInput] = useState("");

    const {
        getUser,
    } = useSearchBar();

    return (
        <header className="flex flex-col items-start gap-4">
            <Logo/>
            <div className="relative flex w-full gap-7">
                <MagnifyingGlass 
                    className="absolute top-1/4 mt-[0.1rem] translate-x-2 text-white-100 text-opacity-50"
                    size={20}
                    weight="bold"
                />
                <input 
                    className="flex-1 bg-black-200 text-white-100 text-opacity-50 text-xs font-medium rounded-2xl pl-9" 
                    type="text" 
                    placeholder="Searching for a user"
                    onChange={(event) => setInput(event.target.value)}
                />
                <button 
                    className="max-w-sm w-full h-12 flex items-center justify-center bg-purple-100 bg-opacity-50 rounded-md shadow-md text-white-100 font-bold tracking-wide hover:bg-opacity-40 transition-all"
                    onClick={() => getUser(input)}
                >
                    Search
                </button>
            </div>
        </header>
    )
}