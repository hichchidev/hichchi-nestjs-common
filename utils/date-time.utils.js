"use strict";
// noinspection JSUnusedGlobalSymbols
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isThisMonth = exports.dateToYmd = exports.dateToHms = exports.ymdToDate = exports.hmsToDate = exports.time24To12 = exports.hhmmaToHHmmss = exports.dateTimeHtml = exports.stringToDate = exports.now = void 0;
const moment_1 = __importDefault(require("moment"));
const now = (format) => {
    return (0, moment_1.default)().format(format);
};
exports.now = now;
const stringToDate = (obj) => {
    Object.keys(obj).forEach((key) => {
        if (Array.isArray(obj[key])) {
            obj[key].forEach((e) => (e ? (0, exports.stringToDate)(e) : undefined));
            if (obj[key]) {
                (0, exports.stringToDate)(obj[key]);
            }
        }
        else if (typeof obj[key] === "object") {
            if (obj[key]) {
                (0, exports.stringToDate)(obj[key]);
            }
        }
        else if (String(obj[key]).match(/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d)/)) {
            obj[key] = new Date(obj[key]);
        }
        else if (String(obj[key]).match(/(\d{4}-[01]\d-[0-3]\d)/)) {
            obj[key] = new Date(obj[key]);
        }
    });
};
exports.stringToDate = stringToDate;
const dateTimeHtml = (date) => {
    return `<span class="datetime">
                <div class="date">${(0, moment_1.default)(date).format("YYYY-MM-DD")}</div>
                <div class="time">${(0, moment_1.default)(date).format("hh:mm:ss a")}</div>
            </span>`;
};
exports.dateTimeHtml = dateTimeHtml;
const hhmmaToHHmmss = (hh, mm, a) => {
    let HH = a === "am" ? (hh === "12" ? "00" : hh) : String(Number(hh) + 12);
    if (HH.length < 2) {
        HH = `0${HH}`;
    }
    return `${HH}:${mm}:00`;
};
exports.hhmmaToHHmmss = hhmmaToHHmmss;
const time24To12 = (str) => (0, moment_1.default)(`2000-01-01 ${str}`).format("hh:mm a");
exports.time24To12 = time24To12;
const hmsToDate = (hms) => {
    return (0, moment_1.default)(hms, "HH:mm:ss").toDate();
};
exports.hmsToDate = hmsToDate;
const ymdToDate = (ymd) => {
    return (0, moment_1.default)(ymd, "YYYY-MM-DD").toDate();
};
exports.ymdToDate = ymdToDate;
const dateToHms = (date) => {
    return (0, moment_1.default)(date).format("HH:mm:ss");
};
exports.dateToHms = dateToHms;
const dateToYmd = (date) => {
    return (0, moment_1.default)(date).format("YYYY-MM-DD");
};
exports.dateToYmd = dateToYmd;
const isThisMonth = (date) => {
    return (0, moment_1.default)(date, "YYYY-MM-DD").isSame((0, moment_1.default)(), "month");
};
exports.isThisMonth = isThisMonth;
//# sourceMappingURL=date-time.utils.js.map