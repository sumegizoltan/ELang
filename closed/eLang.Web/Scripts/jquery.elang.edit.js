/// <reference path="jquery-1.9.1.js" />
/// <reference path="jquery-ui-1.10.0.js" />
/// <reference path="jquery.elang.common.js" />
/// <reference path="jquery.elang.db.js" />
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
    jQuery.extend(true, jQuery, { elang: {} });

    var methods = {
        name: "elang-Edit",
        description: "eLang - Language Learning edit functionality.",
        delegates: {
            selectHandler: null,
            insertHandler: null,
            modifyHandler: null,
            removeHandler: null,
            selectCallback: null,
            insertCallback: null,
            modifyCallback: null,
            removeCallback: null
        },
        options: {
        },
        initialize: function (target, options) {
            this.options = jQuery.extend(true, this.options, options);

            this.delegates.selectHandler = Function.createDelegate(this, this._onSelect);
            this.delegates.insertHandler = Function.createDelegate(this, this._onInsert);
            this.delegates.modifyHandler = Function.createDelegate(this, this._onModify);
            this.delegates.removeHandler = Function.createDelegate(this, this._onRemove);

            this.delegates.selectCallback = Function.createDelegate(this, this._onSelectCallback);
            this.delegates.insertCallback = Function.createDelegate(this, this._onInsertCallback);
            this.delegates.modifyCallback = Function.createDelegate(this, this._onModifyCallback);
            this.delegates.removeCallback = Function.createDelegate(this, this._onRemoveCallback);

            var delegates = this.delegates;

            jQuery(target).keyup(function () { delegates.selectHandler(this); });

        },
        _onSelectCallback: function () {
            var x = 1;
        },
        _onInsertCallback: function () {

        },
        _onModifyCallback: function () {

        },
        _onRemoveCallback: function () {

        },
        _onSelect: function (eSrc) {
            //TODO - show selected element
            var db, id;

            id = eSrc.value;

            db = jQuery.elang.DB.getInstance();
            db.select(id, this.delegates.selectCallback);
        },
        _onInsert: function () {
            //TODO - show inserted element
        },
        _onModify: function () {
            //TODO - refresh list
        },
        _onRemove: function () {
            //TODO - refresh list
        }
    };

    jQuery.fn.elangEdit = function (options) {
        var _elangEdit = jQuery.extend(true, {}, methods);
        _elangEdit.initialize(this, options);
    };
})(jQuery);