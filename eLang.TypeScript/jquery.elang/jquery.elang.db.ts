﻿// Type definitions for eLang
// Project: https://bitbucket.org/zoli73/eLang/
// Definitions by: Zoltan Sumegi <https://bitbucket.org/zoli73/>
// Definitions: 

/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="jquery.elang.d.ts" />

module ELang {
    class ELangDBEvents implements IELangDBEvents {
        public select: JQueryDeferred;
        public insert: JQueryDeferred;
        public modify: JQueryDeferred;
        public remove: JQueryDeferred;

        constructor() {
            this.select = new jQuery.Deferred();
            this.insert = new jQuery.Deferred();
            this.modify = new jQuery.Deferred();
            this.remove = new jQuery.Deferred();
        }
    }

    class ELangDBDelegates implements IELangDBDelegates {
        public selectHandler: Function;
        public insertHandler: Function;
        public modifyHandler: Function;
        public removeHandler: Function;

        constructor() {
        }
    }

    class ELangDBOptions implements IELangDBOptions {
        public autocompleteRows: number = 5;
    }

    export class ELangDB implements IELangDB {

        private static _instance: ELangDB = null;

        private cache: any = {};
        private delegates: IELangDBDelegates;
        private events: IELangDBEvents;
        private isInitialized: bool = false;
        private options: IELangDBOptions;

        public name: string = "elang-DB";
        public description: string = "Html5 localstorage based instance.";

        constructor() {
        }

        public initialize(options: IELangDBOptions = null): void {
            this.options = new ELangDBOptions();

            this.setOptions(options);

            this.events = new ELangDBEvents();
            this.delegates = new ELangDBDelegates();

            this.delegates.selectHandler = jQuery.proxy(this._onSelect, this);
            this.delegates.insertHandler = jQuery.proxy(this._onInsert, this);
            this.delegates.modifyHandler = jQuery.proxy(this._onModify, this);
            this.delegates.removeHandler = jQuery.proxy(this._onRemove, this);

            this.events.select.done(this.delegates.selectHandler);
            this.events.insert.done(this.delegates.insertHandler);
            this.events.modify.done(this.delegates.modifyHandler);
            this.events.remove.done(this.delegates.removeHandler);

            this.isInitialized = true;
        }

        private _onSelect(id: string, callback?: Function): void {

            if (jQuery.isFunction(callback)) {
                callback();
            }
        }

        private _onInsert(id: string, value: string, callback?: Function): void {

            if (jQuery.isFunction(callback)) {
                callback();
            }
        }

        private _onModify(id: string, value: string, callback?: Function): void {

            if (jQuery.isFunction(callback)) {
                callback();
            }
        }

        private _onRemove(id: string, callback?: Function): void {

            if (jQuery.isFunction(callback)) {
                callback();
            }
        }

        public select(id: string, callback?: Function): void {
            this.events.select.resolve(id, callback);
        }

        public insert(id: string, value: string, callback?: Function): void {
            this.events.insert.resolve(id, value, callback);
        }

        public modify(id: string, value: string, callback?: Function): void {
            this.events.modify.resolve(id, value, callback);
        }

        public remove(id: string, callback?: Function): void {
            this.events.remove.resolve(id, callback);
        }

        public sort(): void {

        }

        public setOptions(options: IELangDBOptions = null): void {
            if (options) {
                jQuery.extend(true, this.options, options);
            }
        }

        public getIndexHash(id: string): string {
            return "";
        }

        public static getInstance(options: IELangDBOptions = null): ELangDB {
            if (!_instance) {
                _instance = new ELangDB();
                _instance.initialize(options);
            }
            else {
                _instance.setOptions(options);
            }

            return _instance;
        }

        public getOptions(): IELangDBOptions {
            return this.options;
        }

    }
}