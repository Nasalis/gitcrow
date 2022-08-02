import { CaretRight } from "phosphor-react";
import { useEffect, useState } from "react";
import { ContributorItem } from "../components/ContributorItem";
import { RepositoryLanguageChart } from "../components/RepositoryLanguageChart";
import { formatDateTime } from "../utils/formatDate";
import { token } from "../utils/token";

interface RepositoryFields {
  mentionableUsers: {
    totalCount: number;
    pageInfo: {
      hasNextPage: number;
    }
    nodes: {
      avatarUrl: string;
      name: string;
      twitterUsername: string;
      websiteUrl: string;
      url: string;
    }[]
  }
  createdAt: string;
  updatedAt: string;
  stargazerCount: number;
  name: string;
  description: string;
  visibility: string;
  languages: {
    totalSize: number;
    totalCount: string;
    edges: {
      node: {
        name: string;
        color: string;
      }
      size: number;
    }[]
  }
  watchers: {
    totalCount: number;
  }
  releases: {
    totalCount: number;
    edges: {
      node: {
        id: string
        description: string;
      }
    }[]
    nodes: {
      description: string;
      publishedAt: string;
    }[]
  }
  pullRequests: {
    edges: {
      node: {
        id: string;
        author: {
          name: string;
        }
        publishedAt: string;
      }
    }[]
  }
  defaultBranchRef: {
    target: {
      id: string;
      history: {
        edges: {
          node: {
            committedDate: string;
            author: {
              name: string;
            }
          }
        }[]
        totalCount: number;
      }
    }
  }
  owner: {
    name: string;
  }
}

interface GetRepositoryDataResponse {
  repository: RepositoryFields
}

interface RepositoryData {
  data: GetRepositoryDataResponse;
}

export function Repository() {
    const [repositoryData, setRepositoryData] = useState({} as RepositoryFields);

    async function getRepositoryData(token: string, repositoryName: string, userName: string) {
        const headers = {
            "Authorization": `Bearer ${token}`
        };
        const body = {
            "query": `query {
              repository(name: "${repositoryName}", owner: "${userName}") {
                mentionableUsers(first: 100) {
                  totalCount
                  pageInfo {
                    hasNextPage
                  }
                  nodes {
                    avatarUrl(size: 40)
                    name
                    twitterUsername
                    websiteUrl
                    url
                  }
                }
                updatedAt
                stargazerCount
                name
                description
                languages(first: 100) {
                  totalSize
                  totalCount
                  edges {
                    node {
                      name
                      color
                    }
                    size
                  }
                }
                createdAt
                watchers {
                  totalCount
                }
                visibility
                releases(first: 10) {
                  edges {
                    node {
                      id
                      description
                    }
                  }
                  totalCount
                  nodes {
                    description
                    publishedAt
                  }
                }
                pullRequests(first: 100) {
                  edges {
                    node {
                      id
                      author {
                        ... on User {
                          name
                        }
                      }
                      publishedAt
                    }
                  }
                }
                defaultBranchRef {
                  target {
                    ... on Commit {
                      id
                      history(first: 10, author: {}) {
                        edges {
                          node {
                            committedDate
                            author {
                              name
                            }
                          }
                        }
                        totalCount
                      }
                    }
                  }
                }
                owner {
                  ... on User {
                    name
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

    async function getRepository() {
        const { data }: RepositoryData = await getRepositoryData(token, "github-readme-stats", "anuraghazra");
        setRepositoryData(data.repository);
    }

    useEffect(() => {
        getRepository();
    }, [])

    console.log(repositoryData)

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-black-100">
            <main className="grid grid-cols-12 grid-rows-1 items-start gap-y-4 mb-4 justify-center">
                <aside className="relative flex flex-col items-start justify-center gap-y-6 w-[23.125rem] xl:col-start-1 xl:col-end-4 bg-black-300 shadow-md rounded-xl p-10">
                    <div>
                        <div className="flex items-center gap-x-1">
                            <CaretRight weight="bold" size={20} color="#ffffff"/>
                            <h1 className="text-[1.625rem] font-bold text-white-100">
                              {repositoryData?.name}
                            </h1>
                        </div>
                        <small className="text-xs text-green-100 font-bold">
                          {formatDateTime(repositoryData?.createdAt ? new Date(repositoryData?.createdAt) : new Date())}
                        </small>
                    </div>
                    <div className="flex flex-col items-start gap-y-3">
                        <span className="text-white-100 text-base font-semibold">
                          About
                        </span>
                        <p className="text-white-100 text-opacity-75 text-sm font-medium">
                          {repositoryData?.description}
                        </p>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <span className="text-white-100 text-base font-semibold">
                          Owner:
                        </span>
                        <span className="text-white-100 text-base font-semilbold">
                          {repositoryData?.owner?.name}
                        </span>
                    </div>
                    <div>
                      <span className="text-white-100 text-base font-medium mr-1">
                        Contributors
                      </span>
                      <strong className="text-pink-100 font-bold">
                        ({repositoryData?.mentionableUsers?.totalCount!})
                      </strong>
                    </div>
                    <ul className="flex flex-col items-start gap-y-6 w-full h-52 overflow-auto">
                        {repositoryData?.mentionableUsers?.nodes.map(collaborator => (
                          <ContributorItem 
                            image={collaborator.avatarUrl}
                            name={collaborator.name}
                          />
                        ))}
                    </ul>
                </aside>
                <div className="grid col-start-5 col-end-13 bg-black-300 gap-5 p-10">
                  <h2 className="text-white-100 text-opacity-75 text-xl font-bold">
                    Repository informations
                  </h2>
                  <div>
                    <h3 className="text-white-100 text-opacity-75 text-lg font-bold">
                      Languages
                    </h3>
                    <div className="h-64 mb-10">
                      <RepositoryLanguageChart 
                        languages={repositoryData?.languages?.edges!}
                        totalValue={repositoryData?.languages?.totalSize!}
                      />
                    </div>
                  </div>
                </div>
            </main>
        </div>
    )
}