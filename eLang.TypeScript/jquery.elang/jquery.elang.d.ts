// Type definitions for eLang
// Project: https://bitbucket.org/zoli73/eLang/
// Definitions by: Zoltan Sumegi <https://bitbucket.org/zoli73/>
// Definitions: 

/// <reference path="../jquery/jquery.d.ts" />

interface IPageLanguages {
    lang?: IPageLangItems;
}

interface IPageLangItems {
    en?: IPageLabels;
    hu?: IPageLabels;
    [key: string]: IPageLabels;
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
    lblTesztHead?: string;
    lblOrderedTest?: string;
    lblRandomlyTest?: string;
    lblTypedTest?: string;
    lblSelectedTest?: string;

    [key: string]: string;
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