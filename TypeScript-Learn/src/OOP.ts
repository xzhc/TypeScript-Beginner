//分别使用面向对象和面向过程的编程范式（以计算一个圆的周长和面积为例子）
//面向对象
class Circle {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getParimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

const circle = new Circle(5);
console.log(
  "周长为：" + circle.getParimeter() + "，面积为：" + circle.getArea()
);

//面向过程
function getArea(radius: number): number {
  return Math.PI * radius ** 2;
}

function getParimeter(radius: number): number {
  return 2 * Math.PI * radius;
}

const radius = 5;
console.log("周长为：" + getParimeter(radius) + "，面积为：" + getArea(radius));

//类（面向对象）
class Person {
  name: string;
  age: number;
  constructor(personName: string, personAge: number) {
    this.name = personName;
    this.age = personAge;
  }
  getDesc(): string {
    return `${this.name} ${this.age}`;
  }
}

const person1 = new Person("张三", 18);
const person2 = new Person("李四", 19);
person1.name;
person1.getDesc();

//如果是面向过程的写法
const person3 = {
  name: "王五",
  age: 20,
};
const getPersonDesc: (person: Person) => string = (person: Person): string => {
  return `${person.name} ${person.age}`;
};

/**
 *随着项目的开发，程序中的对象也会越来越多，它们有可能是 Person 和 Student 这样存在父子关系的对象（即，Student 一定是 Person），也可能是 Person 和 Animal 这样可能存在引用关系的对象（即，Person 中有个属性 pet 是 Animal 的实例）...，这些对象之间很可能存在公用的属性和方法，比如 Student 和 Worker 中都包括了来自于 Person 的那部分属性，我们肯定不希望每次都重新定义它们。此时，可以通过继承 Person ，额外添加属性和方法来实现一个新的对象：
 */

class School {}

class Student extends Person {
  grade: number;
  school: School;

  constructor(name: string, age: number, grade: number, school: School) {
    super(name, age);
    this.grade = grade;
    this.school = school;
  }
}

class Job {}

class Worker extends Person {
  salary: Number;
  job: Job;

  constructor(name: string, age: number, salary: Number, job: Job) {
    super(name, age);
    this.salary = salary;
    this.job = job;
  }
}

/**
 *上面的例子中，我们的 name 属性和 age 属性在完成实例化赋值后，就完全暴露给了外部环境，这其实是不太稳妥的行为，我们可以将它标记为私有的属性，这样就只能在类的内部访问它，而对外界是否能够访问，取决于我们是否提供了接口
 */
class Person1 {
  private name: string;
  private age: number;
  constructor(personName: string, personAge: number) {
    this.name = personName;
    this.age = personAge;
  }
  public getDesc(): string {
    return `${this.name} ${this.age}`;
  }

  public getName(): string {
    return this.name;
  }

  public getUpperName(): string {
    return this.name.toUpperCase();
  }
}

const person4: Person1 = new Person1("Jane", 30);
console.log(person4.getDesc());
console.log(person4.getName());
console.log(person4.getUpperName());


//CLASS的方法也支持重载
class Person2 {
	feedPet(catFood: CatFood): void;
	feedPet(dogFood: DogFood): void;
	feedPet(rabbitFood: RabbitFood): void;

	feedPet(food: CatFood || DogFood || RabbitFood): void { 
	}
}


//Class作为工具方法的命名空间
export function isSameDate(): void{} //判断两个日期是否为同一天
export function diffDate(): void{} //判断两个日期的差值
export function getRandomInt(): void {} //获取随机整数
//...
/**这些工具方法都放置在一个文件内部，那使用起来就可能显得混乱：你在一个文件里同时导出了用于处理日期、数字、数组、业务逻辑的工具方法，而如果要拆分成多个文件，可能又会出现部分文件里只有寥寥一两个函数的情况。此时你可以考虑使用 Class ，将一批功能类似的方法收拢到一个 Class 内部
*/
export class DateUtils {
	static isSameDate():void {}
	static diffDate():void {}
}
export class NumberUtils {
	static isEven():void {}
	static isOdd():void {}
}
export class UserListUtils {}