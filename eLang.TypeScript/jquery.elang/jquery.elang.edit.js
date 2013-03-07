var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
        }
        return ELangEditDelegates;
    })(ELang.ELangSearchDelegates);    
    var ElangEdit = (function (_super) {
        __extends(ElangEdit, _super);
        function ElangEdit() {
                _super.call(this);
            this.name = "eLang-Edit";
            this.description = "eLang - Language Learning edit functionality.";
            this.delegates = new ELangEditDelegates();
            this.events = new ELangEditEvents();
        }
        ElangEdit.prototype.initialize = function (target, options) {
            _super.prototype.initialize.call(this, target, options);
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
    })(ELang.ELangSearch);
    ELang.ElangEdit = ElangEdit;    
})(ELang || (ELang = {}));
