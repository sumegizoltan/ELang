// Type definitions for eLang.lang.hu 0.5.1
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
    resource.lblFindedExpressionsHead= "Találatok";
    resource.lblEditedExpressionsHead= "Kifejezések";
    resource.lblFindHead= "Keresés";
    resource.lblEditHead= "Szerkesztés";
    resource.lblFind= "Keresés";
    resource.lblAdd= "Hozzáad";
    resource.lblModify= "Módosít";
    resource.lblRemove= "Töröl";
    resource.lblSearchInExpressions= "Kifejezés";
    resource.lblSearchInMeanings = "Jelentés";
    resource.lblSearchInExpressionsHlp = "Keresés a kifejezésekben";
    resource.lblSearchInMeaningsHlp = "Keresés a jelentésekben";
    resource.lblTestHead= "Teszt";
    resource.lblOrderedTest= "Sorban";
    resource.lblRandomlyTest= "Vegyesen";
    resource.lblTypedTest= "Gépelés";
    resource.lblSelectedTest = "Kiválasztás";
    resource.lblWrittedTest = "Kiírt";
    resource.lblVoicedTest = "Kimondott";
    resource.lblStartTest = "Indít";
    resource.lblStopTest = "Leállít";
    resource.lblTypedTestHlp = "Begépelt válaszok";
    resource.lblSelectedTestHlp = "Válaszok listából";
    resource.lblOrderedTestHlp = "Kérdések sorrendben";
    resource.lblRandomlyTestHlp = "Kérdések vegyesen";
    resource.lblWrittedTestHlp = "Kiírt kérdések a kijelzőn";
    resource.lblVoicedTestHlp = "Kimondott kérdések";

    jQuery.extend(true, ELangCommon.resource.lang, { hu: resource });
}