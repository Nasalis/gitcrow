import { BookmarksSimple, ClockCounterClockwise, GitPullRequest, Star } from "phosphor-react";
import { useEffect, useState } from "react";
import { ContributionChart } from "../components/ContributionChart";
import { RepositoryCard } from "../components/RepositoryCard";
import { repoMock } from "../mock";
import { formatAmountInfo } from "../utils/formatAmountInfo";
import { token } from "../utils/token";

export interface Contribution {
    weekday: number;
    date: string;
    contributionCount: number
}
interface Repository {
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
        }
    }
    id: string;
    updatedAt: string;
    description: string | null;
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
interface UserData {
    data: GetUserDataResponse
}

export function Home() {
    const [allContributions, setAllContributions] = useState<Contribution[]>([]);
    const [userData, setUserData] = useState<UserData>({} as UserData);
    const allLanguages = new Set(repoMock.map(repo => repo.language));

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
        }
        getUser();
    }, []);

    // console.log(userData);
    console.log(allContributions)

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-black-100">
            <main className="grid grid-cols-12 grid-rows-1 items-start gap-y-4 justify-center w-full h-full">
                <aside className="relative col-start-1 col-end-4 row-start-1 row-end-3 bg-black-300 shadow-md w-[23.125rem] rounded-xl p-10">
                    <div className="flex items-center flex-col justify-center gap-6">
                        <img
                            className="rounded-full w-[9.375rem]" 
                            src={userData.data ? userData.data.user.avatarUrl : ""}
                            alt="foto de perfil do usuário" 
                        />
                        <h1 className="text-white-200 font-normal text-2xl text-center">
                            {userData.data !== undefined && userData?.data.user.name}
                        </h1>
                    </div>
                    <div className="text-white-200 font-normal text-lg capitalize mt-6">
                        <span>Most used languages</span>
                        <ul>
                            {Array.from(allLanguages).map(language => (
                                <li className="text-green-100 font-medium text-sm">
                                    {language}
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
                <ul className="flex col-start-5 col-end-13 row-start-1 row-end-2 justify-between gap-8">
                    <li className="flex flex-col items-center justify-center p-3 gap-2 w-[170px] bg-black-300 shadow-md rounded-xl">
                        <header className="flex items-center justify-evenly text-red-100 gap-2">
                            <Star size={20} />
                            <span className="text-xs font-bold capitalize text-red-100">
                                Total stars earned
                            </span>
                        </header>
                        <footer className="text-base font-normal text-white-200">001</footer>
                    </li>
                    <li className="flex flex-col items-center justify-center p-3 gap-2 w-[170px] bg-black-300 shadow-md rounded-xl">
                        <header className="flex items-center justify-evenly text-red-100 gap-2">
                            <ClockCounterClockwise size={20} />
                            <span className="text-xs font-bold capitalize text-red-100">
                                Total commits
                            </span>
                        </header>
                        <footer className="text-base font-normal text-white-200">
                            {userData.data !== undefined && formatAmountInfo(userData?.data.user.contributionsCollection.totalCommitContributions)}
                        </footer>
                    </li>
                    <li className="flex flex-col items-center justify-center p-3 gap-2 w-[170px] bg-black-300 shadow-md rounded-xl">
                        <header className="flex items-center justify-evenly text-red-100 gap-2">
                            <GitPullRequest size={20} />
                            <span className="text-xs font-bold capitalize text-red-100">
                                Total pull requests
                            </span>
                        </header>
                        <footer className="text-base font-normal text-white-200">
                            {userData.data !== undefined && formatAmountInfo(userData?.data.user.contributionsCollection.totalPullRequestContributions)}
                        </footer>
                    </li>
                    <li className="flex flex-col items-center justify-center p-3 gap-2 w-[170px] bg-black-300 shadow-md rounded-xl">
                        <header className="flex items-center justify-evenly text-red-100 gap-2">
                            <BookmarksSimple size={20} />
                            <span className="text-xs font-bold capitalize text-red-100">
                                Contributed to
                            </span>
                        </header>
                        <footer className="text-base font-normal text-white-200">
                            {userData.data !== undefined && formatAmountInfo(userData?.data.user.contributionsCollection.totalRepositoriesWithContributedIssues)}
                        </footer>
                    </li>
                </ul>
                <section className="col-start-5 col-end-13 row-start-2 row-end-3 bg-black-300 px-8 py-6">
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