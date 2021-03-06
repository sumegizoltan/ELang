﻿// Type definitions for eLang.common 0.5.1
// Project: https://github.com/sumegizoltan/ELang/
// Definitions by: Zoltan Sumegi <https://github.com/sumegizoltan/>
// Definitions: 


/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../bootstrap/bootstrap.d.ts"/>
/// <reference path="./jquery.elang.d.ts"/>

module ELang {

    // ELangBase

    export class ELangBaseDefaults implements IELangBaseDefaults {
        public contentCSS: string;
        public contentInnerCSS: string;
        public resultCSS: string;
        public resultHeadCSS: string;
        public contentInnerHtml: string;
        public fluidRowHtml: string;
        public radioGroupHtml: string;
        public radioButtonHtml: string;
        public submitButtonHtml: string;
        public headLabelHtml: string;
        public resultHeadLabelHtml: string;
        public resultHtml: string;
        public headLabel: string;
        public resultHeadLabel: string;

        constructor() {
            this.contentCSS = "";
            this.resultCSS = "result well well-small";
            this.resultHeadCSS = "ui-widget-content ui-corner-all result-head";
            this.contentInnerCSS = "content";
            this.contentInnerHtml = '<div></div>';
            this.fluidRowHtml = '<div class="row-fluid"></div>';
            this.radioGroupHtml = '<div class="btn-group" data-toggle="buttons-radio"></div>';
            this.radioButtonHtml = '<button type="button" class="btn btn-primary"><span></span></button>';
            this.submitButtonHtml = '<button type="submit" class="btn btn-primary"><span></span></button>';
            this.headLabelHtml = '<span class="label"></span>';
            this.resultHeadLabelHtml = '<span class="label label-info"></span>';
            this.resultHtml = '<div><div></div></div>';
        }
    }

    export class ELangBase implements IELangBase {
        public name: string = "elang-Base";
        public description: string = "eLang base class";
        public delegates: any = {};
        public element: JQuery;
        public events: any = {};
        public options: any = {};
        public defaults: IELangBaseDefaults;

        constructor() {
            this.defaults = new ELangBaseDefaults();
        }

        public initialize(target: HTMLElement, options: any): void {
            this.element = jQuery(target);
        }

        public createContent(): void {
            var contentDiv: JQuery = this.element.next("div");
            var result: JQuery = jQuery(this.defaults.resultHtml);
            var resultLabel: JQuery = jQuery(this.defaults.resultHeadLabelHtml);

            resultLabel.attr("id", this.defaults.resultHeadLabel);
            contentDiv.addClass(this.defaults.contentCSS);
            result.addClass(this.defaults.resultCSS);
            result.children()
                .addClass(this.defaults.resultHeadCSS)
                .append(resultLabel);

            if (this.defaults.contentInnerHtml) {
                contentDiv = jQuery(this.defaults.contentInnerHtml).appendTo(contentDiv);
                contentDiv.addClass(this.defaults.contentInnerCSS);
            }

            contentDiv = this.getLastChild(contentDiv);
            contentDiv.append(result);

            // head label
            var head: JQuery = jQuery(this.defaults.headLabelHtml);

            head.attr("id", this.defaults.headLabel);
            this.element.append(head);

            // set labels
            ELangCommon.setLang(ELangCommon.resource.selectedLang, this.element);
        }
        
        public createRadioGroup(node: JQuery,
                                isMethodAppend: bool,
                                buttonNumber: number,
                                defaultButton: number,
                                btnLabels: string[],
                                clickHandler: Function,
                                btnTooltips?: string[]): void {

            var radio: JQuery = jQuery(this.defaults.radioGroupHtml);
            var radioIn: JQuery = this.getLastChild(radio);

            for (var i = 0; i < buttonNumber; i++) {
                var btn: JQuery = jQuery(this.defaults.radioButtonHtml);
                btn.add(btn.find("*")).filter("span").attr("id", btnLabels[i]);
                btn.click(clickHandler);

                if (btnTooltips) {
                    btn.attr("title", "").attr("title-label", btnTooltips[i]);
                }

                radioIn.append(btn);
            }

            if (isMethodAppend) {
                node.append(radio);
            }
            else {
                node.before(radio);
            }
            ELangCommon.setLang(ELangCommon.resource.selectedLang, radio);

            radio.button();
            radioIn.children(':eq(' + defaultButton + ')').click();

            if (btnTooltips) {
                radioIn.children('[title-label]').tooltip({ placement: 'bottom', delay: { show: 200, hide: 100 } });
            }
        }

        public appendAsLastChild(node: JQuery, element: JQuery): JQuery {
            var parent: JQuery = this.getLastChild(node);

            parent.append(element);

            return element;
        }

        public getLastChild(node: JQuery): JQuery {
            var parent: JQuery = node;
            var child: JQuery = parent.children(":first");

            while ("0" in child) {
                child = parent.children(":first");
                if ("0" in child) {
                    parent = child;
                }
            }

            return parent;
        }

