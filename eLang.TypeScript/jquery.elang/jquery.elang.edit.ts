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
    class ELangEditEvents extends ELangSearchEvents implements IELangEditEvents {
        public insert: JQueryDeferred;
        public modify: JQueryDeferred;
        public remove: JQueryDeferred;

        constructor() {
            super();

            this.insert = new jQuery.Deferred();
            this.modify = new jQuery.Deferred();
            this.remove = new jQuery.Deferred();
        }
    }

    class ELangEditDelegates extends ELangSearchDelegates implements IELangEditDelegates {
        public insertCallback: Function = null;
        public insertHandler: Function = null;
        public modifyCallback: Function = null;
        public modifyHandler: Function = null;
        public removeCallback: Function = null;
        public removeHandler: Function = null;

        constructor() {
            super();
        }
    }

    export class ElangEdit extends ELangSearch implements IELangEdit {

        private delegates: IELangEditDelegates;
        private events: IELangEditEvents;

        constructor() {
            super();

            this.name = "eLang-Edit";
            this.description = "eLang - Language Learning edit functionality.";
            this.delegates = new ELangEditDelegates();
            this.events = new ELangEditEvents();
        }

        public initialize(target: HTMLElement, options: any): void {

            //TODO - set the searchElement property

            super.initialize(target, options);

            var _fn;

            this.delegates.insertHandler = jQuery.proxy(this._onInsert, this);
            this.delegates.modifyHandler = jQuery.proxy(this._onModify, this);
            this.delegates.removeHandler = jQuery.proxy(this._onRemove, this);

            this.delegates.insertCallback = jQuery.proxy(this._onInsertCallback, this);
            this.delegates.modifyCallback = jQuery.proxy(this._onModifyCallback, this);
            this.delegates.removeCallback = jQuery.proxy(this._onRemoveCallback, this);

            this.events.insert.done(this.delegates.selectHandler);
            this.events.modify.done(this.delegates.selectHandler);
            this.events.remove.done(this.delegates.selectHandler);

            
        }

        private _onInsert(): void {
        }
        private _onModify(): void {
        }
        private _onRemove(): void {
        }

        private _onInsertCallback(): void {
        }

        private _onModifyCallback(): void {
        }

        private _onRemoveCallback(): void {
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
    }
}