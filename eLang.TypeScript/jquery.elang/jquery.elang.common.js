// Type definitions for eLang
// Project: https://github.com/sumegizoltan/ELang/
// Definitions by: Zoltan Sumegi <https://github.com/sumegizoltan/>
// Definitions:
/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="./jquery.elang.d.ts"/>
var ELang;
(function (ELang) {
    // ELangBase
    var ELangBaseDefaults = (function () {
        function ELangBaseDefaults() {
            this.contentCSS = "ui-widget-content ui-state-default";
            this.resultCSS = "result";
            this.resultHeadCSS = "ui-widget-header ui-corner-all";
            this.radioGroupHtml = '<div class="btn-group" data-toggle="buttons-radio"></div>';
            this.radioButtonHtml = '<button type="button" class="btn btn-primary"><span></span></button>';
        }
        return ELangBaseDefaults;
    })();
    ELang.ELangBaseDefaults = ELangBaseDefaults;    
    var ELangBase = (function () {
        function ELangBase() {
            this.name = "elang-Base";
            this.description = "eLang base class";
            this.delegates = {
            };
            this.events = {
            };
            this.options = {
            };
            this.defaults = new ELangBaseDefaults();
        }
        ELangBase.prototype.initialize = function (target, options) {
            this.element = jQuery(target);
        };
        ELangBase.prototype.createContent = function () {
            var contentDiv = this.element.next("div");
            var result = jQuery("<div><div><span></span></div></div>");
            contentDiv.addClass(this.defaults.contentCSS);
            result.addClass(this.defaults.resultCSS);
            result.children().addClass(this.defaults.resultHeadCSS);
            contentDiv.append(result);
        };
        ELangBase.prototype.processCommand = function (command) {
            if(command) {
            } else {
                this.element.data("elang", jQuery.proxy(this.processCommand, this));
            }
            return this.element;
        };
        ELangBase.prototype.setOptions = function (options) {
            if(options) {
                jQuery.extend(true, options, options);
            }
        };
        return ELangBase;
    })();
    ELang.ELangBase = ELangBase;    
    // ELangCommon
    var PageResource = (function () {
        function PageResource() {
            this.lang = {
            };
            this.selectedLand = "";
        }
        return PageResource;
    })();
    ELang.PageResource = PageResource;    
    var PageLabels = (function () {
        function PageLabels() { }
        return PageLabels;
    })();
    ELang.PageLabels = PageLabels;    
    var ELangCommon = (function () {
        function ELangCommon() { }
        ELangCommon.resource = new PageResource();
        ELangCommon.setLang = function setLang(langid, node) {
            if(langid in ELangCommon.resource.lang) {
                ELangCommon.resource.selectedLang = langid;
                var elements;
                if(node) {
                    elements = node.find('[id*="lbl"], [id*="btn"]');
                } else {
                    elements = jQuery('[id*="lbl"], [id*="btn"]');
                }
                elements.each(function () {
                    if(this.id in ELangCommon.resource.lang[langid]) {
                        jQuery(this).text(ELangCommon.resource.lang[langid][this.id]);
                    }
                });
            }
        };
        return ELangCommon;
    })();
    ELang.ELangCommon = ELangCommon;    
})(ELang || (ELang = {}));
//@ sourceMappingURL=jquery.elang.common.js.map
