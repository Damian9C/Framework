class frameworkReactive {
    constructor(options) {
        this.origen = options.data();

        this.$data = new Proxy(this.origen, {
            get(target, name){
                if (name in target){
                    return target[name];
                }
                console.warn("La propiedad", name, "no esta definida");
                return "";
            }
        });
    }

    mount(){
        document.querySelectorAll("*[p-text]").forEach( e => {
            this.pText(e, this.$data, e.getAttribute("p-text"));
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
