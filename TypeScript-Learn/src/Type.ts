let x: any;
function myFunc(params: any): any {}
const myArray: any[] = [1, "hello", true];
let myObject: any = { prop1: "hello", prop2: 123 };

function myFunc1(params: unknown): void {
  //...
}

myFunc1({});
myFunc1([]);
myFunc1(true);

/**
 *我们尝试使用一个 unknown 类型的变量时，类型检查系统阻止了我们，它要求我们先为这个变量提供一个具体的类型后才能使用。
 而我们这里调用了 forEach 方法，很明显，我们希望它是一个数组类型！但此时在代码中，param 的类型已经被固定为 unknown
 * @param params
 */
function myFunc2(params: unknown): void {
  params.forEach((element: any): void => {});
}

//解决该问题的方法——类型断言
/**
 *
 * @param params
 * 可以简单理解为，它能够修改一个变量的类型——无论是TS自己推导的，还是你手动标注的。这个概念的重要之处在于，此前我们学习到的类型标注就像是一次成型——一旦你为这个变量提供了类型，或者是赋值之后，这个变量的类型就已经固定了，我们无法再对它进行修改。
 */
function myFunc3(params: unknown): void {
  (params as unknown[]).forEach((element: any): void => {
    element = element + 1;
  });
}

function myFunc4(params: unknown): void {
  (params as number[]).forEach((element: any): void => {
    element = element + 1;
  });
}

function myFunc5(params: unknown): void {
  (params as unknown[]).forEach((element: any): void => {
    element = (element as number) + 1;
  });
}

//一个常见的场景是，某些时候 TypeScript 的类型分析会显得不那么符合直觉
interface IUser {
  name: string;
  job?: IJob;
}

interface IJob {
  title: string;
}

const user1: IUser = {
  name: "Jimmy",
  job: {
    title: "Software Engineer",
  },
};

const { name: userName3, job = {} as IJob } = user1;

const { title } = job;

//TS中类型别名的作用：存储一个类型，后续可以直接引用
//表示 Handler 类型的函数应该是一个没有参数且返回类型为 void 的函数
type Handler = () => void;
//使用 void 明确表示该函数不会返回任何有意义的值，这有助于代码维护和防止意外使用返回值。
const Handler1: Handler = (): void => {};
const Handler2: Handler = (): void => {};

//也可以适用类型别名来替代接口，实现对象类型的复用
type User1 = {
  userName: string;
  userAge: number;
  userMarried: boolean;
  userJob?: string;
};
const user4: User1 = {
  userName: "Jimmy",
  userAge: 18,
  userMarried: false,
  userJob: "Software Engineer",
};

//联合类型语法(A | B | C)
//如果想定义一个联合类型，需要使用类型别名存放
type PossibleTypes = string | number | boolean;
//只要你的变量满足其中一个类型成员，就可以被认为满足这个类型，因此你的变量可以在后续被赋值为其它的类型成员
let foo: PossibleTypes = "hello";
foo = 123;
foo = true;

//联合类型对其中的类型成员并没有限制，可以混合原始类型，字面量类型，函数类型，对象类型等等。
//在实际应用中，最常见的应该是字面量联合类型，表示一组精确的字面量类型
type Status = "success" | "error" | "pending";
type Code = 200 | 404 | 502;

//字面量类型：什么是字面量类型？
//字面量类型是一种特殊的类型，它只能包含一组固定的值，这些值是字面量。字面量类型一般用于表示枚举值，或者表示一个常量。
const fixStr: "xzh" = "xzh"; //值只能是‘xzh’
const fixNum: 123 = 123; //值只能是123

//为什么需要字面量类型
//字面量联合类型相比它们对应的原始类型，能够提供更精确的类型信息与类型提示

const status2: Status = "";

//使用接口组成的联合类型
interface VisitorUser {}
interface CommonUser {}
interface VIPUser {}
interface AdminUser {}

type User2 = VisitorUser | CommonUser | VIPUser | AdminUser;
const user5: User2 = {};

/**
 * 既然能够将联合类型关联到按位或，那么从按位与逻辑到交叉类型就更好理解了，类似于逻辑或 || 到联合类型的 |，交叉类型的 & 也脱胎自逻辑与 &&，我们同样可以使用类型别名来表示一个交叉类型
 */

interface UserBasicInfo {}
interface UserJobInfo {}
interface UserFamilyInfo {}

type UserInfo = UserBasicInfo & UserJobInfo & UserFamilyInfo;

/**交叉类型的本质，其实就是表示一个同时满足这些子类型成员的类型，
 * 所以如果你交叉两个对象类型，可以理解为是一个新的类型内部合并了这两个对象类型：
 */

//伪代码
type UserInfo1 = {
  ...UserBasicInfo,
  ...UserJobInfo,
  ...UserFamilyInfo
}


//交叉两个原始类型会出现什么
type test = string & number //string & number = never
//never 表示不存在没有意义的类型，never类型是所有类型的子类型，


//交叉类型和联合类型可以一起使用
// 伪代码
type Reward = (FE & React) | (OutstandingAuthors & PostLastMonth); //先交叉后联合

//先联合后交叉
type UnionIntersection = (1 | 2 | 3) & (1 | 2); // 1 | 2
