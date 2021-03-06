﻿// Type definitions for eLang.search 0.5.1
// Project: https://github.com/sumegizoltan/ELang/
// Definitions by: Zoltan Sumegi <https://github.com/sumegizoltan/>
// Definitions: 

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../bootstrap/bootstrap.d.ts"/>
/// <reference path="./jquery.elang.d.ts"/>
/// <reference path="./jquery.elang.common.ts"/>
/// <reference path="./jquery.elang.db.ts"/>

module ELang {
    export class ELangSearchEvents implements IELangSearchEvents {
        public select: JQueryDeferred;

        constructor() {
            this.select = new jQuery.Deferred();
        }
    }

    export class ELangSearchDelegates implements IELangSearchDelegates {
        public selectCallback: Function = null;
        public selectHandler: Function = null;
        public langDirectionHandler: Function = null;
        public langDirectionClickHandler: Function = null;
        public searchHandler: Function = null;
        public searchClickHandler: Function = null;

        constructor() {
        }
    }

    export class ELangSearchDefaults extends ELangBaseDefaults implements IELangSearchDefaults {
        public expressionsLabel: string;
        public expressionsTooltip: string;
        public meaningsLabel: string;
        public meaningsTooltip: string;
        public searchFormHtml: string;
        public searchFieldHtml: string;
        public searchButtonLabel: string;

        constructor() {
            super();

            this.headLabel = "lblFindHead";
            this.resultHeadLabel = "lblFindedExpressionsHead";
            this.expressionsLabel = "lblSearchInExpressions";
            this.meaningsLabel = "lblSearchInMeanings";
            this.expressionsTooltip = "lblSearchInExpressionsHlp";
            this.meaningsTooltip = "lblSearchInMeaningsHlp";
            this.searchFormHtml = '<form class="form-search"><div class="input-append"></div></form>';
            this.searchFieldHtml = '<input type="text" class="search-query" />';
            this.searchButtonLabel = "lblFind";
        }
    }

    export class ELangSearch extends ELangBase implements IELangSearch {
        public defaults: IELangSearchDefaults;
        private delegates: IELangSearchDelegates;
        private events: IELangSearchEvents;
        private isSearchInExp: bool;

        constructor() {
            super();
            
            this.name = "eLang-Search";
            this.description = "eLang - Language Learning search functionality.";
            this.defaults = new ELangSearchDefaults();
            this.delegates = new ELangSearchDelegates();
            this.events = new ELangSearchEvents();
            this.isSearchInExp = true;
        }

        public initialize(target: HTMLElement, options: any): void {
            super.initialize(target, options);

            this.delegates.selectHandler = jQuery.proxy(this._onSelect, this);
            this.delegates.selectCallback = jQuery.proxy(this._onSelectCallback, this);
            this.delegates.langDirectionHandler = jQuery.proxy(this._onDirectionClick, this);
            this.delegates.searchHandler = jQuery.proxy(this._select, this);

            this.events.select.done(this.delegates.selectHandler);

            var handlerDirection: Function = this.delegates.langDirectionHandler;
            var handlerSearch: Function = this.delegates.searchHandler;

            this.delegates.searchClickHandler = function () {
                var srcE: HTMLElement = this;
                var el: HTMLElement = srcE.parentNode["getElementsByTagName"]("input")[0];
                handlerSearch(el);
            };

            this.delegates.langDirectionClickHandler = function () {
                var srcE: HTMLElement = this;
                handlerDirection(srcE);
            };

            this.createContent();

            this.element.data("elang-search", jQuery.proxy(this.processCommand, this));
        }

        private createContent(): void {
            super.createContent();

            var contentDiv: JQuery = this.element.next("div");
            var resultSelector: string = "." + this.defaults.resultCSS.split(" ")[0];
            var result: JQuery = contentDiv.find("*").filter(resultSelector);

            // search direction
            this.createRadioGroup(result,
                false,
                2,
                0,
                [this.defaults.expressionsLabel, this.defaults.meaningsLabel],
                this.delegates.langDirectionClickHandler,
                [this.defaults.expressionsTooltip, this.defaults.meaningsTooltip]);

            // search panel
            var form: JQuery = jQuery(this.defaults.searchFormHtml);
            var input: JQuery = jQuery(this.defaults.searchFieldHtml);
            var search: JQuery = jQuery(this.defaults.submitButtonHtml);

            var formIn: JQuery = this.getLastChild(form);

            search.add(search.find("*")).filter("span").attr("id", this.defaults.searchButtonLabel);
            search.click(this.delegates.searchClickHandler);
            formIn.append(input);
            formIn.append(search);
            result.before(form);

            // set labels
            ELangCommon.setLang(ELangCommon.resource.selectedLang, contentDiv);

            // init typeahead for input
            //TODO typeahead init
        }

        private _onDirectionClick(eSrc: HTMLElement): void {
            this.isSearchInExp = this.isRdoChecked(eSrc, this.defaults.expressionsLabel);
        }

        private _onSelect(eSrc: HTMLInputElement): void {
            var id = eSrc.value;

            if (id) {
                var db = ELangDB.getInstance();

                db.select(id, this.delegates.selectCallback);
            }
            else {
                this._onSelectCallback();
            }
        }

        private _onSelectCallback(): void {

            //TODO - show selected element
        }

        private _select(eSrc: HTMLInputElement): void {
            this.events.select.resolve(eSrc);
        }
    }
}

(function (jQuery) {
    jQuery.fn.elangSearch = function (options?: any, command?: string) {
        var result: JQuery = new ELang.FnJQuery(this, options, command, "ELangSearch", "elang-search");

        return result;
    };
})(jQuery);