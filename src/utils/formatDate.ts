type TypeTime = "day" | "days" | "week" | "weeks";

export function formatDateTime(updateDate: Date) {
    const formatedDateTimeString = new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(new Date(updateDate));

    return formatedDateTimeString;
}

function formatMessageToTimeLessThanOneMonth(value: number, typeTime: TypeTime) {
    let typeTimes = {
        day: "day",
        days: "days",
        week: "week",
        weeks: "weeks"
    }

    return `Update ${value} ${typeTimes[typeTime]} ago`;
}

function makeMessageBasedInTime(difference: number, repoDate: Date) {
    let days = Math.floor(difference / (1000 * 3600 * 24));

    if (days < 7) {
        return formatMessageToTimeLessThanOneMonth(days, days === 1 ? "day" : "days");
    }
    if (Math.floor(days / 7) < 4) {
        let weeks = Math.floor(days / 7);
        return formatMessageToTimeLessThanOneMonth(weeks, weeks === 1 ? "week" : "weeks");
    }
    return `Updated  on ${formatDateTime(repoDate)}`;
};

export function formatUpdatedDate(date: string) {
    let currentDate = new Date();
    let repoDate = new Date(date);
    let difference = currentDate.getTime() - repoDate.getTime();

    return makeMessageBasedInTime(difference, repoDate);
}