import { createContext, ReactNode, useContext, useEffect, useState } from "react";
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
export interface UserData {
    data: GetUserDataResponse
}

interface SearchBarContextData {
    allContributions: Contribution[];
    topLanguages: Language[];
    topLanguagesTotalSize: number;
    userData: UserData;
    loading: boolean;
    getUser(userName: string): Promise<void>;
}

interface SearchBarContextProps {
    children: ReactNode;
}

export const SearchBarContext = createContext({} as SearchBarContextData);

export function SearchBarContextProvider({
    children
}: SearchBarContextProps) {

    const [topLanguages, setTopLanguages] = useState<Language[]>([]);
    const [topLanguagesTotalSize, setTopLanguagesTotalSize] = useState(0);
    const [loading, setLoading] = useState(true);
    const [allContributions, setAllContributions] = useState<Contribution[]>([]);
    const [userData, setUserData] = useState<UserData>({} as UserData);

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
    async function getUser(userName: string = "") {
        setLoading(true)
        const data: UserData = await getUserData(token, userName === "" ? "Nasalis" : userName);
        if (data.data.user === undefined || data.data.user.name === null) {
            setLoading(false);
            setUserData({} as UserData)
            return;
        }
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

    useEffect(() => {
        getUser();
    }, []);

    return (
        <SearchBarContext.Provider value={{
            allContributions,
            topLanguages,
            topLanguagesTotalSize,
            userData,
            loading,
            getUser,
        }}>
            {children}
        </SearchBarContext.Provider>
    )
}

export const useSearchBar = () => {
    return useContext(SearchBarContext);
}