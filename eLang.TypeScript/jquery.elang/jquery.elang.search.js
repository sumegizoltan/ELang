var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// Type definitions for eLang
// Project: https://github.com/sumegizoltan/ELang/
// Definitions by: Zoltan Sumegi <https://github.com/sumegizoltan/>
// Definitions:
/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../bootstrap/bootstrap.d.ts"/>
/// <reference path="./jquery.elang.d.ts"/>
/// <reference path="./jquery.elang.common.ts"/>
/// <reference path="./jquery.elang.db.ts"/>
var ELang;
(function (ELang) {
    var ELangSearchEvents = (function () {
        function ELangSearchEvents() {
            this.select = new jQuery.Deferred();
        }
        return ELangSearchEvents;
    })();
    ELang.ELangSearchEvents = ELangSearchEvents;    
    var ELangSearchDelegates = (function () {
        function ELangSearchDelegates() {
            this.selectCallback = null;
            this.selectHandler = null;
            this.langDirectionHandler = null;
            this.langDirectionClickHandler = null;
            this.searchHandler = null;
            this.searchClickHandler = null;
        }
        return ELangSearchDelegates;
    })();
    ELang.ELangSearchDelegates = ELangSearchDelegates;    
    var ELangSearchDefaults = (function (_super) {
        __extends(ELangSearchDefaults, _super);
        function ELangSearchDefaults() {
                _super.call(this);
            this.headLabel = "lblFindHead";
            this.resultHeadLabel = "lblFindedExpressionsHead";
            this.directionExpressionsLabel = "lblSearchInExpressions";
            this.directionMeaningsLabel = "lblSearchInMeanings";
            this.searchFormHtml = '<form class="form-search"><div class="input-append"></div></form>';
            this.searchFieldHtml = '<input type="text" class="span2 search-query" />';
            this.searchButtonHtml = '<button type="submit" class="btn"><span></span></button>';
            this.searchButtonLabel = "lblFind";
        }
        return ELangSearchDefaults;
    })(ELang.ELangBaseDefaults);
    ELang.ELangSearchDefaults = ELangSearchDefaults;    
    var ELangSearch = (function (_super) {
        __extends(ELangSearch, _super);
        function ELangSearch() {
                _super.call(this);
            this.name = "eLang-Search";
            this.description = "eLang - Language Learning search functionality.";
            this.defaults = new ELangSearchDefaults();
            this.delegates = new ELangSearchDelegates();
            this.events = new ELangSearchEvents();
            this.isSearchInExp = true;
        }
        ELangSearch.prototype.initialize = function (target, options) {
            _super.prototype.initialize.call(this, target, options);
            this.delegates.selectHandler = jQuery.proxy(this._onSelect, this);
            this.delegates.selectCallback = jQuery.proxy(this._onSelectCallback, this);
            this.delegates.langDirectionHandler = jQuery.proxy(this._onDirectionClick, this);
            this.delegates.searchHandler = jQuery.proxy(this._select, this);
            this.events.select.done(this.delegates.selectHandler);
            var handlerDirection = this.delegates.langDirectionHandler;
            var handlerSearch = this.delegates.searchHandler;
            this.delegates.searchClickHandler = function () {
                var srcE = this;
                var el = srcE.parentNode["getElementsByTagName"]("input")[0];
                handlerSearch(el);
            };
            this.delegates.langDirectionClickHandler = function () {
                var srcE = this;
                handlerDirection(srcE);
            };
            this.createContent();
            this.element.data("elang-search", jQuery.proxy(this.processCommand, this));
        };
        ELangSearch.prototype.createContent = function () {
            _super.prototype.createContent.call(this);
            var contentDiv = this.element.next("div");
            var resultSelector = "." + this.defaults.resultCSS.split(" ")[0];
            var result = contentDiv.find(resultSelector);
            // search direction
            var radio = jQuery(this.defaults.radioGroupHtml);
            var btn1 = jQuery(this.defaults.radioButtonHtml);
            var btn2 = jQuery(this.defaults.radioButtonHtml);
            var radioIn = this.getLastChild(radio);
            btn1.find("span").attr("id", this.defaults.directionExpressionsLabel);
            btn2.find("span").attr("id", this.defaults.directionMeaningsLabel);
            btn1.click(this.delegates.langDirectionClickHandler);
            btn2.click(this.delegates.langDirectionClickHandler);
            radioIn.append(btn1);
            radioIn.append(btn2);
            result.before(radio);
            ELang.ELangCommon.setLang(ELang.ELangCommon.resource.selectedLang, radio);
            radio.button();
            btn1.click();
            // search panel
            var form = jQuery(this.defaults.searchFormHtml);
            var input = jQuery(this.defaults.searchFieldHtml);
            var search = jQuery(this.defaults.searchButtonHtml);
            var formIn = this.getLastChild(form);
            search.find("span").attr("id", this.defaults.searchButtonLabel);
            search.click(this.delegates.searchClickHandler);
            formIn.append(input);
            formIn.append(search);
            result.before(form);
            // set labels
            ELang.ELangCommon.setLang(ELang.ELangCommon.resource.selectedLang, contentDiv);
            // init typeahead for input
            //TODO typeahead init
                    };
        ELangSearch.prototype._onDirectionClick = function (eSrc) {
            var id = jQuery(eSrc).find("span").attr("id");
            this.isSearchInExp = (id == this.defaults.directionExpressionsLabel);
        };
        ELangSearch.prototype._onSelect = function (eSrc) {
            var id = eSrc.value;
            if(id) {
                var db = ELang.ELangDB.getInstance();
                db.select(id, this.delegates.selectCallback);
            } else {
                this._onSelectCallback();
            }
        };
        ELangSearch.prototype._onSelectCallback = function () {
            //TODO - show selected element
                    };
        ELangSearch.prototype._select = function (eSrc) {
            this.events.select.resolve(eSrc);
        };
        return ELangSearch;
    })(ELang.ELangBase);
    ELang.ELangSearch = ELangSearch;    
})(ELang || (ELang = {}));
(function (jQuery) {
    jQuery.fn.elangSearch = function (options, command) {
        var result = this;
        var isFirstOnly = true;
        for(var i = 0; i < result.length; i++) {
            var el = result[i];
            var fn = el["elang-search"];// elang-search.processCommand()
            
            if(command && (typeof (command) == "string")) {
                if(jQuery.isFunction(fn)) {
                    fn(command);
                }
            } else {
                if(!fn) {
                    var elangSearch = new ELang.ELangSearch();
                    elangSearch.initialize(el, options);
                }
            }
            if(isFirstOnly) {
                break;
            }
        }
        return result;
    };
})(jQuery);
//@ sourceMappingURL=jquery.elang.search.js.map
