export function CardProfileLoading() {
    const cardWidths = [20, 12, 20, 12, 20, 12]
    return (
        <div className="relative w- col-start-1 col-end-13 xl:col-start-1 xl:col-end-4 xl:row-start-1 xl:row-end-3 animate-pulse border border-purple-100 shadow rounded-md p-4 w-full xl:w-[23.125rem] mx-auto">
            <div className="flex flex-col items-center justify-center gap-6">
                <div className="rounded-full bg-purple-100 opacity-70 h-[9.375rem] w-[9.375rem]"></div>
                <div className="rounded-full bg-purple-100 opacity-70 h-2 w-3/4"></div>
            </div>
            {cardWidths.map(width => (
                <>
                    <div className={`rounded-full bg-purple-100 opacity-70 mt-6 h-2 w-${width}`}></div>
                    <div className="rounded-full flex items-center justify-between w-full">
                        <div className="rounded-full bg-purple-100 opacity-70 mt-6 h-2 w-3/4"></div>
                        <div className="rounded-full bg-purple-100 opacity-70 mt-6 h-2 w-10"></div>
                    </div>
                </>
            ))}
        </div>
    )
}