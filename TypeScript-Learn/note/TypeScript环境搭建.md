# TypeScript 环境搭建指南

本文档记录了如何从零开始搭建一个 TypeScript 学习环境的完整过程。

## 目录

- [创建项目文件夹](#创建项目文件夹)
- [初始化 Node.js 项目](#初始化-nodejs-项目)
- [安装 TypeScript](#安装-typescript)
- [配置 TypeScript](#配置-typescript)
- [创建源代码目录和示例文件](#创建源代码目录和示例文件)
- [更新项目配置](#更新项目配置)
- [添加项目说明文档](#添加项目说明文档)
- [编译和运行](#编译和运行)

## 创建项目文件夹

首先，我们创建一个名为 `TypeScript-Learn` 的文件夹作为项目根目录：

```bash
mkdir TypeScript-Learn
```

## 初始化 Node.js 项目

进入项目文件夹并初始化一个 Node.js 项目：

```bash
cd TypeScript-Learn
npm init -y
```

这将创建一个基本的 `package.json` 文件，其中包含项目的基本信息和配置。

## 安装 TypeScript

作为开发依赖项安装 TypeScript：

```bash
npm install typescript --save-dev
```

这会将 TypeScript 安装到项目的 `node_modules` 目录中，并更新 `package.json` 文件，添加 TypeScript 作为开发依赖。

## 配置 TypeScript

创建 TypeScript 配置文件 `tsconfig.json`：

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

这个配置文件指定了：

- `target`: 编译目标 JavaScript 版本
- `module`: 模块系统
- `outDir`: 编译输出目录
- `rootDir`: 源代码目录
- `strict`: 启用严格类型检查
- `include`: 包含哪些文件
- `exclude`: 排除哪些文件

## 创建源代码目录和示例文件

创建源代码目录：

```bash
mkdir src
```

创建一个包含 TypeScript 示例的 `index.ts` 文件：

```typescript
// 基本类型
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// 枚举
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

// 类型断言
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// 函数
function add(x: number, y: number): number {
  return x + y;
}

// 接口
interface Person {
  firstName: string;
  lastName: string;
  age?: number; // 可选属性
}

function greeter(person: Person): string {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = { firstName: "John", lastName: "Doe" };

// 类
class Student {
  fullName: string;

  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

// 主执行代码
console.log("Basic TypeScript example running...");
console.log(`Addition: ${add(5, 3)}`);
console.log(`Greeting: ${greeter(user)}`);

// 导出使文件成为模块
export {};
```

这个文件包含了多种 TypeScript 特性的示例，包括基本类型、枚举、类型断言、函数、接口和类。

## 更新项目配置

更新 `package.json` 文件，添加构建和运行脚本：

```json
{
  "name": "typescript-learn",
  "version": "1.0.0",
  "main": "dist/index.js",
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "tsc --watch"
  },
  "keywords": ["typescript", "learning"],
  "author": "",
  "license": "ISC",
  "description": "A project for learning TypeScript",
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

添加的脚本有：

- `build`: 编译 TypeScript 代码
- `start`: 运行编译后的 JavaScript 代码
- `dev`: 监视文件变化并自动重新编译

## 添加项目说明文档

创建 `README.md` 文件，提供项目的说明和使用指南。

## 编译和运行

编译 TypeScript 代码：

```bash
npm run build
```

这将把 TypeScript 代码编译成 JavaScript，并输出到 `dist` 目录。

运行编译后的代码：

```bash
npm run start
```

输出结果：

```
Basic TypeScript example running...
Addition: 8
Greeting: Hello, John Doe
```

## 项目结构

完成后的项目结构如下：

```
TypeScript-Learn/
├── src/             # TypeScript 源代码
│   └── index.ts     # 主要的 TypeScript 示例文件
├── dist/            # 编译后的 JavaScript（构建后生成）
├── package.json     # 项目配置
├── tsconfig.json    # TypeScript 配置
└── README.md        # 项目说明文档
```

## 常用命令

- `npm run build` - 编译 TypeScript 文件为 JavaScript
- `npm run start` - 运行编译后的 JavaScript
- `npm run dev` - 监视文件变化并自动重新编译

## 总结

通过以上步骤，我们成功搭建了一个基本的 TypeScript 学习环境。这个环境包含了编译、运行和开发所需的所有配置，同时还提供了多种 TypeScript 特性的示例代码供学习参考。
