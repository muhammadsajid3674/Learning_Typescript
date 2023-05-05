console.log("hello from TS \n");

// Enum set of values
///////////////////////////////
enum Days {
    mon = 10,
    tue,
    wed,
    thu,
    fri,
    sat,
    sun
}
// enum Days {
//     mon = "mon",
//     tue = "tue",
//     wed = "wed",
//     thu = "thu",
//     fri = "fri",
//     sat = "sat",
//     sun = "sun"
// }

let whichDay: Days = Days.mon;
console.log("whichDay :: " + whichDay);

function getDay(days: Days) {
    return days;
}
console.log("getDay() :: " + getDay(Days.sun) + "\n");
///////////////////////////////
enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
}

type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log("Log Level key is :: ", key);
        console.log("Log Level value is :: ", num);
        console.log("Log Level message is :: ", message);
    }
}
printImportant("WARN", "This is message");
///////////////////////////////
enum Enum {
    A
}
let a = Enum.A
let nameOfA = Enum[a];
console.log("\nnameOfA :: ", nameOfA);
console.log("\nEnum.A :: ", a);
