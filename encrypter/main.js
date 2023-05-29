
class App{
    api;
    decrypter;
    encrypter;
    cleaner;
    renderer;
    main;

    constructor() {
        this.encrypter = new Encrypter();
        this.decrypter = new Decrypter();
        this.cleaner = new Cleaner();
        this.renderer = new Renderer();
        this.api = new Api();

        this.api.getData("/src/data/data.json").then((data) => {
            this.main = new Main(data, this);
        });

        this.cleaner.clean("body");
    }

    encrypt(textToEncrypt){
        console.log(this.encrypter.encrypt(textToEncrypt));
    }

    decrypt(textToDecrypt){
        console.log(this.decrypter.decrypt(textToDecrypt));
    }

}

class Main{
    encrypterView;
    decrypterView;
    htmlElement;
    app;

    constructor(data, app) {
        this.app = app;


        this.htmlElement = document.createElement("main");
        this.htmlElement.classList.add("main");
        this.app.renderer.render(this.htmlElement, document.querySelector("body"));

        this.encrypterView = new EncrypterView(this, data.encrypt);
        this.decrypterView = new DecrypterView(this, data.decrypt);
    }

    cipher(textToCipher, type){
        if(type === "ENCRYPT"){
            this.app.encrypt(textToCipher);
        }
        else{
            this.app.decrypt(textToCipher);
        }
    }
}

class EncrypterView{
    header;
    body;
    footer;
    htmlElement;
    main;
    type;

    constructor(main, placeholder) {
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("view");
        this.main = main;
        this.type = "ENCRYPT";

        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        this.header = new Header(this, "Encrypter");
        this.body = new Body(this, placeholder);
        this.footer = new Footer(this, "Encrypt");
    }

    getDataFromBody(){
        this.main.cipher(this.body.text, this.type);
    }
}

class DecrypterView{
    header;
    body;
    footer;
    htmlElement;
    main;
    type;

    constructor(main, placeholder) {
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("view");
        this.main = main;
        this.type = "DECRYPT";

        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        this.header = new Header(this, "Decrypter");
        this.body = new Body(this, placeholder);
        this.footer = new Footer(this, "Decrypt");
    }

    getDataFromBody(){
        this.main.cipher(this.body.text, this.type);
    }
}

class Header{
    htmlElement;
    view;
    headingHtmlElement;

    constructor(view, headingText){
        this.htmlElement = document.createElement("header");
        this.htmlElement.classList.add("view__header");
        this.headingHtmlElement = document.createElement("h1");
        this.headingHtmlElement.innerText = headingText;
        this.headingHtmlElement.classList.add("view__heading");

        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
        this.view.main.app.renderer.render(this.headingHtmlElement, this.htmlElement);
    }
}

class Body{
    htmlElement;
    view;
    inputHtmlElement;
    text;

    constructor(view, placeholder){
        this.htmlElement = document.createElement("section");
        this.htmlElement.classList.add("view__body");
        this.inputHtmlElement = document.createElement("textarea");
        this.inputHtmlElement.classList.add("view__input");
        
        this.inputHtmlElement.placeholder = placeholder;

        this.inputHtmlElement.oninput = this.typed;
        
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
        this.view.main.app.renderer.render(this.inputHtmlElement, this.htmlElement);
    }

    typed = (event) =>{
        this.text = event.target.value;
    }
}

class Footer{
    htmlElement;
    view;

    buttonHtmlElement;

    constructor(view, buttonText){
        this.htmlElement = document.createElement("footer");
        this.htmlElement.classList.add("view__footer");
        this.buttonHtmlElement = document.createElement("button");
        this.buttonHtmlElement.classList.add("view__button");
        this.buttonHtmlElement.onclick = this.buttonClicked;
        this.buttonHtmlElement.innerText = buttonText;

        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
        this.view.main.app.renderer.render(this.buttonHtmlElement, this.htmlElement)
    }

    buttonClicked = () => {
        this.view.getDataFromBody();
    }
}

const app = new App()