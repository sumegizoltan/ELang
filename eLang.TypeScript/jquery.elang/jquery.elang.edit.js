var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// Type definitions for eLang
// Project: https://github.com/sumegizoltan/ELang/
// Definitions by: Zoltan Sumegi <https://github.com/sumegizoltan/>
// Definitions:
/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="./jquery.elang.d.ts"/>
/// <reference path="./jquery.elang.common.ts"/>
/// <reference path="./jquery.elang.db.ts"/>
/// <reference path="./jquery.elang.search.ts"/>
var ELang;
(function (ELang) {
    var ELangEditEvents = (function (_super) {
        __extends(ELangEditEvents, _super);
        function ELangEditEvents() {
                _super.call(this);
            this.insert = new jQuery.Deferred();
            this.modify = new jQuery.Deferred();
            this.remove = new jQuery.Deferred();
        }
        return ELangEditEvents;
    })(ELang.ELangSearchEvents);    
    var ELangEditDelegates = (function (_super) {
        __extends(ELangEditDelegates, _super);
        function ELangEditDelegates() {
                _super.call(this);
            this.insertCallback = null;
            this.insertHandler = null;
            this.modifyCallback = null;
            this.modifyHandler = null;
            this.removeCallback = null;
            this.removeHandler = null;
            this.btnAddHandler = null;
            this.btnAddClickHandler = null;
        }
        return ELangEditDelegates;
    })(ELang.ELangSearchDelegates);    
    var ELangEditDefaults = (function (_super) {
        __extends(ELangEditDefaults, _super);
        function ELangEditDefaults() {
                _super.call(this);
            this.headLabel = "lblEditHead";
            this.resultHeadLabel = "lblEditedExpressionsHead";
            this.editFormHtml = '<form class="form-search"><div class="controls controls-row"></div></form>';
            this.editFieldHtml = '<input class="input-large" type="text" placeholder="-" />';
            this.addButtonHtml = '<button type="submit" class="btn btn-primary"><span></span></button>';
            this.addButtonLabel = "lblAdd";
            this.editKeyLabel = "lblEditKeyField";
            this.editValueLabel = "lblEditValueField";
        }
        return ELangEditDefaults;
    })(ELang.ELangBaseDefaults);
    ELang.ELangEditDefaults = ELangEditDefaults;    
    var ElangEdit = (function (_super) {
        __extends(ElangEdit, _super);
        function ElangEdit() {
                _super.call(this);
            this.name = "eLang-Edit";
            this.description = "eLang - Language Learning edit functionality.";
            this.defaults = new ELangEditDefaults();
            this.delegates = new ELangEditDelegates();
            this.events = new ELangEditEvents();
        }
        ElangEdit.prototype.initialize = function (target, options) {
            _super.prototype.initialize.call(this, target, options);
            this.delegates.insertHandler = jQuery.proxy(this._onInsert, this);
            this.delegates.modifyHandler = jQuery.proxy(this._onModify, this);
            this.delegates.removeHandler = jQuery.proxy(this._onRemove, this);
            this.delegates.btnAddHandler = jQuery.proxy(this._onAddClick, this);
            this.delegates.insertCallback = jQuery.proxy(this._onInsertCallback, this);
            this.delegates.modifyCallback = jQuery.proxy(this._onModifyCallback, this);
            this.delegates.removeCallback = jQuery.proxy(this._onRemoveCallback, this);
            this.events.insert.done(this.delegates.selectHandler);
            this.events.modify.done(this.delegates.selectHandler);
            this.events.remove.done(this.delegates.selectHandler);
            var handlerAdd = this.delegates.btnAddHandler;
            this.delegates.btnAddClickHandler = function () {
                var srcE = this;
                var fields = srcE.parentNode["getElementsByTagName"]("input");
                var key = fields[0];
                var value = fields[1];
                handlerAdd(key, value);
            };
            this.createContent();
        };
        ElangEdit.prototype.createContent = function () {
            _super.prototype.createContent.call(this);
            var contentDiv = this.element.next("div");
            var resultSelector = "." + this.defaults.resultCSS.split("")[0];
            var result = contentDiv.find(resultSelector);
            // edit panel
            var form = jQuery(this.defaults.editFormHtml);
            var keyField = jQuery(this.defaults.editFieldHtml);
            var valueField = jQuery(this.defaults.editFieldHtml);
            var add = jQuery(this.defaults.addButtonHtml);
            var langid = ELang.ELangCommon.resource.selectedLang;
            var labelKey = ELang.ELangCommon.getLabel(this.defaults.editKeyLabel);
            var labelValue = ELang.ELangCommon.getLabel(this.defaults.editValueLabel);
            keyField.find("input[placeholder]").attr("placeholder", labelKey);
            valueField.find("input[placeholder]").attr("placeholder", labelValue);
            add.find("span").attr("id", this.defaults.addButtonLabel);
            add.click(this.delegates.btnAddClickHandler);
            form.append(keyField);
            form.append(valueField);
            form.append(add);
            result.before(form);
            // set labels
            ELang.ELangCommon.setLang(langid, contentDiv);
        };
        ElangEdit.prototype._onAddClick = function (key, value) {
            //TODO validate fields
            //TODO update database
            //TODO refresh list if required
                    };
        ElangEdit.prototype._onInsert = function () {
        };
        ElangEdit.prototype._onModify = function () {
        };
        ElangEdit.prototype._onRemove = function () {
        };
        ElangEdit.prototype._onInsertCallback = function () {
        };
        ElangEdit.prototype._onModifyCallback = function () {
        };
        ElangEdit.prototype._onRemoveCallback = function () {
        };
        ElangEdit.prototype._insert = function () {
            this.events.insert.resolve();
        };
        ElangEdit.prototype._modify = function () {
            this.events.modify.resolve();
        };
        ElangEdit.prototype._remove = function () {
            this.events.remove.resolve();
        };
        return ElangEdit;
    })(ELang.ELangBase);
    ELang.ElangEdit = ElangEdit;    
})(ELang || (ELang = {}));
//@ sourceMappingURL=jquery.elang.edit.js.map
