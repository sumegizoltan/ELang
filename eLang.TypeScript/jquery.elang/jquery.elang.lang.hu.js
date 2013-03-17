// Type definitions for eLang.lang.hu 0.5.1
// Project: https://github.com/sumegizoltan/ELang/
// Definitions by: Zoltan Sumegi <https://github.com/sumegizoltan/>
// Definitions:
/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="./jquery.elang.d.ts" />
/// <reference path="./jquery.elang.common.ts"/>
var ELang;
(function (ELang) {
    var resource = new ELang.PageLabels();
    resource.lblTitle = "eLang - Nyelvtanulás";
    resource.lblPageHeader = "eLang - Nyelvtanulás";
    resource.lblSearchField = "Keresendő kifejezés";
    resource.lblEditKeyField = "Kifejezés";
    resource.lblEditValueField = "Jelentés";
    resource.lblFindedExpressionsHead = "Találatok";
    resource.lblEditedExpressionsHead = "Kifejezések";
    resource.lblFindHead = "Keresés";
    resource.lblEditHead = "Szerkesztés";
    resource.lblFind = "Keresés";
    resource.lblAdd = "Hozzáad";
    resource.lblModify = "Módosít";
    resource.lblRemove = "Töröl";
    resource.lblSearchInExpressions = "Kifejezés";
    resource.lblSearchInMeanings = "Jelentés";
    resource.lblTestHead = "Teszt";
    resource.lblOrderedTest = "Sorban";
    resource.lblRandomlyTest = "Vegyesen";
    resource.lblTypedTest = "Gépelés";
    resource.lblSelectedTest = "Kiválasztás";
    jQuery.extend(true, ELang.ELangCommon.resource.lang, {
        hu: resource
    });
})(ELang || (ELang = {}));
//@ sourceMappingURL=jquery.elang.lang.hu.js.map
