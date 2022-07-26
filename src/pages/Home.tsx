import { BookmarksSimple, ClockCounterClockwise, GitPullRequest, Star } from "phosphor-react";
import { CardLoading } from "../components/CardLoading";
import { CardProfileLoading } from "../components/CardProfileLoading";
import { CardUserInfo } from "../components/CardUserInfo";
import { ContributionChart } from "../components/ContributionChart";
import { RepositoryCard } from "../components/RepositoryCard";
import { TopLanguage } from "../components/TopLanguage";
import { useSearchBar } from "../contexts/SearchBarContext";
import { calculatePercentualValue } from "../utils/calculatePercentualValue";


export function Home() {
    
    const {
        allContributions,
        topLanguages,
        topLanguagesTotalSize,
        userData,
        loading
    } = useSearchBar();

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-black-100">
            <main className="grid grid-cols-12 grid-rows-1 items-start gap-y-4 mb-4 justify-center w-full h-full">
                {loading ? (
                    <CardProfileLoading/>
                ) : (
                    <aside className="relative flex flex-col gap-x-10 sm:flex-row xl:grid col-start-1 col-end-13 xl:col-start-1 xl:col-end-4 row-start-2 row-end-3 xl:row-start-1 xl:row-end-3 bg-black-300 shadow-md w-full xl:w-[23.125rem] h-full rounded-xl p-10">
                        <div className="flex items-center flex-col justify-center gap-6">
                            <img
                                className="rounded-full w-[9.375rem] animate-[wiggle_0.5s_ease-in-out]" 
                                src={userData.data ? userData.data.user.avatarUrl : ""}
                                alt="foto de perfil do usuário" 
                            />
                            <h1 className="text-white-200 font-normal text-2xl text-center animate-[wiggle_0.7s_ease-in-out]">
                                {userData.data !== undefined && userData?.data.user.name}
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
                )}
                <ul className="flex flex-col w-screen justify-between md:w-full md:flex-row md:col-start-1 md:col-end-13 xl:col-start-5 xl:col-end-13 row-start-1 row-end-2 gap-8">
                    {loading ? (
                        [1, 2, 3, 4].map(card => (
                            <CardLoading key={card} />
                        ))
                    ) : (
                        <>
                            <CardUserInfo 
                                icon={<Star size={20} />} 
                                title="Total contribution" 
                                content={userData?.data.user.contributionsCollection.contributionCalendar.totalContributions}
                            />
                            <CardUserInfo 
                                icon={<ClockCounterClockwise size={20} />} 
                                title="Total commits" 
                                content={userData?.data.user.contributionsCollection.totalCommitContributions}
                            />
                            <CardUserInfo 
                                icon={<GitPullRequest size={20} />} 
                                title="Total pull requests" 
                                content={userData?.data.user.contributionsCollection.totalPullRequestContributions}
                            />
                            <CardUserInfo 
                                icon={<BookmarksSimple size={20} />} 
                                title="Contributed to" 
                                content={userData?.data.user.contributionsCollection.totalRepositoriesWithContributedIssues}
                            />
                        </>
                    )}
                </ul>
                <section className="col-start-1 col-end-13 xl:col-start-5 xl:col-end-13 row-start-3 row-end-4 xl:row-start-2 xl:row-end-3 self-stretch bg-black-300 px-8 py-6">
                    <h2 className="text-[1.125rem] text-white-100 text-opacity-50 font-bold mb-8">
                        Contributions
                    </h2>
                    <div className="h-64 mb-10">
                        <ContributionChart data={allContributions}/>
                    </div>
                    <ul className="flex flex-wrap items-center justify-center gap-3 h-60 overflow-auto">
                        {userData.data !== undefined && userData.data.user.repositories.nodes.map(repo => (
                            <RepositoryCard key={repo.id} repository={repo}/>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    )
}