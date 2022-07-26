import { formatUpdatedDate } from "../utils/formatDate";

interface Repository {
    primaryLanguage: {
        name: string | null;
    }
    name: string;
    id: string;
    updatedAt: string;
    description: string | null;
}

interface Props {
    repository: Repository;
}

export function RepositoryCard({repository}: Props) {
    return (
        <li className="flex items-center justify-center relative w-[230px] h-28 group transition ease-in-out delay-150 cursor-pointer">
            <div className="absolute w-full h-full bg-gradient-to-tr from-[#fb0094] to-[#0000ff] rounded-sm blur-0 group-hover:animate-pulse group-hover:blur-sm"></div>
            <div className="w-full h-full bg-black-100 grid items-start shadow-md rounded-sm px-3 py-4 gap-3 group-hover:w-[97%] group-hover:h-[97%] z-10 transition-all">
                <span className="text-xs font-bold text-white-100">{repository.name}</span>
                <p className="w-full text-[0.625rem] font-semibold text-gray-200 text-ellipsis overflow-hidden whitespace-nowrap">
                    {repository.description ? repository.description : "No description"}
                </p>
                <footer className="flex items-center gap-3 w-full">
                    <small className="text-[0.625rem] font-medium text-green-100">{formatUpdatedDate(repository.updatedAt)}</small>
                    <small className="text-[0.625rem] font-medium text-pink-100">{repository?.primaryLanguage?.name}</small>
                </footer>
            </div>
        </li>
    )
}