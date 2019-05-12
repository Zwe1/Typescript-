// 函数接口

interface forFunc {
    (name: string, cou: number): string;
}

let aFunc: forFunc;

aFunc = (n, c) => {
    return '123';
}

aFunc('2',2);

// 继承接口
interface lofe {
    exist: boolean;
}

interface Animal {
    type: string;
    isAlive: boolean;
}

interface Dog extends Animal, lofe {
    name: string;
    tail: boolean;
}

let dog: Dog = {
    name: 'pie',
    isAlive: true,
    type: 'male',
    tail: false,
    exist: true
}

// 接口继承类

class hentai {
  why: string;
}

interface tobeHentai extends hentai {
    how(): void;
}

class aHentai extends hentai implements tobeHentai {
    how(): void {};
}

// 只有hentai的子类才能实现tobeHentai接口，因为接口继承了hentai类,
// 产生了一个非Hentai子类无法实现的protected变量。
class bHentai implements tobeHentai{
    why = '1';
    how() {}
}