        public isRdoChecked(eSrc: HTMLElement, rdoId: string): bool {
            var btn: JQuery = jQuery(eSrc);
            var id: string = btn.add(btn.find("*")).filter("span[id]").attr("id");
            return (id == rdoId);
        }

        public processCommand(command: string): JQuery {
            if (command) {
            }

            return this.element;
        }

        public setOptions(options: any): void {
            if (options) {
                jQuery.extend(true, options, options);
            }
        }
    }

    // ELangCommon

    export class PageResource implements IPageResource {
        public lang: IPageLangItems = {};
        public selectedLand: string = "";

        constructor() {
        }
    }

    export class PageLabels implements IPageLabels {
        public lblTitle: string;
        public lblPageHeader: string;
        public lblSearchField: string;
        public lblEditKeyField: string;
        public lblEditValueField: string;
        public lblFindedExpressionsHead: string;
        public lblEditedExpressionsHead: string;
        public lblFindHead: string;
        public lblEditHead: string;
        public lblFind: string;
        public lblAdd: string;
        public lblModify: string;
        public lblRemove: string;
        public lblSearchInExpressions: string;
        public lblSearchInMeanings: string;
        public lblSearchInExpressionsHlp: string;
        public lblSearchInMeaningsHlp: string;
        public lblTestHead: string;
        public lblOrderedTest: string;
        public lblRandomlyTest: string;
        public lblTypedTest: string;
        public lblSelectedTest: string;
        public lblWrittedTest: string;
        public lblVoicedTest: string;
        public lblStartTest: string;
        public lblStopTest: string;
        public lblTypedTestHlp: string;
        public lblSelectedTestHlp: string;
        public lblOrderedTestHlp: string;
        public lblRandomlyTestHlp: string;
        public lblWrittedTestHlp: string;
        public lblVoicedTestHlp: string;
    }

    export class ELangCommon {
        public static resource: IPageResource = new PageResource();

        public static getLabel(labelid: string, langid?: string): string {
            var lang: string = langid || resource.selectedLang;
            var label: string = "";

            if (lang in resource.lang) {
                if (labelid in resource.lang[lang]) {
                    label = resource.lang[lang][labelid];
                }
            }

            return label;
        }

        public static setLang(langid: string, node?: JQuery): void {
            if (langid in resource.lang) {
                resource.selectedLang = langid;

                var elements: JQuery;
                if (node) {
                    elements = node.find('*').filter('[id*="lbl"], [id*="btn"], [title-label]');
                }
                else {
                    elements = jQuery('[id*="lbl"], [id*="btn"], [title-label]');
                }

                elements.each(function () {
                    var el: HTMLElement = this;

                    if (el.hasAttribute("title-label")) {
                        var title: string = el.getAttribute("title-label");
                        var attribute: string = (el.hasAttribute("data-original-title")) ? 
                                                "data-original-title" : 
                                                "title";

                        if (title in resource.lang[langid]) {
                            el.setAttribute(attribute, resource.lang[langid][title]);
                        }
                        else {
                            el.setAttribute(attribute, "");
                        }
                    }

                    if (el.id in resource.lang[langid]) {
                        // text or placeholder
                        if (/INPUT/.test(el.tagName)) {
                            if ((el.getAttribute("type") == "text") && el.hasAttribute("placeholder")) {
                                el.setAttribute("placeholder", resource.lang[langid][el.id]);
                            }
                            else {
                                jQuery(el).text(resource.lang[langid][el.id]);
                            }
                        }
                        else {
                            jQuery(el).text(resource.lang[langid][el.id]);
                        }
                    }
                });
            }
        }
    }
 
    /**
      * interfaces and classes for jQuery.fn.__plugin
    */

    export class FnNewInstance implements IFnNewInstance {
        constructor(el: HTMLElement, options: any, pluginName: string) {
            return this.createInstance(el, options, pluginName);
        }

        public createInstance(el: HTMLElement, options: any, pluginName: string): JQuery {
            var element: JQuery = null;
            var plugin: IELangBase;

            if (pluginName in ELang) {
                plugin = new ELang[pluginName]();

                element = <JQuery>plugin["initialize"](el, options);
            }

            return element;
        }
    }

    export class FnJQuery implements IFnJQuery {
        constructor(context: JQuery,
                    options: any,
                    command: string,
                    pluginName: string,
                    pluginDataAttribute: string) {

            return this.fnPlugin(context, options, command, pluginName, pluginDataAttribute);
        }

        public fnPlugin(context: JQuery,
                        options: any,
                        command: string,
                        pluginName: string,
                        pluginDataAttribute: string): JQuery {

            var result: JQuery = context;
            var isFirstOnly: bool = true;

            for (var i = 0; i < result.length; i++) {
                var el: HTMLElement = result[i];
                var fn: Function = el[pluginDataAttribute];  // plugin.processCommand()

                if (command && (typeof (command) == "string")) {
                    if (jQuery.isFunction(fn)) {
                        fn(command);
                    }
                }
                else {
                    if (!fn) {
                        var instanceResult: JQuery = new FnNewInstance(el, options, pluginName);
                    }
                }

                if (isFirstOnly) {
                    break;
                }
            }

            return result;
        }
    }
}
