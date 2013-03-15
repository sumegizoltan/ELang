// Type definitions for eLang
// Project: https://github.com/sumegizoltan/ELang/
// Definitions by: Zoltan Sumegi <https://github.com/sumegizoltan/>
// Definitions: 

/// <reference path="../jquery/jquery.d.ts" />

interface IPageResource {
    lang?: IPageLangItems;
    selectedLang?: string;
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
    getLabel(labelid: string, langid?: string): string;
    setLang(langid: string, node?: JQuery): void;
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

interface IELangBaseDefaults {
    contentCSS: string;
    resultCSS: string;
    resultHeadCSS: string;
    radioGroupHtml: string;
    radioButtonHtml: string;
    headLabel: string;
    resultHeadLabel: string;
}

interface IELangBase {
    name: string;
    description: string;
    delegates: any;
    element: JQuery;
    events: any;
    options: any;
    defaults: IELangBaseDefaults;

    initialize(target: HTMLElement, options: any): void;

    createContent(): void;

    processCommand(command: string): JQuery;
    setOptions(options: any): void;
}

// ELangSearch

interface IELangSearchDefaults extends IELangBaseDefaults {
    directionExpressionsLabel: string;
    directionMeaningsLabel: string;
    searchFormHtml: string;
    searchFieldHtml: string;
    searchButtonHtml: string;
    searchButtonLabel: string;
}

interface IELangSearchDelegates {
    selectHandler: Function;
    selectCallback: Function;
    langDirectionHandler: Function;
    langDirectionClickHandler: Function;
    searchHandler: Function;
    searchClickHandler: Function;
}

interface IELangSearchEvents {
    select: JQueryDeferred;
}

interface IELangSearch extends IELangBase {
    defaults: IELangSearchDefaults;
    delegates: IELangSearchDelegates;
    events: IELangSearchEvents;
    isSearchInExp: bool;

    createContent(): void;

    _onDirectionClick(eSrc: HTMLElement): void;
    _onSelect(eSrc: HTMLInputElement): void;
    _onSelectCallback(): void;

    _select(eSrc: HTMLInputElement): void;
}

// ELangEdit

interface IELangEditDelegates extends IELangSearchDelegates {
    insertHandler: Function;
    modifyHandler: Function;
    removeHandler: Function;
    btnAddHandler: Function;
    btnAddClickHandler: Function;

    insertCallback: Function;
    modifyCallback: Function;
    removeCallback: Function;
}

interface IELangEditEvents extends IELangSearchEvents {
    insert: JQueryDeferred;
    modify: JQueryDeferred;
    remove: JQueryDeferred;
}

interface IELangEditDefaults extends IELangBaseDefaults {
    editFormHtml: string;
    editFieldHtml: string;
    addButtonHtml: string;
    addButtonLabel: string;
    editKeyLabel: string;
    editValueLabel: string;
}

interface IELangEdit extends IELangBase {
    defaults: IELangEditDefaults;
    delegates: IELangEditDelegates;
    events: IELangEditEvents;

    createContent(): void;

    _onAddClick(key: HTMLInputElement, value: HTMLInputElement): void;
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