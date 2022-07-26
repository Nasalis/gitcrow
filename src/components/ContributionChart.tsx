import { Line, LineConfig } from "@ant-design/charts";
import { Contribution } from "../pages/Home";

interface Props {
    data: Contribution[]
}

export function ContributionChart({data}: Props) {
    const config: LineConfig = {
        data,
        padding: 'auto',
        xField: 'date',
        yField: 'contributionCount',
        xAxis: {
          tickCount: 5,
        },
    };

    return <Line {...config} />;
}