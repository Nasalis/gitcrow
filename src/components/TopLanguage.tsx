import { Language } from "../contexts/SearchBarContext";
import { LanguageProgress } from "./LanguageProgress";

interface Props {
    language: Language;
    totalSize: number;
}

export function TopLanguage({language, totalSize}: Props) {
    const percentualValue = ((language.size / totalSize) * 100).toFixed(2);

    return (
        <li className="w-[250px] xl:w-[200px]">
            <span className={`w-full h-full text-green-100 font-medium text-sm`}>
                {language.name}
            </span>
            <div className="flex items-center justify-between gap-x-5">
                <LanguageProgress color={language.color} value={language.size} totalSize={totalSize}/>
                <small className="text-purple-100 text-xs font-bold">
                    {percentualValue}%
                </small>
            </div>
        </li>
    )
}