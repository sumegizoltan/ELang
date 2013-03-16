// Type definitions for eLang
// Project: https://github.com/sumegizoltan/ELang/
// Definitions by: Zoltan Sumegi <https://github.com/sumegizoltan/>
// Definitions: 


/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="./jquery.elang.d.ts"/>

module ELang {

    // ELangBase

    export class ELangBaseDefaults implements IELangBaseDefaults {
        public contentCSS: string;
        public contentInnerCSS: string;
        public resultCSS: string;
        public resultHeadCSS: string;
        public contentInnerHtml: string;
        public radioGroupHtml: string;
        public radioButtonHtml: string;
        public headLabelHtml: string;
        public resultHeadLabelHtml: string;
        public resultHtml: string;
        public headLabel: string;
        public resultHeadLabel: string;

        constructor() {
            this.contentCSS = "";
            this.resultCSS = "result";
            this.resultHeadCSS = "ui-widget-header ui-corner-all";
            this.contentInnerCSS = "content";
            this.contentInnerHtml = '<div></div>';
            this.radioGroupHtml = '<div class="btn-group" data-toggle="buttons-radio"></div>';
            this.radioButtonHtml = '<button type="button" class="btn btn-primary"><span></span></button>';
            this.headLabelHtml = '<span class="label label-info"></span>';
            this.resultHeadLabelHtml = '<span class="label"></span>';
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
        public lblTestHead: string;
        public lblOrderedTest: string;
        public lblRandomlyTest: string;
        public lblTypedTest: string;
        public lblSelectedTest: string;
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
                    elements = node.find('*').filter('[id*="lbl"], [id*="btn"]');
                }
                else {
                    elements = jQuery('[id*="lbl"], [id*="btn"]');
                }

                elements.each(function () {
                    var el: HTMLElement = this;
                    
                    if (el.id in resource.lang[langid]) {
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
}