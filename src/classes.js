var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(aname) {
        this.name = aname;
    }
    return Animal;
}());
var panda = /** @class */ (function (_super) {
    __extends(panda, _super);
    function panda(name) {
        return _super.call(this, name) || this;
    }
    return panda;
}(Animal));
var wildN = /** @class */ (function () {
    function wildN(aname) {
        this.name = aname;
    }
    return wildN;
}());
var animal = new Animal("an");
var panda1 = new panda("DADA");
var wild1 = new wildN("some");
panda1 = animal;
// panda1 = wild1;
// 无法实例化的类
var Baned = /** @class */ (function () {
    function Baned(n) {
        this.name = "can't be instantiate";
        this.name = n;
    }
    Baned.prototype.call = function () {
        return this.name + "base";
    };
    Baned.count = 1;
    return Baned;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B(N) {
        var _this = _super.call(this, "B") || this;
        _this.name1 = N;
        return _this;
    }
    B.prototype.call = function () {
        return this.name1;
    };
    return B;
}(Baned));
// const instance1 = new Baned("i1");
var instance2 = new B("xx");
