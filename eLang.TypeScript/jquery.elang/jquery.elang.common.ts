// Type definitions for eLang
// Project: https://github.com/sumegizoltan/ELang/
// Definitions by: Zoltan Sumegi <https://github.com/sumegizoltan/>
// Definitions: 


/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="./jquery.elang.d.ts"/>

module ELang {

    // ELangBase

    export class ELangBase implements IELangBase {
        public name: string = "elang-Base";
        public description: string = "eLang base class";
        public delegates: any = {};
        public element: JQuery;
        public events: any = {};
        public options: any = {};

        constructor() {
        }

        public initialize(target: HTMLElement, options: any): void {
            this.element = jQuery(target);
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

        public static setLang(langid: string): void {
            if (langid in resource.lang) {
                jQuery('[id*="lbl"], [id*="btn"]').each(function () {
                    if (this.id in resource.lang[langid]) {
                        jQuery(this).text(resource.lang[langid][this.id]);
                    }
                });
            }
        }
    }
}