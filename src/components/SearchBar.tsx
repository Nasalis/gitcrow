import { MagnifyingGlass } from "phosphor-react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchBar } from "../contexts/SearchBarContext"
import { DarkLogo } from "./DarkLogo";
import { Logo } from "./Logo"

interface Props {
    isDark: boolean
}

export function SearchBar({ isDark }: Props) {
    const navigate = useNavigate();
    const [input, setInput] = useState("");

    const {
        getUserData,
    } = useSearchBar();

    return (
        <header className="flex flex-col items-start gap-4 w-full">
            {isDark ? (
                <Logo/>
            ) : (
                <DarkLogo/>
            )}
            <div className="relative flex flex-col sm/2:flex-row w-full gap-7">
                <MagnifyingGlass 
                    className="absolute top-3 sm/2:top-1/4 mt-[0.1rem] translate-x-2 text-black-100 dark:text-white-100 text-opacity-50"
                    size={20}
                    weight="bold"
                />
                <input 
                    className="w-full sm/2:flex-1 h-12 bg-transparent dark:bg-black-200 border dark:border-none text-black-100 dark:text-white-100 text-opacity-100 dark:text-opacity-50 text-xs font-medium rounded-2xl pl-9" 
                    type="text" 
                    placeholder="Searching for a user"
                    onChange={(event) => setInput(event.target.value)}
                />
                <button 
                    className="w-full sm/2:max-w-sm h-12 flex items-center justify-center bg-purple-100 bg-opacity-100 dark:bg-opacity-50 rounded-md shadow-md text-white-100 font-bold tracking-wide hover:bg-opacity-90 dark:hover:bg-opacity-40 transition-all"
                    onClick={() => { 
                        getUserData(input)
                        navigate("/")
                    }}
                >
                    Search
                </button>
            </div>
        </header>
    )
}