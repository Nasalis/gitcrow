
/* 
  Reference:
  https://github.com/anuraghazra/github-readme-stats/blob/master/src/fetchers/top-languages-fetcher.js
*/

import { Language, Repository } from "../contexts/SearchBarContext";

export function calculateTopLanguages(repositories: Repository[]): [number, Language[]] {
    let repoNodes = repositories;
    repoNodes = repoNodes.filter((node) => node.languages.edges.length > 0)
                        .reduce((acc, curr) => curr.languages.edges.concat(acc), [] as any[])
                        .reduce((acc, prev) => {
                            let languageSize = prev.size;

                            if (acc[prev.node.name] && prev.node.name === acc[prev.node.name].name) {
                                languageSize = prev.size + acc[prev.node.name].size;
                              }
                              return {
                                ...acc,
                                [prev.node.name]: {
                                  name: prev.node.name,
                                  color: prev.node.color,
                                  size: languageSize,
                                },
                              };
                        }, {});
    const topLangs: Language = Object.keys(repoNodes)
        .sort((a: any, b: any) => repoNodes[b].size - repoNodes[a].size)
        .reduce((result: any, key: any) => {
            result[key] = repoNodes[key];
            return result;
        }, {});
    
    const topLangsArray: Language[] = Object.values(topLangs).map(lang => lang);
    const totalSize = topLangsArray.reduce((acc, current) => current.size + acc, 0)
    return [totalSize, topLangsArray];
}