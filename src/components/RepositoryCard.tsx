interface Repository {
    title: string;
    description: string;
    language?: string;
    update: string;
}

interface Props {
    repository: Repository;
}

export function RepositoryCard({repository}: Props) {
    return (
        <li className="w-[230px] h-full bg-black-100 grid items-start shadow-md rounded-xl px-3 py-4 gap-3">
            <span className="text-xs font-bold text-white-100">{repository.title}</span>
            <p className="text-[0.625rem] font-semibold text-gray-200">{repository.description}</p>
            <footer className="flex items-center gap-3 w-full">
                <small className="text-[0.625rem] font-medium text-pink-100">{repository.language}</small>
                <small className="text-[0.625rem] font-medium text-green-100">{repository.update}</small>
            </footer>
        </li>
    )
}