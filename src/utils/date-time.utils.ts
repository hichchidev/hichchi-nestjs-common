// noinspection JSUnusedGlobalSymbols

import moment from "moment";

export const now = (format?: string): string => {
    return moment().format(format);
};

export const stringToDate = (obj: { [key: string]: any }): void => {
    Object.keys(obj).forEach((key) => {
        if (Array.isArray(obj[key])) {
            obj[key].forEach((e: any) => (e ? stringToDate(e) : undefined));
            if (obj[key]) {
                stringToDate(obj[key]);
            }
        } else if (typeof obj[key] === "object") {
            if (obj[key]) {
                stringToDate(obj[key]);
            }
        } else if (
            String(obj[key]).match(
                /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d)/,
            )
        ) {
            obj[key] = new Date(obj[key]);
        } else if (String(obj[key]).match(/(\d{4}-[01]\d-[0-3]\d)/)) {
            obj[key] = new Date(obj[key]);
        }
    });
};

export const dateTimeHtml = (date: Date): string => {
    return `<span class="datetime">
                <div class="date">${moment(date).format("YYYY-MM-DD")}</div>
                <div class="time">${moment(date).format("hh:mm:ss a")}</div>
            </span>`;
};

export const hhmmaToHHmmss = (hh: string, mm: string, a: "am" | "pm" | string): string => {
    let HH = a === "am" ? (hh === "12" ? "00" : hh) : String(Number(hh) + 12);
    if (HH.length < 2) {
        HH = `0${HH}`;
    }
    return `${HH}:${mm}:00` as string;
};

export const time24To12 = (str: string): string => moment(`2000-01-01 ${str}`).format("hh:mm a");

export const hmsToDate = (hms: string): Date => {
    return moment(hms, "HH:mm:ss").toDate();
};

export const ymdToDate = (ymd: string): Date => {
    return moment(ymd, "YYYY-MM-DD").toDate();
};

export const dateToHms = (date: Date): string => {
    return moment(date).format("HH:mm:ss");
};

export const dateToYmd = (date: Date): string => {
    return moment(date).format("YYYY-MM-DD");
};

export const isThisMonth = (date: string): boolean => {
    return moment(date, "YYYY-MM-DD").isSame(moment(), "month");
};
