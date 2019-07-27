let bool: boolean = true;

let s: string = '123';

let n: number = 1243;

let arr: number[] = [1];

let x: [string, boolean] = ['1', true];

enum C {r = 1, b, g, w};

let color: number = C.r;

let notsure: any = {};

let f: null = null;

function func(): void {};

// 断言： 强制认定变量类型，编译器将跳过类型检验

let a: any = 1;

a!.length;

(a as string).length;

(<string>a).length;
