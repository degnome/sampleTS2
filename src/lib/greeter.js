var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello World`, " + this.greeting;
    };
    return Greeter;
})();
exports.Greeter = Greeter;

//# sourceMappingURL=../lib/greeter.js.map