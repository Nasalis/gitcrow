export function CardLoading() {
    return (
        <div className="animate-pulse border border-purple-100 shadow rounded-md p-4 w-full md:w-[170px] mx-auto">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-purple-100 opacity-70 h-5 w-5"></div>
              <div className="flex-1 rounded-full bg-purple-100 opacity-70 h-2 w-10"></div>
            </div>
             <div className="flex-1 space-y-6 py-1">
                <div className="flex items-center justify-center h-2">
                  <div className="w-7 h-2 bg-purple-100 opacity-70 rounded"></div>
                </div>
              </div>
        </div>
    )
}