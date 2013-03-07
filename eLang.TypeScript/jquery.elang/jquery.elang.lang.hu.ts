// Type definitions for eLang
// Project: https://github.com/sumegizoltan/ELang/
// Definitions by: Zoltan Sumegi <https://github.com/sumegizoltan/>
// Definitions:  

/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="./jquery.elang.d.ts" />
/// <reference path="./jquery.elang.common.ts"/>

module ELang {
    var resource = new PageLabels();
    resource.lblTitle= "eLang - Nyelvtanulás";
    resource.lblPageHeader= "eLang - Nyelvtanulás";
    resource.lblSearchField= "Keresendő kifejezés";
    resource.lblEditKeyField= "Kifejezés";
    resource.lblEditValueField= "Jelentés";
    resource.lblFindedExpressionsHead= "Keresett kifejezések";
    resource.lblEditedExpressionsHead= "Kifejezések";
    resource.lblFindHead= "Keresés";
    resource.lblEditHead= "Szerkesztés";
    resource.lblFind= "Keresés";
    resource.lblAdd= "Hozzáad";
    resource.lblModify= "Módosít";
    resource.lblRemove= "Töröl";
    resource.lblSearchInExpressions= "keresés a kifejezésekben";
    resource.lblSearchInMeanings= "keresés a jelentésekben";
    resource.lblTestHead= "Teszt";
    resource.lblOrderedTest= "Kérdések sorrendben";
    resource.lblRandomlyTest= "Kérdések véletlen sorrendben";
    resource.lblTypedTest= "Válaszok begépelése";
    resource.lblSelectedTest= "Válaszok kiválasztása";

    jQuery.extend(true, ELangCommon.resource.lang, { hu: resource });
}