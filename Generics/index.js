console.log("Hello From JS\n");

function identity(args) {
    return args;
}
console.log("identity() ::", identity("myString"));
console.log("identity() ::", identity(true));
console.log("identity() ::", identity(0));
console.log("identity() ::", identity([0]));