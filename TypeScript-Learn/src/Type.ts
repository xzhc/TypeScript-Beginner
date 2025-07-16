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
