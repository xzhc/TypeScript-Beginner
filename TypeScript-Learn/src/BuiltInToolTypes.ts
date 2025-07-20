//内置工具类型
//内置方法就是一批语言层面提供了通用的工具方法，JS中的内置方法是用来操作值的，TS中的内置方法是用来操作类型的。

//TS内置的，专用于对类型编程的工具方法——称之为工具类型。TS内置了一批简单的工具类型，它们就是类型别名的使用方式，同时可在全局可以，无需导入。

type A = Partial<{}>; //Partial即是内置的工具类型

//Class中成员的可访问性描述，public / private / protected，而在对象类型中也有类似的概念：属性可选和属性只读
//Partial接受一个对象类型，并将这个对象类型的所有属性标记为可选
type User3 = {
  name: string;
  age: number;
  email: string;
};

type PartialUser = Partial<User3>;
const user6: User3 = { name: "Tom", age: 18, email: "Tom@111.com" };
//可以不实现所有的属性，只实现部分属性
const user7: PartialUser = { name: "Tom", age: 18 };

//与Partial相反，Required：将一个对象类型中的所有属性都标记为必填
type User4 = {
  name?: string;
  age?: number;
  email?: string;
};

type RequiredUser = Required<User4>;

const user8: User4 = { name: "Tom", age: 18 };

const user9: RequiredUser = { name: "Tom", age: 18, email: "Tom@111.com" };

//Readonly：将一个对象类型中的所有属性都标记为只读
type ReadonlyUser = Readonly<User3>;

const user10: User3 = { name: "Tom", age: 18, email: "Tom@111.com" };
const user11: ReadonlyUser = { name: "Tom", age: 18, email: "Tom@111.com" };

user10.name = "Tom2";
user11.age = 19;

//TS中基于索引签名类型提供一个简化版本的Record
type UserProps = "name" | "age" | "email";
//等价于你一个个实现了这些属性
type User5 = Record<UserProps, string>;

const user12: User5 = { name: "Tom", age: "18", email: "Tom@111.com" };
//使用Record类型来声明属性名还未确定的接口类型
type User6 = Record<string, string>;
const user13: User6 = {
  name: "Tom",
  age: "18",
  email: "Tom@111.com",
  city: "Beijing",
};

//用于对象类型裁剪的Pick和Omit

//Pick类型接受一个对象类型和一个字符串字面量类型，这个联合类型只能是由对象类型的属性名组成的。它会对这个对象类型进行裁剪，只保留你传入的属性名组成的部分

type User7 = Pick<User3, "name" | "age">;

const user14: User7 = {
  name: "Tom",
  age: 18,
};

//Omit类型接受一个对象类型和一个字符串字面量类型，这个联合类型只能是由对象类型的属性名组成的。它会对这个对象类型进行裁剪，只保留你传入的属性名以外的部分

type User8 = Omit<User3, "name" | "age">;
const user15: User8 = {
  email: "Tom@gmail.com",
};

//集合类型的Exclude类型和Extract类型 类比为集合中的差集和交集
type UserProps1 = "name" | "age" | "email" | "address";
type UserProps2 = "name" | "age";
type OptionProps = Exclude<UserProps1, UserProps2>;
const optionProps: OptionProps = "email";
const optionProps1: OptionProps = "address";

type RequiredProps = Extract<UserProps1, UserProps2>;
const requiredProps: RequiredProps = "name";
const requiredProps1: RequiredProps = "age";

//内置工具类型中Parameters和ReturnType 获取函数参数类型和返回值类型
type Add = (a: number, b: number) => number;
type AddParams = Parameters<Add>; //[number, number]
type AddReturn = ReturnType<Add>; //number

const addParam: AddParams = [1, 2];
const addReturn: AddReturn = 3;

//如果只有一个函数而并没有其参数类型呢？
//可以使用TS提供的类型查询操作符 typeof来获取函数结构化类型，再配合工具类型即可
const addHandler = (x: number, y: number) => x + y;
type Add0 = typeof addHandler;

type AddParams1 = Parameters<Add0>;
type AddReturn1 = ReturnType<Add0>;
const addParam1: AddParams1 = [1, 2];
const addReturn1: AddReturn1 = 3;

//对于异步函数类型，提取出的返回值类型是一个 Promise<string> 这样的类型，如果我想提取 Promise 内部的 string 类型呢
const promise = new Promise<string>((resolve) =>
  setTimeout(() => resolve("done"), 1000)
);
type PromiseInput = Promise<string>;
type AwaitPromiseInput = Awaited<PromiseInput>;

//可以直接嵌套在ReturnType内部使用
async function getPromise() {
  return new Promise<string>((resolve) =>
    setTimeout(() => resolve("done"), 1000)
  );
}

type Result = ReturnType<typeof getPromise>;
