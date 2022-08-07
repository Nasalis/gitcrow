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
    let hours = difference / (1000 * 3600);
    let days = difference / (1000 * 3600 * 24)
    let floorHoursValue = ~~hours;
    let floorDaysValue = ~~days;
    let floorWeeksValue = ~~(days / 7);

    if (floorHoursValue < 24) {
        return `Updated today ${(hours).toFixed()} hours ago`
    }
    if (floorDaysValue < 7) {
        return formatMessageToTimeLessThanOneMonth(floorDaysValue, floorDaysValue === 1 ? "day" : "days");
    }
    if (floorWeeksValue < 4) {
        return formatMessageToTimeLessThanOneMonth(floorWeeksValue, floorWeeksValue === 1 ? "week" : "weeks");
    }
    return `Updated on ${formatDateTime(repoDate)}`;
};

export function formatUpdatedDate(updateDate: string) {
    let repoDate = new Date(updateDate)
    let currentDate = new Date();
    let userTimezoneOffset = currentDate.getTimezoneOffset() * 60000;
    let difference = (currentDate.getTime() + userTimezoneOffset) - (repoDate.getTime())
    
    return makeMessageBasedInTime(difference, repoDate);
}