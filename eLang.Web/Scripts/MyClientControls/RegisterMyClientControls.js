Sys.loader.defineScripts({
    releaseUrl: "%/../MyClientControls/" + "{0}.js",
    debugUrl: "%/../MyClientControls/" + "{0}.debug.js"
},
    [
        { 	name: "ELangCommon",
        	releaseUrl: "%/../MyClientControls/elang/" + "{0}.js",
        	debugUrl: "%/../MyClientControls/elang/" + "{0}.debug.js",
	        behaviors: [{name: "ELangCommon", typeName: "Sys.Extended.UI.ELangCommon"}],
	        executionDependencies: ["ExtendedBase", "Bootstrap"] ,
	        isLoaded: !!(Sys && Sys.Extended && Sys.Extended.UI && Sys.Extended.UI.ELangCommon)
	    }
    ]
);

Sys.loader.defineScripts({
	
}, 
	[
	   { name: "jQuery",
	     releaseUrl: "%/../jQuery/jquery-1.10.0.min.js",
	     debugUrl: "%/../jQuery/jquery-1.10.0.min.js",
	     isLoaded: !!window.jQuery
	   },
	   { name: "jQueryUI",
	     releaseUrl: "%/../jQuery/jquery-ui-1.10.3.custom.min.js",
	     debugUrl: "%/../jQuery/jquery-ui-1.10.3.custom.js",
	     dependencies: ["jQuery"],
	     isLoaded: !!(window.jQuery && jQuery.ui)
	   },
	   { name: "Bootstrap",
	     releaseUrl: "%/../Bootstrap/bootstrap-2.3.2.min.js",
	     debugUrl: "%/../Bootstrap/bootstrap-2.3.2.js",
	     dependencies: ["jQuery", "jQueryUI"],
	     isLoaded: !!(window.jQuery && jQuery.ui && jQuery.fn.carousel)
	   }
    ]
);

