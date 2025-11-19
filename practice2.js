var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var shape = /** @class */ (function () {
    function shape() {
    }
    shape.prototype.calculateArea = function () {
        return 0;
    };
    return shape;
}());
var circle = /** @class */ (function (_super) {
    __extends(circle, _super);
    function circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return circle;
}(shape));
var triangle = /** @class */ (function (_super) {
    __extends(triangle, _super);
    function triangle(base, height) {
        var _this = _super.call(this) || this;
        _this.base = base;
        _this.height = height;
        return _this;
    }
    triangle.prototype.calculateArea = function () {
        return 0.5 * this.base * this.height;
    };
    return triangle;
}(shape));
var shapes = [
    new circle(5),
    new triangle(5, 8)
];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var sh = shapes_1[_i];
    console.log("Area is :", sh.calculateArea());
}
