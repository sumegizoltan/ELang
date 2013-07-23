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
        public startStopHandler: Function = null;
        
        public rdoVariantHandler: Function = null;
        public rdoModeHandler: Function = null;
        public rdoQuestionHandler: Function = null;
        
        public rdoVariantClickHandler: Function = null;
        public rdoModeClickHandler: Function = null;
        public rdoQuestionClickHandler: Function = null;

        constructor() {
        }
    }

    export class ELangTestDefaults extends ELangBaseDefaults implements IELangTestDefaults {
        public formHtml: string;
        public startButtonLabel: string;
        public stopButtonLabel: string;
        public rdoTypedLabel: string;
        public rdoSelectedLabel: string;
        public rdoOrderedLabel: string;
        public rdoRandomlyLabel: string;
        public rdoWrittedLabel: string;
        public rdoVoicedLabel: string;
        public rdoTypedTooltip: string;
        public rdoSelectedTooltip: string;
        public rdoOrderedTooltip: string;
        public rdoRandomlyTooltip: string;
        public rdoWrittedTooltip: string;
        public rdoVoicedTooltip: string;

        constructor() {
            super();

            this.formHtml = '<form class="form-search"><div class="input-append"></div></form>';
            this.headLabel = "lblTestHead";
            this.resultHeadLabel = "lblFindedExpressionsHead";
            this.startButtonLabel = "lblStartTest";
            this.stopButtonLabel = "lblStopTest";
            this.rdoTypedLabel = "lblTypedTest";
            this.rdoSelectedLabel = "lblSelectedTest";
            this.rdoOrderedLabel = "lblOrderedTest";
            this.rdoRandomlyLabel = "lblRandomlyTest";
            this.rdoWrittedLabel = "lblWrittedTest";
            this.rdoVoicedLabel = "lblVoicedTest";
            this.rdoTypedTooltip = "lblTypedTestHlp";
            this.rdoSelectedTooltip = "lblSelectedTestHlp";
            this.rdoOrderedTooltip = "lblOrderedTestHlp";
            this.rdoRandomlyTooltip = "lblRandomlyTestHlp";
            this.rdoWrittedTooltip = "lblWrittedTestHlp";
            this.rdoVoicedTooltip = "lblVoicedTestHlp";
        }
    }

    export class ELangTest extends ELangBase implements IELangTest {
        public defaults: IELangTestDefaults;
        private delegates: IELangTestDelegates;
        private isOrdered: bool;
        private isSelected: bool;
        private isWritted: bool;

        constructor() {
            super();

            this.name = "eLang-Test";
            this.description = "eLang - Language Learning test functionality.";
            this.defaults = new ELangTestDefaults();
            this.delegates = new ELangTestDelegates();
        }

        public initialize(target: HTMLElement, options: any): void {
            super.initialize(target, options);

            this.delegates.rdoModeHandler = jQuery.proxy(this._onRdoModeClick, this);
            this.delegates.rdoQuestionHandler = jQuery.proxy(this._onRdoQuestionClick, this);
            this.delegates.rdoVariantHandler = jQuery.proxy(this._onRdoVariantClick, this);
            this.delegates.startStopHandler = jQuery.proxy(this._onStartStopClick, this);

            var handlerMode: Function = this.delegates.rdoModeHandler;
            var handlerQuestion: Function = this.delegates.rdoQuestionHandler;
            var handlerVariant: Function = this.delegates.rdoVariantHandler;
            this.delegates.rdoModeClickHandler = function () {
                var srcE: HTMLElement = this;
                handlerMode(srcE);
            };
            this.delegates.rdoQuestionClickHandler = function () {
                var srcE: HTMLElement = this;
                handlerQuestion(srcE);
            };
            this.delegates.rdoVariantClickHandler = function () {
                var srcE: HTMLElement = this;
                handlerVariant(srcE);
            };

            this.createContent();

            this.element.data("elang-test", jQuery.proxy(this.processCommand, this));
        }

        createContent(): void {
            super.createContent();

            var contentDiv: JQuery = this.element.next("div");
            var resultSelector: string = "." + this.defaults.resultCSS.split(" ")[0];
            var result: JQuery = contentDiv.find("*").filter(resultSelector);
            var fluidRow: JQuery = jQuery(this.defaults.fluidRowHtml);
            var radioCont: JQuery = this.getLastChild(fluidRow);

            result.before(fluidRow);

            // test variant
            this.createRadioGroup(fluidRow,
                true,
                2,
                0,
                [this.defaults.rdoOrderedLabel, this.defaults.rdoRandomlyLabel],
                this.delegates.rdoVariantClickHandler,
                [this.defaults.rdoOrderedTooltip, this.defaults.rdoRandomlyTooltip]);
            
            // test mode
            this.createRadioGroup(fluidRow,
                true,
                2,
                1,
                [this.defaults.rdoTypedLabel, this.defaults.rdoSelectedLabel],
                this.delegates.rdoModeClickHandler,
                [this.defaults.rdoTypedTooltip, this.defaults.rdoSelectedTooltip]);

            // test questions
            this.createRadioGroup(fluidRow,
                true,
                2,
                0,
                [this.defaults.rdoWrittedLabel, this.defaults.rdoVoicedLabel],
                this.delegates.rdoQuestionClickHandler,
                [this.defaults.rdoWrittedTooltip, this.defaults.rdoVoicedTooltip]);

            fluidRow.children(".btn-group").addClass("span4");
        }

        private _onRdoVariantClick(eSrc: HTMLElement): void {
            this.isOrdered = this.isRdoChecked(eSrc, this.defaults.rdoOrderedLabel);
        }

        private _onRdoModeClick(eSrc: HTMLElement): void {
            this.isSelected = this.isRdoChecked(eSrc, this.defaults.rdoSelectedLabel);
        }

        private _onRdoQuestionClick(eSrc: HTMLElement): void {
            this.isWritted = this.isRdoChecked(eSrc, this.defaults.rdoWrittedLabel);
        }

        private _onStartStopClick(): void {
        }
    }
}

(function (jQuery) {
    jQuery.fn.elangTest = function (options?: any, command?: string) {
        var result: JQuery = new ELang.FnJQuery(this, options, command, "ELangTest", "elang-test");

        return result;
    };
})(jQuery);