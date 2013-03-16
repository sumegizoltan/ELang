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
            this.contentCSS = "";
            this.resultCSS = "result well well-small";
            this.resultHeadCSS = "ui-widget-content ui-corner-all result-head";
            this.contentInnerCSS = "content";
            this.contentInnerHtml = '<div></div>';
            this.radioGroupHtml = '<div class="btn-group" data-toggle="buttons-radio"></div>';
            this.radioButtonHtml = '<button type="button" class="btn btn-primary"><span></span></button>';
            this.headLabelHtml = '<span class="label"></span>';
            this.resultHeadLabelHtml = '<span class="label label-info"></span>';
            this.resultHtml = '<div><div></div></div>';
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
            var result = jQuery(this.defaults.resultHtml);
            var resultLabel = jQuery(this.defaults.resultHeadLabelHtml);
            resultLabel.attr("id", this.defaults.resultHeadLabel);
            contentDiv.addClass(this.defaults.contentCSS);
            result.addClass(this.defaults.resultCSS);
            result.children().addClass(this.defaults.resultHeadCSS).append(resultLabel);
            if(this.defaults.contentInnerHtml) {
                contentDiv = jQuery(this.defaults.contentInnerHtml).appendTo(contentDiv);
                contentDiv.addClass(this.defaults.contentInnerCSS);
            }
            contentDiv = this.getLastChild(contentDiv);
            contentDiv.append(result);
            // head label
            var head = jQuery(this.defaults.headLabelHtml);
            head.attr("id", this.defaults.headLabel);
            this.element.append(head);
            // set labels
            ELangCommon.setLang(ELangCommon.resource.selectedLang, this.element);
        };
        ELangBase.prototype.appendAsLastChild = function (node, element) {
            var parent = this.getLastChild(node);
            parent.append(element);
            return element;
        };
        ELangBase.prototype.getLastChild = function (node) {
            var parent = node;
            var child = parent.children(":first");
            while("0" in child) {
                child = parent.children(":first");
                if("0" in child) {
                    parent = child;
                }
            }
            return parent;
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
                var elements;
                if(node) {
                    elements = node.find('*').filter('[id*="lbl"], [id*="btn"]');
                } else {
                    elements = jQuery('[id*="lbl"], [id*="btn"]');
                }
                elements.each(function () {
                    var el = this;
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
