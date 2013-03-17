// Type definitions for eLang.test 0.5.1
// Project: https://github.com/sumegizoltan/ELang/
// Definitions by: Zoltan Sumegi <https://github.com/sumegizoltan/>
// Definitions: 

/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../bootstrap/bootstrap.d.ts"/>
/// <reference path="./jquery.elang.d.ts"/>
/// <reference path="./jquery.elang.common.ts"/>
/// <reference path="./jquery.elang.db.ts"/>

module ELang {
    export class ELangTestDelegates implements IELangTestDelegates {
        
        constructor() {
        }
    }

    export class ELangTestDefaults extends ELangBaseDefaults implements IELangTestDefaults {
        directionExpressionsLabel: string;
        directionMeaningsLabel: string;
        searchFormHtml: string;
        searchFieldHtml: string;
        searchButtonHtml: string;
        searchButtonLabel: string;

        constructor() {
            super();

            this.headLabel = "lblTestHead";
            this.resultHeadLabel = "lblFindedExpressionsHead";
        }
    }

    export class ELangTest extends ELangBase implements IELangTest {
        defaults: IELangTestDefaults;
        delegates: IELangTestDelegates;

        constructor() {
            super();

            this.name = "eLang-Test";
            this.description = "eLang - Language Learning test functionality.";
            this.defaults = new ELangTestDefaults();
            this.delegates = new ELangTestDelegates();
        }

        public initialize(target: HTMLElement, options: any): void {
            super.initialize(target, options);


            this.createContent();

            this.element.data("elang-test", jQuery.proxy(this.processCommand, this));
        }

        createContent(): void {
            super.createContent();
        }
    }
}

(function (jQuery) {
    jQuery.fn.elangTest = function (options?: any, command?: string) {
        var result: JQuery = new ELang.FnJQuery(this, options, command, "ELangTest", "elang-test");

        return result;
    };
})(jQuery);