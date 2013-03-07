var ELang;
(function (ELang) {
    var ELangBase = (function () {
        function ELangBase() {
            this.name = "elang-Base";
            this.description = "eLang base class";
            this.delegates = {
            };
            this.events = {
            };
            this.options = {
            };
        }
        ELangBase.prototype.initialize = function (target, options) {
            this.element = jQuery(target);
        };
        ELangBase.prototype.processCommand = function (command) {
            if(command) {
            } else {
                this.element.data("elang", jQuery.proxy(this.processCommand, this));
            }
            return this.element;
        };
        ELangBase.prototype.setOptions = function (options) {
            if(options) {
                jQuery.extend(true, options, options);
            }
        };
        return ELangBase;
    })();
    ELang.ELangBase = ELangBase;    
    var PageResource = (function () {
        function PageResource() {
            this.lang = {
            };
        }
        return PageResource;
    })();
    ELang.PageResource = PageResource;    
    var PageLabels = (function () {
        function PageLabels() { }
        return PageLabels;
    })();
    ELang.PageLabels = PageLabels;    
    var ELangCommon = (function () {
        function ELangCommon() { }
        ELangCommon.resource = new PageResource();
        ELangCommon.setLang = function setLang(langid) {
            if(langid in ELangCommon.resource.lang) {
                jQuery('[id*="lbl"], [id*="btn"]').each(function () {
                    if(this.id in ELangCommon.resource.lang[langid]) {
                        jQuery(this).text(ELangCommon.resource.lang[langid][this.id]);
                    }
                });
            }
        };
        return ELangCommon;
    })();
    ELang.ELangCommon = ELangCommon;    
})(ELang || (ELang = {}));
