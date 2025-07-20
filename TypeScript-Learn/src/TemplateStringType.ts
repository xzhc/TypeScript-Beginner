//es6带来的大量语法增强中，对于字符串变量来说最重要的是模板字符串类型
//es6以前拼接变量+字符串：
const getAMPM = () => (isAM ? "AM" : "PM");
const str = "Hi," + name + "! Good " + getAMPM();
//使用es6的模板字符串：
const str = `Hi, ${name}! Good ${getAMPM()}`;

//TS提供了模板字符串类型，，类似于模板字符串，它可以实现对字面量类型的计算，以及批量生成字符串类型的能力
type Name = "Jerry";
type Greeting = `Hello, ${Name}!`;

//类型检查方面模板字符串类型可以提供更为精确的字符串类型结构描述，比如此前，我们无法检查一个字符串是否满足 1.2.3 这样结构的版本号格式
type Version = string;
const v1: Version = "1.2.0";
const v2: Version = "1.2"; //没有检查出不符合预期的结构

//使用模板字符串类型
type Version1 = `${number}.${number}.${number}`;

const v3: Version1 = "1.2.0";
const v4: Version1 = "1.2"; //报错 原因是没有检查出不符合预期的结构
const v5: Version1 = "a.2.0"; //报错 是因为没有检查出不符合预期的结构

//类型别名和模板字符串类型合作
type SayHello<T extends string | number> = `hello ${T}`;

type Greet1 = SayHello<"john">;
type Greet2 = SayHello<123>;

//板字符串类型的诞生不仅是为了实现字面量类型的拼接，还有一个重要的能力是其自动分发的特性，即当一个模板字符串类型中的插槽传入了联合类型时，这个模板字符串类型会自动被扩展为使用所有联合类型的组合。
type Brand = "Apple" | "Samsung" | "Xiaomi";
type Memory = "128G" | "256G" | "512G";
type ItemType = "official" | "second-hand";
type Product = `${Brand}-${Memory}-${ItemType}手机`; // "Apple手机" | "Samsung手机" | "Xiaomi手机"
