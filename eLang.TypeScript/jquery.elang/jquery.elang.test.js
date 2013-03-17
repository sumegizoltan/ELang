var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// Type definitions for eLang.test 0.5.1
// Project: https://github.com/sumegizoltan/ELang/
// Definitions by: Zoltan Sumegi <https://github.com/sumegizoltan/>
// Definitions:
/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../bootstrap/bootstrap.d.ts"/>
/// <reference path="./jquery.elang.d.ts"/>
/// <reference path="./jquery.elang.common.ts"/>
/// <reference path="./jquery.elang.db.ts"/>
var ELang;
(function (ELang) {
    var ELangTestDelegates = (function () {
        function ELangTestDelegates() {
        }
        return ELangTestDelegates;
    })();
    ELang.ELangTestDelegates = ELangTestDelegates;    
    var ELangTestDefaults = (function (_super) {
        __extends(ELangTestDefaults, _super);
        function ELangTestDefaults() {
                _super.call(this);
            this.headLabel = "lblTestHead";
            this.resultHeadLabel = "lblFindedExpressionsHead";
        }
        return ELangTestDefaults;
    })(ELang.ELangBaseDefaults);
    ELang.ELangTestDefaults = ELangTestDefaults;    
    var ELangTest = (function (_super) {
        __extends(ELangTest, _super);
        function ELangTest() {
                _super.call(this);
            this.name = "eLang-Test";
            this.description = "eLang - Language Learning test functionality.";
            this.defaults = new ELangTestDefaults();
            this.delegates = new ELangTestDelegates();
        }
        ELangTest.prototype.initialize = function (target, options) {
            _super.prototype.initialize.call(this, target, options);
            this.createContent();
            this.element.data("elang-test", jQuery.proxy(this.processCommand, this));
        };
        ELangTest.prototype.createContent = function () {
            _super.prototype.createContent.call(this);
        };
        return ELangTest;
    })(ELang.ELangBase);
    ELang.ELangTest = ELangTest;    
})(ELang || (ELang = {}));
(function (jQuery) {
    jQuery.fn.elangTest = function (options, command) {
        var result = new ELang.FnJQuery(this, options, command, "ELangTest", "elang-test");
        return result;
    };
})(jQuery);
//@ sourceMappingURL=jquery.elang.test.js.map
