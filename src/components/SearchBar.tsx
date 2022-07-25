import { MagnifyingGlass, Moon } from "phosphor-react"
import { Logo } from "./Logo"

export function SearchBar() {
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
                />
                <button className="w-12 h-12 flex items-center justify-center bg-black-200 bg-opacity-50 rounded-md shadow-md">
                    <Moon  weight="fill" size={25} color="#CDCDCD"/>
                </button>
            </div>
        </header>
    )
}