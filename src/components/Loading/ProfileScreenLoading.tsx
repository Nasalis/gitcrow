import { CardLoading } from "./CardLoading";
import { CardProfileLoading } from "./CardProfileLoading";

export function ProfileScreenLoading() {
    return (
        <div className="flex items-center justify-center w-full min-h-screen animate-pulse ">
            <main className="grid grid-cols-12 grid-rows-1 items-start gap-y-4 mb-4 justify-center w-full h-full ">
                <CardProfileLoading/>
                <ul className="flex flex-col w-screen justify-between md:w-full md:flex-row md:col-start-1 md:col-end-13 xl:col-start-5 xl:col-end-13 row-start-1 row-end-2 gap-8">
                    {
                        [1, 2, 3, 4].map(card => (
                            <CardLoading key={card} />
                    ))  }
                </ul>
                <section className="col-start-1 col-end-13 xl:col-start-5 xl:col-end-13 row-start-3 row-end-4 xl:row-start-2 xl:row-end-3 self-stretch px-8 py-6 border border-purple-100">
                    <div className="rounded-full w-1/4 bg-purple-100 opacity-70 h-3 mb-8"></div>
                    <div className="h-64 w-full rounded-2xl mb-10 border border-purple-100 opacity-70"></div>
                    <ul className="flex flex-wrap items-center justify-center gap-3 h-60 w-full overflow-auto">
                        {[1, 2, 3, 4, 5, 6].map(el => (
                            <li key={el} className="flex flex-col justify-between w-[230px] h-28 border px-3 py-4 gap-3 border-purple-100 shadow rounded-md opacity-70">
                                <div className="w-10 h-2 rounded-md bg-purple-100 opacity-70"></div>
                                <div className="w-4/5 h-2 rounded-md bg-purple-100 opacity-70"></div>
                                <div className="flex items-center gap-3 w-full">
                                    <div className="w-10 h-2 rounded-md bg-purple-100 opacity-70"></div>
                                    <div className="w-10 h-2 rounded-md bg-purple-100 opacity-70"></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    )
}