// 范型：关于类型的函数
function indentity<T>(arg: T): T {
  return arg;
}

indentity<number>(1);

class Inden<T> {
  add: (x: T, y: T) => T;
}

const inden = new Inden<number>();

inden.add = function(x, y) {
  return x + y;
};

const onden = new Inden<string>();

onden.add = function(x, y) {
  return x + y;
};

const xnden = new Inden<{ foo: Function }>();

xnden.add = function(x, y) {
  return y;
};

// 泛型约束

interface withLength {
  length: number;
}

function propertyWithLength<T extends withLength>(x: T): number {
  return x.length;
}

propertyWithLength("sadsad");

function getProperty<T, K extends keyof T>(o: T, k: K) {
  return o[k];
}

const foo = { a: "1", b: 2, c: 3, d: 4 };

getProperty(foo, "ax");

const axxx = getProperty(foo, "a");
