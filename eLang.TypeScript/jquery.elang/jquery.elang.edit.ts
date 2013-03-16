// Type definitions for eLang
// Project: https://github.com/sumegizoltan/ELang/
// Definitions by: Zoltan Sumegi <https://github.com/sumegizoltan/>
// Definitions: 

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="./jquery.elang.d.ts"/>
/// <reference path="./jquery.elang.common.ts"/>
/// <reference path="./jquery.elang.db.ts"/>
/// <reference path="./jquery.elang.search.ts"/>

module ELang {
    class ELangEditEvents implements IELangEditEvents {
        public insert: JQueryDeferred;
        public modify: JQueryDeferred;
        public remove: JQueryDeferred;
        public select: JQueryDeferred;

        constructor() {
            this.insert = new jQuery.Deferred();
            this.modify = new jQuery.Deferred();
            this.remove = new jQuery.Deferred();
            this.select = new jQuery.Deferred();
        }
    }

    class ELangEditDelegates implements IELangEditDelegates {
        public insertCallback: Function = null;
        public insertHandler: Function = null;
        public modifyCallback: Function = null;
        public modifyHandler: Function = null;
        public removeCallback: Function = null;
        public removeHandler: Function = null;
        public selectHandler: Function = null;
        public selectCallback: Function = null;
        public btnAddHandler: Function = null;
        public btnAddClickHandler: Function = null;

        constructor() {
        }
    }

    export class ELangEditDefaults extends ELangBaseDefaults implements IELangEditDefaults {
        public editFormHtml: string;
        public editFieldHtml: string;
        public addButtonHtml: string;
        public addButtonLabel: string;
        public editKeyLabel: string;
        public editValueLabel: string;

        constructor() {
            super();

            this.headLabel = "lblEditHead";
            this.resultHeadLabel = "lblEditedExpressionsHead";
            this.editFormHtml = '<form class="form-search"><div class="controls controls-row"></div></form>';
            this.editFieldHtml = '<input class="input-large span2" type="text" placeholder="-" />';
            this.addButtonHtml = '<button type="submit" class="btn btn-primary span0"><span></span></button>';
            this.addButtonLabel = "lblAdd";
            this.editKeyLabel = "lblEditKeyField";
            this.editValueLabel = "lblEditValueField";
        }
    }

    export class ELangEdit extends ELangBase implements IELangEdit {
        public defaults: IELangEditDefaults;
        private delegates: IELangEditDelegates;
        private events: IELangEditEvents;

        constructor() {
            super();

            this.name = "eLang-Edit";
            this.description = "eLang - Language Learning edit functionality.";
            this.defaults = new ELangEditDefaults();
            this.delegates = new ELangEditDelegates();
            this.events = new ELangEditEvents();
        }

        public initialize(target: HTMLElement, options: any): void {
            super.initialize(target, options);

            this.delegates.insertHandler = jQuery.proxy(this._onInsert, this);
            this.delegates.modifyHandler = jQuery.proxy(this._onModify, this);
            this.delegates.removeHandler = jQuery.proxy(this._onRemove, this);
            this.delegates.selectHandler = jQuery.proxy(this._onSelect, this);
            this.delegates.btnAddHandler = jQuery.proxy(this._onAddClick, this);

            this.delegates.insertCallback = jQuery.proxy(this._onInsertCallback, this);
            this.delegates.modifyCallback = jQuery.proxy(this._onModifyCallback, this);
            this.delegates.removeCallback = jQuery.proxy(this._onRemoveCallback, this);
            this.delegates.selectCallback = jQuery.proxy(this._onSelectCallback, this);

            this.events.insert.done(this.delegates.insertHandler);
            this.events.modify.done(this.delegates.modifyHandler);
            this.events.remove.done(this.delegates.removeHandler);
            this.events.select.done(this.delegates.selectHandler);

            var handlerAdd: Function = this.delegates.btnAddHandler;

            this.delegates.btnAddClickHandler = function () {
                var srcE: HTMLElement = this;
                var fields: Array = srcE.parentNode["getElementsByTagName"]("input");
                var key: HTMLInputElement = fields[0];
                var value: HTMLInputElement = fields[1];
                handlerAdd(key, value);
            };

            this.createContent();

            this.element.data("elang-edit", jQuery.proxy(this.processCommand, this));
        }

        private createContent(): void {
            super.createContent();

            var contentDiv: JQuery = this.element.next("div");
            var resultSelector: string = "." + this.defaults.resultCSS.split(" ")[0];
            var result: JQuery = contentDiv.find("*").filter(resultSelector);

            // edit panel
            var form: JQuery = jQuery(this.defaults.editFormHtml);
            var keyField: JQuery = jQuery(this.defaults.editFieldHtml);
            var valueField: JQuery = jQuery(this.defaults.editFieldHtml);
            var add: JQuery = jQuery(this.defaults.addButtonHtml);
            var langid: string = ELangCommon.resource.selectedLang;
            var labelKey: string = ELangCommon.getLabel(this.defaults.editKeyLabel);
            var labelValue: string = ELangCommon.getLabel(this.defaults.editValueLabel);

            var formIn: JQuery = this.getLastChild(form);

            keyField.add(keyField.find("*"))
                .filter("input[placeholder]")
                .attr("id", this.defaults.editKeyLabel)
                .attr("placeholder", labelKey);
            valueField.add(valueField.find("*"))
                .filter("input[placeholder]")
                .attr("id", this.defaults.editValueLabel)
                .attr("placeholder", labelValue);
            add.add(add.find("*")).filter("span").attr("id", this.defaults.addButtonLabel);
            add.click(this.delegates.btnAddClickHandler);
            formIn.append(keyField);
            formIn.append(valueField);
            formIn.append(add);
            result.before(form);

            // set labels
            ELangCommon.setLang(langid, contentDiv);
        }

        private _onAddClick(key: HTMLInputElement, value: HTMLInputElement): void {
            //TODO validate fields
            //TODO update database
            //TODO refresh list if required
        }

        private _onInsert(): void {
        }
        private _onModify(): void {
        }
        private _onRemove(): void {
        }
        private _onSelect(): void {
        }

        private _onInsertCallback(): void {
        }

        private _onModifyCallback(): void {
        }

        private _onRemoveCallback(): void {
        }

        private _onSelectCallback(): void {
        }

        private _insert(): void {
            this.events.insert.resolve();
        }

        private _modify(): void {
            this.events.modify.resolve();
        }

        private _remove(): void {
            this.events.remove.resolve();
        }

        private _select(): void {
            this.events.select.resolve();
        }
    }
}

(function (jQuery) {
    jQuery.fn.elangEdit = function (options?: any, command?: string) {
        var result: JQuery = this;
        var isFirstOnly: bool = true;
        
        for (var i = 0; i < result.length; i++) {
            var el: HTMLElement = result[i];
            var fn: Function = el["elang-edit"];  // elang-edit.processCommand()

            if (command && (typeof (command) == "string")) {
                if (jQuery.isFunction(fn)) {
                    fn(command);
                }
            }
            else {
                if (!fn) {
                    var elangEdit: IELangEdit = new ELang.ELangEdit();
                    elangEdit.initialize(el, options);
                }
            }

            if (isFirstOnly) {
                break;
            }
        }

        return result;
    };
})(jQuery);