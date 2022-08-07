export function formatAmountToGreatValues(value: number) {
    const units = ["", "mil", "mi"];

    const tier = Math.log10(value) / 3 | 0;

    if (tier === 0) {
        return value;
    }

    const sufix = units[tier];

    const scale = Math.pow(10, tier * 3);
    
    const scaled = value / scale;

    return `${value > 9999 ? ~~scaled : scaled.toFixed(1)} ${sufix}`;
}

export function padStringForAmountInfo(value: number) {
    return value.toString().padStart(3, "0");
}