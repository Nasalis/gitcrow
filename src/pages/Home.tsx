import { BookmarksSimple, ClockCounterClockwise, GitPullRequest, Star } from "phosphor-react";
import { RepositoryCard } from "../components/RepositoryCard";

export function Home() {
    let fakeRepository = {
        title: "ramirez",
        description: "Project to build a portfolio for photo...",
        language: "Typescript",
        update: "Updated 20 days ago"
    }

    return (
        <div className="flex items-center justify-center w-full h-screen bg-black-100">
            <main className="grid grid-cols-12 grid-rows-1 items-start justify-center w-[1170px]">
                <aside className="relative col-start-1 col-end-4 row-start-1 row-end-3 bg-black-300 shadow-md w-[23.125rem] rounded-xl p-10">
                    <div className="flex items-center flex-col justify-center gap-6">
                        <img
                            className="rounded-full w-[9.375rem]" 
                            src="https://github.com/Nasalis.png" 
                            alt="foto de perfil do usuário" 
                        />
                        <h1 className="text-white-200 font-normal text-2xl text-center">
                            Davi dos Santos Freitas
                        </h1>
                    </div>
                    <div className="text-white-200 font-normal text-lg capitalize mt-6">
                        <span>Most used languages</span>
                        <ul>
                            <li className="text-green-100 font-medium text-sm">
                                Language01
                            </li>
                            <li className="text-green-100 font-medium text-sm">
                                Language01
                            </li>
                            <li className="text-green-100 font-medium text-sm">
                                Language01
                            </li>
                            <li className="text-green-100 font-medium text-sm">
                                Language01
                            </li>
                            <li className="text-green-100 font-medium text-sm">
                                Language01
                            </li>
                        </ul>
                    </div>
                </aside>
                <ul className="flex col-start-5 col-end-13 row-start-1 row-end-2 justify-between gap-8">
                    <li className="flex flex-col items-center justify-center p-3 gap-2 w-[170px] bg-black-300 shadow-md rounded-xl">
                        <header className="flex items-center justify-evenly text-red-100 gap-2">
                            <Star size={20} />
                            <span className="text-xs font-bold capitalize text-red-100">
                                Total stars earned
                            </span>
                        </header>
                        <footer className="text-base font-normal text-white-200">001</footer>
                    </li>
                    <li className="flex flex-col items-center justify-center p-3 gap-2 w-[170px] bg-black-300 shadow-md rounded-xl">
                        <header className="flex items-center justify-evenly text-red-100 gap-2">
                            <ClockCounterClockwise size={20} />
                            <span className="text-xs font-bold capitalize text-red-100">
                                Total commits
                            </span>
                        </header>
                        <footer className="text-base font-normal text-white-200">093</footer>
                    </li>
                    <li className="flex flex-col items-center justify-center p-3 gap-2 w-[170px] bg-black-300 shadow-md rounded-xl">
                        <header className="flex items-center justify-evenly text-red-100 gap-2">
                            <GitPullRequest size={20} />
                            <span className="text-xs font-bold capitalize text-red-100">
                                Total pull requests
                            </span>
                        </header>
                        <footer className="text-base font-normal text-white-200">010</footer>
                    </li>
                    <li className="flex flex-col items-center justify-center p-3 gap-2 w-[170px] bg-black-300 shadow-md rounded-xl">
                        <header className="flex items-center justify-evenly text-red-100 gap-2">
                            <BookmarksSimple size={20} />
                            <span className="text-xs font-bold capitalize text-red-100">
                                Contributed to
                            </span>
                        </header>
                        <footer className="text-base font-normal text-white-200">000</footer>
                    </li>
                </ul>
                <section className="col-start-5 col-end-13 row-start-2 row-end-2 bg-black-300 px-8 py-6">
                    <h2 className="text-[1.125rem] text-white-100 text-opacity-50 font-bold mb-8">
                        Contributions
                    </h2>
               
                    <ul className="flex flex-wrap items-center justify-start gap-3">
                        <RepositoryCard repository={fakeRepository}/>
                        <RepositoryCard repository={fakeRepository}/>
                        <RepositoryCard repository={fakeRepository}/>
                        <RepositoryCard repository={fakeRepository}/>
                        <RepositoryCard repository={fakeRepository}/>
                        <RepositoryCard repository={fakeRepository}/>
                    </ul>
                </section>
            </main>
        </div>
    )
}