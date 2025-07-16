const message: string = "Hello World";

console.log(message);

let userAge: number;
userAge = 20;
userAge = "20";

const userName: string = "John";

const userName1: string[] = [];
const userName2: Array<string> = [];

interface User {
  userName: string;
  userAge: number;
  userMarried: boolean;
  userJob?: Job;
}

const user: User = {
  userName: "John",
  userAge: 20,
  userMarried: false,
  userJob: {
    currentModel: {
      //...
    },
  },
};

interface JobModel {
  //...
}

interface Job {
  currentModel: JobModel;
}

const userList: User[] = [
  {
    userName: "John",
    userAge: 20,
    userMarried: false,
    userJob: {
      currentModel: {
        //...
      },
    },
  },
  {
    userName: "John",
    userAge: 20,
    userMarried: false,
    userJob: {
      currentModel: {
        //...
      },
    },
  },
  {
    userName: "John",
    userAge: 20,
    userMarried: false,
    userJob: {
      currentModel: {
        //...
      },
    },
  },
  {
    userName: "John",
    userAge: 20,
    userMarried: false,
  },
];

//JS中使用对象存储常量
const userLevelCode = {
  Visitor: 10001,
  NonVIPUser: 10002,
  VIPUser: 10003,
  SVIPUser: 10004,
  Admin: 10005,
};
fetchUserInfo({
  //...
  //后续维护者：这是啥
  userCode: 10001,
});

fetchUserInfo({
  userCode: userLevelCode.Visitor,
});

//TS中使用枚举存储常量
enum UserLevelCode {
  Visitor = 10001,
  NonVIPUser = 10002,
  VIPUser = 10003,
  SVIPUser = 10004,
  Admin = 10005,
  Random = generate(),
  Mixed = "Mixed",
}
UserLevelCode.Admin;

function generate() {
  return Math.random() * 10000;
}

const set = new Set<number>();
set.add(1);
set.add(2);

const map = new Map<number, string>();
map.set(1, "1");
map.set(2, "2");

//JS中函数表达式的表达式和函数声明的两种写法
const handler1 = function (args) {}; //函数表达式
const handler2 = (args) => {}; //箭头表达式

function handler3(args) {} //函数声明

//TS中对函数的类型约束

function sum1(a: number, b: number): number {
  return a + b;
} //函数声明

const sum2 = function (a: number, b: number): number {
  return a + b;
}; //函数表达式

type Sum = (a: number, b: number) => number;
const sum3: Sum = function (a, b) {
  return a + b;
};

// JavaScript 的函数中，如果没有显式的 return 语句，那么这个函数的执行结果实际会是 undefined，
// 但在 TypeScript 中，我们需要将这个函数的返回值类型标注为 void 而不是 undefined

function handler4(): undefined {} //错误
function handler5(): void {} // 正确

//在 TypeScript 中，undefined 也被视为一个有意义的类型。
// 因此如果你希望将返回值类型标注为 undefined，就需要有显式的 return 语句：
function handler6(): undefined {
  return;
}

/**
 *在 5.1 版本中，TS 对这个不符直觉的问题进行了修正，即允许了 undefined 作为无显式 return 语句函数的返回值类型，
 但考虑到发布时间较晚，因此还是有必要了解这个问题的。
 */

function Sum4(x: any, y: any) {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else if (Array.isArray(x) && typeof y === "number") {
    return x.map((num) => num + y);
  } else if (typeof x === "number" && Array.isArray(y)) {
    return y.map((num) => num + x);
  } else if (Array.isArray(x) && Array.isArray(y)) {
    if (x.length !== y.length) {
      throw new Error("Arrays must have the same length");
    }
    return x.map((num, index) => num + y[index]);
  } else {
    throw new Error("Invalid arguments");
  }
}

console.log(Sum4(1, 2));
console.log(Sum4([1, 2, 3], 4));
console.log(Sum4(1, [1, 2, 3]));
console.log(Sum4([1, 2, 3], [1, 2, 3]));
console.log(Sum4([1, 2, 3], [4, 5]));
console.log(Sum4("a", "b"));

//为了解决该问题，TS支持类型层面的重载
function Sum5(base: number, incre: number): number;
function Sum6(base: number, incre: number[]): number[];
function Sum7(base: number[], incre: number): number[];
function Sum8(base: number[], incre: number[]): number[];
function Sum9(x: number || number[], y: number || number[]) {}
