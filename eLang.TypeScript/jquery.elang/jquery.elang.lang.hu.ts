// Type definitions for eLang
// Project: https://bitbucket.org/zoli73/eLang/
// Definitions by: Zoltan Sumegi <https://bitbucket.org/zoli73/>
// Definitions: 

/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="jquery.elang.d.ts" />

(function (jQuery) {
    var resource = {
        lblTitle: "eLang - Nyelvtanulás",
        lblPageHeader: "eLang - Nyelvtanulás",
        lblSearchField: "Keresendő kifejezés",
        lblEditKeyField: "Kifejezés",
        lblEditValueField: "Jelentés",
        lblFindedExpressionsHead: "Keresett kifejezések",
        lblEditedExpressionsHead: "Kifejezések",
        lblFindHead: "Keresés",
        lblEditHead: "Szerkesztés",
        lblFind: "Keresés",
        lblAdd: "Hozzáad",
        lblModify: "Módosít",
        lblRemove: "Töröl",
        lblSearchInExpressions: "keresés a kifejezésekben",
        lblSearchInMeanings: "keresés a jelentésekben",
        lblTesztHead: "Teszt",
        lblOrderedTest: "Kérdések sorrendben",
        lblRandomlyTest: "Kérdések véletlen sorrendben",
        lblTypedTest: "Válaszok begépelése",
        lblSelectedTest: "Válaszok kiválasztása"
    };

    jQuery.extend(true, jQuery, { elang: { resource: { lang: { hu: resource } } } });
})(jQuery);