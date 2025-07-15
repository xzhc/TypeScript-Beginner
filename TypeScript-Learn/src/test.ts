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
