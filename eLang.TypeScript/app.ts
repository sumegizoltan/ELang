/// <reference path="Scripts/jquery.d.ts" />

module ELang.DB {
    interface IArtistInfo { id: string; name: string; score: number; }
    class ArtistInfo implements IArtistInfo {
        id: string;
        name: string;
        score: number;
        constructor(data: any) {
            this.id = data.id;
            this.name = data.name;
            this.score = parseInt(data['ext:score']);
        }
    }

    class ArtistInfo2 implements IArtistInfo {
        constructor(public id: string, public name: string, public score: number) {
        }
    }

    var loose = { prop: 'value', func: () => { return 'yeah'; } };
    loose.func();
    var x = loose.prop;

    function process(): { result: bool; } {
        return { result: true };
    }

    //-------------------
    class returnsFunc {
        state = 'alive';
        getFunc() {
            return () => {
                return this.state;
            }
        }
        getFunc2() {
            return this.state;
        }
    }

    //-------------------

    class ArtistList {
        artists: IArtistInfo[] = [];

        constructor(data: any) {
            var al = data.artists_list.artist;
            if (jQuery.isArray(al)) {
                for (var i = 0; i < (<any[]>al).length; i++) {
                    this.artists.push(new ArtistInfo(al[i]));
                }
            }
            else {
                this.artists.push(new ArtistInfo(al));
            }
        }
    }
}

class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;
    
    constructor (element: HTMLElement) { 
        this.element = element;
        this.element.innerText += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerText = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};