/// <reference path="jquery-1.9.1.js" />
/// <reference path="jquery-ui-1.10.0.js" />
/// <reference path="jquery.elang.common.js" />
/*!
 * eLang - Language Learning
 * http://www.sumegi.net
 * https://bitbucket.org/zoli73/elang
 *
 *
 * Copyright 2013 Zoltan Sumegi
 * Released under the MPL license
 * http://www.mozilla.org/MPL/2.0/index.txt
 * 
 * Date: 2013-2-14
 */

(function (jQuery) {
    jQuery.extend(true, jQuery, { elang: { DB: {} } });

    var methods = {
        name: "elang-DB",
        description: "Html5 localstorage based instance.",
        delegates: {
            selectHandler: null,
            insertHandler: null,
            modifyHandler: null,
            removeHandler: null
        },
        events: {
            select: null,
            insert: null,
            modify: null,
            remove: null
        },
        cache: {},
        options: {
            autocompleteRows: 5
        },
        isInitialized: false,
        initialize: function () {
            this.events.select = new jQuery.Deferred();
            this.events.insert = new jQuery.Deferred();
            this.events.modify = new jQuery.Deferred();
            this.events.remove = new jQuery.Deferred();

            this.delegates.selectHandler = Function.createDelegate(this, this._onSelect);
            this.delegates.insertHandler = Function.createDelegate(this, this._onInsert);
            this.delegates.modifyHandler = Function.createDelegate(this, this._onModify);
            this.delegates.removeHandler = Function.createDelegate(this, this._onRemove);

            this.events.select.done(this.delegates.selectHandler);
            this.events.insert.done(this.delegates.insertHandler);
            this.events.modify.done(this.delegates.modifyHandler);
            this.events.remove.done(this.delegates.removeHandler);
            
            this.isInitialized = true;
        },
        _onSelect: function (id, callback) {

            if (typeof (callback) == "function") {
                callback();
            }
        },
        _onInsert: function (id, value, callback) {

            if (typeof (callback) == "function") {
                callback();
            }
        },
        _onModify: function (id, value, callback) {

            if (typeof (callback) == "function") {
                callback();
            }
        },
        _onRemove: function (id, callback) {

            if (typeof (callback) == "function") {
                callback();
            }
        },
        select: function (id, callback) {
            this.events.select.resolve(id, callback);
        },
        insert: function (id, value, callback) {
            this.events.insert.resolve(id, value, callback);
        },
        modify: function (id, value, callback) {
            this.events.modify.resolve(id, value, callback);
        },
        remove: function (id, callback) {
            this.events.remove.resolve(id, callback);
        },
        sort: function () {

        },
        getIndexHash: function (id) {

        },
        getInstance: function () {
            if (!this.isInitialized) {
                this.initialize();
            }

            return this;
        }
    };

    jQuery.extend(true, jQuery.elang.DB, methods);
})(jQuery);