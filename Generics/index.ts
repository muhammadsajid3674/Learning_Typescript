console.log("Hello From TS\n");

// function identity(args: number) {
//     return args;
// }
// // we could describe the identity function using the any 👈️ type:
function identityWithAnyType(args: any) {
    return args;
}
console.log("identity With Any Type ::", identityWithAnyType("myString"));

function identityWithTypeVariable<Type>(args: Type): Type {
    return args;
}
let output = identityWithTypeVariable<boolean>(true)
// let output = identityWithTypeVariable("myString")
console.log("Type variable output ::", output);

function identityWithTypeVariableArray<Type>(args: Array<Type>): Array<Type> {
    console.log("args length ::", args.length);
    return args;
}
// function identityWithTypeVariableArray<Type>(args: Type[]): Type[] {
//     console.log("args length ::", args.length);
//     return args;
// }
console.log("Type variable Array output ::", identityWithTypeVariableArray([0]));

// // The type of generic functions is just like those of non-generic functions, with the type parameters listed first
interface GenericIdentityFn {
    <Type>(arg: Type): Type
}
function identity<Type>(arg: Type): Type {
    return arg;
}
// let myIdentity: <Input>(arg: Input) => Input = identity;
let myIdentity: GenericIdentityFn = identity;
console.log("\nGeneric Type :: ", myIdentity);

// // A generic class has a similar shape to a generic interface. Generic classes have a generic type parameter list in angle brackets (<>)
class GenericNumber<NumType> {
    zeroType!: NumType; // If you don't want to provide initial values for the fields and want to get rid of the error, you can use the non-null assertion operator (!).
    add!: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroType = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
}
console.log("\nGeneric Classes :: ", myGenericNumber.add(5, 5));

// Generic Constraints
// function loggingIdentity<Type>(arg: Type): Type {
//     console.log(arg.length); // Property 'length' does not exist on type 'Type'.
//     return arg;
// }

interface Lengthwise {
    length: number;
}

function loggingIdentity<Type extends Lengthwise>(args: Type): Type {
    console.log(args.length);
    return args
}
// console.log("Generic Constrains :: ", loggingIdentity(3674)); // Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
console.log("Generic Constrains :: ", loggingIdentity({ length: 4, value: 3674 }));

// // Practices 
function kero<Type>(args: Type): Type {
    return args;
}
console.log("\nInitialize without type :: ", kero(true));
console.log("Initialize with type :: ", kero<number>(123));

console.log("Generic Array<number> :: ", kero<Array<number>>([0]));
console.log("Generic Array<string> :: ", kero<Array<string>>(["0"]));

function getUser<Type extends { id: string }>(user: Type) {
    return user.id;
}
console.log(getUser({ id: "2" }));

export { }; // 👈️ make file ES Module