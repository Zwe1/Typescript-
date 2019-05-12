function lable(params: {a: string}): string {
    return a;
}

interface A {
    a: string
}

function lableWithInterface(params: A) {
    return params.a
}

// 接口

interface B {
    name: 'ein';
   readonly st: string;
    age?: number;
}

function useB(params: B) {
    params.st = '1';
    return params
}

useB({name: '1', st: '2'});

// 只读数组

let arr1: ReadonlyArray<number> = [];

arr1 = [2];

arr1[1] = 1;   // ??????? 

// 索引签名

interface C1{
    a: string;
    [someProp: string]: any
}

function useC1(params: C1) {
    return params.a + params.b;
}
