import { BookmarksSimple, ClockCounterClockwise, GitPullRequest, Star } from "phosphor-react";
import { useEffect, useState } from "react";
import { CardLoading } from "../components/CardLoading";
import { CardProfileLoading } from "../components/CardProfileLoading";
import { CardUserInfo } from "../components/CardUserInfo";
import { ContributionChart } from "../components/ContributionChart";
import { LanguageProgress } from "../components/LanguageProgress";
import { RepositoryCard } from "../components/RepositoryCard";
import { repoMock } from "../mock";
import { calculateTopLanguages } from "../utils/calculateTopLanguages";
import { token } from "../utils/token";

export interface Contribution {
    weekday: number;
    date: string;
    contributionCount: number
}
export interface Repository {
    primaryLanguage: {
        name: string | null;
    }
    name: string;
    languages: {
        edges: {
            size: number;
            node: {
                color: string;
                name: string;
            }[]
        }[]
    }
    id: string;
    updatedAt: string;
    description: string | null;
    size: number;
}
interface GetUserDataResponse {
    user: {
        name: string;
        avatarUrl: string;
        contributionsCollection: {
            totalCommitContributions: number;
            totalPullRequestContributions: number;
            totalRepositoriesWithContributedIssues: number;
            contributionCalendar: {
                totalContributions: number;
                weeks: {
                    contributionDays: Contribution[]
                }[]
            }
        },
        repositories: {
            nodes: Repository[]
        }
    };
}

export interface Language {
    name: string;
    color: string;
    size: number;
}
interface UserData {
    data: GetUserDataResponse
}

export function Home() {
    const [topLanguages, setTopLanguages] = useState<Language[]>([]);
    const [topLanguagesTotalSize, setTopLanguagesTotalSize] = useState(0);
    const [loading, setLoading] = useState(true);
    const [allContributions, setAllContributions] = useState<Contribution[]>([]);
    const [userData, setUserData] = useState<UserData>({} as UserData);

    const animationTimes = [
        "animate-[wiggleX_0.52s_ease-in-out]",
        "animate-[wiggleX_0.54s_ease-in-out]",
        "animate-[wiggleX_0.56s_ease-in-out]",
        "animate-[wiggleX_0.58s_ease-in-out]",
        "animate-[wiggleX_0.60s_ease-in-out]",
        "animate-[wiggleX_0.62s_ease-in-out]",
    ]

    useEffect(() => {
        async function getUserData(token: string, userName: string) {
            const headers = {
                "Authorization": `Bearer ${token}`
            };
            const body = {
                "query": `query {
                    user(login: "${userName}") {
                        name
                        avatarUrl
                        contributionsCollection(
                            from: "2022-01-01T00:00:00Z"
                            to: "2022-12-12T23:59:59Z"
                        ) {
                          totalCommitContributions
                          totalPullRequestContributions
                          totalRepositoriesWithContributedIssues
                          contributionCalendar {
                            totalContributions
                            weeks {
                              contributionDays {
                                weekday
                                date
                                contributionCount
                              }
                            }
                          }
                        }
                        repositories(ownerAffiliations: OWNER, isFork: false, first: 100) {
                            nodes {
                                primaryLanguage {
                                    name
                                }
                                name
                                languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
                                    edges {
                                    size
                                    node {
                                    color
                                    name
                                    }
                                }
                            }
                            updatedAt
                            description
                            id
                          }
                        }
                    }
                }`
            };
            const response = await fetch("https://api.github.com/graphql", {
                method: "POST",
                body: JSON.stringify(body),
                headers: headers
            });
            const data = await response.json();
            return data;
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
        async function getUser() {
            const data: UserData = await getUserData(token, "Nasalis");
            setUserData(data);
            let allWeeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
            getAllWeeksContributions(allWeeks)
            .then(setAllContributions)
            const topLanguagesInfo = calculateTopLanguages(data.data.user.repositories.nodes);
            setTopLanguagesTotalSize(topLanguagesInfo[0]);
            setTopLanguages(topLanguagesInfo[1]);
            setTimeout(() => {
                setLoading(false)
            }, 1000);
        }
        getUser();
    }, []);

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-black-100">
            <main className="grid grid-cols-12 grid-rows-1 items-start gap-y-4 mb-4 justify-center w-full h-full">
                {loading ? (
                    <CardProfileLoading/>
                ) : (
                    <aside className="relative col-start-1 col-end-4 row-start-1 row-end-3 bg-black-300 shadow-md w-[23.125rem] h-full rounded-xl p-10">
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
                        <div className="text-white-200 font-normal text-lg capitalize mt-6">
                            <span className="animate-[wiggleX_0.5s_ease-in-out]" >Most used languages</span>
                            <ul className="max-h-96 h-full overflow-auto">
                                {topLanguages.map((language, index) => (
                                    <li>
                                        <span className={`w-full h-full text-green-100 font-medium text-sm ${animationTimes[index]}`}>
                                            {language.name}
                                        </span>
                                        <div className="flex items-center justify-between">
                                            <LanguageProgress color={language.color} value={language.size} totalSize={topLanguagesTotalSize}/>
                                            <small className="text-purple-100 text-xs font-bold">
                                                {((language.size / topLanguagesTotalSize) * 100).toFixed(2)}%
                                            </small>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                )}
                <ul className="flex col-start-5 col-end-13 row-start-1 row-end-2 justify-between gap-8">
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
                <section className="col-start-5 col-end-13 row-start-2 row-end-3 self-stretch bg-black-300 px-8 py-6">
                    <h2 className="text-[1.125rem] text-white-100 text-opacity-50 font-bold mb-8">
                        Contributions
                    </h2>
                    <div className="h-64 mb-10">
                        <ContributionChart data={allContributions}/>
                    </div>
                    <ul className="flex flex-wrap items-center justify-start gap-3 h-60 overflow-auto">
                        {userData.data !== undefined && userData.data.user.repositories.nodes.map(repo => (
                            <RepositoryCard key={repo.id} repository={repo}/>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    )
}