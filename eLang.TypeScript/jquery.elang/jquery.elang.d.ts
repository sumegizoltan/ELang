// Type definitions for eLang
// Project: https://github.com/sumegizoltan/ELang/
// Definitions by: Zoltan Sumegi <https://github.com/sumegizoltan/>
// Definitions: 

/// <reference path="../jquery/jquery.d.ts" />

interface IPageResource {
    lang?: IPageLangItems;
}

interface IPageLangItems {
    en?: IPageLabels;
    hu?: IPageLabels;
}

interface IPageLabels {
    lblTitle?: string;
    lblPageHeader?: string;
    lblSearchField?: string;
    lblEditKeyField?: string;
    lblEditValueField?: string;
    lblFindedExpressionsHead?: string;
    lblEditedExpressionsHead?: string;
    lblFindHead?: string;
    lblEditHead?: string;
    lblFind?: string;
    lblAdd?: string;
    lblModify?: string;
    lblRemove?: string;
    lblSearchInExpressions?: string;
    lblSearchInMeanings?: string;
    lblTestHead?: string;
    lblOrderedTest?: string;
    lblRandomlyTest?: string;
    lblTypedTest?: string;
    lblSelectedTest?: string;
}

interface ELangCommonStatic {
    resource: IPageResource;
    setLang(langid: string): void;
}

// ELang database (LocalStorage) functionality with Singleton instance

interface IELangDBOptions {
    autocompleteRows: number;
}

interface IELangDBDelegates {
    selectHandler: Function;
    insertHandler: Function;
    modifyHandler: Function;
    removeHandler: Function;
}

interface IELangDBEvents {
    select: JQueryDeferred;
    insert: JQueryDeferred;
    modify: JQueryDeferred;
    remove: JQueryDeferred;
}

interface IELangDB {
    cache?: any;
    delegates?: IELangDBDelegates;
    events?: IELangDBEvents;
    isInitialized?: bool;
    options?: IELangDBOptions;

    name?: string;
    description?: string;

    initialize(options?: IELangDBOptions): void;

    _onSelect(id: string, callback?: Function): void;
    _onInsert(id: string, value: string, callback?: Function): void;
    _onModify(id: string, value: string, callback?: Function): void;
    _onRemove(id: string, callback?: Function): void;

    select(id: string, callback?: Function): void;
    insert(id: string, value: string, callback?: Function): void;
    modify(id: string, value: string, callback?: Function): void;
    remove(id: string, callback?: Function): void;

    sort(): void;
    setOptions(options: IELangDBOptions): void;
    getIndexHash(id: string): string;
    getOptions(): IELangDBOptions;
}

interface ELangStatic {
    getInstance(options?: IELangDBOptions): IELangDB;
}

// ELangBase

interface IELangBase {
    name: string;
    description: string;
    delegates: any;
    element: JQuery;
    events: any;
    options: any;

    initialize(target: HTMLElement, options: any): void;

    processCommand(command: string): JQuery;
    setOptions(options: any): void;
}

// ELangSearch

interface IELangSearchDelegates {
    selectHandler: Function;
    selectCallback: Function;
}

interface IELangSearchEvents {
    select: JQueryDeferred;
}

interface IELangSearch extends IELangBase {
    delegates: IELangSearchDelegates;
    events: IELangSearchEvents;

    _onSelect(eSrc: HTMLInputElement): void;
    _onSelectCallback(): void;

    _select(eSrc: HTMLInputElement): void;
}

// ELangEdit

interface IELangEditDelegates extends IELangSearchDelegates {
    insertHandler: Function;
    modifyHandler: Function;
    removeHandler: Function;

    insertCallback: Function;
    modifyCallback: Function;
    removeCallback: Function;
}

interface IELangEditEvents extends IELangSearchEvents {
    insert: JQueryDeferred;
    modify: JQueryDeferred;
    remove: JQueryDeferred;
}

interface IELangEdit extends IELangBase, IELangSearch {
    delegates: IELangEditDelegates;
    events: IELangEditEvents;

    _onInsert(): void;
    _onInsertCallback(): void;
    _onModify(): void;
    _onModifyCallback(): void;
    _onRemove(): void;
    _onRemoveCallback(): void;

    _insert(): void;
    _modify(): void;
    _remove(): void;
}