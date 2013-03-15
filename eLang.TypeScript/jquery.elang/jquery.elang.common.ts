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
        public resultCSS: string;
        public resultHeadCSS: string;
        public radioGroupHtml: string;
        public radioButtonHtml: string;
        public headLabel: string;

        constructor() {
            this.contentCSS = "ui-widget-content ui-state-default";
            this.resultCSS = "result";
            this.resultHeadCSS = "ui-widget-header ui-corner-all";
            this.radioGroupHtml = '<div class="btn-group" data-toggle="buttons-radio"></div>';
            this.radioButtonHtml = '<button type="button" class="btn btn-primary"><span></span></button>';
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
            var result: JQuery = jQuery("<div><div><span></span></div></div>");

            contentDiv.addClass(this.defaults.contentCSS);
            result.addClass(this.defaults.resultCSS);
            result.children().addClass(this.defaults.resultHeadCSS);

            contentDiv.append(result);
        }

        public processCommand(command: string): JQuery {
            if (command) {
            }
            else {
                this.element.data("elang", jQuery.proxy(this.processCommand, this));
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

        public static setLang(langid: string, node?: JQuery): void {
            if (langid in resource.lang) {
                resource.selectedLang = langid;

                var elements;
                if (node) {
                    elements = node.find('[id*="lbl"], [id*="btn"]');
                }
                else {
                    elements = jQuery('[id*="lbl"], [id*="btn"]');
                }
                elements.each(function () {
                    if (this.id in resource.lang[langid]) {
                        jQuery(this).text(resource.lang[langid][this.id]);
                    }
                });
            }
        }
    }
}