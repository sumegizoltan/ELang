// Type definitions for eLang
// Project: https://github.com/sumegizoltan/ELang/
// Definitions by: Zoltan Sumegi <https://github.com/sumegizoltan/>
// Definitions: 

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="./jquery.elang.d.ts"/>
/// <reference path="./jquery.elang.common.ts"/>
/// <reference path="./jquery.elang.db.ts"/>

module ELang {
    export class ELangSearchEvents implements IELangSearchEvents {
        public select: JQueryDeferred;

        constructor() {
            this.select = new jQuery.Deferred();
        }
    }

    export class ELangSearchDelegates implements IELangSearchDelegates {
        public selectCallback: Function = null;
        public selectHandler: Function = null;

        constructor() {
        }
    }

    export class ELangSearch extends ELangBase implements IELangSearch {

        private delegates: IELangSearchDelegates;
        private events: IELangSearchEvents;

        constructor() {
            super();
            
            this.name = "eLang-Search";
            this.description = "eLang - Language Learning search functionality.";
            this.delegates = new ELangSearchDelegates();
            this.events = new ELangSearchEvents();
        }

        public initialize(target: HTMLElement, options: any): void {
            super.initialize(target, options);

            var _fn;

            this.delegates.selectHandler = jQuery.proxy(this._onSelect, this);
            this.delegates.selectCallback = jQuery.proxy(this._onSelectCallback, this);
            this.events.select.done(this.delegates.selectHandler);

            _fn = jQuery.proxy(this._select, this);

            //TODO - searchElement property required
            this.element.keyup(function () { _fn(this); });
        }

        private _onSelect(eSrc: HTMLInputElement): void {
            var id = eSrc.value;

            if (id) {
                var db = ELangDB.getInstance();

                db.select(id, this.delegates.selectCallback);
            }
            else {
                this._onSelectCallback();
            }
        }

        private _onSelectCallback(): void {

            //TODO - show selected element
        }

        private _select(eSrc: HTMLInputElement): void {
            this.events.select.resolve(eSrc);
        }
    }
}