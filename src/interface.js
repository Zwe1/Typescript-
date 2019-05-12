function lable(params) {
    return a;
}
function lableWithInterface(params) {
    return params.a;
}
function useB(params) {
    params.st = '1';
    return params;
}
useB({ name: '1', st: '2' });
// 只读数组
var arr1 = [];
arr1 = [2];
function useC1(params) {
    return params.a + params.b;
}
var aFunc;
aFunc('2', 2);
