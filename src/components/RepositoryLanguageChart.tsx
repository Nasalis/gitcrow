import { Pie, PieConfig } from "@ant-design/charts";
import { calculatePercentualValue } from "../utils/calculatePercentualValue";
import { darkThemeChart } from "../utils/darkThemeChartConfig";

interface Props {
  languages: {
    node: {
      name: string;
      color: string;
    }
    size: number;
  }[]
  totalValue: number;
  isDark: boolean;
}

export function RepositoryLanguageChart({languages, totalValue, isDark}: Props) {
    const data = [
        {
          type: 'Typescript',
          value: 74.4,
        },
        {
          type: 'Ruby',
          value: 25.3,
        },
        {
          type: 'Other',
          value: 0.3,
        },
    ];

    const data2 = languages?.map(language => {
      return {
        value: Number(calculatePercentualValue(language.size, totalValue).toFixed(2)), 
        name: language.node.name, 
        color: language.node.color 
      }
    })

    const config: PieConfig = {
        data: data2 || data,
        theme: isDark ? darkThemeChart : "light",
        appendPadding: 10,
        angleField: 'value',
        colorField: 'name',
        color: languages?.map(language => language.node.color ? language.node.color : "#39d353"),  
        radius: 1,
        innerRadius: 0.6,
        label: {
        type: 'inner',
        offset: '-50%',
        content: '{value}',
        style: {
            textAlign: 'center',
            fontSize: 14,
            fontWeight: "bold"
        },
        },
        interactions: [
            {
              type: 'element-selected',
            },
            {
              type: 'element-active',
            },
        ],
        statistic: {
            title: false,
            content: {
              style: {
                color: isDark ? "#ffffff" : "#313131",
                whiteSpace: 'pre-wrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              },
              content: 'Lang.\nPlot',
            },
        },
    };
    
    return <Pie {...config} />;
}