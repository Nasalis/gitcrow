import { gql, OperationVariables, QueryResult, useLazyQuery } from "@apollo/client";
import { createContext, ReactNode, useContext, useEffect } from "react";

const GET_USER_QUERY = gql`
    query getUserData($login: String!) {
        user(login: $login) {
            name
            login
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
                    pushedAt
                    description
                    id
                }   
            }
        }
    }
`

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
    pushedAt: string;
    description: string | null;
    size: number;
}
export interface GetUserDataResponse {
    user: {
        name: string;
        login: string;
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
    data: GetUserDataResponse | undefined;
    getUserData(userName: string): Promise<QueryResult<GetUserDataResponse, OperationVariables>>
}

interface SearchBarContextProps {
    children: ReactNode;
}

export const SearchBarContext = createContext({} as SearchBarContextData);

export function SearchBarContextProvider({
    children
}: SearchBarContextProps) {
    const [getUserInfo, { data }] = useLazyQuery<GetUserDataResponse>(GET_USER_QUERY)
    const getUserData = (userName: string = "") => getUserInfo({variables: {login: userName === "" ? "Nasalis" : userName}})

    useEffect(() => {
        getUserData();
    }, [])

    return (
        <SearchBarContext.Provider value={{
            data,
            getUserData,
        }}>
            {children}
        </SearchBarContext.Provider>
    )
}

export const useSearchBar = () => {
    return useContext(SearchBarContext);
}