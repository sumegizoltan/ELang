var ELang;
(function (ELang) {
    var resource = new ELang.PageLabels();
    resource.lblTitle = "eLang - Nyelvtanulás";
    resource.lblPageHeader = "eLang - Nyelvtanulás";
    resource.lblSearchField = "Keresendő kifejezés";
    resource.lblEditKeyField = "Kifejezés";
    resource.lblEditValueField = "Jelentés";
    resource.lblFindedExpressionsHead = "Keresett kifejezések";
    resource.lblEditedExpressionsHead = "Kifejezések";
    resource.lblFindHead = "Keresés";
    resource.lblEditHead = "Szerkesztés";
    resource.lblFind = "Keresés";
    resource.lblAdd = "Hozzáad";
    resource.lblModify = "Módosít";
    resource.lblRemove = "Töröl";
    resource.lblSearchInExpressions = "keresés a kifejezésekben";
    resource.lblSearchInMeanings = "keresés a jelentésekben";
    resource.lblTestHead = "Teszt";
    resource.lblOrderedTest = "Kérdések sorrendben";
    resource.lblRandomlyTest = "Kérdések véletlen sorrendben";
    resource.lblTypedTest = "Válaszok begépelése";
    resource.lblSelectedTest = "Válaszok kiválasztása";
    jQuery.extend(true, ELang.ELangCommon.resource.lang, {
        hu: resource
    });
})(ELang || (ELang = {}));
