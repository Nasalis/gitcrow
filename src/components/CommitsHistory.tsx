import { Line, LineConfig } from "@ant-design/charts";
import { darkThemeChart } from "../utils/darkThemeChartConfig";
import { formatDateTime } from "../utils/formatDate";

interface IDataProps {
    value: number;
    date: string;
    category: string,
}

function mergeCommitsByDate(repositoryCommits: Commit[]) {
    const commitsHistory: IDataProps[] = [];

    repositoryCommits.forEach(datum => { // O(n)
        const filtered = repositoryCommits.filter(el => el.node.committedDate.substring(0, 10) === datum.node.committedDate.substring(0, 10)); // O(n)
        let formatedDate = formatDateTime(new Date(filtered[0].node.committedDate))
        let additions = {value: 0, date: formatedDate, category: "additions"};
        let changed = {value: 0, date: formatedDate, category: "changed"};
        let deletions = {value: 0, date: formatedDate, category: "deletions"};
        filtered.forEach(el => {
            additions.value += el.node.additions;
            changed.value += el.node.changedFiles;
            deletions.value += el.node.deletions;
        }) // O(m)
        commitsHistory.push(additions, changed, deletions);
    }) // O(m + n²)

    return commitsHistory;
}

interface Commit {
    node: {
        committedDate: string;
        additions: number;
        changedFiles: number;
        deletions: number;
    };
}

interface Props {
    repositoryCommits: Commit[];
    isDark: boolean;
}

export function CommitsHistory({repositoryCommits, isDark}: Props) {
    let data: IDataProps[] = [];

    data = mergeCommitsByDate(repositoryCommits);
    
    const config: LineConfig = {
        data,
        theme: isDark ? darkThemeChart : "light",
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