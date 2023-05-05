"use strict"
exports.__esModule = true;
///////////////////////////////
console.log("hello from JS \n");
///////////////////////////////
var Days;
(function (Days) {
    Days[Days["mon"] = 10] = "mon";
    Days[Days["tue"]] = "tue";
    Days[Days["web"]] = "web";
    Days[Days["thu"]] = "thu";
    Days[Days["fri"]] = "fri";
    Days[Days["sat"]] = "sat";
    Days[Days["sun"]] = "sun";
})(Days || (Days = {}));
var whichDay;
whichDay = Days.mon;
console.log("whichDay :: " + whichDay);
function getDay(day) {
    return day;
};
console.log("getDay() :: " + getDay(Days.sun), "\n");
///////////////////////////////
// const LogLevel = {
//     ERROR: 0,
//     WARN: 1,
//     INFO: 2,
//     DEBUG: 3
// };

var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "ERROR";
    LogLevel[LogLevel["INFO"] = 2] = "ERROR";
    LogLevel[LogLevel["DEBUG"] = 3] = "ERROR";
})(LogLevel || (LogLevel = {}));

function printImportant(key, message) {
    const num = LogLevel[key];
    if (num <= LogLevel.INFO) {
        console.log("Log Level key is :: ", key);
        console.log("Log Level value is :: ", num);
        console.log("Log Level message is :: ", message);
    }
}
printImportant("WARN", "This is message")
///////////////////////////////
// const Enum = {
//     A: "A"
// };
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
let a = Enum.A;
let nameOfA = Enum[a];
console.log("\nnameOfA :: ", nameOfA);
console.log("\nEnum.A :: ", a);