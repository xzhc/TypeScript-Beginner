//泛型

//类型别名充当变量存放一组关联的类型
type Status2 = "success" | "fail" | "error";

//类型别名还能够充当函数，函数有入参，那么给类型别名添加一个入参，即泛型
type Status3<T> = "success" | "fail" | "error" | T;
type CompeteStatus = Status3<"offine">;

//这里的CompeteStatus等价于
type CompeteStatus = "success" | "fail" | "error" | "offine";

//explian
function Status3(T) {
  return ["success", "fail", "error", T];
}

const CompeteStatus = Status3("offine");
//这里的泛型就是参数作用，只不过它接受的是一个类型而非一个值

/**
 *TypeScript 中，变量与函数都由类型别名来承担，而一个类型别名一旦声明了泛型，就会化身成为函数，此时严格来说我们应该称它为「工具类型」。
 */

//上面展示的是泛型主动赋值的用法，实际上自动推导才是泛型强大之处
/**
 *想象我们有一个这样的函数，它的出参与入参类型是完全一致的，比如给我个字符串，我就返回字符串类型，如果是数字，就返回数字类型，此时你会怎么对这个函数进行精确地类型标注，联合类型吗？
 */

function factory(input: string | number): string | number {
  return input;
}
/**
 * 上述写法的问题
 *么做会导致你丢失「出参与入参类型完全一致」这个信息，在你使用这个函数时，它只会提醒你返回值可能有字符串和函数，而不会根据你当前的入参给出唯一匹配的那个出参。其次，假设随着需求变更，可能的入参又多了一个布尔值类型，难不成你又要再加一次？
 */
function factory1<T>(input: T): T {
  return input;
}
/**
 * 三个T作用：
 * 第一个 T 是声明一个类型参数。
 * 第二个 T 是使用该类型参数作为输入类型。
 * 第三个 T 是使用该类型参数作为输出类型。
 */
function factory2<T>(input: T): T {
  return input;
}
factory2("hello");

factory2([1, 2, 3]);

//如果有多个参数需要填充泛型，但只有其中一个泛型参数作为返回值类型
function factory3<T1, T2, T3>(input: T1, arg1: T2, arg2: T3): T1 {
  return input;
}
