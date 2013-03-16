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
            // head label
            var head = jQuery("<span></span>");
            head.attr("id", this.defaults.headLabel);
            this.element.append(head);
            // result label
            result.find("span").attr("id", this.defaults.resultHeadLabel);
        };
        ELangBase.prototype.processCommand = function (command) {
            if(command) {
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
        ELangCommon.getLabel = function getLabel(labelid, langid) {
            var lang = langid || ELangCommon.resource.selectedLang;
            var label = "";
            if(lang in ELangCommon.resource.lang) {
                if(labelid in ELangCommon.resource.lang[lang]) {
                    label = ELangCommon.resource.lang[lang][labelid];
                }
            }
            return label;
        };
        ELangCommon.setLang = function setLang(langid, node) {
            if(langid in ELangCommon.resource.lang) {
                ELangCommon.resource.selectedLang = langid;
                var el = this;
                var elements;
                if(node) {
                    elements = node.find('[id*="lbl"], [id*="btn"]');
                } else {
                    elements = jQuery('[id*="lbl"], [id*="btn"]');
                }
                elements.each(function () {
                    if(el.id in ELangCommon.resource.lang[langid]) {
                        if(/INPUT/.test(el.tagName)) {
                            if((el.getAttribute("type") == "text") && el.hasAttribute("placeholder")) {
                                el.setAttribute("placeholder", ELangCommon.resource.lang[langid][el.id]);
                            } else {
                                jQuery(el).text(ELangCommon.resource.lang[langid][el.id]);
                            }
                        } else {
                            jQuery(el).text(ELangCommon.resource.lang[langid][el.id]);
                        }
                    }
                });
            }
        };
        return ELangCommon;
    })();
    ELang.ELangCommon = ELangCommon;    
})(ELang || (ELang = {}));
//@ sourceMappingURL=jquery.elang.common.js.map
