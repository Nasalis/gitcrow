import { Progress, ProgressConfig } from "@ant-design/plots";
import { useTheme } from "../contexts/ThemeContext";

interface Props {
    color: string;
    value: number;
    totalSize: number;
}

export function LanguageProgress({color, value,totalSize}: Props) {
    const {
        isDark
    } = useTheme();

    const config: ProgressConfig = {
        height: 15,
        width: 200,
        autoFit: false,
        progressStyle: {
            r: 10
        },
        percent: value / totalSize,
        color: [color, isDark ? '#1a1d25' : "#E8EDF3"],
      };

    return (
        <Progress {...config} />
    )
}