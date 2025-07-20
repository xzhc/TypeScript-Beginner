//类型声明
//TS兼容JS体现在TS在使用JS的npm包时，TS会自动将JS的包声明为TS的包声明
/**
 *简单地说，一个 npm 包可能是在数年前编写发布的，作者已经不再维护，但它仍然拥有数千万的周下载量。此时，如果作者希望提供 TypeScript 支持，让你在使用这个包的时候能获得类型提示，他并不需要分布一个新的版本，然后你再升级这个版本，只需要一点由 TypeScript 提供的黑科技——类型声明就行。
 */

import lodash from "lodash";

import axios from "axios";
