export function RepositoryAsideLoading() {
    return (
        <div className="grid gap-y-6 w-full col-start-1 col-end-13 row-start-1 row-end-1 lg:relative lg:flex lg:flex-col lg:items-start lg:justify-center xl:w-[23.125rem] xl:col-start-1 xl:col-end-4 shadow-md rounded-xl p-10 border border-purple-100 animate-pulse">
            <div className="rounded-full w-1/4 bg-purple-100 opacity-70 h-3"></div>
            <div className="rounded-full w-1/4 bg-purple-100 opacity-70 h-2"></div>
            <div className="rounded-full w-1/2 bg-purple-100 opacity-70 h-2"></div>
            <div className="rounded-full w-1/4 bg-purple-100 opacity-70 h-2"></div>
            <div className="rounded-full w-1/4 bg-purple-100 opacity-70 h-3"></div>
            <div className="rounded-full w-full  bg-purple-100 opacity-70 h-3"></div>
            <div className="flex items-center justify-start w-full gap-x-3">
            <div className="rounded-full w-1/4 bg-purple-100 opacity-70 h-3"></div>
            <div className="rounded-full w-1/4 bg-purple-100 opacity-70 h-3"></div>
            </div>
            <div className="flex flex-col items-center justify-center w-full sm/2:flex-row sm/2:justify-between">
            <div className="grid place-items-center gap-3 p-2 w-24">
                <div className="rounded-full w-6 h-6 bg-purple-100"></div>
                <div className="w-full h-2 bg-purple-100"></div>
                <div className="w-full h-2 bg-purple-100"></div>
            </div>
            <div className="grid place-items-center gap-3 p-2 w-24">
                <div className="rounded-full w-6 h-6 bg-purple-100"></div>
                <div className="w-full h-2 bg-purple-100"></div>
                <div className="w-full h-2 bg-purple-100"></div>
            </div>
            <div className="grid place-items-center gap-3 p-2 w-24">
                <div className="rounded-full w-6 h-6 bg-purple-100"></div>
                <div className="w-full h-2 bg-purple-100"></div>
                <div className="w-full h-2 bg-purple-100"></div>
            </div>
            </div>
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
        </div>
    )
}