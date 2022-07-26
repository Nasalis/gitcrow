import { Progress, ProgressConfig } from "@ant-design/plots";

interface Props {
    color: string;
    value: number;
    totalSize: number;
}

export function LanguageProgress({color, value,totalSize}: Props) {
    const config: ProgressConfig = {
        height: 15,
        width: 200,
        autoFit: false,
        progressStyle: {
            r: 10
        },
        percent: value / totalSize,
        color: [color, '#1a1d25'],
      };

    return (
        <Progress {...config} />
    )
}