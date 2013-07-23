/// <reference name="MicrosoftAjax.js"/>

(function () {
    Type.registerNamespace("Sys");
    Type.registerNamespace("Sys.Extended");
    Type.registerNamespace("Sys.Extended.UI");

    var scriptName = "ELangCommon";

    if (Type._registerScript) {
        Type._registerScript("ELangCommon.js");
    }

    function execute() {

        Sys.Extended.UI.ELangCommon = function (element) {
            Sys.Extended.UI.ELangCommon.initializeBase(this, [element]);

            this._ActiveItem = 0;
            
            this._ClassName = "carousel slide";
        }
        Sys.Extended.UI.ELangCommon.prototype = {
            initialize: function () {
                Sys.Extended.UI.ELangCommon.callBaseMethod(this, 'initialize');

            },

            dispose: function () {
                Sys.Extended.UI.ELangCommon.callBaseMethod(this, "dispose");
            },

            get_ActiveItem: function () { return this._ActiveItem; },
            set_ActiveItem: function (value) { this._ActiveItem = value; }
        };

        if (Sys.Extended.UI.BehaviorBase) {
            Sys.Extended.UI.ELangCommon.registerClass('Sys.Extended.UI.ELangCommon', Sys.Extended.UI.BehaviorBase);
        }
        else {
            Sys.Extended.UI.ELangCommon.registerClass('Sys.Extended.UI.ELangCommon', Sys.UI.Behavior);
        }
        if (Sys.registerComponent) { Sys.registerComponent(Sys.Extended.UI.ELangCommon, { name: 'ELangCommon' }); }


    } // execute

    if (window.Sys && Sys.loader) {
        Sys.loader.registerScript(scriptName, ["ExtendedBase", "ExtendedCommon"], execute);
    }
    else {
        execute();
    }
})();