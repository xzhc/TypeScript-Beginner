// Basic Types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// Enum
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

// Type Assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// Functions
function add(x: number, y: number): number {
  return x + y;
}

// Interface
interface Person {
  firstName: string;
  lastName: string;
  age?: number; // Optional property
}

function greeter(person: Person): string {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = { firstName: "John", lastName: "Doe" };

// Class
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

// Main execution
console.log("Basic TypeScript example running...");
console.log(`Addition: ${add(5, 3)}`);
console.log(`Greeting: ${greeter(user)}`);

// Export to make the file a module
export {};
