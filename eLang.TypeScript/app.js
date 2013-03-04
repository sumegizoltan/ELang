var ELang;
(function (ELang) {
    /// <reference path="Scripts/jquery.d.ts" />
    (function (DB) {
        var ArtistInfo = (function () {
            function ArtistInfo(data) {
                this.id = data.id;
                this.name = data.name;
                this.score = parseInt(data['ext:score']);
            }
            return ArtistInfo;
        })();        
        var ArtistInfo2 = (function () {
            function ArtistInfo2(id, name, score) {
                this.id = id;
                this.name = name;
                this.score = score;
            }
            return ArtistInfo2;
        })();        
        var loose = {
            prop: 'value',
            func: function () {
                return 'yeah';
            }
        };
        loose.func();
        var x = loose.prop;
        function process() {
            return {
                result: true
            };
        }
        //-------------------
        var returnsFunc = (function () {
            function returnsFunc() {
                this.state = 'alive';
            }
            returnsFunc.prototype.getFunc = function () {
                var _this = this;
                return function () {
                    return _this.state;
                };
            };
            returnsFunc.prototype.getFunc2 = function () {
                return this.state;
            };
            return returnsFunc;
        })();        
        //-------------------
        var ArtistList = (function () {
            function ArtistList(data) {
                this.artists = [];
                var al = data.artists_list.artist;
                if(jQuery.isArray(al)) {
                    for(var i = 0; i < (al).length; i++) {
                        this.artists.push(new ArtistInfo(al[i]));
                    }
                } else {
                    this.artists.push(new ArtistInfo(al));
                }
            }
            return ArtistList;
        })();        
    })(ELang.DB || (ELang.DB = {}));
    var DB = ELang.DB;
})(ELang || (ELang = {}));
var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerText += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () {
            return _this.span.innerText = new Date().toUTCString();
        }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
})();
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
//@ sourceMappingURL=app.js.map
