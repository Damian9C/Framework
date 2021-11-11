class frameworkReactive {
    constructor(options) {
        this.origen = options.data();
    }

    mount(){
        document.querySelectorAll("*[p-text]").forEach( e => {
            this.pText(e, this.origen, e.getAttribute("p-text"));
        });
    }

    pText(el, target, name) {
        el.innerText = target[name];
    }
    pModel() {}
}

var Framework = {
    createApp(options) {
        return new frameworkReactive(options);
    }
};
