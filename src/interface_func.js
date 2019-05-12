// 函数接口
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var aFunc;
aFunc = function (n, c) {
    return '123';
};
aFunc('2', 2);
var dog = {
    name: 'pie',
    isAlive: true,
    type: 'male',
    tail: false,
    exist: true
};
// 接口继承类
var hentai = /** @class */ (function () {
    function hentai() {
    }
    return hentai;
}());
var aHentai = /** @class */ (function (_super) {
    __extends(aHentai, _super);
    function aHentai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    aHentai.prototype.how = function () { };
    ;
    return aHentai;
}(hentai));
// 只有hentai的子类才能实现tobeHentai接口，因为接口继承了hentai类,
// 产生了一个非Hentai子类无法实现的protected变量。
var bHentai = /** @class */ (function () {
    function bHentai() {
        this.why = '1';
    }
    bHentai.prototype.how = function () { };
    return bHentai;
}());
