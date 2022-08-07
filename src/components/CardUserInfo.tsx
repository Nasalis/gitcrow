import { ReactElement } from "react";
import { padStringForAmountInfo } from "../utils/formatAmountInfo";

interface Props {
    icon: ReactElement<any, any>;
    title: string;
    content: number;
}

export function CardUserInfo({icon, title, content}: Props) {
    return (
        <div className="flex flex-col items-center justify-center p-3 gap-2 w-[170px] bg-black-300 shadow-md rounded-xl">
            <header className="flex items-center justify-evenly text-red-100 gap-2">
                <>
                    {icon}
                    <span className="text-xs text-center font-bold capitalize text-red-100">
                        {title}
                    </span>
                </>
            </header>
            <footer className="text-base font-normal text-white-200">{padStringForAmountInfo(content)}</footer>
        </div>
    )
}