import { Line, LineConfig } from "@ant-design/charts";
import { darkThemeChart } from "../utils/darkThemeChartConfig";
import { formatDateTime } from "../utils/formatDate";

interface IDataProps {
    value: number;
    date: string;
    category: string,
}

function mergePullRequestsByDate(pullRequests: PullRequest[]) {
    const pullRequestsHistory: IDataProps[] = [];

    pullRequests.forEach(datum => { // O(n)
        const filtered = pullRequests.filter(el => el.node.publishedAt.substring(0, 10) === datum.node.publishedAt.substring(0, 10)); // O(n)
        let formatedDate = formatDateTime(new Date(filtered[0].node.publishedAt))
        let additions = {value: 0, date: formatedDate, category: "additions"};
        let changed = {value: 0, date: formatedDate, category: "changed"};
        let deletions = {value: 0, date: formatedDate, category: "deletions"};
        filtered.forEach(el => {
            additions.value += el.node.additions;
            changed.value += el.node.changedFiles;
            deletions.value += el.node.deletions;
        }) // O(m)
        pullRequestsHistory.push(additions, changed, deletions);
    }) // O(m + n²)
    // O(n²)

    return pullRequestsHistory;
}

interface PullRequest {
    node: {
        publishedAt: string;
        additions: number;
        changedFiles: number;
        deletions: number;
    };
}

interface Props {
    pullRequests: PullRequest[]
}

export function PullRequestsChart({pullRequests}: Props) {
    let data: IDataProps[] = [];

    data = mergePullRequestsByDate(pullRequests);
    
    const config: LineConfig = {
        theme: darkThemeChart,
        data,
        xField: 'date',
        yField: 'value',
        seriesField: 'category',
        color: ["#3fb950", "#1DA1F2", "#f85149"],
        legend: {
          position: 'top',
        },
        smooth: true,
        animation: {
          appear: {
            animation: 'path-in',
            duration: 5000,
          },
        },
    };

    return (
        <Line {...config}/>
    )
}