class A {
  public toFixed(v: number): number;
  toFixed = v => v;
}

function isNumber(v: any): v is A {
  // typeof 类型守卫
  return v instanceof A; // 右侧需为typename
}

function isString(v: any): v is string {
  // instanceof 类型守卫
  return v instanceof String; // 右侧需为constructor
}

function padLeft(value: any) {
  if (isNumber(value)) return value.toFixed(2);
  if (isString(value)) return value.slice(1);
}

type Alias = { num: number }; // 类型别名,不能被extends or implements
interface Interface {
  num: number;
}
// 如果你无法通过接口来描述一个类型并且需要使用联合类型或元组类型，这时通常会使用类型别名。

declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;
