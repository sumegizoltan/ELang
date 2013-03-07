var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ELang;
(function (ELang) {
    var ELangSearchEvents = (function () {
        function ELangSearchEvents() {
            this.select = new jQuery.Deferred();
        }
        return ELangSearchEvents;
    })();
    ELang.ELangSearchEvents = ELangSearchEvents;    
    var ELangSearchDelegates = (function () {
        function ELangSearchDelegates() {
            this.selectCallback = null;
            this.selectHandler = null;
        }
        return ELangSearchDelegates;
    })();
    ELang.ELangSearchDelegates = ELangSearchDelegates;    
    var ELangSearch = (function (_super) {
        __extends(ELangSearch, _super);
        function ELangSearch() {
                _super.call(this);
            this.name = "eLang-Search";
            this.description = "eLang - Language Learning search functionality.";
            this.delegates = new ELangSearchDelegates();
            this.events = new ELangSearchEvents();
        }
        ELangSearch.prototype.initialize = function (target, options) {
            _super.prototype.initialize.call(this, target, options);
            var _fn;
            this.delegates.selectHandler = jQuery.proxy(this._onSelect, this);
            this.delegates.selectCallback = jQuery.proxy(this._onSelectCallback, this);
            this.events.select.done(this.delegates.selectHandler);
            _fn = jQuery.proxy(this._select, this);
            this.element.keyup(function () {
                _fn(this);
            });
        };
        ELangSearch.prototype._onSelect = function (eSrc) {
            var id = eSrc.value;
            if(id) {
                var db = ELang.ELangDB.getInstance();
                db.select(id, this.delegates.selectCallback);
            } else {
                this._onSelectCallback();
            }
        };
        ELangSearch.prototype._onSelectCallback = function () {
        };
        ELangSearch.prototype._select = function (eSrc) {
            this.events.select.resolve(eSrc);
        };
        return ELangSearch;
    })(ELang.ELangBase);
    ELang.ELangSearch = ELangSearch;    
})(ELang || (ELang = {}));
