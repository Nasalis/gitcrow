import { BookmarksSimple, ClockCounterClockwise, GitPullRequest, Star } from "phosphor-react";
import { useEffect, useState } from "react";
import { CardUserInfo } from "../components/CardUserInfo";
import { ContributionChart } from "../components/ContributionChart";
import { RepositoryCard } from "../components/RepositoryCard";
import { TopLanguage } from "../components/TopLanguage";
import { Contribution, GetUserDataResponse } from "../contexts/SearchBarContext";
import { calculatePercentualValue } from "../utils/calculatePercentualValue";
import { calculateTopLanguages } from "../utils/calculateTopLanguages";

interface Props {
    userData: GetUserDataResponse,
}

function getAllWeeksContributions(alllWeeks: {
    contributionDays: Contribution[];
}[]) {
    return new Promise((resolve: React.Dispatch<React.SetStateAction<Contribution[]>>, reject) => {
        let allContributions: Contribution[] = [];
        alllWeeks.forEach(week => allContributions.push(...week.contributionDays))
        resolve(allContributions)
    })
}

export function ProfileScreen({userData}: Props) {
    const [allContributions, setAllContributions] = useState<Contribution[]>([]);
    const topLanguagesInfo = calculateTopLanguages(userData.user.repositories.nodes);
    const topLanguagesTotalSize = topLanguagesInfo[0];
    const topLanguages = topLanguagesInfo[1];
    
    useEffect(() => {
        let allWeeks = userData.user.contributionsCollection.contributionCalendar.weeks;
        async function getContributions() {
            await getAllWeeksContributions(allWeeks)
            .then(setAllContributions)
        }
        getContributions();
    }, [])

    const cadsUserInfo = [
        <CardUserInfo 
            icon={<Star size={20} />} 
            title="Total contribution" 
            content={userData?.user.contributionsCollection.contributionCalendar.totalContributions}
        />,
        <CardUserInfo 
            icon={<ClockCounterClockwise size={20} />} 
            title="Total commits" 
            content={userData?.user.contributionsCollection.totalCommitContributions}
        />,
        <CardUserInfo 
            icon={<GitPullRequest size={20} />} 
            title="Total pull requests" 
            content={userData?.user.contributionsCollection.totalPullRequestContributions}
        />,
        <CardUserInfo 
            icon={<BookmarksSimple size={20} />} 
            title="Contributed to" 
            content={userData?.user.contributionsCollection.totalRepositoriesWithContributedIssues}
        />
    ]

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-black-100">
            <main className="grid grid-cols-12 grid-rows-1 items-start gap-y-4 mb-4 justify-center">
                <ul className="flex flex-wrap w-full place-content-center gap-4 col-start-1 col-end-13 xl:col-start-5 xl:col-end-13 xl:place-content-between row-start-1 row-end-2">
                    {cadsUserInfo.map((card, index) => (
                        <li key={index}>
                            {card}
                        </li>
                    ))}
                </ul>
                <aside className="relative flex flex-col gap-x-10 sm:flex-row xl:grid col-start-1 col-end-13 xl:col-start-1 xl:col-end-4 row-start-2 row-end-3 xl:row-start-1 xl:row-end-3 bg-black-300 shadow-md w-full xl:w-[23.125rem] h-full rounded-xl p-10">
                    <div className="flex items-center flex-col justify-center gap-6">
                        <img
                            className="rounded-full w-[9.375rem] animate-[wiggle_0.5s_ease-in-out]" 
                            src={userData ? userData.user.avatarUrl : ""}
                            alt="foto de perfil do usuário" 
                        />
                        <h1 className="text-white-200 font-normal text-2xl text-center animate-[wiggle_0.7s_ease-in-out]">
                            {userData !== undefined && userData?.user.name}
                        </h1>
                    </div>
                    <div className="w-full text-white-200 font-normal text-lg capitalize mt-6">
                        <span className="flex w-full justify-center text-center mb-4 animate-[wiggleX_0.5s_ease-in-out]" >Most used languages</span>
                        <ul className="flex flex-wrap justify-center gap-x-8 xl:flex-col xl:flex-nowrap xl:justify-start max-h-96 h-full overflow-auto">
                            {topLanguages.map(language => (
                                calculatePercentualValue(language.size, topLanguagesTotalSize) > 1 ? (
                                    <TopLanguage
                                        key={language.name}
                                        language={language}
                                        totalSize={topLanguagesTotalSize}
                                    />
                                ) : ""
                            ))}
                        </ul>
                    </div>
                </aside>
                <section className="col-start-1 col-end-13 xl:col-start-5 xl:col-end-13 row-start-3 row-end-4 xl:row-start-2 xl:row-end-3 self-stretch bg-black-300 px-8 py-6">
                    <h2 className="text-[1.125rem] text-white-100 text-opacity-50 font-bold mb-8">
                        Contributions
                    </h2>
                    <div className="h-64 mb-10">
                        <ContributionChart data={allContributions}/>
                    </div>
                    <ul className="flex flex-wrap items-center justify-center gap-3  py-2 h-60 overflow-auto">
                        {userData !== undefined && userData.user.repositories.nodes.map(repo => (
                            <RepositoryCard key={repo.id} repository={repo}/>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    )
}