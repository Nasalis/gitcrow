import { gql, NetworkStatus, useQuery } from "@apollo/client";
import { CaretDown, CaretRight } from "phosphor-react";
import { CommitsHistory } from "../components/CommitsHistory";
import { ContributorItem } from "../components/ContributorItem";
import { LoadIcon } from "../components/LoadIcon";
import { PullRequestsChart } from "../components/PullRequestsChart";
import { RepositoryLanguageChart } from "../components/RepositoryLanguageChart";
import { formatDateTime } from "../utils/formatDate";

const GET_REPOSITORY_QUERY = gql`
  query getRepositoryData($name: String!, $owner: String!, $after: String){
    repository(name: $name, owner: $owner) {
      id
      mentionableUsers(first: 30, after: $after) {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          avatarUrl(size: 40)
          name
          twitterUsername
          websiteUrl
          url
          id
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
      pullRequests(last: 50) {
        edges {
          node {
            id
            author {
              ... on User {
                name
              }
            }
            publishedAt
            additions
            changedFiles
            deletions
          }
        }
      }
      defaultBranchRef {
        target {
          ... on Commit {
            id
            history(author: {}, first: 50, since: "2022-01-01T00:00:00Z") {
              edges {
                node {
                  committedDate
                  author {
                    name
                  }
                  additions
                  changedFiles
                  deletions
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
  }
`

interface GetRepositoryQueryResponse {
  repository: {
    mentionableUsers: {
      totalCount: number;
      pageInfo: {
        hasNextPage: number;
        endCursor: string;
      }
      nodes: {
        avatarUrl: string;
        name: string;
        twitterUsername: string;
        websiteUrl: string;
        url: string;
        id: string;
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
          additions: number;
          changedFiles: number;
          deletions: number;
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
              additions: number;
              changedFiles: number;
              deletions: number;
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
}

export function Repository() {
  const { data, loading, error, refetch, networkStatus, fetchMore } = useQuery<GetRepositoryQueryResponse>(GET_REPOSITORY_QUERY, {
    variables: {
      name: "github-readme-stats", 
      owner: "anuraghazra",
      after: null
    },
    notifyOnNetworkStatusChange: true
  });

  function getCollaboratosListPagination() {
    const { endCursor } = data?.repository.mentionableUsers.pageInfo!
    fetchMore({
      variables: {after: endCursor},
      updateQuery: (prevResult, {fetchMoreResult}) => {
        fetchMoreResult.repository.mentionableUsers.nodes = [
          ...prevResult.repository.mentionableUsers.nodes,
          ...fetchMoreResult.repository.mentionableUsers.nodes
        ];
        return fetchMoreResult;
      }
    })
  }

  const currentCollaboratorsAmount = data?.repository?.mentionableUsers?.nodes.length;
  const totalCollaboratorsAmount = data?.repository?.mentionableUsers?.totalCount

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-black-100">
            <main className="grid grid-cols-12 grid-rows-1 items-start gap-y-4 mb-4 justify-center">
                <aside className="relative flex flex-col items-start justify-center gap-y-6 w-[23.125rem] xl:col-start-1 xl:col-end-4 bg-black-300 shadow-md rounded-xl p-10">
                    <div>
                        <div className="flex items-center gap-x-1">
                            <CaretRight weight="bold" size={20} color="#ffffff"/>
                            <h1 className="text-xl font-bold text-white-100">
                              {data?.repository.name}
                            </h1>
                        </div>
                        <small className="text-xs text-green-100 font-bold">
                          {formatDateTime(data?.repository.createdAt ? new Date(data?.repository.createdAt) : new Date())}
                        </small>
                    </div>
                    <div className="flex flex-col items-start gap-y-3">
                        <span className="text-white-100 text-base font-semibold">
                          About
                        </span>
                        <p className="text-white-100 text-opacity-75 text-sm font-medium">
                          {data?.repository.description}
                        </p>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <span className="text-white-100 text-base font-semibold">
                          Owner:
                        </span>
                        <span className="text-white-100 text-base font-semilbold">
                          {data?.repository.owner?.name}
                        </span>
                    </div>
                    <div>
                      <span className="text-white-100 text-base font-medium mr-1">
                        Contributors
                      </span>
                      <strong className="text-pink-100 font-bold">
                        ({currentCollaboratorsAmount} / {totalCollaboratorsAmount})
                      </strong>
                    </div>
                    <ul className="flex flex-col items-start gap-y-3 w-full h-56 overflow-auto">
                      {data?.repository?.mentionableUsers?.nodes.map(collaborator => (
                          <ContributorItem
                            key={collaborator.id}
                            collaborator={collaborator} 
                          /> 
                        ))}
                    </ul>
                    <div className="flex justify-center w-full h-full">
                      {loading ? (
                          <LoadIcon/>
                        ) : (
                          currentCollaboratorsAmount === totalCollaboratorsAmount ? (
                            <span className="max-w-[150px] text-white-100 text-sm text-center font-semibold animate-[wiggle_0.5s_ease-in]">
                              All collaborators has benn listed!
                            </span>
                          ) : (
                            <button 
                              type="button"
                              className="flex items-center justify-between py-1 px-3 gap-x-2 bg-purple-100 bg-opacity-50 rounded-md shadow-md text-white-100 font-bold tracking-wide hover:bg-opacity-40 transition-all" 
                              onClick={() => getCollaboratosListPagination()}
                            >
                              Ver mais
                              <CaretDown size={24} weight="fill" />
                            </button>
                          )
                      )}
                    </div>
                </aside>
                <div className="grid col-start-5 col-end-13 bg-black-300 gap-5 p-10">
                  <h2 className="text-white-100 text-opacity-75 text-xl font-bold">
                    Repository informations
                  </h2>
                  <div>
                    <h3 className="text-white-100 text-opacity-75 text-lg font-bold">
                      Languages
                    </h3>
                    <div className="h-64 w-full mb-10">
                      <RepositoryLanguageChart 
                        languages={data?.repository.languages?.edges!}
                        totalValue={data?.repository.languages?.totalSize!}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white-100 text-opacity-75 text-lg font-bold">
                      Pull Requests History
                    </h3>
                    <div className="h-64 w-full mb-10">
                      {loading ? (
                        <LoadIcon/>
                      ) : (
                        <PullRequestsChart pullRequests={data?.repository!?.pullRequests!?.edges!}/>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white-100 text-opacity-75 text-lg font-bold">
                      Commits History
                    </h3>
                    <div className="h-64 w-full mb-10">
                      {loading ? (
                        <LoadIcon/>
                      ) : (
                        <CommitsHistory repositoryCommits={data?.repository!?.defaultBranchRef!?.target!?.history!?.edges!}/>
                      )}
                    </div>
                  </div>
                </div>
            </main>
        </div>
    )
}