import { Line, LineConfig } from "@ant-design/charts";
import { Contribution } from "../contexts/SearchBarContext";
import { darkThemeChart } from "../utils/darkThemeChartConfig";

interface Props {
    data: Contribution[]
}

export function ContributionChart({data}: Props) {
    const config: LineConfig = {
        data,
        theme: darkThemeChart, 
        padding: 'auto',
        xField: 'date',
        yField: 'contributionCount',
        xAxis: {
            title: {
                text: "Contribution date",
                style: {
                    fill: "#919397",
                    fontSize: 18,
                }
            },
            label: {
                style: {
                    opacity: 0,
                }
            }
        },
        tooltip: {
            formatter: (datum: any) => {
                return {
                    name: "Contribution Amount",
                    value: datum.contributionCount
                }
                
            }
        }
    };

    return <Line {...config} />;
}